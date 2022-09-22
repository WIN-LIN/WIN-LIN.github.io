const headline = document.getElementById("headline");
const expandBtn = document.getElementById("expand-btn");
headline.addEventListener(
  "click",
  () => (headline.textContent = "Have a Good Time!")
);
expandBtn.addEventListener("click", () => {
  document.getElementById("container-box-2").style.display = "flex";
});
