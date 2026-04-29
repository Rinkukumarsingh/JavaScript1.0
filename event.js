let btn1 = document.querySelector(".btn");

btn1.onclick = () =>{
    console.log("Button 1 clicked");
}

let btn2 = document.querySelector(".btn2");

btn2.onmouseover = (event) =>{
    console.log("Button 2 on mouse hovered : ", event.type);
}

let btn3 = document.querySelector("#btnBox");

btn3.ondblclick = () =>{
    console.log("Button 3 double clicked");
}

// added comment for git commit
// added comment from feature branch to master branch.

// merging changes using git merge command.