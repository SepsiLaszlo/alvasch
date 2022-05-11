const Bed = require('../models/bed')
const Reservation = require('../models/reservation')
const User = require('../models/user')


module.exports = async function (){
    userCount = await User.count()
    reservationCount = await Reservation.count()
    bedCount = await Bed.count()

   if(userCount>0|| bedCount >0 || reservationCount >0) {return}
   

    let newUser1 = new User()
    newUser1.name = "Tulaj Tamás";
    newUser1.room = 1316;

    let newBed1 = new Bed();
    newBed1.room =1316;
    newBed1.position = "left-top"
    newBed1.user = newUser1;
    newUser1.bed = newBed1;


    let newUser2 = new User()
    newUser2.name = "Foglaló Ferenc";
    newUser2.room = 1315;

    let newBed2 = new Bed();
    newBed2.room =1315;
    newBed2.position = "right-top"
    newBed2.user = newUser2;

    newUser2.bed = newBed2;

    let newReservation = new Reservation();
    newReservation.start = "2018-01-18T09:30"
    newReservation.end = "2018-01-22T12:45"
    newReservation.bed = newBed1;
    newReservation.user = newUser2;

    newUser1.save()
    newBed1.save()
    newUser2.save()
    newBed2.save()
    newReservation.save()

    console.log("Seeds are loaded successfully!")

}