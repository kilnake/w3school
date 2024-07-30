// scroll-shrink
window.addEventListener("scroll", function () {
  const nameSection = document.getElementById("name");
  const scrollY = window.scrollY;
  const minFontSize = 5; // Minimum font size in vw
  const maxFontSize = 7; // Maximum font size in vw
  const maxScroll = 300; // Adjust based on when you want the maximum reduction to happen

  const newFontSize = Math.max(
    minFontSize,
    maxFontSize - (scrollY / maxScroll) * (maxFontSize - minFontSize)
  );
  nameSection.style.fontSize = newFontSize + "vw";
});
