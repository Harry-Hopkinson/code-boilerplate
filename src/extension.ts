import * as vscode from 'vscode';
import "typescript";

let statusBar : vscode.StatusBarItem;

export function activate(context: vscode.ExtensionContext) {
	console.log("code-boilerplate is active!");
	
	const codeBoilerplate = vscode.commands.registerCommand('code-boilerplate.CodeBoilerPlate', () => {
	
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
	});

	statusBar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
	statusBar.command = codeBoilerplate;

	context.subscriptions.push(codeBoilerplate);
}

// this method is called when your extension is deactivated
export function deactivate() {
	console.log("code-boilerplate is deactivated!");
}
