// 1. Typing Speed Tester (Fetch API) 

const btn = document.getElementById('btn');
const text = document.getElementById('text');
const speedtest = document.getElementById('speedtest');
const inputArea = document.getElementById('input-area');



async function typingspeed() {

    const url = `https://jsonplaceholder.typicode.com/posts`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    const fetchdata =
        data.forEach(element => {
            const text = document.getElementById('text');
            const textInput = document.createElement('p');
            textInput.innerText = `${element.title}`;
            speedtest.appendChild(textInput);
            console.log(speedtest);
        })


}

text.addEventListener('focus',()=>{
  
    // let startTime = 0;
    //     endTime = new Date().getTime();
    //     const timeTaken = (endTime - startTime) / 1000; // in seconds
    //     const words = fetchdata.split(" ").length;
    //     const speed = (words / timeTaken) * 60; // words per minute
    //     result.textContent = `Your speed is ${speed.toFixed(2)} words per minute!`;
    //     inputArea.disabled = true;

    typingspeed();
})



speedtest.addEventListener('click',(element)=>{
    currentText = element[Math.floor(Math.random() * fetchdata.length)];
    text.textContent = currentText;
    inputArea.value = "";
    inputArea.disabled = false;
    inputArea.focus();
   speedtest.textContent = "";
    startTime = new Date().getTime();
})







