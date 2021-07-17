declare function GM_registerMenuCommand(
  caption: string,
  onClick: () => void
): void;

interface TabControl {
  onclose?: () => void;
  readonly closed: bool;
  readonly close: () => void;
}

declare function GM_openInTab(url: string, options?: any): TabControl;
