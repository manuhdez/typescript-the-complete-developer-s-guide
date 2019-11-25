class Vehicle {
  constructor(private color: string) {}

  public honk(): void {
    console.log('beep');
  }

  public getColor(): void {
    console.log(this.color);
  }
}

const vehicle = new Vehicle('orange');
vehicle.honk();
vehicle.getColor();

console.log('==================');

class Car extends Vehicle {
  constructor(color: string, private wheels: number) {
    super(color);
  }

  private drive(): void {
    console.log('meeeh');
  }

  public startDriving(): void {
    this.drive();
  }
}

const car = new Car('black', 4);
car.startDriving();
