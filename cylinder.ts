import{Circle}from './Circle';

class Cylinder extends Circle {
    height: number;
    constructor(radius: number, color: string, height: number) {
        super(radius, color);
        this.height = height;
    }
    getHeight(): number {
        return this.height;
    }
    setHeight(height: number): void {
        this.height = height;
    }
    getArea(): number {
        return super.getArea() * this.height;
    }
    getVolume(): number {
        return this. height * super.getArea();
    }
}
let cylinder = new  Cylinder (4,"pink", 7)
console.log (cylinder.getArea());
console.log(cylinder.getVolume());
console.log(cylinder);