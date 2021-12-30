import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log("code-boilerplate is active!");
	
	let disposable = vscode.commands.registerCommand('code-boilerplate.CodeBoilerPlate', () => {
	
		fileType =
		fileName = vscode.window.activeTextEditor?.document.fileName;

		if fileType === 'ts' {
			vscode.window.activeTextEditor.edit(editBuilder => {
				editBuilder.insert(new vscode.Position(0, 0), 'console.log("Hello World!");');
			});
		}
		else if fileType === "py" {
			vscode.window.activeTextEditor.edit(editBuilder => {
				editBuilder.insert(new vscode.Position(0, 0), 'print("Hello World!")');
			});
		}
		else if fileType === "js" {
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
