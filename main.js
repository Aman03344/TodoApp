let body = document.querySelector("body")
let btn = document.querySelector('#mode')

let count = 0;
const mode = (e) => {

    e.preventDefault();
    body.className = 'bg-dark'
    if(count % 2 === 0){
        body.className='bg-dark'
    }else{
        body.className='bg-white'
    }
    count++; 
    console.log(`event type : ${e.type}`);
}

btn.addEventListener("click",mode)



const input = document.querySelector('input'); 
const inputLength = () => {
    if (input.value.length > 8 || input.value === "@") {
        alert("You can write under 8 digits");
    }
};

input.addEventListener("input", inputLength);

// input lenght end //
let form = document.querySelector("form");
let ul = document.querySelector("ul");
let clearAllBtn = document.querySelector("#clearAll"); // Select the clear all button

// Save todo item
const saveTodo = (e) => {
    e.preventDefault(); 
    let input = document.querySelector("input"); // Make sure to select input element
    let li = document.createElement("li");
    li.innerText = input.value;
    li.className = "list-group-item";

    // Create delete button for each todo
    let Delbtn = document.createElement("button");
    Delbtn.innerText = "Delete";
    Delbtn.className = "btn btn-sm btn-danger float-end rounded-0"; 
    li.appendChild(Delbtn);

    ul.appendChild(li); 
    form.reset();
};

form.addEventListener("submit", saveTodo);

// Remove section start
const removeTodo = (e) => {
    if (e.target.className.includes("btn-danger")) {
        let li = e.target.parentElement;
        if (window.confirm("Are you sure?")) {
            ul.removeChild(li);
        }
    }
};

ul.addEventListener("click", removeTodo);
// Remove section end


// Clear start 
const clearAllTodos = () => {
    if (window.confirm("Are you sure you want to clear all items?")) {
        ul.innerText="";
    }
};

clearAllBtn.addEventListener("click", clearAllTodos);

// Clear end 

