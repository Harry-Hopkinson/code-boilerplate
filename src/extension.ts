import * as vscode from 'vscode';
import "typescript";

export function activate(context: vscode.ExtensionContext) {
	console.log("code-boilerplate is active!");
	
	let disposable = vscode.commands.registerCommand('code-boilerplate.CodeBoilerPlate', () => {
	
		
		const activeEditor = vscode.window.activeTextEditor;
		if (activeEditor) {
			const documentFileType = activeEditor.document.uri.path;
		}
		else {
			vscode.window.showInformationMessage("You need to have a valid document...");
			break;
		}
		const documentFileName = vscode.window.activeTextEditor?.document.fileName;

		if documentFileType === 'ts' {
			vscode.window.activeTextEditor.edit(editBuilder => {
				editBuilder.insert(new vscode.Position(0, 0), 'console.log("Hello World!");');
			});
		}
		else if documentFileType === "py" {
			vscode.window.activeTextEditor.edit(editBuilder => {
				editBuilder.insert(new vscode.Position(0, 0), 'print("Hello World!")');
			});
		}
		else if documentFileType === "js" {
			vscode.window.activeTextEditor?.edit(editBuilder => {
				editBuilder.insert(new vscode.Position(0,0), 'console.log("Hello World!")');
			})
		}
		
			vscode.window.showInformationMessage("Generating code boilerplate...");
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
	console.log("code-boilerplate is deactivated!");
}
