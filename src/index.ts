let gText: string | undefined;

function openTypingPractice(text: string) {
  const baseUrl = "https://10fastfingers.com/widget/typingtest";
  const params = new URLSearchParams({
    dur: "60000",
    rand: "0",
    words: text,
  });
  const url = `${baseUrl}?${params.toString()}`.replace(/\+/g, "%20"); // 10fastfingers doesn't consider "+" as space
  GM_openInTab(url);
}

// Alt-T
function detectHotKey(e: KeyboardEvent): boolean {
  // Use "KeyboardEvent.code" to support the same key position regardless of keyboard layout
  return e.altKey && e.code === "KeyT";
}

function onKeyDown(e: KeyboardEvent) {
  if (gText && detectHotKey(e)) {
    const cleanText = gText.toLowerCase().split(/\s/).join(" ");
    openTypingPractice(cleanText);
  }
}

function onSelectionChange() {
  // Enable hotkey only when there's a selection
  document.removeEventListener("keydown", onKeyDown);
  const selection = document.getSelection();
  gText = selection?.toString().trim();
  if (!gText) {
    return;
  }
  document.addEventListener("keydown", onKeyDown);
}

function register() {
  document.addEventListener("selectionchange", onSelectionChange);
}

// NOT USED
function unregister() {
  document.removeEventListener("selectionchange", onSelectionChange);
}

function main() {
  register();
}

main();
