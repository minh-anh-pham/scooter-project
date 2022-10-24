const User = require('../src/User')

// User tests here
describe('scooter app class', () => {
    const testUser = new User ("user1", "1234", 20);

// test username
    test('has correct username', () => {
        expect(testUser.username).toEqual("user1");
    })

// test password
    test('has correct password', () => {
        expect(testUser.password).toEqual("1234");
    })

// test age
    test('has correct age', () => {
        expect(testUser.age).toEqual(20);
    })

})
