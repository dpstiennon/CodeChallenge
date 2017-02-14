using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using CodeChallenge.Models;

namespace CodeChallenge.DAL
{
    // On any project larger than this, I would modify this
    // to store state in a database via entity framework.
    public class DataRepo
    {
        private string _challengeDataKey = "ChallengeData";
        public void WriteData(ChallengeData data)
        {
            HttpRuntime.Cache[_challengeDataKey] = data;
        }

        public ChallengeData ReadData()
        {
            return (ChallengeData) HttpRuntime.Cache[_challengeDataKey];
        }
    }

}
