const html = document.querySelector("html") as HTMLHtmlElement;

const devCards: HTMLLIElement[] = Array.from(
  document.getElementsByClassName("dev-card")
) as HTMLLIElement[];

devCards.forEach((devCard) => {
  devCard.addEventListener("click", () => {
    const modalBackground = devCard.querySelector(
      ".modal-background"
    ) as HTMLDivElement | null;

    if (modalBackground) modalBackground.style.display = "flex";

    html.style.overflow = "hidden";
  });
});

function onModalBackgroundClick(modalBackground: HTMLDivElement) {}

const modalBackgrounds = Array.from(
  document.querySelectorAll(".modal-background")
) as HTMLDivElement[];

modalBackgrounds.forEach((modalBackground) => {
  modalBackground.addEventListener("click", (e) => {
    e.stopPropagation();
    modalBackground.style.display = "none";
    html.style.overflow = "auto";
  });
});

const modalBoxes = Array.from(
  document.querySelectorAll(".modal-box")
) as HTMLDivElement[];

modalBoxes.forEach((modalBox) => {
  modalBox.addEventListener("click", (e) => {
    e.stopPropagation();
  });
});
