const toggleBtn = document.getElementById("toggleBtn");

chrome.storage.local.get("enabled", (data) => {
  toggleBtn.textContent = data.enabled === false ? "On" : "Off";
});

toggleBtn.addEventListener("click", () => {
  chrome.storage.local.get("enabled", (data) => {
    const newState = !data.enabled;
    chrome.storage.local.set({ enabled: newState }, () => {
      toggleBtn.textContent = newState ? "Off" : "On";
    });
  });
});
