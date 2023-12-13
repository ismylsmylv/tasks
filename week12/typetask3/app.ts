type FuelCapacity = 30 | 40 | 50 | 70 | 100;

interface IVehicle<T extends engine> {
  brandName: string;
  modelName: string;
  year: number;
  fuelCapacity: FuelCapacity;
  currentFuel: number;
  fuelFor1Km: number;
  engine: T;
  milage: number;
  vehicleType: VehicleType;
  getInfo(): void;
  drive(howMany: number): number;
}

enum VehicleType {
  car,
  motorcycle,
}
enum engine {
  dohc = "doch",
  turbo = "turbo",
}

class Car implements IVehicle<engine.dohc> {
  brandName: string;
  modelName: string;
  year: number;
  fuelCapacity: FuelCapacity;
  currentFuel: number;
  fuelFor1Km: number;
  engine: engine.dohc;
  milage: number;
  vehicleType: VehicleType;

  //   implement olduğuna görə hamısı göndərilir
  constructor(
    brandName: string,
    modelName: string,
    year: number,
    fuelCapacity: FuelCapacity,
    currentFuel: number,
    fuelFor1Km: number,
    engine: engine.dohc,
    milage: number,
    vehicleType: VehicleType
  ) {
    this.brandName = brandName;
    this.modelName = modelName;
    this.year = year;
    this.fuelCapacity = fuelCapacity;
    this.currentFuel = currentFuel;
    this.fuelFor1Km = fuelFor1Km;
    this.engine = engine;
    this.milage = milage;
    this.vehicleType = vehicleType;
  }

  getInfo(): string {
    return `${this.modelName} from ${this.brandName} at year of ${this.year}`;
  }
  drive(howMany: number): number {
    let drivable = this.currentFuel / this.fuelFor1Km;
    if (howMany > drivable) {
      return this.currentFuel;
    } else {
      this.milage = this.milage + howMany;
      this.currentFuel = this.currentFuel - howMany * this.fuelFor1Km;
      return this.currentFuel;
    }
  }
}

class Motorcycle implements IVehicle<engine.turbo> {
  brandName: string;
  modelName: string;
  year: number;
  fuelCapacity: FuelCapacity;
  currentFuel: number;
  fuelFor1Km: number;
  engine: engine.turbo;
  milage: number;
  vehicleType: VehicleType;

  //   implement olduğuna görə hamısı göndərilir
  constructor(
    brandName: string,
    modelName: string,
    year: number,
    fuelCapacity: FuelCapacity,
    currentFuel: number,
    fuelFor1Km: number,
    engine: engine.turbo,
    milage: number,
    vehicleType: VehicleType
  ) {
    this.brandName = brandName;
    this.modelName = modelName;
    this.year = year;
    this.fuelCapacity = fuelCapacity;
    this.currentFuel = currentFuel;
    this.fuelFor1Km = fuelFor1Km;
    this.engine = engine;
    this.milage = milage;
    this.vehicleType = vehicleType;
  }

  getInfo(): void {
    console.log(
      `${this.brandName} from ${this.modelName} made in year of ${this.year}`
    );
  }
  drive(howMany: number): number {
    let drivable = this.currentFuel / this.fuelFor1Km;
    if (howMany > drivable) {
      return this.currentFuel;
    } else {
      this.milage = this.milage + howMany;
      this.currentFuel = this.currentFuel - howMany * this.fuelFor1Km;
      return this.currentFuel;
    }
  }
}

const car1 = new Car(
  "Hyundai",
  "Sonata",
  2000,
  100,
  90,
  10,
  engine.dohc,
  2332,
  VehicleType.car
);

// getInfo();
console.log(car1);
console.log(car1.drive(5));
console.log(car1);

const motorcycle = new Motorcycle(
  "Vespa",
  "i100",
  2020,
  100,
  999,
  1,
  engine.turbo,
  0,
  VehicleType.motorcycle
);
console.log(motorcycle);
