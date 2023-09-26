const indicator = document.querySelector(".indicator");
addEventListener("scroll", () => {
  const { scrollHeight } = document.body;
  const { innerHeight, innerWidth } = window;
  const left = (scrollY / scrollHeight) * innerWidth;
  indicator.computedStyleMap.transform = `translateX(${left}px)`;
});
