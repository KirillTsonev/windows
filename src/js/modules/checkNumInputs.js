const checkNumInputs = (selector) => {
    const numInputs = document.querySelectorAll(selector);

    numInputs.forEach(a => {
        a.addEventListener("input", () => {
            a.value = a.value.replace(/\D/gi, "");
        });
    });
};

export default checkNumInputs;