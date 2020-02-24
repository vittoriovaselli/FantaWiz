using FantaWizBE.Models;
using HtmlAgilityPack;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace FantaWizBE.Services
{
    public class BaseScraper
    {
        internal Dictionary<string, Player> _players;
        internal Source _source;
        internal HtmlDocument pageDocument;

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

        internal async Task SendHttpRequest(IHttpClientFactory httpClientFactory, string Url)
        {
            var client = httpClientFactory.CreateClient();
            var request = new HttpRequestMessage(HttpMethod.Get, Url);
            var response = await client.SendAsync(request);

            if (response.IsSuccessStatusCode)
            {
                //parse data from LaGazzetta
                string htmlContent = await response.Content.ReadAsStringAsync();
                pageDocument = new HtmlDocument();
                pageDocument.LoadHtml(htmlContent);
            }
        }

        internal void CheckErrors()
        {
            //if a player has more than "number of sources" statuses there is an error
            //remove all players from dictionary
            if (_players.FirstOrDefault().Value.Status.Count > Enum.GetValues(typeof(Source)).Length)
            {
                _players =  new Dictionary<string, Player>();
            }
        }

    }
}
