// // NAVBAR

// let navbar = document.querySelector('.navbar');
// let searchForm = document.querySelector('.search-form');

// document.querySelector('#menu-btn').onclick = (event) => {
//   event.stopPropagation();
//   navbar.classList.toggle('active');
//   searchForm.classList.remove('active'); // Ensure only one is open at a time
// };

// document.querySelector('#search-btn').onclick = (event) => {
//   event.stopPropagation();
//   searchForm.classList.toggle('active');
//   navbar.classList.remove('active'); // Ensure only one is open at a time
// };

// document.addEventListener('click', (event) => {
//   if (!event.target.closest('.navbar') && !event.target.closest('.search-form')) {
//     navbar.classList.remove('active');
//     searchForm.classList.remove('active');
//   }
// });

// document.querySelector('#close-btn').onclick = () => {
//   navbar.classList.remove('active');
// };

// navbar.onclick = (event) => event.stopPropagation();
// searchForm.onclick = (event) => event.stopPropagation();

// // NAVBAR END

// // Shopping Cart

// let iconCart = document.querySelector('.icon-cart');
// let closeBtn = document.querySelector('.cartTab .close');
// let body = document.querySelector('body');

// iconCart.addEventListener('click', () => {
//   body.classList.toggle('activeTabCart');
// });

// closeBtn.addEventListener('click', () => {
//   body.classList.toggle('activeTabCart');
// });

// NAVBAR

// 
// JavaScript for Popup Functionality

document.addEventListener("DOMContentLoaded", () => {
    // Get elements
    const signupPopup = document.getElementById("signup-popup");
    const signinPopup = document.getElementById("signin-popup");
    const openSignupButtons = document.querySelectorAll(".open-signup-popup");
    const openSigninButtons = document.querySelectorAll(".open-signin-popup");
    const closeButtons = document.querySelectorAll(".close-btn");

    // Function to open a popup
    const openPopup = (popup) => {
        popup.classList.add("active");
    };

    // Function to close a popup
    const closePopup = (popup) => {
        popup.classList.remove("active");
    };

    // Add event listeners to open buttons
    openSignupButtons.forEach((button) => {
        button.addEventListener("click", () => {
            openPopup(signupPopup);
        });
    });

    openSigninButtons.forEach((button) => {
        button.addEventListener("click", () => {
            openPopup(signinPopup);
        });
    });

    // Add event listeners to close buttons
    closeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const popup = button.closest(".popup");
            closePopup(popup);
        });
    });

    // Close popup when clicking outside the popup content
    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("popup")) {
            closePopup(e.target);
        }
    });
});

