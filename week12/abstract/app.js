var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var livePlace;
(function (livePlace) {
    livePlace["river"] = "river";
    livePlace["ocean"] = "ocean";
    livePlace["sea"] = "sea";
})(livePlace || (livePlace = {}));
var Animal = /** @class */ (function () {
    function Animal(name, age) {
        (this.name = name), (this.age = age);
    }
    Animal.prototype.getInfo = function () {
        console.log(this.name, this.age);
    };
    return Animal;
}());
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird(name, age, wingColor) {
        var _this = _super.call(this, name, age) || this;
        _this.wingColor = wingColor;
        return _this;
    }
    Bird.prototype.fly = function () {
        return true;
    };
    return Bird;
}(Animal));
var Fish = /** @class */ (function (_super) {
    __extends(Fish, _super);
    function Fish(name, age, kill) {
        var _this = _super.call(this, name, age) || this;
        _this.kill = kill;
        return _this;
    }
    Fish.prototype.swim = function () {
        console.log("".concat(this.name, " is swimming"));
    };
    Fish.prototype.fly = function () {
        return true;
    };
    return Fish;
}(Animal));
var bird1 = new Bird("flamingo", 12, "pink");
var fish1 = new Fish("salmon", 23, "adad");
console.log(fish1.kill);
console.log(bird1);
bird1.getInfo();
fish1.swim();
