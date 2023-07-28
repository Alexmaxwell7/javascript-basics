function StudentmarkCaluculation(sub1,sub2,sub3,sub4,sub5) {

    const total = sub1 + sub2 + sub3 + sub4 + sub5;
    const avg = total /5 ;

    return total

}


// var additionresult = addition();

console.log("student one", StudentmarkCaluculation(90,80,90,80,70));
console.log("student two", StudentmarkCaluculation(50,40,30,70,70));
console.log("student three", StudentmarkCaluculation(90,80,90,80,70));
console.log("student four", StudentmarkCaluculation(90,80,90,80,70));
console.log("student five", StudentmarkCaluculation(90,80,90,80,70));


function additon(num1,num2){
    // let num1 , num2;
    // num1 =100;
    // num2=100;
    // return num1+num2;

    return num1+num2;
}

const addtionResult = additon(70,80);

console.log('Addition',additon(90,80));
console.log("your variable result is", addtionResult);