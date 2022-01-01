import * as vscode from 'vscode';

let myStatusBarItem: vscode.StatusBarItem;

export function activate({ subscriptions }: vscode.ExtensionContext) {

	const myCommandId = 'sample.showSelectionCount';
	myStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
	myStatusBarItem.command = myCommandId;
	subscriptions.push(myStatusBarItem);

	subscriptions.push(vscode.window.onDidChangeActiveTextEditor(updateStatusBarItem));
	subscriptions.push(vscode.window.onDidChangeTextEditorSelection(updateStatusBarItem));

	updateStatusBarItem();
}

function updateStatusBarItem(): void {
	myStatusBarItem.text = `$(rocket) Hello World!`;
	myStatusBarItem.show();
}
