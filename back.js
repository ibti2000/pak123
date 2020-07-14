var bod = document.querySelector(".wwe");
var co1 = document.querySelector("#pak");
var co2 = document.querySelector("#ind");
var h3 = document.querySelector("h3");
// console.log(bod);
// console.log(co1);
// console.log(co2);

function coloo()
                {
                   bod.style.background = "linear-gradient(to right, "
                    + co1.value 
                    + ", " 
                    + co2.value
                    + ")" ; 

                    h3.textContent = bod.style.background + ";"

                }
co1.addEventListener("input", coloo);
co2.addEventListener("input", coloo);


//line 17 adds name of the style inside h3