/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("vscode");

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deactivate = exports.activate = void 0;
const vscode = __webpack_require__(1);
let myStatusBar;
function activate(context, { subscriptions }) {
    let codeBoilerplateCommand = vscode.commands.registerCommand('code-boilerplate.CodeBoilerplate', () => {
        var _a, _b, _c;
        const documentFileType = (_a = vscode.window.activeTextEditor) === null || _a === void 0 ? void 0 : _a.document.languageId;
        const documentFileName = (_b = vscode.window.activeTextEditor) === null || _b === void 0 ? void 0 : _b.document.fileName;
        const documentFilePath = (_c = vscode.window.activeTextEditor) === null || _c === void 0 ? void 0 : _c.document.fileName.split('/');
        vscode.window.showInformationMessage("Generating your Code Boilerplate... ⌛");
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
                editBuilder.insert(new vscode.Position(3, 0), 'namespace' + documentFileName + ' {');
                editBuilder.insert(new vscode.Position(6, 4), 'class HelloWorld {');
                editBuilder.insert(new vscode.Position(9, 8), 'static void Main(string[] args) {');
                editBuilder.insert(new vscode.Position(12, 12), 'Console.WriteLine("Hello World!");');
                editBuilder.insert(new vscode.Position(14, 8), '}');
                editBuilder.insert(new vscode.Position(15, 4), '}');
                editBuilder.insert(new vscode.Position(16, 0), '}');
            });
        }
        else if (documentFileType === "c") {
            vscode.window.activeTextEditor.edit(editBuilder => {
                editBuilder.insert(new vscode.Position(0, 0), '#include <stdio.h>');
                editBuilder.insert(new vscode.Position(1, 0), 'int main() {');
                editBuilder.insert(new vscode.Position(2, 4), 'printf("Hello World!");');
                editBuilder.insert(new vscode.Position(3, 4), 'return 0;');
                editBuilder.insert(new vscode.Position(4, 0), '}');
            });
        }
        else if (documentFileType === "cpp") {
            return null;
        }
        else if (documentFileType === "java") {
            return null;
        }
        updateStatusBarItem();
    });
    myStatusBar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
    myStatusBar.command = 'code-boilerplate.CodeBoilerplate';
    context.subscriptions.push(myStatusBar);
    context.subscriptions.push(codeBoilerplateCommand);
}
exports.activate = activate;
function updateStatusBarItem() {
    myStatusBar.text = `$(new-file) Hello World!`;
    myStatusBar.show();
}
function deactivate() {
    myStatusBar.dispose();
}
exports.deactivate = deactivate;

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=extension.js.map