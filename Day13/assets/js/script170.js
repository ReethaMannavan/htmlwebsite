// JS170. Fetch data from an API using fetch() and handle errors gracefully using .catch(). 

async function fetchData() {
    
    try {
       
        const response = await fetch('https://jsonplaceholder.typicode.com/users'); 
      const data = await response.json();
      console.log(data);
      

      const tableBody = document.querySelector('#data-table tbody');
      tableBody.innerHTML = ''; // Clear existing data if any

      data.forEach(user => {
        const row = document.createElement('tr');

        row.innerHTML = `
          <td>${user.id}</td>
          <td>${user.name}</td>
          <td>${user.username}</td>
          <td>${user.email}</td>
          <td>${user.phone}</td>`;
        
        tableBody.appendChild(row);
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  // Call fetchData to load the table data when the page loads
  window.onload = fetchData;