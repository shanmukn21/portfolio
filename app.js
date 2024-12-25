
let btn=document.getElementById("vmore");
let sproj=document.getElementById("sproj");
let apa=document.getElementById("apa");
btn.addEventListener('click',function(){
    if(btn.innerText==="View More"){
        btn.innerText="View Less";
        sproj.style.display="flex";
    } else {
        btn.innerText="View More"; 
        sproj.style.display="none";
    }
});
apa.addEventListener('click',function(){
    if(btn.innerText==="View More"){
        btn.innerText="View Less";
        sproj.style.display="flex";
    }
});