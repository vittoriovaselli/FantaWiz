using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using FantaWizBE.Models;
using HtmlAgilityPack;

namespace FantaWizBE.Services
{
    public class SkyScraper : BaseScraper
    {
        public SkyScraper(HashSet<Player> players) : base(players)
        {
            _source = Source.Sky;
        }

        public override async Task<HashSet<Player>> Get(IHttpClientFactory httpClientFactory)
        {
            await SendHttpRequest(httpClientFactory, "https://sport.sky.it/calcio/serie-a/probabili-formazioni");

            var teams = GetTeams();

            var teamsData = pageDocument
                .DocumentNode
                .SelectNodes("//div[contains(@class, 'content')]//div[contains(@class, 'formazione-team')]")
                .ToArray();

            GetStartingPlayers(teamsData, teams);

            GetOtherPlayers(teamsData, teams);

            return _players;
        }

        private void GetOtherPlayers(HtmlNode[] teamsData, string[] teams)
        {
            int teamIndex = 0;
            foreach(var teamData in teamsData)
            {
                var array = teamData
                                .SelectNodes(".//dd")
                                .Select(x=>x.InnerText)
                                .ToArray();

                //reserves
                array[1]
                    .Split(',')
                    .Where(x => !String.Equals('-', x))
                    .ToList()
                    .ForEach(x => AddPlayer(teams, teamIndex, x.ToUpper().Trim(), PlayerStatus.Reserve));

                //disqualified
                array[2]
                    .Split(',')
                    .Where(x => !String.Equals('-', x))
                    .ToList()
                    .ForEach(x => AddPlayer(teams, teamIndex, x.ToUpper().Trim(), PlayerStatus.Disqualified));

                //injured
                Debug.WriteLine("injured:");
                array[3]
                    .Split(',')
                    .Where(x => !String.Equals('-', x))
                    .ToList()
                    .ForEach(x => AddPlayer(teams, teamIndex, x.ToUpper().Trim(), PlayerStatus.Injured));

                teamIndex++;
            }
        }

        private void GetStartingPlayers(HtmlNode[] teamsData, string[] teams)
        {
            int teamIndex = 0;
            foreach(var teamData in teamsData)
            {
                teamData
                    .SelectNodes(".//li[contains(@class, 'player')]//span[contains(@class, 'name')]")
                    .Select(x => x.InnerText)
                    .ToList()
                    .ForEach(x => AddPlayer(teams, teamIndex, x, PlayerStatus.Starting));
                teamIndex++;
            }           
        }

        private string[] GetTeams()
        {
            return pageDocument
                .DocumentNode
                .SelectNodes("//div[contains(@class, 'header')]//span[contains(@class, 'name')]")
                .Select(x => x.InnerText.ToUpper())
                .ToArray();
        }
    }
}
