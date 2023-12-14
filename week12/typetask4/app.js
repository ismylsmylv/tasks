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
        if (GPA >= 0 && GPA <= 100) {
            _this._GPA = GPA;
        }
        else {
            _this._GPA = 0;
        }
        _this.groupName = groupName;
        _this.hobbies = hobbies;
        return _this;
    }
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
var stud1 = new Student("Ismayil", "Ismayilov", 20, "dsf", ["asdasdasd"], 70);
var work1 = new Employee("emp", "loyee", 23, 3333, ["none"], Position.ceo);
console.log(stud1);
console.log(stud1.hasPassed());
var body = document.querySelector("body");
var selector = document.getElementById("selector");
var additions = document.querySelector(".additions");
console.log(selector.value);
selector.addEventListener("change", function () {
    if (selector.value == "student") {
        additions.innerHTML = "\n<input type=\"text\" name=\"\" id=\"groupName\" placeholder=\"groupName\">\n<input type=\"number\" name=\"\" id=\"GPA\" placeholder=\"GPA\">\n<input type=\"text\" name=\"\" id=\"hobbies\" placeholder=\"hobbies\">\n";
    }
    else if (selector.value == "employee") {
        additions.innerHTML = "\n    <input type=\"number\" name=\"\" id=\"salary\" placeholder=\"salary\">\n    <input type=\"text\" name=\"\" id=\"skills\" placeholder=\"skills\">\n    <input type=\"text\" name=\"\" id=\"position\" placeholder=\"position\">\n    ";
    }
});
var nameInp = document.querySelector("#nameInp");
var surname = document.querySelector("#surname");
var age = document.querySelector("#age");
var groupName = document.querySelector("#groupName");
var GPA = document.querySelector("#GPA");
var hobbies = document.querySelector("#hobbies");
var salary = document.querySelector("#salary");
var skills = document.querySelector("#skills");
var position = document.querySelector("#position");
var addedName;
var addedSurname;
var addedAge;
var addedGroupName;
var addedGPA;
var addedHobbies;
var addedSalary;
var addedSkills;
var addedPosition;
nameInp === null || nameInp === void 0 ? void 0 : nameInp.addEventListener("change", function () {
    console.log(nameInp === null || nameInp === void 0 ? void 0 : nameInp.value);
    addedName = nameInp === null || nameInp === void 0 ? void 0 : nameInp.value;
});
surname === null || surname === void 0 ? void 0 : surname.addEventListener("change", function () {
    console.log(surname === null || surname === void 0 ? void 0 : surname.value);
    addedSurname = surname === null || surname === void 0 ? void 0 : surname.value;
});
age === null || age === void 0 ? void 0 : age.addEventListener("change", function () {
    console.log(age === null || age === void 0 ? void 0 : age.value);
    addedAge = age === null || age === void 0 ? void 0 : age.value;
});
groupName === null || groupName === void 0 ? void 0 : groupName.addEventListener("change", function () {
    console.log(age === null || age === void 0 ? void 0 : age.value);
    addedGroupName = groupName === null || groupName === void 0 ? void 0 : groupName.value;
});
GPA === null || GPA === void 0 ? void 0 : GPA.addEventListener("change", function () {
    console.log(age === null || age === void 0 ? void 0 : age.value);
    addedGPA = GPA === null || GPA === void 0 ? void 0 : GPA.value;
});
hobbies === null || hobbies === void 0 ? void 0 : hobbies.addEventListener("change", function () {
    console.log(age === null || age === void 0 ? void 0 : age.value);
    addedHobbies = hobbies === null || hobbies === void 0 ? void 0 : hobbies.value;
});
salary === null || salary === void 0 ? void 0 : salary.addEventListener("change", function () {
    console.log(age === null || age === void 0 ? void 0 : age.value);
    addedSalary = salary === null || salary === void 0 ? void 0 : salary.value;
});
skills === null || skills === void 0 ? void 0 : skills.addEventListener("change", function () {
    console.log(age === null || age === void 0 ? void 0 : age.value);
    addedSkills = nameInp === null || nameInp === void 0 ? void 0 : nameInp.value;
});
position === null || position === void 0 ? void 0 : position.addEventListener("change", function () {
    console.log(age === null || age === void 0 ? void 0 : age.value);
    addedPosition = nameInp === null || nameInp === void 0 ? void 0 : nameInp.value;
});
var submit = document.querySelector(".submit");
submit.addEventListener("submit", function (e) {
    e.preventDefault();
    if (selector.value == "student") {
        var student = new Student(addedName, addedSurname, addedAge, addedGroupName, addedHobbies, addedGPA);
        console.log(student);
        body === null || body === void 0 ? void 0 : body.innerHTML += "".concat(addedName, " ").concat(addedSurname, " ").concat(addedAge, " ").concat(addedGroupName, " ").concat(addedHobbies, " ").concat(addedGPA);
    }
    else {
        var employee = new Employee(addedName, addedSurname, addedAge, addedSalary, addedSkills, addedPosition);
        console.log(employee);
        body === null || body === void 0 ? void 0 : body.innerHTML += "".concat(addedName, " ").concat(addedSurname, " ").concat(addedAge, " ").concat(addedGroupName, " ").concat(addedHobbies, " ").concat(addedGPA);
    }
});
