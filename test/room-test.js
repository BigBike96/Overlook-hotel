import chai from 'chai';
const expect = chai.expect;

import Room from '../src/Room';
// import sampleData from './sampleData';

describe('Room', () => {
  let room24, room11, room, room2;

  beforeEach('setup', () => {

   room24 = {
      number: 24,
      roomType: 'suite',
      bidet: false,
      bedSize: 'queen',
      numBeds: 1,
      costPerNight: 327.24
    }

   room11 = {
      number: 11,
      roomType: 'single room',
      bidet: true,
      bedSize: 'twin',
      numBeds: 2,
      costPerNight: 207.24,
    }

    room = new Room(room24)
    room2 = new Room(room11)
  });

    it('should be a function', () => {

      expect(Room).to.be.a('function');
    });

    it('should be a room', () => {

      expect(room).to.be.an.instanceOf(Room);
    });

    it('should have a room number', () => {

      expect(room.number).to.equal(24);
    });

    it('should be able to have a different room number', () => {

      expect(room2.number).to.equal(11);
    });

    it('should have a room size', () => {

       expect(room.roomType).to.equal('suite');
     });

    it('should be able to have a different room size', () => {

       expect(room2.roomType).to.equal('single room')
     });

    it('should tell you if the room has a bidet', () => {

       expect(room.hasBidet).to.equal(false);
     });

    it('should tell you the size of the beds in a room', () => {

       expect(room.bedSize).to.equal('queen');
     });

    it('should tell you the size of the beds in another room', () => {

       expect(room2.bedSize).to.equal('twin');
     });

    it('should keep track of beds in a room', () => {

       expect(room.numBeds).to.equal(1);
    });

    it('should keep track of beds in another room', () => {

       expect(room2.numBeds).to.equal(2);
    });

    it('should have a cost per night', () => {

       expect(room.costPerNight).to.equal(327.24);
    });

    it('should have a different cost per night', () => {

       expect(room2.costPerNight).to.equal(207.24);
    });
});
