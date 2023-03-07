let mobile_nav = document.querySelector('.mobile_navbar');
let header = document.querySelector('.head')
let togglenavbar = () => {
  header.classList.toggle('active')
}
mobile_nav.addEventListener('click', () => {
  togglenavbar();
})

function change(anything) {
  document.querySelector('.starbucks').src = anything;
}

// count number skill


let worksection = document.querySelector('#skill-section')

const workobserve = new IntersectionObserver((entrise, observe) => {
  const [entry] = entrise
  // console.log(entry);
  if (!entry.isIntersecting) return;

  let valuedisplay = document.querySelectorAll('.num');
  let intervle = 100;

  valuedisplay.forEach((valuedisplay) => {
    let startval = 0
    let endval = parseFloat(valuedisplay.getAttribute("data-vale"))
    let duration = Math.floor(intervle / endval)
    let counte = setInterval(function () {
      startval += 1;
      valuedisplay.textContent = startval + '%' ;
      if (startval == endval) {
        clearInterval(counte)
      }
    },40)
  });

  observe.unobserve(worksection)
}, {
  root: null,
  threshold:0,
});

workobserve.observe(worksection)