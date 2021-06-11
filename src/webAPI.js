// api file
const fetchAllCustomerData = {
  reutrn fetch('http://localhost:3001/api/v1/customers')
  .then(response => response.json())
  .catch(err => console.log("error"));
}

const fetchAllRoomsData = {
  return fetch('http://localhost:3001/api/v1/rooms')
  .then(response => response.json())
  .catch(err => console.log("error"));
}

const fetchAllBookingsData = {
  return fetch('http://localhost:3001/api/v1/bookings')
  .then(response => response.json())
  .catch(err => console.log("error"));
}
const getData = () => {
  return Promise.all([ fetchAllCustomerData(), fetchAllRoomsData(), fetchAllBookingsData() ])
}
export { fetchAllCustomerData, fetchAllRoomsData, fetchAllBookingsData }
