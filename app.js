const menuData = [
  {
    number: "01",
    title: "園児管理",
    description: "園児の基本情報や在籍情報を管理します。",
    items: ["園児名簿", "入園・退園管理", "クラス管理", "緊急連絡先", "保護者情報", "アレルギー情報", "園児検索"]
  },
  {
    number: "02",
    title: "職員管理",
    description: "職員の基本情報、資格、勤務履歴を管理します。",
    items: ["職員名簿", "入職・退職管理", "職員情報", "資格管理", "勤務履歴", "職員検索"]
  },
  {
    number: "03",
    title: "登降園・出欠管理",
    description: "園児の出欠、登降園時刻、延長保育を管理します。",
    items: ["園児出欠表", "登降園記録", "延長保育記録", "出席状況集計", "欠席一覧"]
  },
  {
    number: "04",
    title: "保育記録",
    description: "日々の保育計画と振り返り、行事記録を管理します。",
    items: ["週案日誌", "月案", "保育振り返り", "行事記録"]
  },
  {
    number: "05",
    title: "給食・栄養管理",
    description: "献立、材料、栄養計算など給食業務を管理します。",
    items: ["給食献立作成", "材料管理", "栄養管理計算", "食材マスター", "献立印刷"]
  },
  {
    number: "06",
    title: "健康・成長管理",
    description: "園児の成長、健康、午睡、投薬情報を管理します。",
    items: ["身長・体重管理", "健康診断", "午睡チェック", "保健チェック", "投薬記録"]
  },
  {
    number: "07",
    title: "管理・点検",
    description: "マスター、バックアップ、点検、システム設定を管理します。",
    items: ["園児マスター管理", "職員マスター管理", "データ送受信", "データバックアップ", "データ点検", "システム設定", "バージョン情報"]
  }
];


const menuIcons = [
  `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="8" r="3"/><circle cx="16" cy="9" r="2.5"/><path d="M3.5 19c0-3.5 2.5-6 5.5-6s5.5 2.5 5.5 6"/><path d="M13 14.2c.9-.8 2-1.2 3.2-1.2 2.6 0 4.8 2.1 4.8 5"/></svg>`,
  `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="7.5" r="3.5"/><path d="M5.5 20c0-4 2.9-7 6.5-7s6.5 3 6.5 7"/></svg>`,
  `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="5" width="16" height="15" rx="2"/><path d="M8 3v4M16 3v4M8 13l2.5 2.5L16 10"/></svg>`,
  `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h10a2 2 0 0 1 2 2v14H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"/><path d="M8 7h6M8 11h6M8 15h3"/><path d="m15 17 4-4 2 2-4 4-3 1 1-3Z"/></svg>`,
  `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 12h3l1.7-3.2L11 15l2.1-5 1.6 2H21"/><path d="M5 6.5A3.5 3.5 0 0 1 11 4l1 1 1-1a3.5 3.5 0 0 1 5 4.9L12 15l-6-6A3.5 3.5 0 0 1 5 6.5Z"/></svg>`,
  `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v18M3 12h18"/><circle cx="12" cy="12" r="8"/><path d="M8.5 8.5h7v7h-7z"/></svg>`,
  `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6V21h-4v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H3v-4h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3A1.7 1.7 0 0 0 10 3h4a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.1v4H21a1.7 1.7 0 0 0-1.6 1Z"/></svg>`
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

function renderToday() {
  const today = new Date();
  const weekdays = ["日", "月", "火", "水", "木", "金", "土"];
  const week = weekdays[today.getDay()];

  document.getElementById("todayYear").textContent = `${today.getFullYear()}年`;
  document.getElementById("todayDate").textContent = `${today.getMonth() + 1}月${today.getDate()}日`;

  const weekElement = document.getElementById("todayWeek");
  weekElement.textContent = `（${week}）`;
  weekElement.classList.toggle("sunday", today.getDay() === 0);
  weekElement.classList.toggle("saturday", today.getDay() === 6);
}

function renderMainMenu() {
  mainMenu.innerHTML = "";

  menuData.forEach((menu, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "menu-card";
    button.innerHTML = `
      <span class="menu-card-top">
        <span class="menu-card-icon menu-icon-${index + 1}">${menuIcons[index]}</span>
        <span class="menu-card-title">${menu.title}</span>
      </span>
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
  noticeTimer = setTimeout(() => notice.classList.remove("show"), 2600);
}

backButton.addEventListener("click", showHome);
renderToday();
renderMainMenu();
