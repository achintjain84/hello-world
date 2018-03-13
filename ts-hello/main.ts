import { Point } from './point';
//function log(message){

//    console.log(message);
//}

//var message = 'Hellp World';
//log(message);


//function doSomething(){
    //for (var i = 0; i < 5; i++){
//    for (let i = 0; i < 5; i++){
//        console.log(i);
//    }

//    console.log('Finally: ' + i );
//}

//doSomething();


/*let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2, 3];
let f: any[] = [1, true, 'a', false];


const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

enum Color {Red, Green, Blue};
let backgroundColor = Color.Red;

enum Color2 {Red = 0, Green = 1, Blue = 2};

*/

/*
//
let message = 'abc';
let endsWithC = message.endsWith('c');

//
let message2;
message2 = 'abc';
let endsWithC2 = (<string>message2).endsWith('c');
let alternativeWay = (message2 as string).endsWith('c');


//Function JS
let log = function (message) {
    console.log(message);
}

//Function TS : Arror funciton
let doLog = (message) => {
    console.log(message);
}

// OR

let doLog = (message) => console.log(message);

*/

//
//let drawPoint = (x, y, a, b, c) => {
    //...
//}

/*interface Point{
    x: number,
    y: number
}
let drawPoint = (point: Point) => {
    //..
}

drawPoint({
    x: 1,
    y: 2
})
*/

//
/*class Point{
    x: number;
    y: number;
    //draw: () => void
    draw(){
        console.log('X: ' + this.x + 'Y: ' + this.y);
    }

    getDistance (another: Point){
        //..
    }
}

let point  = new Point();
point.x = 1;
point.y = 2;
point.draw();
*/

/*
class Point{
    x: number;
    y: number;
    
    constructor(x?: number, y?: number){
        this.x = x;
        this.y = y;
    }

    draw(){
        console.log('X: ' + this.x + 'Y: ' + this.y);
    }

}

let point  = new Point();
let point1  = new Point(1);
let point2  = new Point(1, 2);
point.draw();
point1.draw();
point2.draw();
*/

//access modifiers:
/*
class Point{
    constructor(private x?: number, private y?: number){
    }

    draw(){
        console.log('X: ' + this.x + 'Y: ' + this.y);
    }

}

let point  = new Point(1,  2);
point.draw();
*/



let point  = new Point(1,  2);
point.draw();

