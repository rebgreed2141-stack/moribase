const menuData = [
  {
    number: "①",
    title: "園児管理",
    description: "園児の基本情報や在籍情報を管理します。",
    items: [
      "園児名簿",
      "入園・退園管理",
      "クラス管理",
      "緊急連絡先",
      "保護者情報",
      "アレルギー情報",
      "園児検索"
    ]
  },
  {
    number: "②",
    title: "職員管理",
    description: "職員の基本情報、資格、勤務履歴を管理します。",
    items: [
      "職員名簿",
      "入職・退職管理",
      "職員情報",
      "資格管理",
      "勤務履歴",
      "職員検索"
    ]
  },
  {
    number: "③",
    title: "登降園・出欠管理",
    description: "園児の出欠、登降園時刻、延長保育を管理します。",
    items: [
      "園児出欠表",
      "登降園記録",
      "延長保育記録",
      "出席状況集計",
      "欠席一覧"
    ]
  },
  {
    number: "④",
    title: "保育記録",
    description: "日々の保育計画と振り返り、行事記録を管理します。",
    items: [
      "週案日誌",
      "月案",
      "保育振り返り",
      "行事記録"
    ]
  },
  {
    number: "⑤",
    title: "給食・栄養管理",
    description: "献立、材料、栄養計算など給食業務を管理します。",
    items: [
      "給食献立作成",
      "材料管理",
      "栄養管理計算",
      "食材マスター",
      "献立印刷"
    ]
  },
  {
    number: "⑥",
    title: "健康・成長管理",
    description: "園児の成長、健康、午睡、投薬情報を管理します。",
    items: [
      "身長・体重管理",
      "健康診断",
      "午睡チェック",
      "保健チェック",
      "投薬記録"
    ]
  },
  {
    number: "⑦",
    title: "管理・点検",
    description: "マスター、バックアップ、点検、システム設定を管理します。",
    items: [
      "園児マスター管理",
      "職員マスター管理",
      "データ送受信",
      "データバックアップ",
      "データ点検",
      "システム設定",
      "バージョン情報"
    ]
  }
];

const mainMenu = document.getElementById("mainMenu");
const homeView = document.getElementById("homeView");
const subView = document.getElementById("subView");
const subNumber = document.getElementById("subNumber");
const subTitle = document.getElementById("subTitle");
const subDescription = document.getElementById("subDescription");
const subMenu = document.getElementById("subMenu");
const backButton = document.getElementById("backButton");
const notice = document.getElementById("notice");

function renderMainMenu() {
  mainMenu.innerHTML = "";

  menuData.forEach((menu, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "menu-card";
    button.innerHTML = `
      <span class="menu-card-number">${menu.number}</span>
      <span class="menu-card-title">${menu.title}</span>
      <span class="menu-card-count">${menu.items.length}項目</span>
    `;
    button.addEventListener("click", () => openSubMenu(index));
    mainMenu.appendChild(button);
  });
}

function openSubMenu(index) {
  const menu = menuData[index];

  subNumber.textContent = menu.number;
  subTitle.textContent = menu.title;
  subDescription.textContent = menu.description;
  subMenu.innerHTML = "";

  menu.items.forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "sub-menu-button";
    button.innerHTML = `${item}<small>現在は提案用メニューです</small>`;
    button.addEventListener("click", () => showNotice(`「${item}」は今後、既存アプリまたは新規機能と連携します。`));
    subMenu.appendChild(button);
  });

  homeView.classList.remove("active");
  subView.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showHome() {
  subView.classList.remove("active");
  homeView.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

let noticeTimer;

function showNotice(message) {
  notice.textContent = message;
  notice.classList.add("show");
  clearTimeout(noticeTimer);
  noticeTimer = setTimeout(() => {
    notice.classList.remove("show");
  }, 2600);
}

backButton.addEventListener("click", showHome);
renderMainMenu();
