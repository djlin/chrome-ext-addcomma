chrome.runtime.onMessage.addListener((message) => {
  if (message.action === "formatNumber" && message.number) {
    const formattedNumber = formatWithCommas(message.number);

    // Open a new popup window with the formatted result
    chrome.windows.create({
      url: `popup.html?result=${encodeURIComponent(formattedNumber)}`,
      type: "popup",
      width: 300,
      height: 200
    });
  }
});

// Helper function to format numbers with commas
function formatWithCommas(number) {
  // Ensure the input is treated as a string
  const numberString = number.toString();

  // Use a regular expression to insert commas every three digits from the right
  return numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

