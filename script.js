//function to declare global level info
const card1=document.querySelector("#card-1");
const card2=document.querySelector("#card-2");
const card3=document.querySelector("#card-3");
(function () {
    fetch('https://coronavirus-19-api.herokuapp.com/all ').then((response)=>{
        return response.json();
    }).then((data)=>{const cases=data.cases;
        const deaths=data.deaths;
        const recovered=data.recovered;
        const c=document.createElement("h2");
        let count=167070000;
        setInterval(()=>{
          if(count<cases)
          count++;
        c.textContent=count;
        c.style.color='white';
        },0.2);
        card1.appendChild(c);
        const r=document.createElement("h2");
        let count2=148011000;
        setInterval(()=>{
          if(count2<recovered)
          count2++;
        r.textContent=count2;
        r.style.color='green'
        },0.2);
        card2.appendChild(r);
        const d=document.createElement("h2");
        let count3=3469000;
        setInterval(()=>{
          if(count3<deaths)
          count3++;
        d.textContent=count3;
       d.style.color='red';
        },0.2);
        card3.appendChild(d);


    }).catch();
})();
/* function for country level info*/
var ul=document.querySelector("ul");
var x=document.getElementById("demo");
function geoLocation()
{function success(position)
  {
    const latitude=position.coords.latitude;
    const longitude=position.coords.longitude;
    const li1=document.createElement("li");

li1.classList.add("bg-warning");
li1.textContent=`latitude:${latitude}
longitude:${longitude}`;

ul.appendChild(li1);
  }
  function error(){
   x.textContent="error";
  }
if(!navigator.geolocation)
{x.textContent="browser not suppoting";
   navigator.geolocation.getCurrentPosition(showPosition);

}
else 
navigator.geolocation.getCurrentPosition(success,error);
}
/*state level info*/

(function state() {
 var div=document.getElementsByClassName("last-update");

      fetch('https://api.rootnet.in/covid19-in/stats/daily').then((response)=>{
        return response.json();}).then((data)=>{
     var last=Object.keys(data.data).pop();
     var lastValue=data.data[last];
   const day=lastValue.day;
     var h1=document.createElement("h1");
    h1.textContent=day;
    div.appendChild(h1);

    }).catch();})();

