// Shape constructor function has two properties; name, sides(sides are number)
function Shape(name, sides) {
    this.name = name
    this.sides = sides
}

//a Rectangle is a shape, hieight, width
function Rectangle(height, width, name) {
    this.height = height
    this.width = width

    Shape.call(this, name, 4)
}

//Object.create() <--create a copy
//on the Rectangle's prototype 
Rectangle.prototype = Object.create(Shape.prototype)


//add an area funtion
Rectangle.prototype.area = function () {
    console.log(this.height * this.width)
}

//add a perimeter funtion
Rectangle.prototype.perimeter = function () {
    console.log(this.height * 2 + this.width * 2)
}

function Square(height, width, name) {

    // but if the height and width are different then set the width to be the height 
    if (height === width) {
        Rectangle.call(this, height, height, name)
    } else {
        Rectangle.call(this, height, width, name)
    }
}

//Square is a Rectangle
Square.prototype = Object.create(Rectangle.prototype)


var r = new Rectangle(100, 50, 'Jennifer Aniston');
r.area()        //100 * 50 = 5000
r.perimeter()   //(100*2)+(50*2) = 300

var hwSame = new Square(60, 60, 'Courteney Cox')
hwSame.area()        //60 * 60 = 3600
hwSame.perimeter()   //(60*2)+(60*2) = 240

var hwDiff = new Square(40, 20, 'rab')
hwDiff.area()        //40 * 20 = 800
hwDiff.perimeter()   //(40*2)+(20*2) = 120