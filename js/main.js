
document.addEventListener("DOMContentLoaded", function() {
  const otherLinks = document.getElementById("otherLinks");
  const megaMenu = document.querySelector(".mega-menu");
  const mainNavLinks = document.querySelectorAll('.main-link');
  const megaMenuLinks = megaMenu.querySelectorAll('a');

  otherLinks.addEventListener("click", function(event) {
    event.stopPropagation();
    megaMenu.classList.toggle('show-elemn');
    addActiveLinkClass(event.currentTarget.querySelector('a')); // Add active-link class to "Other Links"
  });

  document.addEventListener("click", function(event) {
    if (!megaMenu.contains(event.target) && !otherLinks.contains(event.target)) {
      megaMenu.classList.remove('show-elemn');
    }
  });

  // Function to handle adding the 'active-link' class
  function addActiveLinkClass(link) {
    // Remove 'active-link' class from all links
    const allLinks = document.querySelectorAll('.main-link, .mega-menu a, #otherLinks > a');
    allLinks.forEach(link => link.classList.remove('active-link'));

    // Add 'active-link' class to the clicked link
    link.classList.add('active-link');
  }

  // Add event listeners to main navigation links
  mainNavLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      addActiveLinkClass(event.target);
    });
  });

  // Add event listeners to mega menu links
  megaMenuLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.stopPropagation(); // Prevent closing the mega menu
      addActiveLinkClass(event.target);
    });
  });
});


window.addEventListener('scroll', function() {
  var skillsSection = document.querySelector('.skills');
  var skillsPosition = skillsSection.getBoundingClientRect();
  var screenHeight = window.innerHeight;
  var progressBars = document.querySelectorAll('.our-skills .skill .the-progress span');

  if (skillsPosition.top < screenHeight - 80 && skillsPosition.bottom > 0) {
      progressBars.forEach(function(bar) {
          var value = bar.getAttribute('data-progress');
          bar.style.width = value;
      });
  } else {
      progressBars.forEach(function(bar) {
          bar.style.width = '0'; // Reset width when out of view
      });
  }
});
  
  
  