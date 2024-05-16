

var num1=+prompt("birinci ededi daxil edin")
var num2=+prompt("ikinci ededi daxil edin")
var operate = prompt("Hansi emeliyyati etmek isteyirsiniz?")
if(isNaN(num1) || isNaN(num2)){
    alert("eded daxil edin zehmet olmasa")
}
else if(operate=='+'){
    console.log(num1+num2)
}
else if(operate=='-'){
    console.log(num1-num2)
}
else if(operate=='*'){
    console.log(num1*num2)
}
else if(operate=='/'){
    console.log(num1/num2)
}