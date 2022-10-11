export class Circle {
    radius: number;
    color: string;
    constructor(radius: number, color: string) {
        this.radius = radius; 
        this.color = color;
    }
    getRadius(): number {
        return this.radius;
    }
    setRadius(radius: number) {
        this.radius = radius;
    }
    getColor(): string {
        return this.color;
    }
    setColor(color: string) {
        this.color = color;
    }
    getArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }
}
let circle = new Circle(8,"black")
console.log(circle.getArea())
console.log(circle)
