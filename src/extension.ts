// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log("code-boilerplate is active!");

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('code-boilerplate.CodeBoilerPlate', () => {
	
		// pop up asking for extension file type

		if fileType === '.ts' {
			vscode.window.activeTextEditor.edit(editBuilder => {
				editBuilder.insert(new vscode.Position(0, 0), 'console.log("Hello World!");');
			});
		}
		else if fileType === "python" {
			vscode.window.activeTextEditor.edit(editBuilder => {
				editBuilder.insert(new vscode.Position(0, 0), 'print("Hello World!")');
			});
		}
		
			vscode.window.showInformationMessage("Generating code boilerplate...");
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
	console.log("code-boilerplate is deactivated!");
}
