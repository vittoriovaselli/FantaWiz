using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FantaWizBE.Models
{
    public class Player
    {
        public string Name { get; set; }
        public string Team { get; set; }
        public string Versus { get; set; }
        public List<Status> Status { get; set; }
        public bool IsHome { get; set; }
    }
}
