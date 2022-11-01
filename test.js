//スクロールイベント
const eltag = document.querySelectorAll('a[id]');
elBtn = document.getElementById("nav-contener");
for(let i = 0; i<6; i++){
eltag[i].addEventListener('click' ,e=>{
    e.preventDefault;
    const elClass = document.querySelectorAll('a');
    for(let j = 0; j<6; j++){
      elClass[j].classList.remove('active')
      console.log(elClass[j])
    }
    elBtn.classList.toggle('active');
    elnav = document.querySelector('nav ul');
    elnav.classList.toggle('active');
    
    document.getElementById(e.target.id).classList.add('active');
    console.log(e);
    //const posY =window.pageYOffset;
    const pos = document.getElementById("_"+e.target.id).getBoundingClientRect().top; 
    window.scrollBy({
      top: pos-50,
      left: 0,
      behavior: 'smooth'
    });
    return false;
})
}
//ハンガーメニュー
elBtn.addEventListener('click',e=>{
  elBtn.classList.toggle('active');
  elnav = document.querySelector('nav ul');
  elnav.classList.toggle('active');
}
)
