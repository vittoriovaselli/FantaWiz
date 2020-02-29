using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using FantaWizBE.Models;

namespace FantaWizBE.Services
{
    public class FantacalcioScraper : BaseScraper
    {
        public FantacalcioScraper(HashSet<Player> players) : base(players)
        {
            _source = Source.FantacalcioIt;
        }

        public async override Task<HashSet<Player>> Get(IHttpClientFactory httpClientFactory)
        {
            await SendHttpRequest(httpClientFactory, "https://www.fantacalcio.it/probabili-formazioni-serie-a");

            var teams = GetTeams();

            GetStartingAndReserves(teams);

            GetDisqualifiedAndInjuredPlayers(teams);

            return _players;
        }

        private void GetDisqualifiedAndInjuredPlayers(string[] teams)
        {
            var groups = pageDocument
                .DocumentNode
                .SelectNodes("//div[contains(@class, 'pgroup')]")
                .ToArray();

            var teamIndex = 0;
            var found = 0;
            foreach(var group in groups)
            {
                if (group.InnerText.Contains("INDISPONIBILI"))
                {
                    var players = group
                        .SelectNodes(".//span[contains(@class, 'bold')]")
                        .Select(x => x.InnerText)
                        .ToArray();
                    for(int i=1; i < players.Length; i++)
                    {
                        var name = players[i].Split(':', '&')[0].ToUpper();
                        if (!name.Contains('-'))
                        {
                            AddPlayer(teams, teamIndex, name, PlayerStatus.Injured);
                        }
                    }
                    found++;
                }

                if (group.InnerText.Contains("SQUALIFICATI"))
                {
                    var players = group
                        .SelectNodes(".//p[contains(@class, 'txtmedium top10 bold')]")
                        .Select(x => x.InnerText)
                        .FirstOrDefault();
                    if (!players.Contains('-'))
                    {
                        var playerArray = players.Split(',');
                        foreach(var player in playerArray)
                        {
                            AddPlayer(teams, teamIndex, player.ToUpper(), PlayerStatus.Disqualified);
                        }
                    }

                    found++;
                }
                if (found == 2)
                {
                    teamIndex++;
                    found = 0;
                }
            }

        }

        private void GetStartingAndReserves(string[] teams)
        {
            var groups = pageDocument
                .DocumentNode
                .SelectNodes("//div[contains(@class, 'col-lg-6 col-md-6 col-sm-6 col-xs-6 probbar p10')]")
                .ToArray();

            //get home teams starting players
            var teamIndex = 0;
            for(int i = 0; i< groups.Length; i+=4)
            {
                var playersArray = groups[i]
                   .SelectNodes(".//div[contains(@class, 'pname2')]")
                   .Select(x => x.InnerText)
                   .ToArray();
                foreach (var player in playersArray)
                {
                    AddPlayer(teams, teamIndex, player, PlayerStatus.Starting);
                }
                teamIndex+=2;
            }

            //get away teams starting players
            teamIndex = 1;
            for (int i = 1; i < groups.Length; i += 4)
            {
                var playersArray = groups[i]
                   .SelectNodes(".//div[contains(@class, 'pname2')]")
                   .Select(x => x.InnerText)
                   .ToArray();
                foreach (var player in playersArray)
                {
                    AddPlayer(teams, teamIndex, player, PlayerStatus.Starting);
                }
                teamIndex += 2;
            }

            //get home teams reserves
            teamIndex = 0;
            for (int i = 2; i < groups.Length; i += 4)
            {
                var playersArray = groups[i]
                   .SelectNodes(".//div[contains(@class, 'pname2')]")
                   .Select(x => x.InnerText)
                   .ToArray();
                foreach (var player in playersArray)
                {
                    AddPlayer(teams, teamIndex, player, PlayerStatus.Reserve);
                }
                teamIndex += 2;
            }

            //get away teams reserves
            teamIndex = 1;
            for (int i = 3; i < groups.Length; i += 4)
            {
                var playersArray = groups[i]
                   .SelectNodes(".//div[contains(@class, 'pname2')]")
                   .Select(x => x.InnerText)
                   .ToArray();
                foreach (var player in playersArray)
                {
                    AddPlayer(teams, teamIndex, player, PlayerStatus.Reserve);
                }
                teamIndex += 2;
            }

        }

        private string[] GetTeams()
        {
            return pageDocument
                .DocumentNode
                .SelectNodes("//h3[contains(@class,'txtbb m0 nopad team-name')]")
                .Select(x => x.InnerText)
                .ToArray();        
        }
    }
}
