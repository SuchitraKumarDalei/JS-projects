let input = document.getElementById('todo');
let button = document.getElementById('add-btn');

let todos = document.getElementById("list");
var count = 0;

function add(){
    if(input.value == ""){
        alert("Please add todos");
    }else{
        count++;
        let li = document.createElement("li");
        li.innerHTML = `${count}. ${input.value} <button onclick='Delete()'>complete</button>`;
        todos.appendChild(li);
        input.value = '';

        document.querySelector('ul li button').addEventListener('click',Delete);
        function Delete(){
            li.remove();
            count--;
        }
    }
}

