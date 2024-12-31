//code for opening menu bar

document.addEventListener("DOMContentLoaded", function() {
  // Verify the button exists
  const button = document.getElementById("bookSiteButton");
  if (!button) {
      console.error("Button not found in DOM!");
      return;
  }
 

  // Scroll event listener
  window.addEventListener('scroll', function() {
      

      // Get the scroll position
      const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
   

      // Show button when scrolled 100px
      if (scrollTop > 350) {
         
          button.style.display = "block";
      } else {
        
          button.style.display = "none";
      }
  });

  // Initial hide
  button.style.display = "none";
});




document.getElementById("open").addEventListener("click" , openmenu());

function openmenu(){
  showmenu.style.display= "block";
  showmenufull.style.display= "block";
}

document.getElementById("close").addEventListener("click",closemenu());

function closemenu() {

    showmenu.style.display="none";
    showmenufull.style.display= "none";  
}


// Code for products dropdown
function opendropdown() {
  const dropdownMenu = document.querySelector('.dropdown_menu');
  const buttonIcon = document.querySelector('.prod_mob i');

  // Toggle dropdown display
  if (dropdownMenu.classList.contains('show')) {
      // Remove show class for closing the dropdown
      dropdownMenu.classList.remove('show');
      buttonIcon.classList.remove('rotate');

      // Wait for the transition to finish before hiding the dropdown
      setTimeout(() => {
          dropdownMenu.style.display = 'none'; // Hide the dropdown
      }, 300); // Match this time to the transition duration
  } else {
      // Show the dropdown
      dropdownMenu.style.display = 'block'; // Show it first to calculate height
      // Use a timeout to ensure the display is set before adding the show class
      setTimeout(() => {
          dropdownMenu.classList.add('show');
          buttonIcon.classList.add('rotate'); // Rotate icon
      }, 10); // A small delay to allow the display to take effect
  }
}

// Ensure the dropdown is initially hidden
document.addEventListener('DOMContentLoaded', function () {
  const dropdownMenu = document.querySelector('.dropdown_menu');
  dropdownMenu.style.display = 'none'; // Hide it initially
});


// Function to open the banner
function openBanner() {
  const visitBanner = document.getElementById("visitBanner");
  const overlay = document.getElementById("bookingoverlay");
  const vistModal = document.querySelector(".vist-modal");

  if (visitBanner && vistModal) {
    visitBanner.style.display = "block"; // Show the banner
    vistModal.style.display = "flex";
    overlay.style.display = "block";  // Show the modal overlay
  } else {
    console.error("Elements 'visitBanner' or 'vist-modal' not found.");
  }
}

// Function to close the banner
function closeBanner() {
  const visitBanner = document.getElementById("visitBanner");
  const overlay = document.getElementById("bookingoverlay");
  const vistModal = document.querySelector(".vist-modal");

  if (visitBanner && vistModal) {
    visitBanner.style.display = "none"; // Hide the banner
    vistModal.style.display = "none";
    overlay.style.display = "none";  // Hide the modal overlay
  } else {
    console.error("Elements 'visitBanner' or 'vist-modal' not found.");
  }
}


// code for window scrooll button



