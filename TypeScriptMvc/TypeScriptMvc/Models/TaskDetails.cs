using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TypeScriptMvc.Models
{
    public class TaskDetails
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Details { get; set; }
        public DateTime Starts { get; set; }
        public DateTime Ends { get; set; }
    }
}