const Scooter = require('../src/Scooter')
const User = require('../src/User')

//typeof scooter === object
describe('scooter class', () => {
  const testScooter = new Scooter ("Queens", "map");

  test('has correct station', () => {
    expect(testScooter.station).toEqual("Queens");
  })

  test('has correct user', () => {
    expect(testScooter.user).toEqual("map");
  })

  test('has a serial', () => {
    expect(testScooter.serial).toBeGreaterThanOrEqual(1);
    expect(testScooter.serial).toBeLessThanOrEqual(1000);
  })

  test('has a charge', () => {
    expect(testScooter.charge).toBeGreaterThanOrEqual(1);
    expect(testScooter.charge).toBeLessThanOrEqual(100);
  })

  test('has isBroken value', () => {
    expect(testScooter.isBroken).toBeFalsy();
  })

  test('has docked value', () => {
    expect(testScooter.docked).toBeTruthy();
  })
})

//Method tests
  // tests here!

  //rent method
  describe('test rent method', () => {
    const testScooter = new Scooter ("Queens", "map");

    test("not broken and fully charged", () => {
      testScooter.charge = 100;
      expect(rent()).toHaveBeenCalledWith("Enjoy the ride!");
      expect(testScooter.docked === false);
    })

    test("not fully charged", () => {
      testScooter.charge = 10;
      expect(rent()).toThrow("Scooter low on battery, please charge.");
    })

    test("broken", () => {
      testScooter.isBroken = true;
      expect(rent()).toThrow("Scooter is broken, please send a repair request.");
    })
  })

  //dock method

  describe("test dock method", () => {
    const testScooter = new Scooter("Queens", "map");

    test("can be docked", () => {
      dock("Manhattan");
      expect(testScooter.station).toEqual("Manhattan");
      expect(testScooter.docked).toEqual(true);
      expect(testScooter.user).toEqual("");
    })

    test("can't be docked", () => {
      dock(undefined);
      expect(rent()).toThrow("Docking station required!");
    })
  })

  //requestRepair method
  describe("test requestRepair method", () => {
    const testScooter = new Scooter("Queens", "map");

    test("repaired", () => {
      requestRepair();
      expect(testScooter.isBroken).toEqual(false);
    })
  })

  //charge method
  describe("test recharge method", () => {
    const testScooter = new Scooter("Queens", "map");

    test("charged", () => {
      recharge();
      expect(testScooter.charge).toEqual(100);
    })
  })
