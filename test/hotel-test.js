// Hotel tests
import chai from 'chai';
const expect = chai.expect;
// import { expect } from 'chai';
import Hotel from '../src/Hotel'

import { allBookingsSampleData, allRoomsSampleData, allCustomerData } from './sampleData';

describe('Hotel', () => {
  let hotel;
  // , hotel2, hotel3;

  beforeEach() => {
    hotel = new Hotel(allBookingsSampleData, allRoomsSampleData, allCustomerData);
  }

  it('should be a function', () => {

    expect(Hotel).to.be.a('function');
  });

  it('should be a room', () => {

    expect(hotel).to.be.an.instanceOf(Hotel);
  });

  it('should have rooms', () => {

    expect(hotel.rooms.length).to.equal(9);
  });
