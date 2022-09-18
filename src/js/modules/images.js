const images = () => {
    const imgPopup = document.createElement("div");
    const workSection = document.querySelector(".works");
    const bigImage = document.createElement("img");
    const scroll = calcScroll();

    function calcScroll() {
        let div = document.createElement("div");

        div.style.width = "50px";
        div.style.height = "50px";
        div.style.overflowY = "scroll";
        div.style.visibility = "hidden";

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();
        return scrollWidth;
    }

    imgPopup.classList.add("popup");
    workSection.appendChild(imgPopup);

    imgPopup.style.justifyContent = "center";
    imgPopup.style.alignItems = "center";
    imgPopup.style.display = "none";

    imgPopup.appendChild(bigImage);

    workSection.addEventListener("click", (e) => {
        e.preventDefault();

        let target = e.target;

        if (target && target.classList.contains("preview")) {
            const path = target.parentNode.getAttribute("href");

            imgPopup.style.display = "flex";
            document.body.style.overflow = "hidden";
            document.body.style.marginRight = `${scroll}px`;
            bigImage.setAttribute("src", path);
        }

        if (target && target.matches("div.popup")) {
            imgPopup.style.display = "none";
            document.body.style.overflow = "";
            document.body.style.marginRight = `0px`;
        }
    });
};

export default images;