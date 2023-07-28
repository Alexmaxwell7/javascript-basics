// javascript condition statements

//1) if else statements

const EB_unit = 800;

var price = 100 ;

if (EB_unit < 100){
    console.log("Your eb amount is free");
}else if (EB_unit >=100 && EB_unit < 200){
    console.log("your eb amount is" + price *2);
}else if (EB_unit >=200 && EB_unit < 300){
    console.log("your eb amount is" + price *3);
}else if (EB_unit >=300 && EB_unit < 400){
    console.log("your eb amount is" + price *4);
}else{
    console.log("please contact your eb station")
}


const age = 18;

if(age > 18 || age <= 18){
    console.log("voter id successfully issue")
}else{
    console.log("not successfull")
}


// if (numbers !== name){
//     console.log("condition true")
// }else{
//     console.log("condition false");
// }




// var num1 = parseInt(age);

// if (age >= 18){
//     console.log("you are eligible");
// }else{
//     console.log("you are not eligible");
// }