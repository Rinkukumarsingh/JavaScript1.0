let btn = document.createElement("button");
btn.innerText = "Click me";
btn.style.backgroundColor = "red";
btn.style.color = "white";
btn.style.height = "50px";
btn.style.width = "100px";

let bodyEl = document.querySelector("body");
bodyEl.prepend(btn);

btn.addEventListener("click", function(){
    if(btn.style.backgroundColor === "red"){
        btn.style.backgroundColor = "blue"; 
    }
    });

    let pEle = document.createElement("p");
    pEle.innerText = "Hello World";
    pEle.style.fontSize = "20px";
    pEle.style.color = "white";
    pEle.style.display = "none";

    pEle.setAttribute("class", "text");