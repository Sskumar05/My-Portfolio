
function Home() {
    var ab = document.getElementById("content")
    ab.innerHTML = "<h3>Hello, it's Me <br> SHATHIS KUMAR S <br> And I'm a</h3> <h2>FRONT-END DEVELOPER!</h2> <p>A Frontend Developer is responsible for designing and implementing the user interface (UI) and user experience (UX) of web applications.</p>"
}

function About() {
    var ab = document.getElementById("content")
    ab.innerHTML = "<p>A Front-End Developer uses HTML, CSS, and JavaScript to create responsive, interactive, and visually appealing websites. They ensure cross-browser compatibility, optimize performance, and enhance user experience while collaborating with designers and back-end teams.</p>";
}
function skill() {
    var ab = document.getElementById("content")
    ab.innerHTML = "<div class='skill-container'> <h3>My Skills</h3> <div class='skill'> <span>HTML</span> <div class='skill-bar'> <div class='fill html'></div></div> </div><div class='skill'><span>CSS</span> <div class='skill-bar'> <div class='fill css'></div></div></div> <div class='skill'><span>JavaScript</span><div class='skill-bar'><div class='fill js'></div> </div> </div></div>"
}
// function project() {
//     var ab = document.getElementById("content")
//     ab.innerHTML = "<p>A Front-End Developer uses HTML, CSS, and JavaScript to create responsive, interactive, and visually appealing websites. They ensure cross-browser compatibility, optimize performance, and enhance user experience while collaborating with designers and back-end teams.</p>";
// }
function Contact() {
    var ab = document.getElementById("content")
    ab.innerHTML = "<h1>CONTACT US</h1> <br> <input type='text' placeholder='Full Name'>  <br> <input type='email' placeholder='Email'>  <br> <input type='number' placeholder='Phone Number'>  <br> <input type='text' placeholder='Subject'>"
}
