const { set } = require('express/lib/application');
const setVariables = require('./middlewares/setVariables');
const render = require('./middlewares/render');
const redirect = require('./middlewares/redirect');


const getBed = require('./middlewares/bed/get');
const getAllBed = require('./middlewares/bed/getAll');
const saveBed = require('./middlewares/bed/save')
const deleteBed = require('./middlewares/bed/delete');

const getUser = require('./middlewares/user/get');
const getAllUser = require('./middlewares/user/getAll');
const saveUser = require('./middlewares/user/save')
const deleteUser = require('./middlewares/user/delete');

const getReservation = require('./middlewares/reservation/get')
const getAllReservation = require('./middlewares/reservation/getAll')
const saveReservation  = require('./middlewares/reservation/save')
const deleteReservation = require('./middlewares/reservation/delete');

require('./middlewares/setVariables')
module.exports = function (app) {
  app.get("/", redirect("/bed"));

  app.get("/bed", getAllBed ,setVariables, render("bed/index"));
  app.post("/bed", saveBed ,setVariables, redirect("/bed"));
  app.get("/bed/:id",getBed,setVariables, render("bed/detail"));
  app.delete("/bed/:id",deleteBed,setVariables, redirect("/bed"));

  app.get("/user", getAllUser, setVariables , render("user/index"));
  app.post("/user", saveUser ,setVariables, redirect("/user"));
  app.get("/user/:id",getUser, setVariables ,render("user/detail"));
  app.delete("/user/:id",deleteUser, setVariables, redirect("/user"));

  app.get("/reservation",getAllReservation, setVariables,render("reservation/index"));
  app.post("/reservation", saveReservation ,setVariables, redirect("/reservation"));
  app.get("/reservation/:id",getReservation, setVariables, render("reservation/detail"));
  app.delete("/reservation/:id",deleteReservation, setVariables, redirect("/reservation"));
};
