//variables

var a = 8
console.log(a);


// global scope
// function scope


var lastName = ' Raut'

function printFullName(){
    console.log('printFullName:','hi ' + name + '' + lastName)
}

printFullName();




function printName(){
    var name = 'Chaitanya'
    console.log('printName:', 'hi' + name)
}

printName();