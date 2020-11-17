import { strict } from 'assert';
import { App, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';
import { MarkdownView, TFile } from 'obsidian'

export default class WikilinksToMdlinks extends Plugin {
	onload() {
		console.log('loading wikilinks-to-mdlinks plugin...');

		this.addCommand({
			id: "toggle-wiki-md-links",
			name: "Toggle selected wikilink to markdown link and vice versa",
			callback: () => this.toggleLink(),
			hotkeys: [{
				modifiers: ["Mod", "Shift"],
				key: "="
			}]
		});

	}

	onunload() {
		console.log('unloading wikilinks-to-md plugin');
	}

	toggleLink() {
		const currentView = this.app.workspace.activeLeaf.view

		// Only allow toggling in Editor view
        if (!(currentView instanceof MarkdownView)) {
            return
        }

		const activeLeaf: any = this.app.workspace.activeLeaf
    	const editor = activeLeaf.view.sourceMode.cmEditor
		const cursor = editor.getCursor()

		const line = editor.getDoc().getLine(cursor.line);


		const regexHasExtension = /^([^\\]*)\.(\w+)$/

		const regexWiki = /\[\[([^\]]+)\]\]/
		const regexParenthesis = /\((.*?)\)/
		const regexWikiGlobal = /\[\[([^\]]+)\]\]/g
		const regexMdGlobal = /\[(.*?)\]\((.*?)\)/g


		let wikiMatches = line.match(regexWikiGlobal)
		let mdMatches = line.match(regexMdGlobal)

		let ifFoundMatch = false

		// If there are wikiMatches find if the cursor is inside the selected text
		let i = 0
		if (wikiMatches) {
			for (const item of wikiMatches) {

				let temp = line.slice(i, line.length)

				let index = i + temp.indexOf(item)
				let indexEnd = index + item.length

				i = indexEnd
				if ((cursor.ch >= index ) && (cursor.ch <= indexEnd )) {
					ifFoundMatch = true
					let text = item.match(regexWiki)[1]
					// Check if it is a markdown file
					const matches = text.match(regexHasExtension);
					if (matches) {
						const filename = matches[1];
						const extension = matches[2];
					} else {
						text = text + ".md"
					}
					text = encodeURI(text)
					let newItem = `[](${text})`

					const cursorStart = {
						line: cursor.line,
						ch: index
					}
					const cursorEnd = {
						line: cursor.line,
						ch: indexEnd
					}

					editor.replaceRange(newItem, cursorStart, cursorEnd);
				}
			}
		}

		i = 0
		if (ifFoundMatch == false) {
			if (mdMatches) {
				for (const item of mdMatches) {

					let temp = line.slice(i, line.length)
					let index = i + temp.indexOf(item)
					let indexEnd = index + item.length

					i = indexEnd

					if ((cursor.ch >= index ) && (cursor.ch <= indexEnd )) {
						ifFoundMatch = true
						let text = item.match(regexParenthesis)[1]
						text = decodeURI(text)

						// Check if it is a markdown file
						const matches = text.match(regexHasExtension);
						if (matches) {
							const filename = matches[1];
							const extension = matches[2];

							if (extension == 'md') {
								text = filename
							}
						}
						let newItem = `[[${text}]]`

						const cursorStart = {
							line: cursor.line,
							ch: index
						}
						const cursorEnd = {
							line: cursor.line,
							ch: indexEnd
						}
						editor.replaceRange(newItem, cursorStart, cursorEnd);
					}
				}
			}
		}
	}
}
