const hand = document.querySelector(".hand");

hand.addEventListener("click", () => {

    hand.animate(
        [
            { transform: "scale(1) rotate(-8deg)" },
            { transform: "scale(1.15) rotate(8deg)" },
            { transform: "scale(1) rotate(-8deg)" }
        ],
        {
            duration: 400,
            iterations: 1
        });

});