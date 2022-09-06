<template>
      <header class="header">

      <div class="inner">
        <a href="#" class="logo">
        </a>

        <div class="gnb">
          <ul class="menu">
            <li>
              <a href="#" class="mainmenu">청년센터</a>
              <ul class="submenu">
                <li><a href="#">청년센터소개</a></li>
                <li><a href="#">프로그램안내</a></li>
                <li><a href="#">보유도서목록</a></li>
                <li><a href="#">공간안내</a></li>
                <li><a href="#">오시는길</a></li>
              </ul>
            </li>
            <li>
              <a href="#" class="mainmenu">청년정책</a>
              <ul class="submenu">
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
              <a href="#" class="mainmenu">청년일자리</a>
              <ul class="submenu">
                <li><a href="#">일자리정책</a></li>
                <li><a href="#">구인 및 구직 등록</a></li>
                <li><a href="#">채용정보</a></li>
                <li><a href="#">교육훈련</a></li>
                <li><a href="#">창업정보</a></li>
              </ul>
            </li>
            <li>
              <a href="#" class="mainmenu">사업소개</a>
              <ul class="submenu">
                <li><a href="#">사업안내</a></li>
                <li><a href="#">사업일정표</a></li>
              </ul>
            </li>
            <li>
              <a href="#" class="mainmenu">공간예약</a>
              <ul class="submenu">
                <li><a href="#">공간신청</a></li>
                <li><a href="#">공간신청 현황</a></li>
              </ul>
            </li>
            <li>
              <a href="#" class="mainmenu">커뮤니티</a>
              <ul class="submenu">
                <li><a href="#">이룸소식</a></li>
                <li><a href="#">자유게시판</a></li>
                <li><a href="#">활동갤러리</a></li>
                <li><a href="#">청년뉴스</a></li>
                <li><a href="#">동영상자료</a></li>
              </ul>
            </li>
            <li>
              <a href="#" class="mainmenu">청년창업공간(<span style="color:#ff8000">내</span><span style="color:#0365ad">꿈</span><span
                  style="color:#93be49">공</span><span style="color:#f35c8a">간</span>)</a>
                <ul class="submenu">
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

        <div class="member">

          <ul class="member-list clearfix">
            <li><a href="#">로그인</a></li>
            <li><a href="#">회원가입</a></li>
          </ul>

          <button class="member-more">더보기</button>

        </div>

      </div>

    </header>
</template>

<script>
export default {

}
</script>

<style>
/* 상단 영역 */
.header {
  position: relative;
  display: block;
  z-index: 9999;
}

.header .inner {
  height: 98px;
}

.logo {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  display: block;
  width: 124px;
  height: 40px;
  background: url('@/assets/images/img_logo.png') no-repeat center;
  background-size: contain;
}

.gnb {
  position: relative;
  display: block;
}

.menu {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0;

  display: block;

  white-space: nowrap;
  font-size: 0;
}

.menu>li {
  position: relative;
  display: inline-block;
}

.mainmenu {
  position: relative;
  display: block;
  height: 98px;
  text-align: center;
  line-height: 98px;
  padding: 0 18px;
  font-size: 19px;
  color: #333;
}

.submenu {
  position: absolute;
  left: 50%;
  top: 70px;
  transform: translateX(-50%) translateY(10px);
  display: block;
  visibility: hidden;
  min-width: 182px;
  opacity: 0;
  transition: all 0.3s;

  background: #fff;
  border: 1px solid rgba(255, 255, 255, .3);
  border-radius: 3px;
  box-shadow: 0px 0px 10px rgb(0 0 0 / 8%);

}

.menu>li:hover .submenu {
  z-index: 999;
  visibility: visible;
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

.submenu li {
  position: relative;
  display: block;
}

.submenu li a {
  position: relative;
  display: block;

  text-align: center;
  white-space: nowrap;
  font-size: 14px;
  color: #333;
  font-weight: 400;
  line-height: 46px;
  border-bottom: 1px solid #eaeaea;
}

.submenu li:last-child a {
  border: none;
}

.menu>li:hover .mainmenu {
  color: #2578de;
}

.menu a:hover {
  color: #2578de;
}

.member {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  display: block;
}


.member-list {
  position: relative;
  display: block;
  float: left;
}

.member-list li {
  position: relative;
  display: block;
  float: left;
  margin-top: 12px;
  margin-right: 15px;
}

.member-list li a {
  position: relative;
  display: block;
  font-size: 14px;
  color: #666;

}


.member-more {
  position: relative;
  display: block;
  width: 45px;
  height: 45px;

  float: left;
  font-size: 0;
  background: url('@/assets/images/img_allmenu.png') no-repeat center;
  background-size: cover;

  border: 0;
  cursor: pointer;
}

/* 상단 PC 버전 */
/* 1400 보다 작은 경우 반응형 */
@media all and (max-width:1400px) {
  .header .inner {
    height: 90px;
  }

  .logo {
    width: 123px;
    height: 40px;
  }

  .menu {
    left: 60%;
    top: 28px;
  }

  .mainmenu {
    font-size: 17px;
    line-height: 65px;
    height: 65px;
  }

  .submenu {
    top: 60px;
  }

  .member {
    top: 20%;
  }

  .member-more {
    width: 35px;
    height: 35px;
    border-radius: 100%;
    margin-top: 5px;
  }

}

@media all and (max-width: 1000px) {
  .mb-bt {
    display: block;
  }
  .header {
    position:fixed;
    left:0;
    top:0;
    width:100%;
    height:70px;
    background: #fff;
  }
  .header .inner {
    height: 70px;
  }

  .gnb {
    display: none;
  }

  .member {
    display: none;
  }
}
</style>