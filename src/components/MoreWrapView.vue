<template>
  <div class="more-wrap">
    <div class="more-div">
      <button class="more-div-close">
        <span class="icon-x"></span>
      </button>
      <h2>
        <b>거제청년센터 이룸</b>
        전체메뉴
      </h2>
      <ul class="more-cont clearfix">
        <li>
          <a href="#" class="more-mainmenu">청년센터</a>
          <ul class="more-submenu">
            <li><a href="#">청년센터소개</a></li>
            <li><a href="#">프로그램안내</a></li>
            <li><a href="#">보유도서목록</a></li>
            <li><a href="#">공간안내</a></li>
            <li><a href="#">오시는길</a></li>
          </ul>
        </li>
        <li>
          <a href="#" class="more-mainmenu">청년정책</a>
          <ul class="more-submenu">
            <li><a href="#">정책소식</a></li>
            <li><a href="#">분야별 청년정책</a></li>
            <li><a href="#">청년네트워크 소개</a></li>
            <li><a href="#">청년주요활동</a></li>
            <li><a href="#">청년정책 검색</a></li>
            <li><a href="#">아카이브</a></li>
            <li><a href="#">청춘다락</a></li>
          </ul>
        </li>
        <li>
          <a href="#" class="more-mainmenu">청년일자리</a>
          <ul class="more-submenu">
            <li><a href="#">일자리정책</a></li>
            <li><a href="#">구인 및 구직 등록</a></li>
            <li><a href="#">채용정보</a></li>
            <li><a href="#">교육훈련</a></li>
            <li><a href="#">창업정보</a></li>
          </ul>
        </li>
        <li>
          <a href="#" class="more-mainmenu">사업소개</a>
          <ul class="more-submenu">
            <li><a href="#">사업안내</a></li>
            <li><a href="#">사업일정표</a></li>
          </ul>
        </li>
        <li>
          <a href="#" class="more-mainmenu">공간예약</a>
          <ul class="more-submenu">
            <li><a href="#">공간신청</a></li>
            <li><a href="#">공간신청 현황</a></li>
          </ul>
        </li>
        <li>
          <a href="#" class="more-mainmenu">커뮤니티</a>
          <ul class="more-submenu">
            <li><a href="#">이룸소식</a></li>
            <li><a href="#">자유게시판</a></li>
            <li><a href="#">활동갤러리</a></li>
            <li><a href="#">청년뉴스</a></li>
            <li><a href="#">동영상자료</a></li>
          </ul>
        </li>
        <li>
          <a href="#" class="more-mainmenu">청년창업공간(<span style="color:#ff8000">내</span><span
              style="color:#0365ad">꿈</span><span style="color:#93be49">공</span><span
              style="color:#f35c8a">간</span>)</a>
          <ul class="more-submenu">
            <li><a href="#"><span style="color:#ff8000">내</span><span style="color:#0365ad">꿈</span><span
                  style="color:#93be49">공</span><span style="color:#f35c8a">간</span> 소개</a></li>
            <li><a href="#"><span style="color:#ff8000">내</span><span style="color:#0365ad">꿈</span><span
                  style="color:#93be49">공</span><span style="color:#f35c8a">간</span> 대관신청</a></li>
            <li><a href="#"><span style="color:#ff8000">내</span><span style="color:#0365ad">꿈</span><span
                  style="color:#93be49">공</span><span style="color:#f35c8a">간</span> 대관현황</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  import {
    onUpdated
  } from 'vue'
  export default {
    setup() {
      onUpdated(() => {
        let more_wrap = $('.more-wrap');
        let member_more = $('.member-more');
        let more_close = $('.more-div-close');
        member_more.click(function () {
          more_wrap.fadeIn(300);
        });
        more_close.click(function () {
          more_wrap.fadeOut(300);
        });

        // 더보기 메뉴 배경을 클릭하면 사라지기
        more_wrap.click(function () {
          more_wrap.fadeOut(300);
        });
        $('.more-div').click(function (event) {
          event.stopPropagation();
        });
      })
      return {}
    }
  }
</script>

<style>
  /* 더보기 관련 */
  /* 더보기 메뉴 */
  .more-wrap {
    position: fixed;
    left: 0;
    top: 0;
    display: none;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .6);
    z-index: 99999;

    overflow-x: hidden;
    overflow-y: auto;
  }

  .more-div {
    position: relative;
    display: block;
    width: 75%;
    margin: 0 auto;
    margin-top: 180px;
    background: #fff;
    padding: 80px 86px 90px;
  }

  .more-div h2 {
    position: relative;
    display: block;
    font-size: 32px;
    color: #222;
    font-weight: 300;
    white-space: nowrap;
    margin-bottom: 50px;
  }

  .more-div h2 b {
    color: #2578de;
    font-weight: 700;
  }

  .more-div-close {
    position: absolute;
    right: 0;
    top: 0;
    display: block;
    width: 70px;
    height: 70px;
    background: #2578de;
    border: 0;
    cursor: pointer;
    transition: transform 0.5;
  }

  .icon-x {
    position: absolute;
    left: 50%;
    top: 50%;
    display: block;
    width: 20px;
    height: 20px;
    transform: translate(-50%, -50%) rotate(-45deg);
    transition: transform 0.3s;
  }

  .more-div-close:hover .icon-x {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  .icon-x::before {
    content: '';
    position: absolute;
    left: 0;
    top: 9px;
    display: block;
    width: 100%;
    height: 2px;
    background: #fff;
  }

  .icon-x::after {
    content: '';
    position: absolute;
    left: 9px;
    top: 0;
    display: block;
    width: 2px;
    height: 100%;
    background: #fff;
  }

  .more-cont {
    position: relative;
    display: block;
    font-size: 0;
    border-bottom: 1px solid #dedede;
  }

  .more-cont>li {
    position: relative;
    display: inline-block;
    vertical-align: top;
    width: calc(100% / 6);
    padding-right: 30px;
    margin-bottom: 85px;
  }

  .more-cont>li:nth-child(6n) {
    padding-right: 0;
  }

  /* 이러면 곤란 */
  .more-cont>li:last-child {
    margin-bottom: 0;
    padding-right: 0;
  }

  .more-cont li:hover .more-mainmenu {
    color: #2578de;
    border-bottom: 2px solid #2578de;
  }

  .more-cont a {
    white-space: nowrap;
  }

  .more-mainmenu {
    position: relative;
    display: block;
    font-size: 19px;
    color: #222;
    padding-bottom: 50px;
    border-bottom: 2px solid #444;
  }

  .more-submenu {
    position: relative;
    display: block;
    padding-top: 35px;
  }

  .more-submenu li {
    position: relative;
    display: block;
    margin-bottom: 20px;
  }

  .more-submenu li a {
    position: relative;
    display: block;
    font-size: 15px;
    color: #666;
  }

  .more-submenu a:hover {
    color: #2578de;
  }

  .more-wrap-open {
    display: block;
  }

  /* 더보기 pc */
  /* 더보기 반응형 */
  @media all and (max-width:1100px) {
    .more-submenu li a {
      font-size: 14px;
    }
  }

  @media all and (max-width:1000px) {
    .more-wrap {
      display: none !important;
    }
  }
</style>