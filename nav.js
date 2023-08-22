var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").classList.remove("hide");
  } else {
    document.getElementById("header").classList.add("hide");
  }
  prevScrollpos = currentScrollPos;
}



// document.addEventListener('docum',()=>{

// })


const harmburger = document.querySelector('.fa-bars')

const nav=document.querySelector('.drop-menu')

const navRemovebtn=document.querySelector('.fa-xmark')
navRemovebtn.addEventListener('click',()=>{
nav.classList.remove('show-nav')
})
harmburger.addEventListener('click',()=>{
  harmburger.classList.remove('fa-bounce')
    nav.classList.add('show-nav')
    setTimeout(()=>{harmburger.classList.add('fa-bounce')},3000)
})
