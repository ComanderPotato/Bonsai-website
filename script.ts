const accordionItems = document.querySelectorAll(
  ".faq__item"
) as NodeListOf<HTMLDivElement>;

accordionItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.stopPropagation();
    const item = e.target as HTMLDivElement;
    const dropdown = item.closest(".faq__item")?.lastElementChild;

    dropdown?.classList.toggle("faq__dropdown--active");
  });
});
console.log(accordionItems);
