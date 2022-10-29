const eltag = document.querySelectorAll('a[href^="#"]');

for(let i = 0; i<4; i++){
eltag[i].addEventListener('click' ,e=>{
    e.preventDefault;
    console.log(document.querySelector(e.target.hash).getBoundingClientRect().top);
    const pos = document.querySelector(e.target.hash).getBoundingClientRect().top; 
    window.scrollTo({
        top: pos,
        left: 0,
        behavior: 'smooth'
      });
    return false;
})
}