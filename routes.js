const { set } = require("express/lib/application");
const setVariables = require("./middlewares/setVariables");
const render = require("./middlewares/render");
const redirect = require("./middlewares/redirect");
const ok = require("./middlewares/ok");

const getBed = require("./middlewares/bed/get");
const getAllBed = require("./middlewares/bed/getAll");
const saveBed = require("./middlewares/bed/save");
const deleteBed = require("./middlewares/bed/delete");
const newBed = require("./middlewares/bed/new");
const updateBed = require("./middlewares/bed/update");



const getUser = require("./middlewares/user/get");
const getAllUser = require("./middlewares/user/getAll");
const saveUser = require("./middlewares/user/save");
const deleteUser = require("./middlewares/user/delete");

const getReservation = require("./middlewares/reservation/get");
const getAllReservation = require("./middlewares/reservation/getAll");
const saveReservation = require("./middlewares/reservation/save");
const deleteReservation = require("./middlewares/reservation/delete");
const updateReservation = require("./middlewares/reservation/update");

const User = require("./models/user");
const Bed = require("./models/bed");
const Reservation = require("./models/reservation");

module.exports = function (app) {
  const objRepo = {
    User: User,
    Bed: Bed,
    Reservation: Reservation,
  };

  app.get("/", redirect("/bed"));

  app.get("/bed", getAllBed(objRepo), setVariables, render("bed/index"));
  app.get("/bed/new", getAllUser(objRepo), setVariables, render("bed/new"));
  app.post("/bed/",newBed(objRepo), saveBed(objRepo), setVariables, redirect("/bed"));
  app.post("/bed/:id",  getBed(objRepo),updateBed(objRepo), setVariables, render("bed/detail"));
  app.get("/bed/:id", getBed(objRepo), setVariables, render("bed/detail"));
  app.delete("/bed/:id", getBed(objRepo), deleteBed(objRepo),ok);


  app.get("/user", getAllUser(objRepo), setVariables, render("user/index"));
  app.post("/user/:id", getUser(objRepo), saveUser(objRepo), setVariables, redirect("/user"));
  app.get("/user/:id", getUser(objRepo), setVariables, render("user/detail"));
  app.delete("/user/:id", getUser(objRepo), deleteUser(objRepo), ok);

  app.get(
    "/reservation",
    getAllReservation(objRepo),
    setVariables,
    render("reservation/index")
  );
  app.post(
    "/reservation/:id",
    getReservation(objRepo),
    updateReservation(objRepo),
    function(req,res,next){ return res.redirect(`/reservation/${res.locals.reservation._id}`); }
  );
  app.get(
    "/reservation/:id",
    getReservation(objRepo),
    setVariables,
    render("reservation/detail")
  );
  app.get(
    "/reservation/:id/delete",
    getReservation(objRepo),
    deleteReservation(objRepo),
    setVariables,
    redirect("/reservation")
  );

  app.post(
    "/reservation/:id/create",
    saveReservation(objRepo),
    setVariables,
    redirect("/reservation")
  );

  app.get("/reservation/:id/new", getBed(objRepo),getAllBed(objRepo), getAllUser(objRepo), setVariables, render("reservation/new"),ok);

};
