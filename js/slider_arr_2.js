const slider_wrapper_2 = document.querySelector('.wrapper_slider_arr_2'),
    btn_Next_2 = document.querySelector('.btn_next_2'),
    btn_Prev_2 = document.querySelector('.btn_prev_2'),
    dots_2 = document.querySelectorAll('.dots_style_2');

let position = 0;

btn_Prev_2.style.disabled = true
btn_Next_2.addEventListener('click', function (){

  position = position - 360 * 3;
  btn_Next_2.style.disabled = true
  btn_Prev_2.style.disabled = false

  slider_wrapper_2.style.left = '-1080px';
})

btn_Next_2.addEventListener('click', function (){

  position = position + 360 * 3;

  btn_Next_2.style.disabled = false
  btn_Prev_2.style.disabled = true

  slider_wrapper_2.style.left = position +'px';
})

