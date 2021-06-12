// Customer test
import chai from 'chai';
const expect = chai.expect;

import Customer from '../src/Customer';
import sampleData from './sampleData';

describe('Customer', () => {
  let customer, newCustomer;

  beforeEach('setup', () => {

    newCustomer = {
      "id": 1,
      "name": "Leatha Ullrich"
    };

    customer = new Customer(newCustomer);

  });

  it('should be a customer', () => {

    expect(customer).to.be.an.instanceOf(Customer);
  });

  // it('', () => {
  //   expect().to.be.an.instanceOf()
  // })

})








// it('', () => {
//   expect().to.be.an.instanceOf()
// })
