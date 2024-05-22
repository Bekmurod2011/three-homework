let btn = document.querySelector("button");
let inp = document.querySelector("input");
let h1 = document.querySelector("h1");

btn.addEventListener("click", () => {
    if(inp.value === " "){
        alert("Error");
    }else{
        h1.innerHTML += `${inp.value}<br>`;
        inp.value = "";
    }        
});


