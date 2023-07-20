// add class navbarDark on navbar scroll
let text = 'Hey, I am Venkat Sai Rama \u{1F91D}'; 
let i = 0;
let speed = 100; 
let typewriterSound = document.getElementById("typewriter_sound");

function typeWriter() {
  if (i < text.length) {
    document.getElementById("hero_title").innerHTML += text.charAt(i);
    typewriterSound.play();
    i++;
    setTimeout(typeWriter, speed);
  } else {
    document.getElementById("hero_desc").style.opacity = "1";
  }
}
typeWriter();

const header = document.querySelector('.navbar');
console.log(header)
window.onscroll = function() {
    const top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')
setTimeout(function() {
    window.location.href = "#about";
  }, 8000); // 7000 milliseconds = 7 seconds
navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})
function sendMail() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Check if any field is empty
  if (!name || !email || !message) {
    alert("Please fill in all the fields");
    return;
  }

  var params = {
    name: name,
    email: email,
    message: message,
  };

  const serviceID = "service_rxkka5v";
  const templateID = "template_75eozys";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Thank you very much for your email. I will typically reach out to you within an hour.");
    })
    .catch((err) => console.log(err));
}
/* Services / Projects section */
#services {
    padding: 50px 0;
    background-color: #f8f9fa;
}

#services .section-title {
    margin-bottom: 50px;
    text-transform: uppercase;
}

#services .project-item {
    margin-bottom: 30px;
    border: 1px solid #ced4da;
    padding: 20px;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

#services .project-title {
    font-size: 24px;
    font-weight: 700;
    color: #212529;
    margin-bottom: 10px;
}

#services .project-tech {
    font-size: 18px;
    color: #6c757d;
    margin-bottom: 20px;
}

#services .coming-soon {
    text-align: center;
    font-size: 18px;
    color: #6c757d;
}
