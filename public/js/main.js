document.addEventListener("DOMContentLoaded", (e) => {
    const description = document.querySelectorAll(
        ".jobs-page .job .description span"
    );
    if (description.length > 0) {
        checkOverflow(description, 300);
    }
});

function checkOverflow(array, numberOfLetters) {
    array.forEach((element) => {
        if (element.innerText.length > numberOfLetters) {
            element.innerText =
                element.innerText.slice(0, numberOfLetters) + "...";
        }
    });
}
// console.log("asd");
document.getElementById("dropdown-bars").addEventListener("click", () => {
    console.log("asd");
    document.getElementById("links-box").classList.toggle("active");
});
