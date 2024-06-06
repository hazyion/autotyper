let monkeyurl = "https://monkeytype.com/";

chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  let id = tabs[0].id;

  if (tabs[0].url == monkeyurl) {
    chrome.scripting.executeScript({
      target: { tabId: id },
      files: ["script.js"],
    });
  }
});
