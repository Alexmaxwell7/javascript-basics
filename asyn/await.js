async function fetchData(){
    try{
    const respone = await fetch("https://jsonplaceholder.typicode.com/posts");
    const result = await respone.json();
    console.log("result",result);
    // document.getElementById('result').innerHTML = JSON.stringify(result);
    }
    catch(error){
        document.getElementById('result').innerHTML = 'Error fetching data:' + error.message;
    }
}

fetchData()
function greets(){
    console.log("greet success")
}
greets()
// program to display a text using setTimeout method
function greet() {
    console.log('Hello world');
}

setTimeout(greet, 3000);
console.log('This message is shown first');

