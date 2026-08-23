let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll=()=>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}
//typing text code//
const typed = new Typed('.multiple-text', {
      strings: ['Physical Fitness','WeightGain','Strength Training','Fat Lose','Weight Lifting','Running'],
      typeSpeed: 50,
      backSpeed:60,
      backDelay:1000,
      loop:true,
    });
async function signupUser() {
    const userData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };

    const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    });

    const data = await response.json();

    console.log(data);
}