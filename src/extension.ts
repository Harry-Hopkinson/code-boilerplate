import * as vscode from "vscode";
import "typescript";
import "./constants";

let statusBar: vscode.StatusBarItem;

export function activate({ subscriptions }: vscode.ExtensionContext) {
  const configuration = vscode.workspace.getConfiguration(
    "code-boilerplate",
    undefined
  );
  var noticeKey = "notice";
  var showNotice = configuration.get(noticeKey);
  if (showNotice) {
    vscode.window
      .showInformationMessage(
        "Check out the CLI Version of this Extension.",
        { title: "Learn more" },
        { title: "Don't show again" }
      )
      .then((e: { title: string }): void => {
        if (e?.title === "Learn more") {
          vscode.env.openExternal(
            vscode.Uri.parse("https://www.npmjs.com/package/code-boilerplate")
          );
        }
        if (e?.title === "Don't show again") {
          configuration.update(noticeKey, false, true);
        }
      });
  }

  const codeBoilerplateCommand = "code-boilerplate.CodeBoilerplate";
  subscriptions.push(
    vscode.commands.registerCommand(codeBoilerplateCommand, () => {
      const documentFileType =
        vscode.window.activeTextEditor?.document.languageId;

      switch (documentFileType) {
        case "javascript":
          vscode.window.activeTextEditor.edit((editBuilder) => {
            editBuilder.insert(
              new vscode.Position(0, 0),
              'console.log("Hello World!")'
            );
          });

        case "python":
          vscode.window.activeTextEditor.edit((editBuilder) => {
            editBuilder.insert(
              new vscode.Position(0, 0),
              'print("Hello World!")'
            );
          });

        case "typescript":
          vscode.window.activeTextEditor.edit((editBuilder) => {
            editBuilder.insert(
              new vscode.Position(0, 0),
              'console.log("Hello World!");'
            );
          });

        case "csharp":
          vscode.window.activeTextEditor.edit((editBuilder) => {
            editBuilder.insert(
              new vscode.Position(0, 0),
              'using System;\n\nnamespace Program\n{\n\tclass Program\n\t{\n\t\tstatic void Main(string[] args)\n\t\t{\n\t\t\tConsole.WriteLine("Hello World!");\n\t\t}\n\t}\n}'
            );
          });

        case "c":
          vscode.window.activeTextEditor.edit((editBuilder) => {
            editBuilder.insert(
              new vscode.Position(0, 0),
              '#include <stdio.h>\n\nint main()\n{\n\tprintf("Hello World!");\n\treturn 0;\n}'
            );
          });

        case "cpp":
          vscode.window.activeTextEditor.edit((editBuilder) => {
            editBuilder.insert(
              new vscode.Position(0, 0),
              '#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n\tcout << "Hello World!";\n\treturn 0;\n}'
            );
          });

        case "java":
          vscode.window.activeTextEditor.edit((editBuilder) => {
            editBuilder.insert(
              new vscode.Position(0, 0),
              'public class Main {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World!");\n\t}\n}'
            );
          });

        case "kotlin":
          vscode.window.activeTextEditor.edit((editBuilder) => {
            editBuilder.insert(
              new vscode.Position(0, 0),
              'fun main() {\n\tprintln("Hello World!")\n}'
            );
          });

        case "html":
          vscode.window.activeTextEditor.edit((editBuilder) => {
            editBuilder.insert(
              new vscode.Position(0, 0),
              '<!DOCTYPE html>\n<html>\n\t<head>\n\t\t<meta charset="utf-8">\n\t\t<title>Hello World!</title>\n\t</head>\n\t<body>\n\t\t<h1>Hello World!</h1>\n\t</body>\n</html>'
            );
          });

        case "go":
          vscode.window.activeTextEditor.edit((editBuilder) => {
            editBuilder.insert(
              new vscode.Position(0, 0),
              'package main\n\nimport "fmt"\n\nfunc main() {\n\tfmt.Println("Hello World!")\n}'
            );
          });

        case "lua":
          vscode.window.activeTextEditor.edit((editBuilder) => {
            editBuilder.insert(
              new vscode.Position(0, 0),
              'print("Hello World")'
            );
          });

        case "vb":
          vscode.window.activeTextEditor.edit((editBuilder) => {
            editBuilder.insert(
              new vscode.Position(0, 0),
              'Imports System\nModule Module1\n\tSub Main()\n\t\tConsole.WriteLine("Hello World!")\n\t\tConsole.ReadLine()\n\tEnd Sub'
            );
          });

        case "coffeescript":
          vscode.window.activeTextEditor.edit((editBuilder) => {
            editBuilder.insert(
              new vscode.Position(0, 0),
              'alert "Hello, World!"\n'
            );
          });

        case "cuda-cpp":
          vscode.window.activeTextEditor.edit((editBuilder) => {
            editBuilder.insert(
              new vscode.Position(0, 0),
              '#include <stdio.h>\n\nconst int N = 16;\nconst int blocksize = 16;\n\n__global__\nvoid hello(char *a, int *b)\n{\n\ta[threadIdx.x] += b[threadIdx.x];\n}\n\nint main()\n{\n\tchar a[N] = "Hello \\0\\0\\0\\0\\0\\0";\n\tint b[N] = {15, 10, 6, 0, -11, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0};\n\tchar *ad;\n\n\tint *bd;\n\tconst int csize = N*sizeof(char);\n\tconst int isize = N*sizeof(int);\n\n\tprintf("%s", a);\n\n\tcudaMalloc( (void**)&ad, csize ); \n\tcudaMalloc( (void**)&bd, isize ); \n\tcudaMemcpy( ad, a, csize, cudaMemcpyHostToDevice ); \n\tcudaMemcpy( bd, b, isize, cudaMemcpyHostToDevice ); \n\n\tdim3 dimBlock( blocksize, 1 );\n\tdim3 dimGrid( 1, 1 );\n\thello<<<dimGrid, dimBlock>>>(ad, bd);\n\tcudaMemcpy( a, ad, csize, cudaMemcpyDeviceToHost ); \n\tcudaFree( ad );\n\tcudaFree( bd );\n\n\tprintf("%s", a);\n\treturn EXIT_SUCCESS;\n}'
            );
          });

        case "css":
          vscode.window.activeTextEditor.edit((editBuilder) => {
            editBuilder.insert(
              new vscode.Position(0, 0),
              'body:before {\n\tcontent: "Hello World";\n}'
            );
          });

        case "fsharp":
          vscode.window.activeTextEditor.edit((editBuilder) => {
            editBuilder.insert(
              new vscode.Position(0, 0),
              'printf "Hello World!"\n'
            );
          });

        case "groovy":
          vscode.window.activeTextEditor.edit((editBuilder) => {
            editBuilder.insert(
              new vscode.Position(0, 0),
              'println "Hello World"\n'
            );
          });

        case "latex":
          vscode.window.activeTextEditor.edit((editBuilder) => {
            editBuilder.insert(
              new vscode.Position(0, 0),
              "\\documentclass{article}\n\\begin{document}\nHello World!\n\\end{document}"
            );
          });

        case "r":
          vscode.window.activeTextEditor.edit((editBuilder) => {
            editBuilder.insert(
              new vscode.Position(0, 0),
              'cat("Hello world")\n'
            );
          });

        case "ruby":
          vscode.window.activeTextEditor.edit((editBuilder) => {
            editBuilder.insert(
              new vscode.Position(0, 0),
              'puts "Hello World!"\n'
            );
          });

        case "rust":
          vscode.window.activeTextEditor.edit((editBuilder) => {
            editBuilder.insert(
              new vscode.Position(0, 0),
              'fn main() {\n\tprintln!("Hello World!");\n}'
            );
          });

        case "swift":
          vscode.window.activeTextEditor.edit((editBuilder) => {
            editBuilder.insert(
              new vscode.Position(0, 0),
              'println("Hello, world!")\n'
            );
          });

          /* New Languages go here

          **EXAMPLE**
          
          case "LANGUAGE IDENTIFIER":
            vscode.window.activeTextEditor.edit((editBuilder) => {
              editBuilder.insert(
                new vscode.Position(0, 0),
                'HELLO WORLD'
              );
            });

          */

          vscode.window.showInformationMessage(
            "Code Boilerplate Generated! 🎉"
          );
      }
    })
  );
  statusBar = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Right,
    100
  );
  statusBar.command = codeBoilerplateCommand;
  subscriptions.push(statusBar);

  subscriptions.push(
    vscode.window.onDidChangeActiveTextEditor(updateStatusBarItem)
  );
  subscriptions.push(
    vscode.window.onDidChangeTextEditorSelection(updateStatusBarItem)
  );
  updateStatusBarItem();
}

function updateStatusBarItem(): void {
  statusBar.text = `$(new-file) Hello World!`;
  statusBar.show();
}

export function deactivate(statusBar) {
  statusBar.dispose();
}
