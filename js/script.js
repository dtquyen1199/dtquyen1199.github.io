document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".navbar a[href="#"]");

    for (const link of links) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            const navbarHeight = document.querySelector(".navbar").offsetHeight;
            const headerbarHeight = document.querySelector(".headerbar").offsetHeight;

            window.scrollTo({
                top: targetSection.offsetTop - headerbarHeight,
                behavior: "smooth"
            });
        });
    }
});
