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
// creating class
var User = /** @class */ (function () {
    function User(id, userName, passWord) {
        (this.id = id), (this.userName = userName), (this.passWord = passWord);
    }
    User.prototype.getInfo = function () {
        console.log(this.id);
    };
    return User;
}());
var user1 = new User(23, "dasad", "eqeqwe");
console.log(user1);
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(id, userName, adminPass, passWord) {
        var _this = _super.call(this, id, userName, passWord) || this;
        _this.adminPass = adminPass;
        return _this;
    }
    return Admin;
}(User));
var admin1 = new Admin(12, "121212112", "dsadasdads", "Dasasdad");
console.log(admin1);
admin1.getInfo();
user1.getInfo();
//access modifiers
var Counter = /** @class */ (function () {
    function Counter(count) {
        this.count = count;
    }
    Counter.prototype.getCount = function () {
        console.log(this.count);
    };
    return Counter;
}());
var count1 = new Counter(2);
// count1.count = 3;
console.log(count1);
var Multiplier = /** @class */ (function () {
    function Multiplier(count) {
        this._count = count;
    }
    Object.defineProperty(Multiplier.prototype, "count", {
        get: function () {
            return this._count;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Multiplier.prototype, "countSet", {
        set: function (finCount) {
            this._count = finCount;
        },
        enumerable: false,
        configurable: true
    });
    Multiplier.prototype.getCount = function () {
        console.log(this.count);
    };
    return Multiplier;
}());
var multi1 = new Multiplier(23);
multi1.getCount();
var Increaser = /** @class */ (function () {
    function Increaser(first, last) {
        this.first = first;
        this.last = last;
        Increaser.classCount++;
    }
    Increaser.classCount = 0;
    return Increaser;
}());
console.log(Increaser.classCount);
var data1 = new Increaser("dassad", 23);
console.log(Increaser.classCount);
var data2 = new Increaser("dassaddaadas", 3);
console.log(Increaser.classCount);
var data3 = new Increaser("asdkal;kds", 54);
console.log(Increaser.classCount);
