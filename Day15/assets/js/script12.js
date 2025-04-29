// 12. Prevent infinite recursion by handling a function call limit. 

async function fetchData() {
  try {
    for (i = 1; i > 1; i++) {
      console.log(i);

    }
  } catch (error) {
    console.error("Error:", error.message);
  }
  finally {
    console.log("Execution completed!");
  }
}

fetchData();

console.log("hi");