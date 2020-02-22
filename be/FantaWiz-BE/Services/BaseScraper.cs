using FantaWizBE.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace FantaWizBE.Services
{
    public class BaseScraper
    {
        private Dictionary<string, Player> _players;
        internal Source _source;

        public BaseScraper(Dictionary<string,Player> players)
        {
            _players = players;
        }

        public virtual async Task<Dictionary<string, Player>> Get(IHttpClientFactory httpClientFactory)
        {
            throw new NotImplementedException(); 
        }
        

        public void AddPlayer(string[] teams, int teamIndex, string name, PlayerStatus playerStatus)
        {
            if (_players.ContainsKey(name))
            {
                _players[name].Status.Add(new Status
                {
                    PlayerStatus = playerStatus,
                    Source = Source.GazzettaDelloSport
                });
            }
            else
            {
                _players.Add(name, new Player
                {
                    Name = name,
                    IsHome = teamIndex % 2 == 0,
                    Team = teams[teamIndex],
                    Versus = TeamVersus(teams, teamIndex),
                    Status = new List<Status>()
                        {
                            new Status{
                                PlayerStatus = playerStatus,
                                Source = _source
                            }
                        }
                });
            }
        }

        private static string TeamVersus(string[] teams, int teamIndex)
        {
            return teamIndex % 2 == 0 ? teams[teamIndex + 1] : teams[teamIndex - 1];
        }

    }
}
