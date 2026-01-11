// Learning TypeScript. Classes & Interfaces. Implement interface methods
// Overview
// One of TypeScript’s core principles is that type-checking focuses on 
// the shape that values have. This is sometimes called “duck typing” or 
// “structural subtyping”. In TypeScript, interfaces fill the role of naming 
// these types, and are a powerful way of defining contracts within your 
// code as well as contracts with code outside of your project.

// Task
// You are given an interface IGeometricFigure:

// interface IGeometricFigure {
//   /** Calculates area of the figure */
//     area: () => number;
//   /** Calculates perimeter of the figure */
//     perimeter: () => number;
// }
// Your task is to implement classes Square and Circle:

// export class Square implements IGeometricFigure {
//   // TODO:
// }

// export class Circle implements IGeometricFigure {
//   // TODO:
// }

interface IGeometricFigure {
    area: () => number;
    perimeter: () => number;
}

export class Square implements IGeometricFigure {
  // TODO:
    constructor(
        public side: number
    ){}
    area(){
        return this.side * this.side;
    }
    perimeter(){
        return 4 * this.side;
    }
}

export class Circle implements IGeometricFigure {
  // TODO:
    readonly pi: number = 3.141592653589793;
    constructor(
        public radius: number
    ){}
    area(){
        return this.pi * this.radius * this.radius;
    } 
    perimeter(){
        return 2*this.pi*this.radius;
    }
}
