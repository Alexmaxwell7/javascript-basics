const fruits = ["Banana", "Orange", "Apple", "Mango"];
let count = fruits.length;

// count = 4;

let text = "<ul>";

//step 1=> i =4;
//step 2=> 4 < 4;
//step 3=> inside the statements => frutis[3]
//step 4=> frutis [1]=>mango
//step 5=> 3+1=>4
for (let i = 0; i < count; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

document.getElementById("demo").innerHTML = text;