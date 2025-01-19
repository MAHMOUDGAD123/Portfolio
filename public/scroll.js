// window scrolling
const OnWindowScroll = async () => {
  const header = document.querySelector("header");

  // header behavior
  if (window.scrollY >>> 0 === 0) {
    header.classList.remove("scroll-down");
  } else {
    header.classList.add("scroll-down");
  }
};
OnWindowScroll();
window.addEventListener("scrollend", OnWindowScroll, false);
