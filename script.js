function toggleMenu(){
  document.getElementById("navLinks").classList.toggle("show");
}




// Scroll to footer when hero button clicked
document.addEventListener("DOMContentLoaded", function () {

  const btn = document.querySelector(".hero button");

  if (btn) {
    btn.addEventListener("click", function () {
      document.querySelector("footer").scrollIntoView({
        behavior: "smooth"
      });
    });
  }

});



// FAQ ACCORDION

document.addEventListener("DOMContentLoaded", function () {

  const questions = document.querySelectorAll(".faq-question");

  questions.forEach(q => {
    q.addEventListener("click", () => {

      const answer = q.nextElementSibling;

      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
      } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
      }

    });
  });

});











