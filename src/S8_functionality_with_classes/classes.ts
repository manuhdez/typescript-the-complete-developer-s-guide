class Vehicle {
  public honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle();
vehicle.honk();

class Car extends Vehicle {
  private drive(): void {
    console.log('meeeh');
  }

  public startDriving(): void {
    this.drive();
  }
}

const car = new Car();
car.startDriving();
