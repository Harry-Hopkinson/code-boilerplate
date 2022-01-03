import * as vscode from 'vscode';
import "typescript";
import "./constants";

let myStatusBar : vscode.StatusBarItem;

export function activate({ subscriptions }: vscode.ExtensionContext) {
	const codeBoilerplateCommand = 'code-boilerplate.CodeBoilerplate';
	subscriptions.push(vscode.commands.registerCommand(codeBoilerplateCommand, () => {
		const documentFileType = vscode.window.activeTextEditor?.document.languageId;
		const documentFileName = vscode.window.activeTextEditor?.document.fileName;
		const documentFilePath = vscode.window.activeTextEditor?.document.fileName.split('/');

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
				editBuilder.insert(new vscode.Position(0,0), 'using System;');
				editBuilder.insert(new vscode.Position(0,3), 'namespace HelloWorld {');
				editBuilder.insert(new vscode.Position(6,4), 'class HelloWorld {');
				editBuilder.insert(new vscode.Position(9,8), 'static void Main(string[] args) {');
				editBuilder.insert(new vscode.Position(12,12), 'Console.WriteLine("Hello World!");');
				editBuilder.insert(new vscode.Position(14,8), '}');
				editBuilder.insert(new vscode.Position(15,4), '}');
				editBuilder.insert(new vscode.Position(16,0), '}');
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
		vscode.window.showInformationMessage("Code Boilerplate Generated! 🎉");
	}));

	myStatusBar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
	myStatusBar.command = codeBoilerplateCommand;
	subscriptions.push(myStatusBar);

	subscriptions.push(vscode.window.onDidChangeActiveTextEditor(updateStatusBarItem));
	subscriptions.push(vscode.window.onDidChangeTextEditorSelection(updateStatusBarItem));
	updateStatusBarItem();
}

function updateStatusBarItem(): void {
	myStatusBar.text = `$(new-file) Hello World!`;
	myStatusBar.show();
}

export function deactivate() {
	myStatusBar.dispose();
}