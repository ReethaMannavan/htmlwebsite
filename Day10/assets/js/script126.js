// JS126. Count the number of times a button is clicked. 

const btn = document.getElementById('btn')
const para = document.getElementById('para')


var count= 0;
btn.addEventListener('click',()=>
{
   
    count++;
    para.innerText = 'Count: '+ count;
})