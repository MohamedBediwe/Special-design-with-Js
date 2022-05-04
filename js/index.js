const landingSection = document.getElementById('landing')
const burgerMenu = document.querySelector('.burger-menu')
const mobileNav = document.querySelector('#mobile-nav')
const gearIcon = document.querySelector('#gear-icon')
const settingSection = document.querySelector('#setting')

// show the nav list on small screens
burgerMenu.addEventListener('click', () => {
    mobileNav.classList.toggle('right-0')
})

// Make the gear icon spin
gearIcon.addEventListener('click', () => {
    settingSection.classList.toggle('left-0')
    document.querySelector('#gear-icon img').classList.toggle('animate-spin')
})

// Sets the main color from local storage
let mainColor = localStorage.getItem('main-color') || "#ff9800"
document.documentElement.style.setProperty('--main-color', mainColor)

// Sets the active class
document.querySelectorAll('.color').forEach(e => {
    // Add the active class by dataset value and local storage
    if(e.dataset.color === mainColor) {
        e.classList.add('active')
    }
})

// Switch colors
const colorsLi = document.querySelectorAll('ul li.color')

colorsLi.forEach(li => {
    li.addEventListener('click', (e) => {
        // Change the mainColor var in the root
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color)
        // change the mainColor in the local Storage
        localStorage.setItem('main-color', e.target.dataset.color)
        // Remove the active class
        e.target.parentElement.querySelectorAll('.active').forEach(e => {
            e.classList.remove('active')
        })
        // Add active class to the target element
        e.target.classList.add('active')
    })
})
// Background Changer Function
const bgImagesArray = ['bg-1.webp', 'bg-2.webp', 'bg-3.webp', 'bg-4.webp', 'bg-5.webp']
// setInterval(() => {
//     const randomNumber = Math.floor(Math.random() * bgImagesArray.length)
//     landingSection.style.backgroundImage = `url(../imgs/${bgImagesArray[randomNumber]}`
// }, 7500)