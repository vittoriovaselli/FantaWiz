using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FantaWizBE.Models
{
    public class Status
    {
        public Source Source { get; set; }
        public PlayerStatus PlayerStatus { get; set; }
    }

    public enum Source
    {
        GazzettaDelloSport
    }

    public enum PlayerStatus
    {
        Starting,
        Reserve,
        Injured,
        Disqualified
    }
}
