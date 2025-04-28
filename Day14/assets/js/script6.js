// 6. Create an image gallery using the Fetch API.

const img = document.getElementById('test');



// fetch('https://picsum.photos/v2/list?page=2&limit=20')
// .then(r => r.json())
// .then(data => images(data));




// make a request to your API

fetch('https://picsum.photos/v2/list?page=2&limit=20')
// fetch('https://jsonplaceholder.typicode.com/photos')
// parse the API response as "JSON"
.then(r => r.json())
// update the image's "src" (source)
.then(data=> console.log(data));

function images(data){
    data.forEach(element => {
        const img1 = document.createElement('img');
      img1.src = element;
      img.append(img1);

})
}