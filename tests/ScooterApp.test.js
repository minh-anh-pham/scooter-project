const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

// ScooterApp tests here
describe('scooter app class', () => {
    const testScooterApp = new ScooterApp ();
    const testScooter = new Scooter("Queens", "map");

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
describe('test register method', () => {
    const testScooterApp = new ScooterApp ();
    const testUser = new User ("user1", "1234", 20);

    test("user already registered", () => {
        testScooterApp.registeredUsers = {"user1": {"password": "1234", "age": 20, "loggedIn": false, "accountChange": 0}};
        expect(testScooterApp.register(testUser)).toHaveBeenCalledWith("User is already registered!");
    })

    test("too young", () => {
        testUser.age = 10;
        expect(testScooterApp.register(testUser)).toHaveBeenCalledWith("User is too young to register!");
    })

    test("can register", () => {
        testScooterApp.register(testUser);
        expect(testScooterApp.register(testUser)).toHaveBeenCalledWith("User has been registered!");
        expect(testScooterApp.registeredUsers)
        registeredUsers["map"] = {"password": "1234", "age": 20, "loggedIn": false, "accountChange": 0};
    })
  })

// log in
describe('test logIn method', () => {
    const testScooterApp = new ScooterApp ();
    const testUser = new User ("user1", "1234", 20);

    test("account details are wrong", () => {
        expect(testScooterApp.logIn("user2", "1234")).toThrow("Username or password is incorrect.");
    })

    test("account details are correct", () => {
        expect(testScooterApp.logIn("user1", "1234")).toHaveBeenCalledWith("Logged in successfully!");
    })
})

// add scooter
describe('test addScooter method', () => {
    const testScooterApp = new ScooterApp ();

    test("change location and station", () => {
        const testScooter = new Scooter ("Queens", "map");
        testScooterApp.addScooter("Manhattan", testScooter);

        expect(testScooter.station).toEqual("Manhattan");
        expect(testScooterApp.stations["Manhattan"]).toContain(testScooter.serial);
    })
})

// remove scooter
describe('test removeScooter method', () => {
    const testScooterApp = new ScooterApp ();

    test("removed successfully", () => {
        const testScooter = new Scooter ("Queens", "map");
        testScooterApp.stations["Queens"].push(testScooter.serial);

        expect(testScooterApp.removeScooter(testScooter.serial)).toHaveBeenCalledWith("Scooter successfully removed!");

        testScooterApp.removeScooter(testScooter.serial)
        expect(testScooterApp.stations["Queens"]).not.toContain(testScooter.serial);
    })

    test("scooter in question hasn't been added", () => {
        const testScooter = new Scooter ("Queens", "map");

        expect(testScooterApp.removeScooter(testScooter.serial)).toThrow("Scooter has not been previously added!");
    })
})
