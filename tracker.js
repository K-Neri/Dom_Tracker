let btn1 = document.getElementById('btn_count1');
let cnt = document.getElementById('val_count');
let btn5= document.getElementById('btn_count5');


btn1.addEventListener('click', () => {
    cnt.innerText = parseInt(cnt.innerText) + 1;
});

 


btn5.addEventListener('click', () => {
    cnt.innerText = parseInt(cnt.innerText) + 5;
})