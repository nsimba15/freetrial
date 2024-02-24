

let imageContent = document.querySelectorAll('.image-content')
let writing = document.querySelectorAll('.writing')
let left = document.querySelector('.left')
let sliderContainer = document.querySelector('.slider-container')
let arrleft = document.querySelector('.arrleft')
let arright = document.querySelector('.arright')
let right = document.querySelector('.right')
let things = document.querySelectorAll('.things-content')
let thing = document.querySelectorAll('.thing')
let images = document.querySelectorAll('.thing-images')
let listas = document.querySelectorAll('.listas')
let slide = document.querySelectorAll('.slide')
let navList = document.querySelector('.nav-list')
let humb = document.querySelector('.humb')
let navlink = document.querySelectorAll('.navlink')

console.log(navlink)

navlink.forEach((e) =>{
  e.addEventListener('click', (el)=>{
    el.preventDefault()
    const id = this.getAttribute('href')
    console.log(id);
  })
})
 
let count = 1

imageContent.forEach((e, i)=>{
  e.addEventListener('click', (el)=>{

    document.querySelector('.active').classList.remove('active')
    el.target.classList.add('active')
    
    document.querySelector('.rotate').classList.remove('rotate')
    writing[i].classList.add('rotate')


  })
})

listas.forEach((el, i)=>{
  el.addEventListener('click', (e) =>{

    document.querySelector('.adicionar').classList.remove('adicionar')
    
    e.target.classList.add('adicionar')

    document.querySelector('.animated').classList.remove('animated')
    things[i].classList.add('animated')

    console.log(e.target.textContent)

    if(i == 0){
      left.style.display = 'flex'
      right.style.display = 'flex'
    }else{
      
      left.style.display = 'none'
      right.style.display = 'none'
    }
    
  })
})

right.addEventListener('click', ()=>{
  
  if( count < 9){
    things[0].style.transform = `translateX(-${count * 210}px)`
    count++
  }
  
})

left.addEventListener('click', ()=>{
  
  if( count > 0){
    things[0].style.transform = `translateX(-${(count - 2)* 210}px)`
    count--
  }
})

arright.addEventListener('click', ()=>{

  if(count < slide.length){
    sliderContainer.style.transform = `translateX(-${count * 305}px)`
    count++
  }else{
    sliderContainer.style.transform = `translateX(0px)`
    count = 0
  }
  
})

arrleft.addEventListener('click', ()=>{

  if(count > 1){
    sliderContainer.style.transform = `translateX(-${(count - 2)* 305}px)`
    count--
  }
  
})

let be = true

humb.onclick = () =>{

  if(be == true){
    navList.style.left = 0
    humb.src = 'icons/close.png'
    be = false
  }else{
    navList.style.left = '-100%'
    humb.src = 'icons/hamburger.svg'
    be = true
  }
}


cats.addEventListener('click', ()=>{
  
  aside.scrollIntoView({
    behavior : 'smooth'
  })
  
  navList.style.left = '-100%'
  humb.src = 'icons/hamburger.svg'
})

