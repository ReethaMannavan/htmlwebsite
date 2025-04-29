// 10. Handle an API call failure using try...catch.  


async function fetchData() { 
  try { 
  let response = await fetch("https://jsonplaceholder.typicode.com/user"); 
  if (!response.ok) { 
  throw new Error("API Error: Unable to fetch data!"); 
  } 
  let data = await response.json(); 
  console.log(data); 
  } catch (error) { 
  console.error("Error:", error.message); 
  } 
  } 
   
  fetchData(); 
  
  console.log("hi");
  