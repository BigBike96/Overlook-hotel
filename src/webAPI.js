// api file

fetch('http://localhost:3001/api/v1/customers')
  .then(response => response.json())
  .catch(err => console.log("error"))
