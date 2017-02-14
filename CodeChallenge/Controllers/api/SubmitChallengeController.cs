using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.ModelBinding;
using CodeChallenge.DAL;
using CodeChallenge.Models;

namespace CodeChallenge.Controllers.api
{
    public class SubmitChallengeController : ApiController
    {
        private DataRepo _repo = new DataRepo();
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/SubmitChallenge
        public void Post([FromBody] ChallengeData data)
        {
            Console.WriteLine(data);
            _repo.WriteData(data);

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
