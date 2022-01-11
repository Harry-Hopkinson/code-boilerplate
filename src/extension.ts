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

		switch (documentFileType) {
			case 'javascript':
				vscode.window.activeTextEditor.edit(editBuilder => {
					editBuilder.insert(new vscode.Position(0, 0), 'console.log("Hello World!")');
				});
			
			case "python":
				vscode.window.activeTextEditor.edit(editBuilder => {
					editBuilder.insert(new vscode.Position(0, 0), 'print("Hello World!")');
				});
			
			case "typescript":
				vscode.window.activeTextEditor.edit(editBuilder => {
					editBuilder.insert(new vscode.Position(0, 0), 'console.log("Hello World!");');
				});
			
			case "csharp":
				vscode.window.activeTextEditor.edit(editBuilder => {
					editBuilder.insert(new vscode.Position(0, 0), 'using System;\n\nnamespace Program\n{\n\tclass Program\n\t{\n\t\tstatic void Main(string[] args)\n\t\t{\n\t\t\tConsole.WriteLine("Hello World!");\n\t\t}\n\t}\n}');
				});
			
			case "c":
				vscode.window.activeTextEditor.edit(editBuilder => {
					editBuilder.insert(new vscode.Position(0, 0), '#include <stdio.h>\n\nint main()\n{\n\tprintf("Hello World!");\n\treturn 0;\n}');
				});

			case "cpp":
				vscode.window.activeTextEditor.edit(editBuilder => {
					editBuilder.insert(new vscode.Position(0, 0), '#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n\tcout << "Hello World!";\n\treturn 0;\n}');
				});

			case "java":
				vscode.window.activeTextEditor.edit(editBuilder => {
					editBuilder.insert(new vscode.Position(0, 0), 'public class Main {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World!");\n\t}\n}');
				});
			
			case "kotlin":
				vscode.window.activeTextEditor.edit(editBuilder => {
					editBuilder.insert(new vscode.Position(0, 0), 'fun main() {\n\tprintln("Hello World!")\n}');
				});
			
			case "html":
				vscode.window.activeTextEditor.edit(editBuilder => {
					editBuilder.insert(new vscode.Position(0, 0), '<!DOCTYPE html>\n<html>\n\t<head>\n\t\t<meta charset="utf-8">\n\t\t<title>Hello World!</title>\n\t</head>\n\t<body>\n\t\t<h1>Hello World!</h1>\n\t</body>\n</html>');
				});
			
			case "go":
				vscode.window.activeTextEditor.edit(editBuilder => {
					editBuilder.insert(new vscode.Position(0, 0), 'package main\n\nimport "fmt"\n\nfunc main() {\n\tfmt.Println("Hello World!")\n}');
				});
		vscode.window.showInformationMessage("Code Boilerplate Generated! 🎉");
		}
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