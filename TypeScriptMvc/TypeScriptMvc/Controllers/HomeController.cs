using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TypeScriptMvc.Models;

namespace TypeScriptMvc.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Tasks()
        {
            List<TaskDetails> tasks = new List<TaskDetails>();
            for (int i = 0; i < 10; i++)
            {
                TaskDetails newTask = new TaskDetails
                {
                    Id = i,
                    Title = "Task " + (i + 1),
                    Details = "Task Details " + (i + 1),
                    Starts = DateTime.Now,
                    Ends = DateTime.Now.AddDays(i + 1)
                };
                tasks.Add(newTask);
            }
            return View(tasks);
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}