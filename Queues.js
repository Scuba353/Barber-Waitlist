//Link to join live lectures: https://codingdojo.zoom.us/j/262169545
//Link to join discussions: academy.codingdojo.com

//SLL node structure
function SLNode(val){
    console.log("creating new node")
    this.val= val;
    this.next= null;
}

function Client(f_name, l_name, service){
    console.log("creating new client")
    this.f_name = f_name;
    this.l_name = l_name;
    // this.service= service;
}

//SSL Queue
function SLQueue(){
    this.head= null;
    this.tail= null;
    this.isEmpty= function(){
        return this.head === null;
    }
    this.hasOne = function(){
        return (!this.isEmpty() && this.head.next == null)
    }
}

//ENQUEUE
SLQueue.prototype.enqueue = function(val){
        //create new node with val
        var newNode= new SLNode(val);
        //point current tail to the new node
        this.tail= newNode;
        //check if there is anything in the queue
        if(this.isEmpty()){
            this.head = newNode;
            return this
        }
        // then traverse to end of queue, add new item at end
        var curr = this.head;
        while(curr.next){
            curr = curr.next;
        }
        curr.next = newNode;

        return this;
    }


//DEQUEUE
SLQueue.prototype.dequeue = function(){
    //empty
    if(this.isEmpty()){
        return -1
    }
    //store value to return
    var valToReturn = this.head.val;
    
    //single node
    if(this.hasOne()){
        this.head= null;
        this.tail= null;
        return valToReturn
    }
    //multiple nodes
    this.head =this.head.next;
    return valToReturn
}

// //TRAVERSE
// SLQueue.prototype.traverse = function(){
//     //head is empty
//     if(this.isEmpty()){
//         return -1
//     }
//     //head is not empty
//     var curr = this.head;
//     while(curr.next){
//         curr = curr.next;
//     }
//         //traverse-collect values
// }
