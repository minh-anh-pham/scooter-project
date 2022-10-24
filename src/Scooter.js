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

  rent() {
    if (this.isBroken === false && this.charge > 20) {
      this.docked = false;
      console.log("Enjoy the ride!");
    }
    else if (this.charge <= 20) {
      throw new Error ("Scooter low on battery, please charge.");
    }
    else {
      throw new Error ("Scooter is broken, please send a repair request.");
    }
  }

  dock (station) {
    if (station === undefined) {
      throw new Error ("Docking station required!");
    }
    else {
      this.station = station;
      this.docked = true;
      this.user = "";
    }
  }

  recharge() {
    async function charge() {
      console.log("Starting charge");

      // wait 2 seconds
      await new Promise(resolve => setTimeout(resolve, 2000));

      this.charge = 100;

      console.log("Charging complete");
    }

    charge();

    this.charge = 100;
  }

  requestRepair() {
    async function repair() {
      console.log("Requesting repair");

      // wait 2 seconds
      await new Promise(resolve => setTimeout(resolve, 2000));

      this.charge = 100;

      console.log("Repair complete");
    }

    repair();

    this.isBroken = false;
  }

}

module.exports = Scooter
