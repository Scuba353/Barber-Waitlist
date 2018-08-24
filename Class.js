
var WaitList = new SLQueue();


//renderClient();

var //list = document.getElementById("client-list"),
    add =  document.getElementById("add-client"),
    firstname = document.getElementById("first_name"),
    lastname= document.getElementById("last_name")
    //next = document.getElementById("next-client");

console.log(firstname.value)
console.log(lastname.value)
add.addEventListener("click", function(){
    console.log("2", firstname.value)
    console.log("2", lastname.value)
    WaitList.enqueue(new Client(firstname.value, lastname.value));
    console.log("made it into add event function")
    //console.log(first.value, last.value)
    firstname.value = "";
    lastname.value = "";
    //renderClient();

})

// next.addEventListener("click", function(){
//     WaitList.dequeue();
//     renderClient();
// })  

// function renderClient(){
//     var curr = document.getElementById("next-client");
//     var currclient = (WaitList.head == null)
//         ? "No wait time, Pick your favorite Barber!"
//         : `${WaitList.head.value.first} ${WaitList.head.value.last}`;
    
//     curr.innerText = currclient;
// }