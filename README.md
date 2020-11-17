# Wikilinks to MDLinks (an Obsidian.md plugin)
![Github Release Version](https://img.shields.io/github/v/release/agathauy/wikllinks-to-mdlinks-obsidian)
![Release Downloads](https://img.shields.io/github/downloads/agathauy/wikllinks-to-mdlinks-obsidian/total)

This plugin allows for the conversion of individually selected wikilinks to markdown links, and vice versa.

### How-to

1. Click your cursor somewhere within the link you want to convert. 
2. Either use the hotkey `Ctrl/cmd + shift + .` (this can be changed via Hotkeys settings), or press `Ctrl/cmd + p` to open the settings dialog and search for `Wikilinks to MDLinks: Toggle selected wikilink to markdown link and vice versa`. Just typing in a bit of the command, e.g. "toggle" would likely allow this command to show up via the suggestions the search dialog provides.
3. The selected link gets toggled to either wikilink format or markdown format, depending on what it was before.

### Settings

-  Toggle selected wikilink to markdown link and vice versa

### Future Plans
1. Convert all wikilinks in selected text to markdown
2. Convert all markdown links in selected text to wikilinks

## Installation
### From within Obsidian
1. Install via the `Third Party plugins` setting. Search for `Wikilinks to MDLinks`.
2. Activate the plugin in the settings.

### How to run this repo

- Clone this repo.
- `npm i` or `yarn` to install dependencies
- `npm run dev` to start compilation in watch mode.

### Obsidian API Documentation
Based on the following links:

https://github.com/obsidianmd/obsidian-sample-plugin
https://github.com/obsidianmd/obsidian-api

# Version History
## 0.0.1
- Initial release. Includes `Toggle selected wikilink to markdown link and vice versa`.
