"use strict";
const accordionItems = document.querySelectorAll(".faq__item");
accordionItems.forEach((item) => {
    item.addEventListener("click", (e) => {
        var _a;
        e.stopPropagation();
        const item = e.target;
        const dropdown = (_a = item.closest(".faq__item")) === null || _a === void 0 ? void 0 : _a.lastElementChild;
        dropdown === null || dropdown === void 0 ? void 0 : dropdown.classList.toggle("faq__dropdown--active");
    });
});
console.log(accordionItems);
