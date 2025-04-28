//7. Implement pagination using Fetch API. 

var holder = document.getElementById("holder");
var nextBtn = document.getElementById("next_button");
var prevBtn = document.getElementById("prev_button");


var page = 0;
var perPage = 3;


async function getData(){
    const url = 'https://g2-products-reviews-users2.p.rapidapi.com/vendor/autocomplete?Query=Salesfor';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'a57ae19c78msh9281196672cc990p18af9cjsn05305218925a',
            'x-rapidapi-host': 'g2-products-reviews-users2.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const data = await response.text();
        console.log(data);
        holder.innerHTML = "";

        for (var i=0;i<data.length;i++) {
          
            var item = data[i];
            var name = item.name;

            var nameHolder = document.createElement("h2");
            nameHolder.textContent = name;
            holder.appendChild(nameHolder);
        }
    } catch (error) {
        console.error(error);
    }
}


getData();

nextBtn.addEventListener("click", function() {
    page ++;
    getData();
});

prevBtn.addEventListener("click", function() {
    page --;
    getData();
});