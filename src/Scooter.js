class Scooter{
  // scooter code here
  constructor (station, user) {
    this.station = station;
    this.user = user;
    this.serial = Math.floor(Math.random() * 1001);
    this.charge = Math.floor(Math.random() * 101);
    this.isBroken = false;
    this.docked = true;
  }
}


module.exports = Scooter
