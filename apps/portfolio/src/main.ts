const html = document.documentElement;

function showModal(modalBackground: HTMLDivElement) {
  modalBackground.classList.add("show");
  html.classList.add("show-modal");
}

function hideModal(modalBackground: HTMLDivElement) {
  modalBackground.classList.remove("show");
  html.classList.remove("show-modal");
}

function addModalEventListeners(modalBackground: HTMLDivElement) {
  const modalBox = modalBackground.querySelector(
    ".modal-box"
  ) as HTMLDivElement | null;
  const closeButton = modalBackground.querySelector(
    ".modal-close-button"
  ) as HTMLDivElement | null;

  if (!modalBox || !closeButton) return;

  // 배경 클릭 시 닫기
  modalBackground.addEventListener("click", (e: MouseEvent) => {
    e.stopPropagation();
    hideModal(modalBackground);
  });

  // 모달 내부 클릭 시 이벤트 전파 방지
  modalBox.addEventListener("click", (e: MouseEvent) => {
    e.stopPropagation();
  });

  // 닫기 버튼 클릭 시 닫기
  closeButton.addEventListener("click", (e: MouseEvent) => {
    e.stopPropagation();
    hideModal(modalBackground);
  });
}

function initModalTriggers() {
  const devCards = Array.from(
    document.getElementsByClassName("dev-card")
  ) as HTMLLIElement[];

  devCards.forEach((devCard) => {
    const modalBackground = devCard.querySelector(
      ".modal-background"
    ) as HTMLDivElement | null;
    if (!modalBackground) return;

    // 카드 클릭 시 모달 열기
    devCard.addEventListener("click", () => showModal(modalBackground));

    // 모달 관련 이벤트 등록
    addModalEventListeners(modalBackground);
  });
}

initModalTriggers();
