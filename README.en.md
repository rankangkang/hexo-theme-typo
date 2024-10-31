<h1 align="center">typo</h1>

<p align="center">A simple hexo theme</p>

<p align='center'>
English ｜ <a href="https://github.com/rankangkang/hexo-theme-typo/blob/main/README.md">简体中文</a>
</p>

## ✨ Features

- Dark mode
- Code highlighting
  - Light mode: atom-one-light
  - Dark mode: atom-one-dark
- Multiple fonts
  - Articles use the Montserrat font
  - Code uses the JetBrains Mono font

## Installation

```bash
git clone --depth=1 https://github.com/rankangkang/hexo-theme-typo.git themes/typo
```

And configure in _config.yaml:

```yaml _config.yaml
theme: typo
```

## 🌈 Configuration

### Code Highlighting

Typo uses highlight.js to highlight code. To do this, you need to disable the default highlight configuration beforehand.

```yaml _config.yaml
highlight:
  line_number: false
  auto_detect: false
  tab_replace: ''
  wrap: false
  hljs: false
```

### Dark Mode

Typo implements dark mode using the media query prefer-color-scheme. When your device switches themes, Typo's theme switches accordingly.

Of course, you can simulate the switching action using Chrome DevTools in two ways:

- Open the "Rendering" tab in Chrome DevTools and switch the "Emulate CSS media feature prefers-color-scheme" option.
- Open Chrome DevTools, press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>, type `prefer-color-scheme`, and select the corresponding mode to switch.

### Theme Config

Typo provides some customization options, which can be configured in `typo/_config.yaml`.

- `title`: website title
- `favicon`: favicon (the file should be placed in the source directory)
- `icon`: website icon (the file should be placed in the source directory)
- `menu`: menu navigation
- `copyright`: footer copyright

Default configuration is as follows:

```yaml typo/_config.yaml
title: typo
favicon: /icon.svg
icon: /icon.svg

menu:
  archives: /archives
  about: /about

copyright: 2024 typo
```

## 🔗 Wanna build your own hexo theme?

👉🏻 Fork this [repo](https://github.com/rankangkang/hexo-themes) to get started quickly.

😁 This is a simple pnpm monorepo template to help you develop Hexo themes.
