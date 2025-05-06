function addButtonToClosedRecruit() {
    document.querySelectorAll('.list_item').forEach(item => {
      const titleLink = item.querySelector('a.str_tit[onclick*="close_recruit"]');
      const existingButton = item.querySelector('.custom-close-link');
  
      if (titleLink && !existingButton) {
        const href = titleLink.getAttribute('href');
        const fullUrl = `https://www.saramin.co.kr${href}`;
  
        const button = document.createElement('a');
        button.href = fullUrl;
        button.target = '_blank';
        button.textContent = '마감된 공고 확인';
        button.className = 'custom-close-link';
        button.style.display = 'inline-block';
        button.style.marginTop = '10px';
        button.style.padding = '6px 10px';
        button.style.backgroundColor = '#2d67ff';
        button.style.color = 'white';
        button.style.borderRadius = '4px';
        button.style.textDecoration = 'none';
  
        item.querySelector('.support_info')?.appendChild(button);
      }
    });
  }
  
  function runIfEnabled() {
    chrome.storage.local.get("enabled", (data) => {
      if (data.enabled === false) return; // 비활성화 시 아무 작업도 하지 않음
  
      addButtonToClosedRecruit();
  
      const observer = new MutationObserver(() => {
        addButtonToClosedRecruit();
      });
  
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
    });
  }
  
  runIfEnabled();
  