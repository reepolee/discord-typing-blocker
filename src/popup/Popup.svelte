<script>
  import { onMount } from "svelte";

  let currentState = true;

  chrome.storage.sync.get(["discord-typing-blocker"], function(state) {
    currentState = state;
  });

  currentState = !currentState;

  chrome.storage.sync.set({ "discord-typing-blocker": currentState }, function(state) {
    console.log("Typing blocker set to " + state);
  });

  onMount(() => {
    console.log("Mounted");
  });

  //   chrome.browserAction.setIcon({ path: currentState ? "discord-block.png" : "discord-unblock.png" });
</script>

<main class="p-8">Discord "SomeUser is typing ..." notification blocker is {currentState}</main>
