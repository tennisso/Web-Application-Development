/* Task 1 */

let myNodelist = document.getElementsByTagName("LI");

for (let i = 0;i < myNodelist.length; i++) {
    let btn = document.createElement("button");
    let text= document.createTextNode("Delete");
    btn.className = "close";
    btn.appendChild(text);
    myNodelist[i].appendChild(btn);
}

/* Task 2 */

let close = document.getElementsByClassName("close");

for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        let li = this.parentElement;
        li.style.display = "none";
    }
}

/* Task 3 */

let list = document.querySelector("ul");
list.addEventListener("click", function(ev) {
    console.log(ev);
    if (ev.target.tagName === "LI") {
        ev.target.classList.toggle("checked");
    }
}, false)

/* Task 4 */

function newTask() {
    let inputValue = document.getElementById("myInput").value;
    if (inputValue === "") {
        alert("You must write something!");
        return;
    }
    let li = document.createElement("li");
    let liText = document.createTextNode(inputValue);
    li.appendChild(liText);
    let btn = document.createElement("button");
    btn.className = "close";
    let btnText = document.createTextNode("Delete");
    btn.appendChild(btnText);
    li.appendChild(btn);
    document.getElementById("myUL").appendChild(li);
    document.getElementById("myInput").value = "";

    let close = document.getElementsByClassName("close");
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let li = this.parentElement;
            li.style.display = "none";
        }
        
    }
}