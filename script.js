const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    panels.forEach(p => p.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});

const caseTabs = document.querySelectorAll(".case");
const casePanels = document.querySelectorAll(".case-panel");

caseTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    caseTabs.forEach(t => t.classList.remove("active"));
    casePanels.forEach(p => p.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById("case-" + tab.dataset.case).classList.add("active");
  });
});
