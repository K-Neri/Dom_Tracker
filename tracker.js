let btn_sun = document.getElementById('btn-sun');
let cnt_sun = document.getElementById('sun-value');

let btn_water = document.getElementById('btn-water');
let cnt_water = document.getElementById('water-value');

let btn_break = document.getElementById('btn-break');
let cnt_break = document.getElementById('break-value');

let total_value = document.getElementById('total-value');

let btn_reset = document.getElementById('btn-reset');



function reset(){
    cnt_sun.innerText = 0;
    cnt_water.innerText = 0;
    cnt_break.innerText = 0;
    total_value.innerText = 0;
}
function total(){
    total_value.innerText = parseInt(total_value.innerText) + 1;
}
    
btn_sun.addEventListener('click', () => {
    total();
    cnt_sun.innerText = parseInt(cnt_sun.innerText) + 1;
});

btn_water.addEventListener('click', () => {
    total();
    cnt_water.innerText = parseInt(cnt_water.innerText) + 1;
});

btn_break.addEventListener('click', () => {
    total();
    cnt_break.innerText = parseInt(cnt_break.innerText) + 1;
});

btn_reset.addEventListener('click', reset);


