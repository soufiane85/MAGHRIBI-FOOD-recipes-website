// Live search
document.querySelector(".srch").addEventListener("input", function () {
    let input = this.value.toLowerCase();
    let items = document.querySelectorAll(".item");

    items.forEach(item => {
        let text = item.innerText.toLowerCase();
        if (text.includes(input)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
});


