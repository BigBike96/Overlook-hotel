// Customer test
import chai from 'chai';
const expect = chai.expect;

import Customer from '../src/Customer';
// import { sampleData } from './sampleData';

describe('Customer', () => {
  let customer, customer2, newCustomer, newCustomer2;

  beforeEach('setup', () => {

    // newCustomer = sampleData.customerSampleData;
    newCustomer = {
      id: 1,
      name: 'Leatha Ullrich'
    }

    newCustomer2 = {
      id: 12,
      name: 'Stanly Jones'
    }

    customer = new Customer(newCustomer);
    customer2 = new Customer(newCustomer2);
  });

  it('should be a function', () => {

    expect(Customer).to.be.a('function');
  });

  it('should be a customer', () => {

    expect(customer).to.be.an.instanceOf(Customer);
  });

  it('should have an id', () => {

    expect(customer.id).to.equal(1);
  });

  it('should have another id', () => {

    expect(customer2.id).to.equal(12);
  });

  it('should have a name', () => {

    expect(customer.name).to.equal('Leatha Ullrich');
  });

  it('should have another name', () => {

    expect(customer2.name).to.equal('Stanly Jones');
  });

  it('should keep track of customer bookings', () => {

    expect(customer.bookings).to.deep.equal([]);
  })

  // it('', () => {
  //   expect().to.equal()
  // })

})

// it('', () => {
//   expect().to.be.an.instanceOf()
// })
