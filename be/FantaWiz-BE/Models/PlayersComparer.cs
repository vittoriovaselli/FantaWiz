using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FantaWizBE.Models
{
    public class PlayersComparer : IEqualityComparer<Player>
    {
        public bool Equals(Player x, Player y)
        {
            //special cases
            
            if (x.Name.Contains("LUKAKU") && y.Name.Contains("LUKAKU"))
            {
                return String.Equals(x.Team, y.Team);
            }
            
            if ((x.Name.Contains("LAUTARO")&& y.Name.Contains("MARTINEZ L"))
                || (y.Name.Contains("LAUTARO") && x.Name.Contains("MARTINEZ L")))
            {
                return true;
            }

            

            return (x.Name.Contains(y.Name) || y.Name.Contains(x.Name))
                && (String.Equals(x.Team, y.Team)); 
        }

        public int GetHashCode(Player obj)
        {
            //want Equals to be always called
            return 0;
        }
    }
}
