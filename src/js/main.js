// Start Navbar
    let navbar = document.querySelector("nav .container .links"),
        navOpen = document.querySelector("nav .container > i"),
        navClose = document.querySelector("nav .container .links > i"),
        links = document.querySelectorAll("nav .container .links li");
        // link = document.querySelector("nav .container .links li");
    navOpen.addEventListener("click", function () {
        navbar.classList.toggle("active");
    });
    navClose.addEventListener("click", function () {
        navbar.classList.remove("active");
    });

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            links.forEach(li => {
                li.classList.remove("active");
            })
            e.target.parentElement.classList.add("active");
        })
    })
// End Navbar