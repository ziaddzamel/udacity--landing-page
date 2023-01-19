// Create the navbar
var navbar = document.getElementById("navbar__list");// Get the navbar element
var sections = document.querySelectorAll("section");// Get all the sections on the page

// Create a function to create the navbar links
function createNavbarLinks() {
  for (let i = 0; i < sections.length; i++) {
    const sectionName = sections[i].getAttribute("data-nav");
    const navItem = document.createElement("li");
    const navLink = document.createElement("a");
    // Add the class "menu__link" to the anchor element
    navLink.classList.add("menu__link");
    navLink.href = "#" + sections[i].id;// Set the href of the anchor element to the ID of the section
    navLink.textContent = sectionName;// Set the text of the anchor element to the data-nav attribute
    navItem.appendChild(navLink); // Append the anchor element to the list item
    // Append the list item to the navbar
    navbar.appendChild(navItem);
  }
}

// Call the function to create the navbar links
createNavbarLinks();

// Get the back to top button
var button = document.getElementById('myBtn');

// Show the button when the user scrolls down 400 pixels
window.onscroll = function() {
  if (window.pageYOffset >= 400) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
};

// Scroll to the top of the page with a smooth transition
button.onclick = function() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
};

// Add event listener for scrolling
window.addEventListener("scroll", () => {
  // Get the current scroll position
  const currentScrollPosition = window.scrollY;

  // Loop through each section
  sections.forEach(section => {
    // Get the section offset position
    const sectionOffsetPosition = section.offsetTop - 50;

    // If the current scroll position is greater than the section offset position
    if (currentScrollPosition > sectionOffsetPosition) {
      // Get the section id
      const sectionId = section.getAttribute("id");

      // Remove active class from all sections
      sections.forEach(section => {
        section.classList.remove("your-active-class");
      });

      // Add active class to current section
      section.classList.add("your-active-class");

      // Remove active class from all list items
      navbar.querySelectorAll("li").forEach(item => {
        item.classList.remove("navbarclick");
      });

      // Add active class to current list item
      navbar.querySelector(`a[href="#${sectionId}"]`).parentElement.classList.add("navbarclick");
    }
  });
});
