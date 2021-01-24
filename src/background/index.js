console.log("---------------------------------------");
console.log("Blocking Discord typing ping active ...");
console.log("---------------------------------------");

let currentState = true;
let listener;

listener = chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    console.log("blocking discord typing, currentstate = ", currentState);
    return { cancel: currentState };
  },
  { urls: ["*://discord.com/api/v8/channels/*/typing"] },
  ["blocking"]
);

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.storage.sync.get("state", function(data) {
    currentState = !data.state;
    console.log("Current state:", currentState);
    chrome.browserAction.setIcon({ path: currentState ? "./discord-block.png" : "./discord-unblock.png" });
    chrome.storage.sync.set({ state: currentState }, function(data) {});
  });
});
