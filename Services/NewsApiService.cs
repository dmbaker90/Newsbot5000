using Microsoft.Extensions.Configuration;
using NewsAPI;
using NewsAPI.Models;
using NewsAPI.Constants;
using System;

namespace Services
{
    public class NewsApiService
    {
        private NewsApiClient _client;

        public NewsApiService(IConfiguration config)
        {
            _client = new NewsApiClient(config["NewsAPI:ApiKey"]);
        }

        public ArticlesResult GetEverything()
        {
            var everythingRequest = new EverythingRequest();

            var articlesResult = _client.GetEverything(everythingRequest);

            return articlesResult;
        }

        public ArticlesResult TopHeadlines()
        {
            var topHeadlinesRequest = new TopHeadlinesRequest();
            topHeadlinesRequest.Country = Countries.US;

            var articlesResult = _client.GetTopHeadlines(topHeadlinesRequest);

            return articlesResult;
        }
    }
}
