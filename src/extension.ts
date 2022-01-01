import * as vscode from 'vscode';
import "typescript";

let myStatusBar : vscode.StatusBarItem;

export function activate(context: vscode.ExtensionContext, { subscriptions }: vscode.ExtensionContext) {
	const codeBoilerplate = 'code-boilerplate.CodeBoilerPlate';
	subscriptions.push(vscode.commands.registerCommand(codeBoilerplate, () => {
		const documentFileType = vscode.window.activeTextEditor?.document.languageId;
		const documentFileName = vscode.window.activeTextEditor?.document.fileName;

		vscode.window.showInformationMessage("Generating your Code Boilerplate... ⌛")
		if (documentFileType === "javascript") {
			return null;
		}
		else if (documentFileType === "python") {
            return null;
		}
		else if (documentFileType === "typescript") {
			return null;
		}
		else if (documentFileType === "csharp") {
			return null;
		}
		else if (documentFileType === "c") {
			return null;
		}
		else if (documentFileType === "cpp") {
			return null;
		}
		else if (documentFileType === "java") {
			return null;
		}

		updateStatusBarItem();
	}));

	myStatusBar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
	myStatusBar.command = codeBoilerplate;
	subscriptions.push(myStatusBar);
}

function updateStatusBarItem(): void {
	myStatusBar.text = `$(new-file) Hello World!`;
}

// this method is called when your extension is deactivated
export function deactivate() {
	console.log("code-boilerplate is deactivated!");
}
