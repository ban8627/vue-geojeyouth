<template>
  <div class="modal-wrap">
    <div class="modal-main">
      <h1>
        <strong>본 사이트는 개인 포트폴리오용으로 제작되었습니다.</strong>
      </h1>
      <p>
        사이트에 대한 리소스는 원저작자에게 있습니다.<br />
        해당 사이트 관련 문제 사항이 있으시면 아래 메일을 통해 연락해주시면
        삭제하겠습니다.<br />
        본 사이트는 Chrome 에 최적화되어 있습니다.
      </p>
      <a href="mailto:ban8627@gmail.com" class="mail-bt">
        <span>ban8627@gmail.com</span>
        <i class="fas fa-envelope"></i>
      </a>
      <button class="modal-close">
        <i class="fas fa-times"></i>
      </button>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import { onMounted } from "vue";
export default {
  setup() {
    onMounted(() => {
      $("html").css("overflow", "hidden");

      const modalWrap = $(".modal-wrap");
      const modalClose = $(".modal-close");

      modalClose.click(() => {
        modalWrap.stop().fadeOut(100);
        $("html").css("overflow", "hidden");
      });

      const modalMain = $(".modal-main");
      modalMain.click((event) => {
        event.stopPropagation();
      });
      modalWrap.click(() => {
        modalWrap.stop().fadeOut(100);
        $("html").css("overflow", "auto");
      });
    });
    return {};
  },
};
</script>

<style scoped>
@charset "utf-8";

@font-face {
  font-family: "Pretendard-Regular";
  src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
    format("woff");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: "GmarketSansMedium";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}

.modal-wrap {
  font-family: "Pretendard-Regular";
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.modal-close {
  position: absolute;
  right: 10px;
  top: 10px;
  display: block;
  width: 14px;
  height: 14px;
  background-color: transparent;
  border: 0;
  color: #b7b7b7;
  cursor: pointer;
}

.modal-main {
  position: relative;
  border-radius: 15px;
  box-shadow: 5px 10px 27px rgba(0, 0, 0, 0.7);
  width: 100%;
  max-width: 800px;
  height: 100%;
  max-height: 360px;
  text-align: center;
  background: #fff url("@/assets/images/caution.png") no-repeat;
  background-position: center 56px;
  background-size: 221px 195px;
  padding: 10px;
}

.modal-main h1 {
  font-size: 25px;
  font-weight: 900;
  margin-top: 85px;
  margin-bottom: 30px;
}

.modal-main p {
  font-size: 20px;
  line-height: 1.3em;
  font-weight: 500;
}

.mail-bt {
  position: relative;
  margin-top: 50px;
  display: inline-block;
  font-size: 23px;
  font-weight: 700;
  color: #000;
}

.mail-bt::after {
  position: absolute;
  bottom: -4px;
  left: 50%;
  transform: translateX(-50%);
  display: block;
  width: 100%;
  height: 2px;
  background-color: #000;
  content: "";
}
</style>
