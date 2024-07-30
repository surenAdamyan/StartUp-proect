const worksData = {
  1: {
    title: "Lorem Ipsum1",
    text: "Lorem ipsum dolor sit amet, consectetur psum dolor sit amet adipisicingpsum dolor sit amet elit1",
    image: "img/gal1.png",
  },
  2: {
    title: "Lorem Ipsum2",
    text: "Lorem ipsum dolor sit amet, psum dolor sit amet consectetur psum dolor sit amet adipisicing elit2",
    image: "img/gal2.png",
  },
  3: {
    title: "Lorem Ipsum3",
    text: "Lorem ipsum dolor psum dolor sit amet sit amet, consectetur adipisicing elit3",
    image: "img/gal3.png",
  },
  4: {
    title: "Lorem Ipsum4",
    text: "Lorem ipsum dolor sit amet, consectetur dolor sit amet sit amet  adipisicing elit4",
    image: "img/gal4.png",
  },
  5: {
    title: "Lorem Ipsum5",
    text: "Lorem ipsum dolor sit  dolor sit amet sit amet amet, consectetur adipisicing elit5",
    image: "img/gal5.png",
  },
  6: {
    title: "Lorem Ipsum6",
    text: "Lorem ipsum dolor sit amet sit amet sit amet, consectetur adipisicing elit6",
    image: "img/gal6.png",
  },
  7: {
    title: "Lorem Ipsum7",
    text: "Lorem ipsum dolor sit amet, consectetur dolor sit amet sit amet adipisicing elit7",
    image: "img/gal7.png",
  },
  8: {
    title: "Lorem Ipsum8",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing dolor sit amet sit amet elit8",
    image: "img/gal8.png",
  },
  9: {
    title: "Lorem Ipsum9",
    text: "Lorem ipsum dolor sit amet, consectetur dolor sit amet sit amet adipisicing elit9",
    image: "img/gal9.png",
  },
};
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".works-grid-item").forEach(function (item) {
    item.addEventListener("click", function () {
      let productId = this.getAttribute("data-id");
      let data = worksData[productId];
      if (data) {
        Swal.fire({
          title: data.title,
          html:
            '<img src="' +
            data.image +
            '" alt="' +
            data.title +
            '" style="width: 100%;"><p>' +
            data.text +
            "</p>",
          icon: "info",
          confirmButtonText: "Close",
        });
      } else {
        Swal.fire({
          title: "Error",
          text: "Content not found",
          icon: "error",
          confirmButtonText: "Close",
        });
      }
    });
  });
});