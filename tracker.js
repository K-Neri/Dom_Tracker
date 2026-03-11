let btn_sun = document.getElementById('btn-sun');
let cnt_sun = document.getElementById('sun-value');

let btn_water= document.getElementById('btn-water');
let cnt_water = document.getElementById('water-value');


let btn_break= document.getElementById('btn-break');
let cnt_break = document.getElementById('break-value');

btn_sun.addEventListener('click', () => {
    cnt_sun.innerText = parseInt(cnt_sun.innerText) + 1;
});

btn_water.addEventListener('click', () => {
    cnt_water.innerText = parseInt(cnt_water.innerText) + 1;
});

btn_break.addEventListener('click', () => {
    cnt_break.innerText = parseInt(cnt_break.innerText) + 1;
});


btn5.addEventListener('click', () => {
    cnt.innerText = parseInt(cnt.innerText) + 5;
})