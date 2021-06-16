// api file
const fetchAllCustomerData = () => {
  return fetch('http://localhost:3001/api/v1/customers')
  .then(response => response.json())
  // .then(data => console.log("data", data))
  .catch(err => console.log("error", err));
}

const fetchAllRoomsData = () => {
  return fetch('http://localhost:3001/api/v1/rooms')
  .then(response => response.json())
  // .then(data => console.log("data", data))
  .catch(err => console.log("error", err));
}

const fetchAllBookingsData = () => {
  return fetch('http://localhost:3001/api/v1/bookings')
  .then(response => response.json())
  // .then(data => console.log("data", data))
  .catch(err => console.log("error", err));
}
const getData = () => {
  return Promise.all([ fetchAllCustomerData(), fetchAllRoomsData(), fetchAllBookingsData() ])
  .catch(err => console.log("error", err));
}

export default { fetchAllCustomerData, fetchAllRoomsData, fetchAllBookingsData, getData }
