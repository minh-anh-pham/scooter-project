const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

// ScooterApp tests here
describe('scooter app class', () => {
    const testScooterApp = new ScooterApp ();

    test('has correct stations', () => {
        expect(testScooterApp.stations).toEqual({
            Manhattan: [],
            Brooklyn: [],
            Queens: [],
            Bronx: [],
            StatenIsland: []
          });
    })

    test('has correct registeredUsers list', () => {
        expect(testScooter.registeredUsers).toEqual({});
      })

})

// register user

// log in

// add scooter

// remove scooter
