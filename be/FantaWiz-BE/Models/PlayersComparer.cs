using System;
using System.Collections.Generic;
using System.Diagnostics;
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
                return x.Team == y.Team;
            }

            if (x.Name.Contains("ANDERSON") && y.Name.Contains("ANDERSON"))
            {
                return x.Team == y.Team;
            }

            if ((x.Name.Contains("LAUTARO")&& y.Name.Contains("MARTINEZ L"))
                || (y.Name.Contains("LAUTARO") && x.Name.Contains("MARTINEZ L")))
            {
                return true;
            }

            if ((x.Name.Contains("DJMSITI") && y.Name.Contains("DJIMSITI"))
                || (x.Name.Contains("DJIMSITI") && y.Name.Contains("DJMSITI")))
            {
                return x.Team==y.Team;
            }

            if(x.Name.Contains("ZAPATA")&& y.Name.Contains("ZAPATA"))
            {
                return x.Team == y.Team;
            }

            if(x.Name.Contains("DONNARUMMA")&& y.Name.Contains("DONNARUMMA"))
            {
                if ((x.Name == "DONNARUMMA AL" && y.Name == ("DONNARUMMA"))
                    || y.Name == "DONNARUMMA AL" && x.Name == ("DONNARUMMA"))
                    return true;

                var xfirstName = x
                    .Name
                    .Split(' ', '.')
                    .Where(s => !String.IsNullOrEmpty(s))
                    .OrderBy(e => e.Length)
                    .First() //first string
                    .First();//first char

                var yfirstName = y
                    .Name
                    .Split(' ', '.')
                    .Where(s=> !String.IsNullOrEmpty(s))
                    .OrderBy(e => e.Length)
                    .First() //first string
                    .First(); //first char
                

                return ((xfirstName == yfirstName) && (x.Team == y.Team));
            }



            return (x.Name.Contains(y.Name) || y.Name.Contains(x.Name))
                && (x.Team == y.Team); 
        }

        public int GetHashCode(Player obj)
        {
            //want Equals to be always called
            return 0;
        }
    }
}
