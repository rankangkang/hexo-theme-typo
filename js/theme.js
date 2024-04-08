/**
 * @param {MediaQueryList} mqList
 * @param {((this: MediaQueryList, ev: MediaQueryListEvent) => any)} listener
 */
function observeMediaChange(mqList, listener) {
  let disposeFunc = () => {};
  if (mqList.addEventListener && mqList.removeEventListener) {
    mqList.addEventListener("change", listener);

    disposeFunc = () => {
      mqList.removeEventListener("change", listener);
    };
  } else if (mqList.addListener && mqList.removeListener) {
    mqList.addListener(listener);

    disposeFunc = () => {
      mqList.removeListener(listener);
    };
  }

  return disposeFunc;
}

function checkIsDarkMode() {
  try {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  } catch (err) {
    return false;
  }
}

function switchThemeMode(mode) {
  /** @type {HTMLLinkElement} */
  const link = document.querySelector("link#theme");
  if (!link) {
    return;
  }

  const nextMode = themeMode[mode] || themeMode.light;
  if (link.href !== nextMode) {
    link.href = nextMode;
  }
}

const themeMode = {
  light:
    "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-light.css",
  dark: "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-dark.css",
};

if (checkIsDarkMode()) {
  switchThemeMode("dark");
}

var mqList = window.matchMedia("(prefers-color-scheme: dark)");

observeMediaChange(mqList, (event) => {
  // is dark mode
  if (event.matches) {
    console.log("switch to dark mode");
    switchThemeMode("dark");
  } else {
    console.log("switch to light mode");
    switchThemeMode("light");
  }
});
