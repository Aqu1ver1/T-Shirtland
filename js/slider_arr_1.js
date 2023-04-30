const slider_wrapper = document.querySelectorAll('.wrapper_slider_arr_1'),
    btn_Next = document.querySelectorAll('.btn_next'),
    btn_Prev = document.querySelectorAll('.btn_prev'),
    dots = document.querySelectorAll('.dots_style');

const skateboarding = document.querySelector('.skateboarding'),
      anime = document.querySelector('.anime'),
      minimalism = document.querySelector('.minimalism');
      // sport = document.querySelector('.sport');

const btn_skateboarding = document.querySelector('.btn_skateboarding'),
      btn_anime = document.querySelector('.btn_anime'),
      btn_minimalism = document.querySelector('.btn_minimalism');
      // btn_sport = document.querySelector('.btn_sport');


Nav(0, 0, 0)
btn_skateboarding.addEventListener('click', function () {
  skateboarding.style.display = 'block'
  anime.style.display = 'none'
  minimalism.style.display = 'none'
  // sport.style.display = 'none'
  Nav(0, 0,0)
})
btn_anime.addEventListener('click', function () {
  skateboarding.style.display = 'none'
  anime.style.display = 'block'
  minimalism.style.display = 'none'
  // sport.style.display = 'none'

  Nav(1, 0,3)

})
btn_minimalism.addEventListener('click', function () {
  skateboarding.style.display = 'none'
  anime.style.display = 'none'
  minimalism.style.display = 'block'
  // sport.style.display = 'none'

  Nav(2, 0,6)

})
// btn_sport.addEventListener('click', function () {
//   skateboarding.style.display = 'none'
//   anime.style.display = 'none'
//   minimalism.style.display = 'none'
//   sport.style.display = 'block'
//
//   Nav(3, 0,9)
// })
function Nav(btn_current, position,current_dots_active) {


  let currentPage = 1
  slider_wrapper[btn_current].style.left = 0 +'px';
  btn_Prev[btn_current].disabled = true;
  btn_Next[btn_current].disabled = false;


  dots[current_dots_active].classList.add('dots_style_active')
  dots[current_dots_active + 1].classList.remove('dots_style_active')
  dots[current_dots_active + 2].classList.remove('dots_style_active')

  btn_Next[btn_current].addEventListener('click', function (){

    position = position - 360 * 3;
    currentPage = currentPage + 1

    dots[current_dots_active].classList.toggle('dots_style_active')
    console.log(current_dots_active)
    dots[current_dots_active + 1].classList.toggle('dots_style_active')
    console.log(current_dots_active + 1)
    current_dots_active = current_dots_active + 1

    btn_Next[btn_current].disabled = currentPage >= 3;
    if(currentPage >= 3){
    }
    if(currentPage !== 1){
      btn_Prev[btn_current].disabled = false;
    }
    slider_wrapper[btn_current].style.left = position +'px';
  })

  btn_Prev[btn_current].addEventListener('click', function (){
    position = position + 360 * 3;
    currentPage = currentPage - 1

    dots[current_dots_active].classList.toggle('dots_style_active')
    console.log(current_dots_active)
    dots[current_dots_active - 1].classList.toggle('dots_style_active')
    console.log(current_dots_active - 1)

    current_dots_active = current_dots_active -1

    btn_Prev[btn_current].disabled = currentPage === 1;
    if(currentPage === 1){
    }
    if(currentPage !== 3){
      btn_Next[btn_current].disabled = false;
    }
    slider_wrapper[btn_current].style.left = position +'px';
  })
}
