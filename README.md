# Typo

A simple theme for hexo.

## Installation

```bash

```

## Config

### highlight

To achieve full syntax highlighting, you need to disable the "highlight" configuration in the `_config.yaml`.

```yaml _config.yaml
highlight:
  line_number: false
  auto_detect: false
  tab_replace: ''
  wrap: false
  hljs: false
```

### dark mode

Typo implemented dark mode using the media query `prefer-color-scheme`. When your device switches themes, Typo's theme switches automatically.

Switching the entire operating system's color scheme can quickly become tiresome, so Chrome DevTools now allow you to simulate the user's preferred color scheme in a way that only affects the currently displayed tab. Open the command menu, start typing "Rendering," run the "Show Rendering" command, and then change the "Emulate CSS media feature prefers-color-scheme" option. Alternatively, you can directly access the command menu by pressing <kbd>ctrl</kbd>+<kbd>shift</kbd>+<kbd>p</kbd>, type `prefer-color-scheme` and then select the appropriate mode.
