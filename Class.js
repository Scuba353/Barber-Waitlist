
var WaitList = new SLQueue();


renderClient();
renderList();

var curr = document.getElementById("curr-client"),
    add =  document.getElementById("add-client"),
    firstname = document.getElementById("first_name"),
    lastname= document.getElementById("last_name")
    // cutShave= document.getElementById("form")
    next = document.getElementById("next-client");


add.addEventListener("click", function(){
    WaitList.enqueue(new Client(firstname.value, lastname.value));
    firstname.value = "";
    lastname.value = "";
    renderClient();
    renderList();

})

next.addEventListener("click", function(){
    WaitList.dequeue();
    renderClient();
    renderList();
})  

function renderClient(){
    var curr = document.getElementById("curr-client");
    var currclient = (WaitList.head == null)
        ? "No wait time, Pick your favorite Barber!"
        : `${WaitList.head.val.f_name} ${WaitList.head.val.l_name}`;
    
    curr.innerText = currclient;
    //renderList();
}

function renderList(){
    var line =document.getElementById("curr-list")
    //line.innerHTML= ''
    var linearr= []
    var one= WaitList.head;
    if(one == null || one.next == null){
        line.innerHTML= "No Line"
    }
    else{
        line.innerHTML= ''
        while(one.next != null){
            var nextperson = one.next.val.f_name
            linearr.push(nextperson)
            console.log(linearr)
            one= one.next
            //line.innerHTML += "<br>" + nextperson + "<br>"
        }
    }

        for(i=0; i<linearr.length; i++){
            console.log(linearr[i])
            line.innerHTML +=  linearr[i] + "<br>"
            //line.innerText += linearr[i]
        }

}


