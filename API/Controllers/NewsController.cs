using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Services;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NewsController : ControllerBase
    {
        public NewsApiService _newsApiService;

        public NewsController(NewsApiService newsApiService)
        {
            _newsApiService = newsApiService;
        }

        [HttpGet]
        public ActionResult GetEverything()
        {
            return Ok(_newsApiService.GetEverything());
        }

        [HttpGet("TopHeadlines")]
        public ActionResult GetTopHeadlines()
        {
            return Ok(_newsApiService.TopHeadlines());
        }
    }
}