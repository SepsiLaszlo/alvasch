var expect = require('chai').expect;
var deleteResevationMW = require('../middlewares/reservation/delete.js');

describe('delete reservation middleware ', function () {

  it('should do nothing when reservation is undefined', function (done) {
    var req = {};
    var res = {
      locals: {}
    };
    var fakeReservationModel = {
      find: function (some, cb) {
        cb(undefined, ['user1', 'user2'])
      }
    };

    deleteResevationMW({
      Reservation: fakeReservationModel
    })(req, res, function (err) {
      expect(err).to.eql(undefined);
      done();
    });
  });

  it('should do nothing when reservation is null', function (done) {
    var req = {};
    var res = {
      locals: { reservation: null }
    };
    var fakeReservationModel = {
      find: function (some, cb) {
        cb(undefined, ['user1', 'user2'])
      }
    };

    deleteResevationMW({
      Reservation: fakeReservationModel
    })(req, res, function (err) {
      expect(err).to.eql(undefined);
      done();
    });
  });


  it('should call delete', function (done) {
    var called = false
    var fakeReservationModel = {
      remove: function (cb) {
        called = true
        cb()
      }
    };

    var req = {};
    var res = {
      locals: {
        reservation: fakeReservationModel
      }
    };
   

    deleteResevationMW({
      Reservation: fakeReservationModel
    })(req, res, function (err) {
      expect(err).to.eql(undefined);
      expect(called).to.eql(true);
      done();
    });
  });

  it('should raise error', function (done) {
    var fakeReservationModel = {
      remove: function (cb) {
        cb('hiba')
      }
    };

    var req = {};
    var res = {
      locals: {
        reservation: fakeReservationModel
      }
    };
   

    deleteResevationMW({
      Reservation: fakeReservationModel
    })(req, res, function (err) {
      expect(err).to.eql('hiba');
      done();
    });
  });
});