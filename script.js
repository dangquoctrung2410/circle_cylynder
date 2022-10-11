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
var Circle = /** @class */ (function () {
    function Circle(radius, color) {
        this.radius = radius;
        this.color = color;
    }
    Circle.prototype.getRadius = function () {
        return this.radius;
    };
    Circle.prototype.setRadius = function (radius) {
        this.radius = radius;
    };
    Circle.prototype.getColor = function () {
        return this.color;
    };
    Circle.prototype.setColor = function (color) {
        this.color = color;
    };
    Circle.prototype.getArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    return Circle;
}());
var Cylinder = /** @class */ (function (_super) {
    __extends(Cylinder, _super);
    function Cylinder(radius, color, height) {
        var _this = _super.call(this, radius, color) || this;
        _this.height = height;
        return _this;
    }
    Cylinder.prototype.getHeight = function () {
        return this.height;
    };
    Cylinder.prototype.setHeight = function (height) {
        this.height = height;
    };
    Cylinder.prototype.getArea = function () {
        return _super.prototype.getArea.call(this) * this.height;
    };
    Cylinder.prototype.getVolume = function () {
        return this.height * _super.prototype.getArea.call(this);
    };
    return Cylinder;
}(Circle));
var circle = new Circle(8, "black");
console.log(circle.getArea());
console.log(circle);
var cylinder = new Cylinder(4, "pink", 7);
console.log(cylinder.getArea());
console.log(cylinder.getVolume());
console.log(cylinder);
