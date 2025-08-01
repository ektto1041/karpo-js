var html = document.documentElement;
function showModal(modalBackground) {
  modalBackground.classList.add("show");
  html.classList.add("show-modal");
}
function hideModal(modalBackground) {
  modalBackground.classList.remove("show");
  html.classList.remove("show-modal");
}
function addModalEventListeners(modalBackground) {
  var modalBox = modalBackground.querySelector(".modal-box");
  var closeButton = modalBackground.querySelector(".modal-close-button");
  if (!modalBox || !closeButton) return;

  // 배경 클릭 시 닫기
  modalBackground.addEventListener("click", function (e) {
    e.stopPropagation();
    hideModal(modalBackground);
  });

  // 모달 내부 클릭 시 이벤트 전파 방지
  modalBox.addEventListener("click", function (e) {
    e.stopPropagation();
  });

  // 닫기 버튼 클릭 시 닫기
  closeButton.addEventListener("click", function (e) {
    e.stopPropagation();
    hideModal(modalBackground);
  });
}
function initModalTriggers() {
  var devCards = Array.from(document.getElementsByClassName("dev-card"));
  devCards.forEach(function (devCard) {
    var modalBackground = devCard.querySelector(".modal-background");
    if (!modalBackground) return;

    // 카드 클릭 시 모달 열기
    devCard.addEventListener("click", function () {
      return showModal(modalBackground);
    });

    // 모달 관련 이벤트 등록
    addModalEventListeners(modalBackground);
  });
}
initModalTriggers();