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
var Human = /** @class */ (function () {
    function Human(name, surname, age) {
        this._name = name;
        this._surname = surname;
        this.age = age;
    }
    Object.defineProperty(Human.prototype, "getName", {
        get: function () {
            return console.log(this._name);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Human.prototype, "getSurname", {
        get: function () {
            return console.log(this._surname);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Human.prototype, "getFullName", {
        get: function () {
            return console.log("".concat(this._name, " ").concat(this._surname));
        },
        enumerable: false,
        configurable: true
    });
    Human.prototype.getInfo = function () {
        console.log("".concat(this._name, " ").concat(this._surname, " is ").concat(this.age, " old"));
    };
    return Human;
}());
var Position;
(function (Position) {
    Position["worker"] = "worker";
    Position["ceo"] = "ceo";
    Position["hr"] = "hr";
    Position["it"] = "it";
})(Position || (Position = {}));
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, surname, age, salary, skills, position) {
        var _this = _super.call(this, name, surname, age) || this;
        _this.position = position;
        _this.salary = salary;
        _this.skills = skills;
        return _this;
    }
    return Employee;
}(Human));
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, surname, age, groupName, hobbies, GPA) {
        var _this = _super.call(this, name, surname, age) || this;
        _this._GPA = GPA;
        _this.groupName = groupName;
        _this.hobbies = hobbies;
        return _this;
    }
    Object.defineProperty(Student.prototype, "checkGPA", {
        get: function () {
            return this._GPA;
        },
        set: function (checkedGPA) {
            if (checkedGPA > 0 && checkedGPA < 100) {
                this._GPA = checkedGPA;
                console.log(checkedGPA);
            }
            else {
                // console.log("checkedGPAaaa");
                // throw new Error("GPA should be in range of (1, 100)");
                this._GPA = 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.hasPassed = function () {
        if (this._GPA < 51) {
            return false;
        }
        else {
            return true;
        }
    };
    return Student;
}(Human));
var stud1 = new Student("aaaaa", "AAaaa", 23, "dsf", ["asdasdasd"], 2115);
var work1 = new Employee("emp", "loyee", 23, 3333, ["none"], Position.ceo);
console.log(stud1);
console.log(stud1.hasPassed());
