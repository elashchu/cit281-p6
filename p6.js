/*
    CIT 281 Project 6
    Name: Emily Lashchuk
*/

class Shape {
  constructor(sides = []) {
    this.sides = sides;
  }

  perimeter = () => {
    return this.sides.length != 0 ? this.sides.reduce(function (last, next) {return last + next; }): 0;};}
console.log(new Shape([5, 10]).perimeter());  // 15
console.log(new Shape([1, 2, 3, 4, 5]).perimeter()); // 15
console.log(new Shape().perimeter()); // 0

class Rectangle extends Shape {
  constructor(length = 0, width = 0) {
    super([length, width, length, width]);
    this.length = length;
    this.width = width;
  }
  area = () => {
    if (this.length.length != 0 && this.width.length != 0) {
      function a(l, w) {
        return l * w;
      }
      return a(this.length, this.width);
    }
  };
}
console.log(new Rectangle(4, 4).perimeter());  // 16
console.log(new Rectangle(4, 4).area());  // 16
console.log(new Rectangle(5, 5).perimeter()); // 20
console.log(new Rectangle(5, 5).area()); // 25
console.log(new Rectangle().perimeter()); // 0
console.log(new Rectangle().area()); // 0

class Triangle extends Shape {
  constructor(sideA = 0, sideB = 0, sideC = 0) {
    super([sideA, sideB, sideC]);
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  area = () => {
    if (
      this.sideA.length != 0 &&
      this.sideB.length != 0 &&
      this.sideC.length != 0
    ) {
      function at(a, b, c) {
        let s = (a + b + c) / 2;
        let ast = Math.sqrt(s * (s - a) * (s - b) * (s - c));
        return ast;
      }
      return at(this.sideA, this.sideB, this.sideC);
    }
  };
}
console.log(new Triangle(3, 4, 5).perimeter());  // 12
console.log(new Triangle(3, 4, 5).area());  // 6
console.log(new Triangle().perimeter()); // 0
console.log(new Triangle().area()); // 0

// Array of sides arrays
const data = [[3, 4], [5, 5], [3, 4, 5], [10], []];

for (const aShape of data) {
    
    const asd = aShape.some((val, i) => aShape.indexOf(val) !== i)

    if (asd === false && aShape.length === 2){
        let p1 = aShape[0];
        let p2 = aShape[1];
        console.log(`Rectangle with sides ${aShape.toString()} has perimeter of ${new Rectangle(p1,p2).perimeter()} and area of ${new Rectangle(p1,p2).area()}`);
    }

    if (asd === true && aShape.length === 2) {
        let p1 = aShape[0];
        console.log(`Square with sides ${aShape.toString()} has perimeter of ${new Rectangle(p1,p1).perimeter()} and area of ${new Rectangle(p1,p1).area()}`);
    }

    if (aShape.length === 3) {
        let p1 = aShape[0];
        let p2 = aShape[1];
        let p3 = aShape[2];
        console.log(`Triangle with sides ${aShape.toString()} has perimeter of ${new Triangle(p1,p2,p3).perimeter()} and area of ${new Triangle(p1, p2, p3).area()}`);
    } else if (aShape.length === 1) {
        console.log(`Shape with ${aShape.length} side unsupported`);
    } else if (aShape.length <= 0 || aShape.length >= 4) {
        console.log(`Shape with ${aShape.length} sides unsupported`);
    }
}   



[]