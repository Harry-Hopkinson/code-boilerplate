import * as vscode from "vscode";
import "./extension";

let statusBar: vscode.StatusBarItem;

export function statusBarFunc({ subscriptions }: vscode.ExtensionContext) {
    statusBar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
    subscriptions.push(statusBar);
}