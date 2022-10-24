const User = require('./User')
const Scooter = require('./Scooter')

let stations = {
  Manhattan: [],
  Brooklyn: [],
  Queens: [],
  Bronx: [],
  StatenIsland: []
};

class ScooterApp {
  // ScooterApp code here
  constructor () {
    this.stations = stations;
    this.registeredUsers = {};

    // Each time a ScooterApp object is created/
    // instantiated, it should automatically be
    // added to the scooterSessions array
    ScooterApp.scooterSessions.push(this);
  }

  register (user) {
    if (registeredUsers.includes(user)) {
      console.log("User is already registered!");
    }
    else {
      // user is not already registered
      if (user.age <= 17) {
        console.log("User is too young to register!");
      }
      else {
        // user is not already registered AND is of age
        registeredUsers[user.username] = {"password": user.password, "age": user.age, "loggedIn": false, "accountChange": 0};
        // message to user
        console.log("User has been registered!");
      }
    }
  }



  // A Static property called scooterSessions
  // which should hold an empty array
  static scooterSessions = [];

}

module.exports = ScooterApp
