function completeBar(seconds) {
    const bars = document.querySelectorAll(".green-bar, .red-bar, .white-bar, .blue-bar, .yellow-bar");

for (i = 0; i < bars.length; ++i) {
        bars[i].style.transition = `${seconds}s linear width`;
        bars[i].style.width = "100%";
  }
  }