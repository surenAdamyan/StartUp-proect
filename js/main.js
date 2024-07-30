const mobileBtn = document.querySelector(".mobile-icon");
const mainNav = document.querySelector(".main-nav");
const navLinks = document.querySelectorAll(".main-nav li a");
const body = document.body;
// const bannerButton = document.querySelector(".bannerButton");
const worksNav = document.querySelector(".works-ul");
const worksGridItems = document.querySelectorAll(
  ".works-grid .works-grid-item"
);
const openModalBtns = document.querySelectorAll(".open-modal-btn");
const closeModalBtns = document.querySelectorAll(".close-modal-btn");
const modalContainer = document.querySelector(".modal-container");
const upButton = document.querySelector("#upButton");
const heroContent = document.querySelector(".hero-content");
const footerDate = document.getElementById("footer-date");
const nameError = document.querySelector("#name-error");
const emailError = document.querySelector("#email-error");
const subjectError = document.querySelector("#subject-error");
const companyError = document.querySelector("#company-error");
const messageError = document.querySelector("#message-error");
const submitError = document.querySelector("#submit-error");
const currentYear = new Date().getFullYear();

mobileBtn.addEventListener("click", function () {
  mainNav.classList.toggle("active");
  mobileBtn.classList.toggle("active");
  body.classList.toggle("noscroll");
});

navLinks.forEach((item) =>
  item.addEventListener("click", function () {
    mainNav.classList.remove("active");
    mobileBtn.classList.remove("active");
    body.classList.remove("noscroll");
  })
);

window.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop > 500) {
    upButton.style.display = "block";
  } else {
    upButton.style.display = "none";
  }
});

upButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiperReviews = new Swiper(".reviews-slider", {
  loop: true,
  slidesPerView: 1,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

});

document.querySelectorAll(".js-scroll-to-section").forEach(function (element) {
  element.addEventListener("click", function (event) {
    event.preventDefault();
    let id = this.getAttribute("href");
    let targetElement = document.querySelector(id);
    let top = targetElement.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({
      top: top,
      behavior: "smooth",
    });
  });
});

worksNav.addEventListener("click", function (e) {
  if (e.target.tagName !== "LI") return false;
  let filterClass = e.target.dataset["filter"];
  worksGridItems.forEach((worksGridItem) => {
    worksGridItem.classList.remove("hide");
    if (
      filterClass !== "all" &&
      !worksGridItem.classList.contains(filterClass)
    ) {
      worksGridItem.classList.add("hide");
    }
  });
});

function validateName() {
  const name = document.querySelector("#full-name");
  if (name.value == "") {
    nameError.textContent = "Name is required";
    return false;
  }
  if (!name.value.match(/^[A-Za-z]*/)) {
    nameError.textContent = "Write full Name";
    return false;
  }
  nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}
function validateSubject() {
  const subject = document.querySelector("#subject");
  if (subject.value == "") {
    subjectError.textContent = "subject is required";
    return false;
  }
  if (!subject.value.match(/^[A-Za-z]*/)) {
    subjectError.textContent = "Write subject";
    return false;
  }
  subjectError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}
function validateCompanyName() {
  const company = document.querySelector("#company");
  if (company.value == "") {
    companyError.textContent = "company is required";
    return false;
  }
  if (!company.value.match(/^[A-Za-z]*/)) {
    companyError.textContent = "Write company name";
    return false;
  }
  companyError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}
function validateEmail() {
  const email = document.querySelector("#email");
  if (email.value.length == 0) {
    emailError.textContent = "email is required";
    return false;
  }
  if (!email.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
    emailError.textContent = "enter correct email";
    return false;
  }
  emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}
function validateMessage() {
  const message = document.querySelector("#message");
  const messageValue = message.value;
  const required = 30;
  const left = required - messageValue.length;
  if (left > 0) {
    messageError.innerHTML = left + " more characters required";
    return false;
  }
  messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}
function validateForm() {
  if (
    !validateName() ||
    !validateEmail() ||
    !validateMessage() ||
    !validateSubject() ||
    !validateCompanyName()
  ) {
    submitError.style.display = "block";
    submitError.textContent = "Please fix error";
    setTimeout(function () {
      submitError.style.display = "none";
    }, 3000);
    return false;
  }
}

footerDate.textContent = currentYear;
