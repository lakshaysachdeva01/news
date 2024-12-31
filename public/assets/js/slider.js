document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
      loop: true,
      autoplay: {
        delay: 6500, // Change slide every 3 seconds
        disableOnInteraction: false,
      },
      effect: 'fade', // Smooth fade transition
      speed: 2000,
      
      simulateTouch: true,
          grabCursor: true,// Transition speed
    });
})



document.addEventListener("DOMContentLoaded", () => {
  // Check if banners exist
  const bannersExist = document.querySelectorAll('#popup-banner .swiper-slide').length > 0;

  if (!bannersExist) {
      return; // No banners, exit the function
  }

  // Check if the popup was already shown in this session
  const popupShown = sessionStorage.getItem('popbackShown');
  if (popupShown) {
      return;
  }

  // Show the popup and overlay
  document.getElementById('popup-banner').style.display = 'block';
  document.getElementById('popback').style.display = 'block';
  document.body.style.overflow = 'hidden';

  // Set session storage to prevent reappearing
  sessionStorage.setItem('popbackShown', 'true');

  // Add event listener to close button
  document.getElementById('close-popup').addEventListener('click', closepopup);
});

function closepopup() {
  document.getElementById('popup-banner').style.display = 'none';
  document.getElementById('popback').style.display = 'none';
  document.body.style.overflow = 'visible';
}



document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll('.count-text');
  let isCountingStarted = false; // To avoid running multiple times

  const startCounting = (counter) => {
      const updateCount = () => {
          const target = +counter.getAttribute('data-stop');
          const speed = +counter.getAttribute('data-speed');
          const increment = target / speed;
          let current = +counter.innerText;

          if (current < target) {
              counter.innerText = Math.ceil(current + increment);
              setTimeout(updateCount, 2);
          } else {
              counter.innerText = target; // Ensure it ends at the target value
          }
      };

      counter.innerText = '0'; // Start the counter at zero
      updateCount();
  };

  const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting && !isCountingStarted) {
              // Start the counter animation when in view
              counters.forEach(counter => startCounting(counter));
              isCountingStarted = true; // Prevent multiple starts
              observer.disconnect(); // Stop observing once counters start
          }
      });
  };

  const observerOptions = {
      threshold: 0.5 // Trigger when 30% of the section is visible
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // Observe the container that holds the counters
  const section = document.querySelector('.funfact-section');
  observer.observe(section);
});




function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
    // Delay the hiding of the preloader
    window.addEventListener('load', function() {
      const preloader = document.getElementById('preloader');
      setTimeout(function() {
        preloader.style.display = 'none';
        navigationbar.style.display='block';
       
      }, 500); 
    });
  

