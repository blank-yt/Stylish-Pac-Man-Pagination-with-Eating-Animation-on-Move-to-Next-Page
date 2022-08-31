window.onload = function () {
  const c = document.querySelector(".container");
  const indexes = Array.from(document.querySelectorAll(".index"));
  let cur = -1;

  indexes.forEach((index, i) => {
    index.addEventListener("click", (e) => {
      c.className = "container";
      void c.offsetWidth;
      c.classList.add("open");
      c.classList.add(`i${i + 1}`);
      if (cur > i) {
        c.classList.add("flip");
      }
      cur = i;
    });
  });
};
