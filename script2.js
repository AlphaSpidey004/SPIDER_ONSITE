
var data = document.getElementById('textbox');
var btn = document.querySelector('#btn');
var t1 = document.getElementById('textbox1')
var t2 = document.getElementById('textbox2')
var t3 = document.getElementById('textbox3')
var btn1 = document.getElementById('btn1');


btn.addEventListener('click',function(){
    if(t1.innerHTML && t2.innerHTML && t3.innerHTML){
    data.style.fontFamily = t1.innerHTML;
    data.style.fontSize = t2.innerHTML;
    data.style.color = t3.innerHTML;
    }
    
})