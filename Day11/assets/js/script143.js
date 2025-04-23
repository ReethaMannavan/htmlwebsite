// 143. Store the number of page visits in LocalStorage. 



const pagecount = document.getElementsByClassName('page-count')

if (localStorage.pagecount)
  {
  localStorage.pagecount=Number(localStorage.pagecount) +1;
  }
else
{
  localStorage.pagecount=1;
  }
document.write("You've had "+ localStorage.pagecount + " visits.");