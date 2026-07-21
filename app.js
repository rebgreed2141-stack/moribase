const menuData = [
  { number: "01", title: "園児管理", description: "園児の基本情報や在籍情報を管理します。", items: ["園児名簿", "入園・退園管理", "クラス管理", "緊急連絡先", "保護者情報", "アレルギー情報", "園児検索"] },
  { number: "02", title: "職員管理", description: "職員の基本情報、資格、勤務履歴を管理します。", items: ["職員名簿", "入職・退職管理", "職員情報", "資格管理", "勤務履歴", "職員検索"] },
  { number: "03", title: "登降園・出欠管理", description: "園児の出欠、登降園時刻、延長保育を管理します。", items: ["園児出欠表", "登降園記録", "延長保育記録", "出席状況集計", "欠席一覧"] },
  { number: "04", title: "保育記録", description: "日々の保育計画と振り返り、行事記録を管理します。", items: ["週案日誌", "月案", "保育振り返り", "行事記録"] },
  { number: "05", title: "給食・栄養管理", description: "献立、材料、栄養計算など給食業務を管理します。", items: ["給食献立作成", "材料管理", "栄養管理計算", "食材マスター", "献立印刷"] },
  { number: "06", title: "健康・成長管理", description: "園児の成長、健康、午睡、投薬情報を管理します。", items: ["身長・体重管理", "健康診断", "午睡チェック", "保健チェック", "投薬記録"] },
  { number: "07", title: "管理・点検", description: "マスター、バックアップ、点検、システム設定を管理します。", items: ["園児マスター管理", "職員マスター管理", "データ送受信", "データバックアップ", "データ点検", "システム設定", "バージョン情報"] }
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

const CLASS_ORDER = ["もみじ", "どんぐり", "こぐま", "りす", "のうさぎ", "かもしか"];

const mainMenu = document.getElementById("mainMenu");
const homeView = document.getElementById("homeView");
const subView = document.getElementById("subView");
const subNumber = document.getElementById("subNumber");
const subTitle = document.getElementById("subTitle");
const subDescription = document.getElementById("subDescription");
const subMenu = document.getElementById("subMenu");
const backButton = document.getElementById("backButton");
const notice = document.getElementById("notice");
const detailModal = document.getElementById("detailModal");
const modalTitle = document.getElementById("modalTitle");
const modalDate = document.getElementById("modalDate");
const modalBody = document.getElementById("modalBody");

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
    button.innerHTML = `<span class="menu-card-top"><span class="menu-card-icon menu-icon-${index + 1}">${menuIcons[index]}</span><span class="menu-card-title">${menu.title}</span></span><span class="menu-card-count">${menu.items.length}項目</span>`;
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

function dateKey(date = new Date()) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function formatDate(date = new Date()) {
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
}

async function fetchJson(path) {
  const response = await fetch(path, { cache: "no-store" });
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
  return response.json();
}

function dataPathsForToday() {
  const key = dateKey();
  return {
    kids: `/api/moribase/kids-status?date=${encodeURIComponent(key)}`,
    timecard: `/api/moribase/staff-status?date=${encodeURIComponent(key)}`,
    staff: `/api/moribase/staff-master`
  };
}

function parseHireDate(text) {
  if (!text) return null;
  const normalized = String(text).replace(/\//g, "-");
  const date = new Date(`${normalized}T00:00:00`);
  return Number.isNaN(date.getTime()) ? null : date;
}

function normalizeName(text) {
  return String(text || "").replace(/[\s　]+/g, "").trim();
}

async function loadDashboard() {
  const paths = dataPathsForToday();
  try {
    const [kids, staff] = await Promise.all([fetchJson(paths.kids), fetchJson(paths.staff)]);
    const kidsRecords = Array.isArray(kids.records) ? kids.records : [];
    document.getElementById("childCount").textContent = kidsRecords.length;

    const today = new Date();
    today.setHours(23, 59, 59, 999);
    const activeStaff = Array.isArray(staff)
      ? staff.filter((person) => person.active === true && (!parseHireDate(person.hiredate) || parseHireDate(person.hiredate) <= today))
      : [];
    document.getElementById("staffCount").textContent = activeStaff.length;
  } catch (error) {
    console.warn("ダッシュボード読込エラー:", error);
  }
}

function openModal(title, bodyHtml) {
  modalDate.textContent = formatDate();
  modalTitle.textContent = title;
  modalBody.innerHTML = bodyHtml;
  detailModal.classList.add("open");
  detailModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  detailModal.classList.remove("open");
  detailModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char]));
}

async function showChildStatus() {
  const paths = dataPathsForToday();
  openModal("本日の園児状況", `<div class="empty-message">読み込み中です…</div>`);
  try {
    const data = await fetchJson(paths.kids);
    const records = Array.isArray(data.records) ? data.records : [];
    const present = records.filter((r) => r.status === "出席");
    const absent = records.filter((r) => r.status === "欠席");

    const classRows = CLASS_ORDER.map((className) => {
      const classRecords = records.filter((r) => r.class_name === className);
      const classPresent = classRecords.filter((r) => r.status === "出席").length;
      return `<div class="class-row"><span class="class-name">${className}</span><span class="class-count">${classPresent} / ${classRecords.length}名</span></div>`;
    }).join("");

    const absentRows = absent.length
      ? absent.map((r) => `<div class="person-row"><div class="person-name">${escapeHtml(r.name)}</div><div class="person-meta">${escapeHtml(r.class_name)}${r.reason ? `　理由：${escapeHtml(r.reason)}` : ""}</div></div>`).join("")
      : `<div class="empty-message">本日の欠席者はいません。</div>`;

    modalBody.innerHTML = `
      <div class="summary-line"><span>在籍 ${records.length}名</span><span>出席 ${present.length}名</span><span>欠席 ${absent.length}名</span></div>
      <div class="class-list">${classRows}</div>
      <div class="detail-section"><h3>欠席者</h3><div class="person-list">${absentRows}</div></div>`;
  } catch (error) {
    modalBody.innerHTML = `<div class="error-message">本日の園児データを読み込めませんでした。<br><code>${escapeHtml(paths.kids)}</code><br>対象日のJSONファイルがあるか確認してください。</div>`;
  }
}

async function showStaffStatus() {
  const paths = dataPathsForToday();
  openModal("本日の職員状況", `<div class="empty-message">読み込み中です…</div>`);
  try {
    const [staff, timecard] = await Promise.all([fetchJson(paths.staff), fetchJson(paths.timecard)]);
    const today = new Date();
    today.setHours(23, 59, 59, 999);
    const activeStaff = Array.isArray(staff)
      ? staff.filter((person) => person.active === true && (!parseHireDate(person.hiredate) || parseHireDate(person.hiredate) <= today))
      : [];
    const timeRecords = timecard && timecard.records && typeof timecard.records === "object" ? timecard.records : {};
    const presentIds = new Set(Object.values(timeRecords).filter((r) => r && r.in).map((r) => r.id));
    const presentNames = new Set(Object.values(timeRecords).filter((r) => r && r.in).map((r) => normalizeName(r.name)));
    const absent = activeStaff.filter((person) => !presentIds.has(person.id) && !presentNames.has(normalizeName(person.name)));
    const presentCount = activeStaff.length - absent.length;

    const absentRows = absent.length
      ? absent.map((person) => `<div class="person-row"><div class="person-name">${escapeHtml(person.name)}</div></div>`).join("")
      : `<div class="empty-message">本日の欠席者はいません。</div>`;

    modalBody.innerHTML = `
      <div class="summary-line"><span>在職 ${activeStaff.length}名</span><span>出勤 ${presentCount}名</span><span>欠席 ${absent.length}名</span></div>
      <div class="detail-section"><h3>欠席者</h3><div class="person-list">${absentRows}</div></div>`;
  } catch (error) {
    modalBody.innerHTML = `<div class="error-message">本日の職員データを読み込めませんでした。<br><code>${escapeHtml(paths.timecard)}</code><br><code>${escapeHtml(paths.staff)}</code><br>対象日のJSONファイルがあるか確認してください。</div>`;
  }
}

let noticeTimer;
function showNotice(message) {
  notice.textContent = message;
  notice.classList.add("show");
  clearTimeout(noticeTimer);
  noticeTimer = setTimeout(() => notice.classList.remove("show"), 2600);
}

backButton.addEventListener("click", showHome);
document.getElementById("childStatusButton").addEventListener("click", showChildStatus);
document.getElementById("staffStatusButton").addEventListener("click", showStaffStatus);
document.getElementById("scheduleButton").addEventListener("click", () => showNotice("「予定」は次の段階で作成します。"));
document.getElementById("noticeButton").addEventListener("click", () => showNotice("「連絡事項」は次の段階で作成します。"));
document.getElementById("modalCloseButton").addEventListener("click", closeModal);
detailModal.querySelectorAll("[data-close-modal]").forEach((el) => el.addEventListener("click", closeModal));
document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeModal(); });

renderToday();
renderMainMenu();
loadDashboard();
