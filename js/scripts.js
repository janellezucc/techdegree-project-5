var images = $('.images a').Lightbox();

let searchBox = document.querySelector('#search');
let pictures = document.querySelectorAll('a');
searchBox.addEventListener('keyup', () => {
    for(let i = 0; i < pictures.length; i++) {
        if(pictures[i].dataset.title.toLocaleLowerCase().includes(searchBox.value.toLowerCase())) {
            pictures[i].style.display = 'inline';
        } else {
            pictures[i].style.display = 'none';
        } 
    } 
});