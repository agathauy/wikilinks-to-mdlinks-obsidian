# Wikilinks to MDLinks (an Obsidian.md plugin)

This plugin allows for the conversion of individually selected wikilinks to markdown links, and vice versa.

### How-to

1. Click your cursor somewhere within the link you want to convert.
2 Either use the hotkey `Ctrl/cmd + shift + .` (this can be changed via Hotkeys settings), or press `Ctrl/cmd + p` to open the settings dialog and search for `Wikilinks to MDLinks: Toggle selected wikilink to markdown link and vice versa`. Just typing in a bit of the command, e.g. "toggle" would likely allow this command to show up via the suggestions the search dialog provides.
3. The selected link gets toggled to either wikilink format or markdown format, depending on what it was before.

### Features
- [X] Toggle selected wikilink to markdown link and vice versa
- [ ] Convert all wikilinks in selected text to markdown
- [ ] Convert all markdown links in selected text to wikilinks

## Installation
### From within Obsidian
1. Install via the `Third Party plugins` setting. Search for `Wikilinks to MDLinks`.
2. Activate the plugin in the settings.

### From Github Release
1. Download the [Latest release](https://github.com/agathauy/wikilinks-to-mdlinks-obsidian/releases/latest)
2. Copy the extracted plugin folder to your vault `<vault>/.obsidian/plugins/`.

This is a sample plugin for Obsidian (https://obsidian.md).

This project uses Typescript to provide type checking and documentation.
The repo depends on the latest plugin API (obsidian.d.ts) in Typescript Definition format, which contains TSDoc comments describing what it does.

**Note:** The Obsidian API is still in early alpha and is subject to change at any time!

This sample plugin demonstrates some of the basic functionality the plugin API can do.
- Changes the default font color to red using `styles.css`.
- Adds a ribbon icon, which shows a Notice when clicked.
- Adds a command "Open Sample Modal" which opens a Modal.
- Adds a plugin setting tab to the settings page.
- Registers a global click event and output 'click' to the console.
- Registers a global interval which logs 'setInterval' to the console.


### Releasing new releases

- Update your `manifest.json` with your new version number, such as `1.0.1`, and the minimum Obsidian version required for your latest release.
- Update your `versions.json` file with `"new-plugin-version": "minimum-obsidian-version"` so older versions of Obsidian can download an older version of your plugin that's compatible.
- Create new GitHub release using your new version number as the "Tag version". Use the exact version number, don't include a prefix `v`. See here for an example: https://github.com/obsidianmd/obsidian-sample-plugin/releases
- Upload the files `manifest.json`, `main.js`, `styles.css` as binary attachments.
- Publish the release.

### Adding your plugin to the community plugin list

- Publish an initial version.
- Make sure you have a `README.md` file in the root of your repo.
- Make a pull request at https://github.com/obsidianmd/obsidian-releases to add your plugin.

### How to run this repo

- Clone this repo.
- `npm i` or `yarn` to install dependencies
- `npm run dev` to start compilation in watch mode.

### API Documentation
Based on the following links:

https://github.com/obsidianmd/obsidian-sample-plugin
https://github.com/obsidianmd/obsidian-api
