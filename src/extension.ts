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
			vscode.window.activeTextEditor.edit(editBuilder => {
				editBuilder.insert(new vscode.Position(0, 0), 'console.log("Hello World!")');
			});
		}
		else if (documentFileType === "python") {
            vscode.window.activeTextEditor.edit(editBuilder => {
				editBuilder.insert(new vscode.Position(0, 0), 'print("Hello World!")');
			});
		}
		else if (documentFileType === "typescript") {
			vscode.window.activeTextEditor.edit(editBuilder => {
				editBuilder.insert(new vscode.Position(0, 0), 'console.log("Hello World!");');
			});
		}
		else if (documentFileType === "csharp") {
			vscode.window.activeTextEditor.edit(editBuilder => {
				editBuilder.insert(new vscode.Position(0, 0), 'using System;');
				editBuilder.insert(new vscode.Position(3,0), 'namespace' + documentFileName + ' {');
				editBuilder.insert(new vscode.Position(6,4), 'class HelloWorld {');
				editBuilder.insert(new vscode.Position(9, 8), 'static void Main(string[] args) {');
				editBuilder.insert(new vscode.Position(12,12), 'Console.WriteLine("Hello World!");');
				editBuilder.insert(new vscode.Position(14,8), '}');
				editBuilder.insert(new vscode.Position(15, 4), '}');
				editBuilder.insert(new vscode.Position(16, 0), '}');
			});
		}
		else if (documentFileType === "c") {
			vscode.window.activeTextEditor.edit(editBuilder => {
				editBuilder.insert(new vscode.Position(0,0), '#include <stdio.h>');
				editBuilder.insert(new vscode.Position(1,0), 'int main() {');
				editBuilder.insert(new vscode.Position(2,4), 'printf("Hello World!");');
				editBuilder.insert(new vscode.Position(3,4), 'return 0;');
				editBuilder.insert(new vscode.Position(4,0), '}');
			})
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

export function deactivate() {
	console.log("code-boilerplate is deactivated!");
}