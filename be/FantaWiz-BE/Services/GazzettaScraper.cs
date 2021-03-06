﻿using FantaWizBE.Models;
using HtmlAgilityPack;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace FantaWizBE.Services
{
    public class GazzettaScraper: BaseScraper
    {
        public GazzettaScraper(HashSet<Player> players):base (players)
        {
            _source = Source.GazzettaDelloSport;
            
        }

        

        public override async  Task<HashSet<Player>> Get(IHttpClientFactory httpClientFactory)
        {
            //get data from LaGazzetta
            await SendHttpRequest(httpClientFactory, "https://www.gazzetta.it/Calcio/prob_form/");

            string[] teams = GetTeams();

            GetStartingPlayers(teams);


            var homeData = pageDocument
                .DocumentNode
                .SelectNodes($"//div[contains(@class, 'homeDetails')]//p")
                .Select(x => x.InnerText)
                .ToArray();

            var awayData = pageDocument
                .DocumentNode
                .SelectNodes($"//div[contains(@class, 'awayDetails')]//p")
                .Select(x => x.InnerText)
                .ToArray();

            //get home teams reserves
            GetReserves(teams, 0, homeData);

            //get home teams reserves
            GetReserves(teams, 1, awayData);

            //get home teams disqualified
            GetDisqualifiedPlayers(teams, 0, homeData);

            //get away teams disqualified
            GetDisqualifiedPlayers(teams, 1, awayData);

            //get home teams injured
            GetInjuredPlayers(teams, 0, homeData);

            //get away teams injured
            GetInjuredPlayers(teams, 1, awayData);

            return _players;
        }               


        private  void GetInjuredPlayers(string[] teams, int teamIndex, string[] data)
        {
            for (int i = 3; i < data.Length; i += 6)
            {
                var benchPlayersData = data[i].Split(':', ';', ',');
                for (int j = 1; j < benchPlayersData.Length-1; j += 1)
                {
                    if (benchPlayersData[j].Contains("nessuno"))
                    {
                        continue;
                    }

                    var split = benchPlayersData[j].Split(' ');
                    int k = 1;
                    while (String.IsNullOrWhiteSpace(split[k]))
                    {
                        k++;
                        if (k == split.Length)
                        {
                            break;
                        }
                    }
                    if (k == split.Length)
                    {
                        continue;
                    }



                    var name = split[k].ToUpper();
                    if (!split[k + 1].Contains('('))
                    {
                        name = $"{name} {split[k + 1].ToUpper()}";
                    }

                    AddPlayer(teams, teamIndex, name, PlayerStatus.Injured);

                }
                teamIndex += 2;
            }
        }


        private  void GetReserves(string[] teams, int teamIndex, string[] data)
        {
            for (int i = 0; i < data.Length; i += 6)
            {
                var benchPlayersData = data[i].Split(';', ',');
                for (int j = 1; j < benchPlayersData.Length; j += 2)
                {
                    AddPlayer(teams, teamIndex, benchPlayersData[j], PlayerStatus.Reserve);
                }
                teamIndex += 2;
            }
        }

        private  void GetDisqualifiedPlayers(string[] teams, int teamIndex, string[] data)
        {
            for (int i = 2; i < data.Length; i += 6)
            {
                var benchPlayersData = data[i].Split(':',';', ',');
                for (int j = 1; j < benchPlayersData.Length; j += 1)
                {
                    if (benchPlayersData[j].Contains("nessuno\n"))
                    {
                        continue;
                    }
                    AddPlayer(teams, teamIndex, benchPlayersData[j].Split(' ')[1].ToUpper(), PlayerStatus.Disqualified);
                }
                teamIndex += 2;
            }
        }

        private  void GetStartingPlayers(string[] teams)
        {
            var tempPlayers = new List<Player>();
            var teamPlayers = pageDocument
                .DocumentNode
                .SelectNodes("(//li[contains(@class,'team-players-inner')])");

            int teamIndex = 0;
            foreach (var teamPlayer in teamPlayers)
            {
                try
                {
                    var names = teamPlayer
                    .SelectNodes("(.//span[contains(@class, 'team-player')])")
                    .Select(x => x.InnerText)
                    .ToArray();
                    foreach (var name in names)
                    {
                        AddPlayer(teams, teamIndex, name, PlayerStatus.Starting);
                    }
                }
                catch(Exception e)
                {
                   
                    Console.WriteLine(e.Message);
                }
                
               
                teamIndex++;
            }
        }

        private  string[] GetTeams()
        {

            //get teams
            return pageDocument
                .DocumentNode
                .SelectNodes("(//div[contains(@class,'matchFieldContainer')])//a[contains(@class,'is--gainsboro')]")
                .Select(x => x.InnerText.ToUpper())
                .ToArray();
        }

        
    }
}
