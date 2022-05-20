var expect = require('chai').expect;
var updateResevationMW = require('../middlewares/reservation/update.js');

describe('update reservation middleware ', function () {

  it('should do nothing when start and end is undefined', function (done) {
    var req = {
      body: {
       
      }
    };
    var res = {
      locals: {}
    };
    var fakeReservationModel = {};

    updateResevationMW({
      Reservation: fakeReservationModel,
      Bed: {},
      User: {}
    })(req, res, function (err) {
      expect(err).to.eql(undefined);
      done();
    });
  });

  it('should save ', function (done) {
    var req = {
      body: {
       start: "1",
       end: "2"
      }
    };
    var saved = false;
    var fakeReservationModel = {
      start: null,
      end: null,
      save: function(cb){
        saved = true;
        cb()
        return
      }
    };

    var res = {
      locals: {
        reservation: fakeReservationModel
      }
    };
   
    updateResevationMW({
      Reservation: fakeReservationModel,
      Bed: {},
      User: {}
    })(req, res, function (err) {
      expect(err).to.eql(undefined);
      expect(saved).to.eql(true);
      done();
    });
  });

  it('should run to error ', function (done) {
    var req = {
      body: {
       start: "1",
       end: "2"
      }
    };
    var fakeReservationModel = {
      start: null,
      end: null,
      save: function(cb){
        cb('hiba')
        return
      }
    };

    var res = {
      locals: {
        reservation: fakeReservationModel
      }
    };
   
    updateResevationMW({
      Reservation: fakeReservationModel,
      Bed: {},
      User: {}
    })(req, res, function (err) {
      expect(err).to.eql('hiba');
       done();
    });
  });

});