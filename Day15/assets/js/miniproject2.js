//2. API Response Logger 

async function fetchData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/user");
    if (!response.ok) {
      throw new Error("API Error: Unable to fetch data!");

    }
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error occurred:", error.message);
    localStorage.setItem("errorLog", error.message);
  }
}

fetchData();

