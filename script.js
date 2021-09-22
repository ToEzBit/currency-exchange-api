
var s1 = document.getElementById("s1");
var s2 = document.getElementById("s2");

var v1 = document.getElementById("v1");
var v2 = document.getElementById("v2");

var rt = document.getElementById("rate")
var btb =document.getElementById("btn");

s1.addEventListener("change",cal);
s2.addEventListener("change",cal);
v1.addEventListener("input",cal);
v2.addEventListener("input",cal);

function cal(){
    let se1 = s1.value;
    let se2 = s2.value;
    fetch(`https://api.exchangerate-api.com/v4/latest/${se1}`)
    .then(res=>res.json()).then(data=>{
         let rate = data.rates[se2];
        rt.innerHTML = ` 1  ${se1} = ${rate}${se2}`;
        v2.value = v1.value * rate; 
    })
};

btn.addEventListener("click",swap);

function swap(){
    let i = s1.value;
    s1.value = s2.value;
    s2.value = i;
    cal();
};



cal();