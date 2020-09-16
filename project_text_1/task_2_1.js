"use strict";

class Point{
    init(x, y){
        this.x = x;
        this.y = y;
    }
    printPoint(){
        console.log("Point have coordinates: (" + this.x + ":" + this.y + ")");
    }
}

class Section{
    constructor(x1, y1, x2, y2){
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.printSectionPoints = new Point;
    }

    getLength(){
        let len = Math.sqrt((this.x1 - this.x2)**2 + (this.y1 - this.y2)**2);
        return len;
    }

    printPoints(){
        this.printSectionPoints.init(this.x1, this.y1);
        this.printSectionPoints.printPoint();
        this.printSectionPoints.init(this.x2, this.y2);
        this.printSectionPoints.printPoint();
    }

}

let a = new Section(0,0,10,0);
a.printPoints();
console.log(a.getLength());
