(function () {
  const quotes = [
    {
      quote:
        "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
      author: "― Roy T. Bennett",
    },
    {
      quote:
        "In three words I can sum up everything I've learned about life: it goes on.",
      author: "― Robert Frost",
    },
    {
      quote:
        "We are what we pretend to be, so we must be careful about what we pretend to be.",
      author: "― Kurt Vonnegut",
    },
    {
      quote:
        "Sometimes the questions are complicated and the answers are simple.",
      author: "― Dr. Suess",
    },
    {
      quote: "Everything you can imagine is real.",
      author: "― Pablo Piccaso",
    },
    {
      quote: "Life is what happens to us while we are making other plans.",
      author: "― Allen Saunders",
    },
    {
      quote:
        "Life is a mountain. Your goal is to find your path, not to reach the top.",
      author: "― Maxime Lagace",
    },
  ];

  const btn = document.getElementById("generate");

  btn.addEventListener("click", function () {
    let random = Math.floor(Math.random() * quotes.length);
    console.log(random);
    document.getElementById("quote").textContent = quotes[random].quote;
    document.querySelector(".author").textContent = quotes[random].author;
  });
})();
