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
// 1) Tuple tipinə aid bir nümunə yazın 2
var tupleArr;
tupleArr = ["asfdf", 234];
// 2) Enum tipinə aid bir nümunə yazın 2
var Position;
(function (Position) {
    Position["ceo"] = "ceo";
    Position["it"] = "it";
    Position["h1"] = "h1";
})(Position || (Position = {}));
// 3) Union type ilə bağlı bir nümunə yazın 2
var data;
// 4) Type Aliases ilə bağlı bir nümunə yazın 2
// as
// 5) Parametr tipləri qeyd olunan optional parametrli void function nümunəsi yazın 5
function getDatas(datas, id) {
    console.log(datas);
}
// 6) Parametr tipləri qeyd olunan default parametrli geriyə boolean dəyər qaytaran function nümunəsi yazın 5
function getUsers(datas, id) {
    if (id === void 0) { id = 1; }
    return true;
}
// 7) ad , soyadı olan tələbə class-ı yaradın 5
// 8) private keyi olsun və set get methodlarını yazın 10
// 9) protected, static, readonly, keyləri olsun və müraciət edilsin 10
var Telebe = /** @class */ (function () {
    function Telebe(ad, soyad, key, username, history) {
        this.ad = ad;
        this.soyad = soyad;
        this.username = username;
        this._key = key;
        this.history = history;
    }
    Object.defineProperty(Telebe.prototype, "Key", {
        get: function () {
            return this._key;
        },
        set: function (key) {
            key = this._key;
        },
        enumerable: false,
        configurable: true
    });
    Telebe.Order = 0;
    return Telebe;
}());
var telebe1 = new Telebe("john", "doe", 23, "userrr", ["none"]);
console.log(telebe1);
console.log(telebe1.history);
// 10) abstract klass nümunəsi yazın 10
var absClass = /** @class */ (function () {
    function absClass(data) {
        this.data = data;
    }
    return absClass;
}());
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(data, pass) {
        var _this = _super.call(this, data) || this;
        _this.pass = pass;
        return _this;
    }
    return User;
}(absClass));
// 15) Generic function nümunəsi göstərin 10
function generic(data) {
    console.log(data);
}
