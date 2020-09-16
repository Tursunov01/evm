"use strict"

class Triangle{
    constructor(a,b,c){
        this.a = a;
        this.b = b;
        this.c = c;
    }

    checkTriangle(){
        if (this.a + this.b > this.c && this.a + this.c > this.b && this.b + this.c > this.a){
            console.log("Triangle exist");
        }
        else
            console.log("Triangle doesn`t exist");
    }

    getPerimetr(){
        let p = this.a + this.b + this.c;
        return p;
    }

    getSquare(){
        let p = this.getPerimetr() / 2;
        let s = Math.sqrt(p*(p-this.a)*(p-this.b)*(p-this.c));
        return s;
    }

    checkForRectangle(){
        if ((this.a**2 + this.b**2 == this.c**2) || (this.a**2 + this.c**2 == this.b**2) || (this.c**2 + this.b**2 == this.a**2))
            console.log("Triangle is rectangular triangle");
        else
            console.log("Triangle is not rectangular triangle");
    }
}

let a = new Triangle(6,8,10);
a.checkTriangle();
a.checkForRectangle();
console.log(a.getSquare());