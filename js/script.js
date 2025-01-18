// NAVBAR

// let navbar = document.querySelector('.navbar');

// document.querySelector('#menu-btn').onclick = (event) => {
//   event.stopPropagation();
//   navbar.classList.toggle('active');
//   searchForm.classList.remove('active');
// };

// let searchForm = document.querySelector('.search-form');

// document.querySelector('#search-btn').onclick = (event) => {
//   event.stopPropagation();
//   searchForm.classList.toggle('active');
//   navbar.classList.remove('active');
// };

// let closeBtn = document.querySelector('#close-btn');

// closeBtn.onclick = () => {
//   navbar.classList.remove('active');
// };

// document.addEventListener('click', (event) => {
//   if (!event.target.closest('.navbar') && !event.target.closest('.search-form')) {
//     navbar.classList.remove('active');
//     searchForm.classList.remove('active');
//   }
// });

// navbar.onclick = (event) => event.stopPropagation();
// searchForm.onclick = (event) => event.stopPropagation();

// window.onscroll = () => {
//   navbar.classList.remove('active');
//   searchForm.classList.remove('active');
// };

let navbar = document.querySelector('.navbar');
let searchForm = document.querySelector('.search-form');
let iconCart = document.querySelector('.icon-cart');
let closeBtn = document.querySelector('.cartTab .close');
let body = document.querySelector('body');

// menu-bar
document.querySelector('#menu-btn').onclick = (event) => {
  event.stopPropagation();
  navbar.classList.toggle('active');
  searchForm.classList.remove('active');
  body.classList.remove('activeTabCart');
};

// search form
document.querySelector('#search-btn').onclick = (event) => {
  event.stopPropagation();
  searchForm.classList.toggle('active');
  navbar.classList.remove('active');
  body.classList.remove('activeTabCart');
};

document.addEventListener('click', (event) => {
  if (!event.target.closest('.navbar') && !event.target.closest('.search-form')) {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    body.classList.remove('activeTabCart');
  }
});


document.querySelector('#close-btn').onclick = () => {
  navbar.classList.remove('active');
};

navbar.onclick = (event) => event.stopPropagation();
searchForm.onclick = (event) => event.stopPropagation();

// Shopping Cart

iconCart.addEventListener('click', (event) => {
  event.stopPropagation();
  body.classList.toggle('activeTabCart');
  navbar.classList.remove('active'); // Close navbar
  searchForm.classList.remove('active'); // Close search form
});

closeBtn.addEventListener('click', () => {
  body.classList.remove('activeTabCart');
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.cartTab') && !event.target.closest('.icon-cart')) {
    body.classList.remove('activeTabCart');
  }
});

// NAVBAR END

// SLIDESHOW

let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
let interval;

// Show the specified slide
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
  currentIndex = index;
  updateActiveDot(currentIndex);
}

// Auto slide functionality
function autoSlide() {
  clearInterval(interval);
  interval = setInterval(() => {
    const nextIndex = (currentIndex + 1) % totalSlides;
    showSlide(nextIndex);
  }, 5000);
}

// Go to a specific slide (manual control)
function goToSlide(index) {
  clearInterval(interval);
  showSlide(index);
  autoSlide();
}

// Update active dot indicator
function updateActiveDot(index) {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

// Initialize the slideshow
function initializeSlideshow() {
  showSlide(0);
  autoSlide();
}

initializeSlideshow();


// SLIDESHOW END

// Details
let previewContainer = document.querySelector('.products-preview');
let previewBoxes = previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.pd-container .product').forEach(product => {
    product.onclick = () => {
        previewContainer.style.display = 'flex';
        let name = product.getAttribute('data-name');
        previewBoxes.forEach(preview => {
            let target = preview.getAttribute('data-target');
            if (name === target) {
                preview.classList.add('active');
            }
        });
    };
});

previewBoxes.forEach(preview => {
    preview.querySelector('.fa-times').onclick = () => {
        preview.classList.remove('active');
        previewContainer.style.display = 'none';
    };
});
previewBoxes.forEach(preview => {
    preview.querySelector('.buy').onclick = () => {
        preview.classList.remove('active');
        previewContainer.style.display = 'none';
    };
});
previewBoxes.forEach(preview => {
    preview.querySelector('.cart').onclick = () => {
        preview.classList.remove('active');
        previewContainer.style.display = 'none';
    };
});

// Back-to-top button functionality
    const backToTopButton = document.getElementById('backToTop');
    window.onscroll = function() {
        backToTopButton.style.display = window.scrollY > 200 ? 'block' : 'none';
    };
    backToTopButton.onclick = function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

// // JavaScript for Popup Functionality

// document.addEventListener("DOMContentLoaded", () => {
//     // Get elements
//     const signupPopup = document.getElementById("signup-popup");
//     const signinPopup = document.getElementById("signin-popup");
//     const openSignupButtons = document.querySelectorAll(".open-signup-popup");
//     const openSigninButtons = document.querySelectorAll(".open-signin-popup");
//     const closeButtons = document.querySelectorAll(".popup .close-btn");

//     // Function to open a popup
//     const openPopup = (popup) => {
//         popup.classList.add("active");
//     };

//     // Function to close a popup
//     const closePopup = (popup) => {
//         popup.classList.remove("active");
//     };

//     // Add event listeners to open buttons
//     openSignupButtons.forEach((button) => {
//         button.addEventListener("click", () => {
//             openPopup(signupPopup);
//         });
//     });

//     openSigninButtons.forEach((button) => {
//         button.addEventListener("click", () => {
//             openPopup(signinPopup);
//         });
//     });

//     // Add event listeners to close buttons
//     closeButtons.forEach((button) => {
//         button.addEventListener("click", () => {
//             const popup = button.closest(".popup");
//             closePopup(popup);
//         });
//     });

//     // Close popup when clicking outside the popup content
//     document.addEventListener("click", (e) => {
//         if (e.target.classList.contains("popup")) {
//             closePopup(e.target);
//         }
//     });
// });
    // JavaScript for Popup Functionality
document.addEventListener("DOMContentLoaded", () => {
    // Get the elements for the sign-up popup
    const signupPopup = document.getElementById("signup-popup");
    const signupButton = document.querySelector(".open-signup-popup");
    const signupCloseBtn = signupPopup.querySelector(".close-btn");

    // Get the elements for the sign-in popup
    const signinPopup = document.getElementById("signin-popup");
    const signinButton = document.querySelector(".open-signin-popup");
    const signinCloseBtn = signinPopup.querySelector(".close-btn");

    // Function to open a popup
    const openPopup = (popup) => {
        popup.classList.add("active");
    };

    // Function to close a popup
    const closePopup = (popup) => {
        popup.classList.remove("active");
    };

    // Attach event listener to the sign-up button
    signupButton.addEventListener("click", () => {
        openPopup(signupPopup);
    });

    // Attach event listener to the close button of sign-up popup
    signupCloseBtn.addEventListener("click", () => {
        closePopup(signupPopup);
    });

    // Attach event listener to the sign-in button
    signinButton.addEventListener("click", () => {
        openPopup(signinPopup);
    });

    // Attach event listener to the close button of sign-in popup
    signinCloseBtn.addEventListener("click", () => {
        closePopup(signinPopup);
    });

    // Close popup when clicking outside of it
    window.addEventListener("click", (event) => {
        if (event.target === signupPopup) {
            closePopup(signupPopup);
        }
        if (event.target === signinPopup) {
            closePopup(signinPopup);
        }
    });

    // Prevent form submission for demonstration purposes
    const forms = document.querySelectorAll("form");
    forms.forEach((form) => {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            alert("Form submitted successfully!");
            closePopup(signupPopup);
            closePopup(signinPopup);
        });
    });
});
