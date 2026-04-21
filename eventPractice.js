let btnToggle  = document.querySelector("#btnPlus");

let currMode = "dark";

let body = document.querySelector("body");

btnToggle.addEventListener("click", () =>{
     if(currMode === "dark"){
        body.style.backgroundColor = "darkblue";
        body.style.color = "white";
        currMode = "light";
    }
    else{
        body.style.backgroundColor = "green";
        body.style.color = "white";
        currMode = "dark";
    }
})