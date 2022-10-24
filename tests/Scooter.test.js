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
describe('scooter methods', () => {
  // tests here!
  const testScooter = new Scooter ("Queens", "map");

  //rent method
  rent(testScooter);


  //dock method

  //requestRepair method

  //charge method

})
