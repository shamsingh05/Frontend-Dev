class User {
  constructor(name, rating) {
    this.name = name;
    this.rating = rating;
  }
}

class Driver extends User {
  constructor(name, rating, vehicle) {
    super(name, rating);
    this.vehicle = vehicle;
  }
}

class Trip {
  constructor(fromLocation, toLocation, distance) {
    this.fromLocation = fromLocation;
    this.toLocation = toLocation;
    this.distance = distance;
  }

  calculateFare() {
    if (this.distance <= 0 || !this.distance) {
      throw new Error("Invalid distance");
    }
    return this.distance * 10;
  }
}

try {
  const trip = new Trip("Delhi", "Noida", 15);
  console.log("Fare:", trip.calculateFare());
} catch (err) {
  console.log(err.message);
}
