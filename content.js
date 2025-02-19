// Listen for double-click events on the page
document.addEventListener("dblclick", () => {
  const selectedText = window.getSelection().toString().trim();

  // Validate if the selection is a valid number
  if (selectedText && !isNaN(selectedText)) {
    // Send the selected text to the background script
    chrome.runtime.sendMessage({ action: "formatNumber", number: selectedText });
  }
});

