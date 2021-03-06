﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using CodeChallenge.DAL;
using CodeChallenge.Models;

namespace CodeChallenge.Controllers
{
    public class ChallengeController : Controller
    {
        // GET: Challenge
        private DataRepo _repo = new DataRepo();
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult ChallengeData()
        {
            var data = _repo.ReadData() ?? new ChallengeData();
            return View(data);
        }
    }
}