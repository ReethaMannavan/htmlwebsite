// JS138. Implement a simple click counter using LocalStorage. 

function load()
{
if(localStorage.getItem("counter")!=null)
      {
          counter = Number(localStorage.getItem("counter"));
          document.getElementById("counterValue").innerHTML = counter;
      }

}
var counter= 0;        

function counterFn() {          
 counter = Number(localStorage.getItem("counter"));

 console.log(counter);
 counter += 1;
 localStorage.setItem("counter",counter);             
 document.getElementById("counterValue").innerHTML = counter;
}