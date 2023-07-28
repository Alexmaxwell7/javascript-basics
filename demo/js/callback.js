// // function
// function greet(name, abc) {
//     console.log('Hi' + ' ' + name);
//     abc();
// }

// // callback function
// function printyourname() {
//     console.log('my name is saranya');
// }

// // passing function as an argument
// greet('john', printyourname);


//promise => pending,Fulfilled,reject

//promise=> pending,success,fail

//step1)=> pending 

let fetchRes = fetch(
    "https://jsonplaceholder.typicode.com/postsss");
    // fetchRes is the promise to resolve
    // it by using.then() method
    fetchRes.then(res =>
        res.json()).then(d => {
            console.log(d)
        }).catch(()=>console.log("please check your end point"));