using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FantaWizBE.Models
{
    public enum Source
    {
        GazzettaDelloSport,
        FantacalcioIt,
        Sky
    }

    public enum PlayerStatus
    {
        Starting,
        Reserve,
        Injured,
        Disqualified, 
        Unknown = -1
    }
}
