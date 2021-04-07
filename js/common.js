const loading = document.getElementById('loading');
window.onload = () => {
  window.setTimeout(() => {
    loading.style.opacity = 0;
  }, 500)
  window.setTimeout(() => {
    loading.style.display = "none";
  }, 1300)

}

const toggle = document.getElementById('toggleBtn');
// // 訪問者PCのテーマ検知---
// if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
//   /* ダークテーマの時 */
//   document.body.classList.add("dark-theme")
//   document.body.classList.add("light-theme");
//   toggle.checked = true;
// } else {
//   /* ライトテーマの時 */
//   console.log("lightを初期設定")
//   document.body.classList.add("light-theme");
// }

// テーマカラー切り替え---
toggle.addEventListener("change", () => {
  // ダークモード
  if (toggle.checked == true) {
    console.log("ダークに切り替え");
    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");
    return
  }
  // ライトモード
  console.log("ライトに切り替え")
  document.body.classList.remove("dark-theme");
  document.body.classList.add("light-theme");
})

// menuナビゲーション表示・非表示---
const menu = document.getElementById('menu')
const blackBack = document.getElementById('black-back')

const menuShowClose = () => {
  // 表示・非表示
  blackBack.classList.toggle("black-back-show")
  nav.classList.toggle("navShow");
  menu.classList.toggle("menu-close")
}

menu.addEventListener("click", () => {
  menuShowClose();
})
blackBack.addEventListener("click", () => {
  menuShowClose();
});

//お知らせ消去
const info = document.getElementById('info');
info.addEventListener('click', () => {
  info.style.opacity = 0;
  setTimeout(() => {
    console.log("do")
    info.style.display = 'none';
  }, 300);
});

let closePosiID;
info.addEventListener('mousemove', (e) => {
  clearTimeout(closePosiID);
  closePosiID = setTimeout(() => {

    const infoClose = document.getElementById('infoClose');
    infoClose.style.left = e.clientX + "px";
    infoClose.style.top = e.clientY + "px";
  }, 25);
})


// 各セクション上からの距離(初期)
let topSec = document.getElementById('topSec').getBoundingClientRect().y + window.pageYOffset
let portfolioSec = document.getElementById('portfolioSec').getBoundingClientRect().y + window.pageYOffset
let projectSec = document.getElementById('projectSec').getBoundingClientRect().y + window.pageYOffset
let contactSec = document.getElementById('contactSec').getBoundingClientRect().y + window.pageYOffset
console.log(topSec, portfolioSec, projectSec, contactSec)

// ウィンドウサイズ変更時距離を再代入
let timeoutID;
window.addEventListener('resize', () => {
  // resize完了300ms後実行
  clearTimeout(timeoutID)
  timeoutID = setTimeout(() => {
    const windowHeight = window.innerHeight;
    if (windowHeight < 500) {
      topScrollNext.style.display = "none";
    } else {
      topScrollNext.style.display = "block";
    }
    topSec = document.getElementById('topSec').getBoundingClientRect().y + window.pageYOffset
    portfolioSec = document.getElementById('portfolioSec').getBoundingClientRect().y + window.pageYOffset
    projectSec = document.getElementById('projectSec').getBoundingClientRect().y + window.pageYOffset
    contactSec = document.getElementById('contactSec').getBoundingClientRect().y + window.pageYOffset
    console.log(topSec, portfolioSec, projectSec, contactSec)
  }, 300)
})


// window スクロール時
let scrollY;
window.addEventListener('scroll', () => {
  scrollY = window.scrollY
  const linkPointer = document.getElementById("linkPointer");
  console.log("いま", scrollY)
  console.log("ポートフォリオ", portfolioSec)
  console.log("プロジェクト", projectSec)
  console.log("コンタクト", contactSec)
  // focus トップ（プロフィール）セクション
  if (scrollY < portfolioSec) {
    linkPointer.style.top = 0;
    // console.log("top");
    return;
  }
  //focus ポートフォリオセクション
  if (scrollY < projectSec) {
    // console.log("portfolio");
    linkPointer.style.top = "33%";
    return;
  }
  //focus 卒業制作セクション
  if (scrollY < contactSec) {
    // console.log("puroject");
    linkPointer.style.top = "66%";
    return;
  };
  // focus フッター（コンタクト）セクション
  // console.log("contact");
  linkPointer.style.top = "100%";
})



// page内リンククリックハンドラー
// topへ
const scrollTopKuni = document.getElementById("scrollTopKuni");
scrollTopKuni.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
})
// const scrollTopheader = document.getElementById("scrollTopheader");
// scrollTopheader.addEventListener('click', () => {
//   console.log("click top")
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth"
//   });
// })
const topLink = document.getElementById("topLink");
topLink.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
})
const scrollTop = document.getElementById("scrollTop");
scrollTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
})

// 100vhスクロール
const topScrollNext = document.getElementById("top_scroll_next");
topScrollNext.addEventListener('click', () => {
  const windowHeight = window.innerHeight;
  console.log(windowHeight)
  window.scrollTo({
    top: windowHeight,
    behavior: "smooth"
  })
})

// portfolioへ
const portfolioLink = document.getElementById("portfolioLink");
portfolioLink.addEventListener('click', () => {
  window.scrollTo({
    top: portfolioSec + 1,
    behavior: "smooth"
  });
})
const topLinkToPortfolio = document.getElementById("topLinkToPortfolio");
topLinkToPortfolio.addEventListener('click', () => {
  window.scrollTo({
    top: portfolioSec + 1,
    behavior: "smooth"
  })
})

// projectへ
const projectLink = document.getElementById("projectLink");
projectLink.addEventListener('click', () => {
  window.scrollTo({
    top: projectSec + 1,
    behavior: "smooth"
  });
})
const topLinkToProject = document.getElementById("topLinkToProject");
topLinkToProject.addEventListener('click', () => {
  window.scrollTo({
    top: projectSec + 1,
    behavior: "smooth"
  })
})

// contactへ
const contactLink = document.getElementById("contactLink");
contactLink.addEventListener('click', () => {
  // scrolltop部分の40pxをplusしてる
  window.scrollTo({
    top: contactSec + 40,
    behavior: "smooth"
  });
})
const topLinkToContact = document.getElementById("topLinkToContact");
topLinkToContact.addEventListener('click', () => {
  // scrolltop部分の40pxをplusしてる
  window.scrollTo({
    top: contactSec + 40,
    behavior: "smooth"
  })
})



// 01portfolioSec-練習作品 画面遷移サークルー
const transition = (goTo) => {
  const cirlce = document.getElementById("transition-circle");
  cirlce.style.transform = "translate(-50%, -50%) scale(1, 1)";
  setTimeout(() => {
    location.href = goTo;
  }, 1000);
}

document.getElementById("portfolio_design").addEventListener('click', () => {
  transition("./galleryDesign.html");
})
document.getElementById("portfolio_addobe").addEventListener('click', () => {
  transition("./galleryAddobe.html");
})


