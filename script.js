document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".page");
    const navLinks = document.querySelectorAll("nav ul li a, .sidebar a");

    function changeActiveLink() {
        let scrollPosition = window.scrollY;

        sections.forEach((section) => {
            if (scrollPosition >= section.offsetTop - 100 && scrollPosition < section.offsetTop + section.offsetHeight) {
                navLinks.forEach((link) => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${section.id}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }

    window.addEventListener("scroll", changeActiveLink);
});
