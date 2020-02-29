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
        internal HashSet<Player> _players;
        internal Source _source;
        internal HtmlDocument pageDocument;

        public BaseScraper(HashSet<Player> players)
        {
            _players = players;
        }

        public virtual async Task<HashSet<Player>> Get(IHttpClientFactory httpClientFactory)
        {
            throw new NotImplementedException(); 
        }
        

        public void AddPlayer(string[] teams, int teamIndex, string name, PlayerStatus playerStatus)
        {
            name = name.Trim();

            if (name.Contains("&#39;"))
            {
                name = name.Replace("&#39;", "'");
            }

            if (name.Contains("?"))
            {
                name  = name.Replace("?", "'");
            }

            if (name.Contains("’"))
            {
                name = name.Replace("’", "'");
            }



            Player player = new Player
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
            };

            if (_players.Contains(player))
            {
                _players.TryGetValue(player, out Player selectedPlayer);

                selectedPlayer.Status.Add(new Status
                {
                    PlayerStatus = playerStatus,
                    Source = _source
                });
            }
            else
            {
                _players.Add(player);
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
            if (_players.FirstOrDefault().Status.Count > Enum.GetValues(typeof(Source)).Length)
            {
                _players =  new HashSet<Player>();
            }
        }

    }
}
