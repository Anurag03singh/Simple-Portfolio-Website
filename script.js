document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("section-active");
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Additional logic for animating the education and achievements sections
    const educationAchievements = document.querySelector(".education-achievements");

    if (educationAchievements) {
        const observerEducationAchievements = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("section-active");
                }
            });
        }, {
            threshold: 0.1
        });

        observerEducationAchievements.observe(educationAchievements);
    }
});
