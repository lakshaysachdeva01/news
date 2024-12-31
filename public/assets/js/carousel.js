function initializeCarousel() {
    $(".testimonial-carousel").owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1, // Mobile: 1 item per slide
            },
            864: {
                items: 2, // Tablets: 1 item per slide
            },
            1024: {
                items: 2, // Desktop: 2 items per slide
            },
            1228: {
                items: 2, // 1228px: 2 items per slide (no overlap at 1229px)
            },
            1230: {
                items: 3, // 1230px: 3 items per slide
            },
            1496: {
                items: 3, // Larger screens: 3 items per slide
            }
        }
    });
}

// Initialize the carousel when the document is ready
$(document).ready(function() {
    initializeCarousel();
});

// Refresh the carousel on window resize (without destroying it)
$(window).resize(function() {
    $(".testimonial-carousel").trigger('refresh.owl.carousel');
});
