using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using CodeChallenge.Models;

namespace CodeChallenge.Controllers.api
{
    public class SubmitChallengeController : ApiController
    {

        public string Get(int id)
        {
            return "value";
        }

        // POST: api/SubmitChallenge
        public void Post([FromBody] ChallengeData value)
        {
            Console.WriteLine(value);
        }

        // PUT: api/SubmitChallenge/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/SubmitChallenge/5
        public void Delete(int id)
        {
        }
    }
}
