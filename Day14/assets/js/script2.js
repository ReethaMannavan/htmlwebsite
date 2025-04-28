// J2. Fetch posts from an API and display them in a list. 


fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => posts(data));
    // .then(data => console.log(data));
    

    function posts(data){
        const unord = document.getElementById('unordered');
        data.forEach(element => {
            const list = document.createElement('li');
            list.innerText = `ID => ${element.id} Title => ${element.title} Content => ${element.body}`;
            unord.append(list);
        });
    }