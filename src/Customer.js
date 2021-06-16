// Customer class
// should have a name
// should have an id

class Customer {
  constructor(customerInfo) {
    this.id = customerInfo.id;
    this.name = customerInfo.name;
    this.bookings = [];  
  }
}





export default Customer
