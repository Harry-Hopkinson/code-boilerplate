import * as vscode from 'vscode';
import "typescript";

export function activate(context: vscode.ExtensionContext) {
	console.log("code-boilerplate is active!");
	
	let disposable = vscode.commands.registerCommand('code-boilerplate.CodeBoilerPlate', () => {
	
		const documentFileType = vscode.window.activeTextEditor?.document.languageId;
		const documentFileName = vscode.window.activeTextEditor?.document.fileName;

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
		
		vscode.window.showInformationMessage("Generating code boilerplate...");
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
	console.log("code-boilerplate is deactivated!");
}
