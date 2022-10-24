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
    if (this.registeredUsers.includes(user.username)) {
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

  logIn (username, password) {
    if (!(username in this.registeredUsers) || (User.password !== password)) {
      throw new Error ("Username or password is incorrect.");
    }
    else {
      this.registeredUsers.username.loggedIn = true;
      console.log("Logged in successfully!");
    }
  }

  addScooter (location, scooter) {
    scooter.station = location;
    // Add the scooter argument to the stations
    this.stations[scooter.station] = scooter.serial;
  }

  removeScooter (scooterToRemove) {
    let indexSerialInStations = this.stations.indexOf(scooterToRemove.serial);
    if (index !== -1) {
      this.stations.splice(index, 1);
    }
    console.log("Scooter successfully removed!");

    // Throw an error if the scooter serial number is not
    // located - this means that the scooterToRemove object
    // has not previously been added.

    serialLocated = false;

    for (let i = 0; i < 5; i++) {
      if (this.stations[i].includes(scooterToRemove.serial)) {
        serialLocated = true;
      }
    }

    if (serialLocated === false) {
      throw new Error ("scooterToRemove object has not been previously added!");
    }
  }

  // A Static property called scooterSessions
  // which should hold an empty array
  static scooterSessions = [];

}

module.exports = ScooterApp
