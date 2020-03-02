using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using FantaWizBE.Models;
using FantaWizBE.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;

namespace FantaWiz_BE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        private IHttpClientFactory _httpClientFactory;
        private IMemoryCache _cache;
        private const string cachePlayersKey = "PLAYERS"; 

        public ValuesController(IHttpClientFactory httpClientFactory, IMemoryCache memoryCache)
        {
            _httpClientFactory = httpClientFactory;
            _cache = memoryCache;
        }

        // GET api/values
        [HttpGet]
        public async Task<IEnumerable<Player>> Get()
        {
            //check cache
            if (!_cache.TryGetValue(cachePlayersKey, out HashSet<Player> players))
            {
                players = new HashSet<Player>(new PlayersComparer());

                //if not found in cache scrape values
                var gazzettaScraper = new GazzettaScraper(players);
                players = await gazzettaScraper.Get(_httpClientFactory);

                var fantacalcioScraper = new FantacalcioScraper(players);
                players = await fantacalcioScraper.Get(_httpClientFactory);

                var skyScraper = new SkyScraper(players);
                players = await skyScraper.Get(_httpClientFactory);

                //cache options
                var cacheOptions = new MemoryCacheEntryOptions()
                    .SetAbsoluteExpiration(DateTime.Now.AddMinutes(10));

                //save data in cache
                _cache.Set(cachePlayersKey, players, cacheOptions);
            }

            return players;
        }
    }
}
