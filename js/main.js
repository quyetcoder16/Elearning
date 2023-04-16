/* truncateCardTitle */

window.addEventListener("load", function () {
    truncateCardTitle();
});

function truncateCardTitle() {
    var cardList = document.getElementsByClassName("card-title");
    console.log(cardList);
    for (var i = 0; i < cardList.length; i++) {
        var text = cardList[i].innerHTML;
        var newText = truncateString(text, 35);
        cardList[i].innerHTML = newText;
    }
}

function truncateString(str, num) {
    if (str.length > num) {
        return str.slice(0, num) + "...";
    } else {
        return str;
    }
}

/* sidebar mini */

var toggleBtn = document.querySelector(".sidebarMini__button");
var sibarMini = document.querySelector(".sidebarMini");
var switchBtn = document.querySelector("#checkbox");

toggleBtn.addEventListener("click", function () {
    sibarMini.classList.toggle("is-opened");
});

switchBtn.addEventListener("click", function () {
    document.querySelector("body").classList.toggle("darkMode");
});