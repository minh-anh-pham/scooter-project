class User {
  // User code here
  constructor (username, password, age) {
    if (age < 18) {
      throw new Error ("You must be 18 years old or older to ride a scooter");
    }
    this.username = username;
    this.password = password;
    this.age = age;
  }ulhueibghkrvjidfhrhigllcftudldfg
}

module.exports = User;
