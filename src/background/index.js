console.log("---------------------------------------");
console.log("Blocking Discord typing ping active ...");
console.log("---------------------------------------");

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    console.log("blocking discord typing");
    return { cancel: true };
  },
  { urls: ["*://discord.com/api/v8/channels/*/typing"] },
  ["blocking"]
);
