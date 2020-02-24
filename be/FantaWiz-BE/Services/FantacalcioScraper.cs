using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using FantaWizBE.Models;

namespace FantaWizBE.Services
{
    public class FantacalcioScraper : BaseScraper
    {
        public FantacalcioScraper(Dictionary<string, Player> players) : base(players)
        {
            _source = Source.FantacalcioIt;
        }

        public async override Task<Dictionary<string, Player>> Get(IHttpClientFactory httpClientFactory)
        {
            await SendHttpRequest(httpClientFactory, "https://www.fantacalcio.it/probabili-formazioni-serie-a");

            var teams = GetTeams();

            return _players;
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
