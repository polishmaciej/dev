const nav = document.querySelector(".nav");
const navBtn = document.querySelector(".burger-btn");
const allNavItems = document.querySelectorAll(".nav__item");

const handleNav = () => {
	nav.classList.toggle("nav--active");

	allNavItems.forEach((item) => {
		item.addEventListener("click", () => {
			nav.classList.remove("nav--active");
		});
	});
	handleNavItemsAnimation();
};

const handleNavItemsAnimation = () => {
	let delayTime = 0;

	allNavItems.forEach((item) => {
		item.classList.toggle("nav-items-animation");

		item.style.animationDelay = "." + delayTime + "s";
		delayTime++;
	});
};

navBtn.addEventListener("click", handleNav);


document.addEventListener("DOMContentLoaded", function () {
	const nav = document.querySelector(".navbar");

	function addShadow() {
		if (window.scrollY >= 100) {
			nav.classList.add("shadow-bg");
		} else {
			nav.classList.remove("shadow-bg");
		}
	}

	window.addEventListener("scroll", addShadow);
});

document.addEventListener('DOMContentLoaded', function() {
    const containers = document.querySelectorAll('.r-container, .r-container-2');

    containers.forEach(container => {
        let animationClass;

        if (container.classList.contains('r-container')) {
            animationClass = 'animation_right';
        } else if (container.classList.contains('r-container-2')) {
            animationClass = 'animation_left';
        }

        const slides = container.querySelectorAll('.reviews__slide');

        container.addEventListener('mouseenter', () => {
            slides.forEach(slide => {
                slide.classList.add('animation_stop');
            });
        });

        container.addEventListener('mouseleave', () => {
            slides.forEach(slide => {
                slide.classList.remove('animation_stop');
            });
        });

        container.addEventListener('touchstart', () => {
            slides.forEach(slide => {
                slide.classList.add('animation_stop');
            });
        });

        container.addEventListener('touchend', () => {
            slides.forEach(slide => {
                slide.classList.remove('animation_stop');
            });
        });
    });
});

