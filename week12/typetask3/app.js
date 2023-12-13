var VehicleType;
(function (VehicleType) {
    VehicleType[VehicleType["car"] = 0] = "car";
    VehicleType[VehicleType["motorcycle"] = 1] = "motorcycle";
})(VehicleType || (VehicleType = {}));
var engine;
(function (engine) {
    engine["dohc"] = "doch";
    engine["turbo"] = "turbo";
})(engine || (engine = {}));
var Car = /** @class */ (function () {
    //   implement olduğuna görə hamısı göndərilir
    function Car(brandName, modelName, year, fuelCapacity, currentFuel, fuelFor1Km, engine, milage, vehicleType) {
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
    Car.prototype.getInfo = function () {
        return "".concat(this.modelName, " from ").concat(this.brandName, " at year of ").concat(this.year);
    };
    Car.prototype.drive = function (howMany) {
        var drivable = this.currentFuel / this.fuelFor1Km;
        if (howMany > drivable) {
            return this.currentFuel;
        }
        else {
            this.milage = this.milage + howMany;
            this.currentFuel = this.currentFuel - howMany * this.fuelFor1Km;
            return this.currentFuel;
        }
    };
    return Car;
}());
var Motorcycle = /** @class */ (function () {
    //   implement olduğuna görə hamısı göndərilir
    function Motorcycle(brandName, modelName, year, fuelCapacity, currentFuel, fuelFor1Km, engine, milage, vehicleType) {
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
    Motorcycle.prototype.getInfo = function () {
        console.log("".concat(this.brandName, " from ").concat(this.modelName, " made in year of ").concat(this.year));
    };
    Motorcycle.prototype.drive = function (howMany) {
        var drivable = this.currentFuel / this.fuelFor1Km;
        if (howMany > drivable) {
            return this.currentFuel;
        }
        else {
            this.milage = this.milage + howMany;
            this.currentFuel = this.currentFuel - howMany * this.fuelFor1Km;
            return this.currentFuel;
        }
    };
    return Motorcycle;
}());
var car1 = new Car("Hyundai", "Sonata", 2000, 100, 90, 10, engine.dohc, 2332, VehicleType.car);
// getInfo();
console.log(car1);
console.log(car1.drive(5));
console.log(car1);
var motorcycle = new Motorcycle("Vespa", "i100", 2020, 100, 999, 1, engine.turbo, 0, VehicleType.motorcycle);
console.log(motorcycle);
