// 1. Click Counter App

const btn = document.getElementById('btn')
const btn2 = document.getElementById('btn2')
const para = document.getElementById('para')


var count= 0;
btn.addEventListener('click',()=>
{
   
    count++;
    para.innerText = 'Count: '+ count;
})

btn2.addEventListener('click',()=>
{
    clearInterval();
    para.innerHTML = 'Count: '+ 0;
})