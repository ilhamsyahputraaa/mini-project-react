
// Navbar Scroll
const navbar = document.getElementsByTagName('nav')[0];
window.addEventListener('scroll', function () {
    console.log(window.scrollY);
    if (window.scrollY > 1){
        navbar.classList.replace('nav-transparent', 'nav-color')
    } else if (window.scrollY <= 0) {
        navbar.classList.replace('nav-color','nav-transparent')
    }
})


// Darkmode
let bodyColor = document.getElementById('body-background');
let sectionHead = document.getElementsByTagName('h5');
let footer = document.getElementById('footer');
let button1 = document.getElementById('light-mode');

button1.addEventListener("click", function(){
    if(button1.style.backgroundColor==='white'){
        // Darkmode Button
        button1.style.backgroundColor = 'black';
        button1.style.color = 'white';
        button1.innerText="Light Mode";


        // Body Background
        document.getElementById('body-background').style.backgroundColor = '#1a1a1a';


        // Header Section
        document.getElementById('section-head1').style.color = 'white';
        document.getElementById('section-head2').style.color = 'white';
        document.getElementById('section-head3').style.color = 'white';

        // Button Wrapper
        document.getElementById('button-wrapper1').style.background = 'linear-gradient(270deg, #1a1a1a 0%, rgba(0, 0, 0, 0) 98.78%)';
        document.getElementById('button-wrapper2').style.background = 'linear-gradient(270deg, #1a1a1a 0%, rgba(0, 0, 0, 0) 98.78%)';
        document.getElementById('button-wrapper3').style.background = 'linear-gradient(270deg, #1a1a1a 0%, rgba(0, 0, 0, 0) 98.78%)';

        // Footer Atas
        document.getElementById('footeratas').style.backgroundColor = 'black';
        
        document.getElementById('footeratas').style.color = 'white';



    } else {
        button1.style.backgroundColor = 'white';
        button1.style.color = 'black';
        button1.innerText="Dark Mode";


        // Body Background
        document.getElementById('body-background').style.backgroundColor = 'white';

        // Header Section
        document.getElementById('section-head1').style.color = 'black';
        document.getElementById('section-head2').style.color = 'black';
        document.getElementById('section-head3').style.color = 'black';

        // Button Wrapper
        document.getElementById('button-wrapper1').style.background = 'linear-gradient(270deg, #ffffff 0%, rgba(0, 0, 0, 0) 98.78%)';
        document.getElementById('button-wrapper2').style.background = 'linear-gradient(270deg, #ffffff 0%, rgba(0, 0, 0, 0) 98.78%)';
        document.getElementById('button-wrapper3').style.background = 'linear-gradient(270deg, #ffffff 0%, rgba(0, 0, 0, 0) 98.78%)';

        // Footer
        document.getElementById('footeratas').style.backgroundColor = '#929292';

    }
})