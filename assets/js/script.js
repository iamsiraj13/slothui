document.querySelectorAll(".accordion-header").forEach((header) => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    const isOpen = content.style.maxHeight;

    // Close others
    document.querySelectorAll(".accordion-content").forEach((item) => {
      if (item !== content) {
        item.style.maxHeight = null;
        item.previousElementSibling.classList.remove("active"); // remove arrow rotate
      }
    });

    if (isOpen) {
      content.style.maxHeight = null;
      header.classList.remove("active"); // remove arrow rotate
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      header.classList.add("active"); // rotate arrow
    }
  });
});
