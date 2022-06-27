import * as vscode from "vscode";

export const documentFileType =
  vscode.window.activeTextEditor?.document.languageId;
export const documentFileName =
  vscode.window.activeTextEditor?.document.fileName;
export const documentFilePath =
  vscode.window.activeTextEditor?.document.fileName.split("/");
