const observer = new IntersectionObserver((enteries) =>{
    enteries.forEach(entry =>{
        if(entry.isIntersecting){
            const paragraphs = entry.target.querySelectorAll('.about-paragraph');
            paragraphs.forEach(p =>{
                p.classList.add('start-typing')
            })
        }
    })
},{threshold: .6});
const target= document.querySelector('.about-container');
observer.observe(target);


const searchform= document.querySelector('.search');
const searchinput=document.querySelector('input[type="search"]');
const gamecards=document.querySelectorAll('.game-card');
searchinput.addEventListener('input',(x)=>{
    const searchstring=x.target.value.toLowerCase();
    gamecards.forEach((cardz) =>{
        const gamename=cardz.querySelector('.game-name').innerText.toLowerCase();
        if(gamename.includes(searchstring)){
            cardz.style.display='flex';
        }
        else{
            cardz.style.display='none';
        }
    })
})
const socialLinks=document.querySelectorAll('.social-card, .email-link');
socialLinks.forEach((link)=>{
    link.addEventListener('click',(event)=>{
         event.preventDefault();
        alert('this totally redirects you where its supposed to!');
    })
})