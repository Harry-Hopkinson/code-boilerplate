import { StatusBarItem, window, StatusBarAlignment } from "vscode";

export class StatusbarUi {
  private static _statusBarItem: StatusBarItem;

  private static get statusbar() {
    if (!StatusbarUi._statusBarItem) {
      StatusbarUi._statusBarItem = window.createStatusBarItem(
        StatusBarAlignment.Right,
        100
      );
    }

    return StatusbarUi._statusBarItem;
  }

  static init() {
    StatusbarUi.working("Loading...");
    setTimeout(function () {
      StatusbarUi.live();
    }, 1000);
  }

  static working(workingMsg: string = "Working on it...") {
    StatusbarUi.statusbar.text = `$(pulse) ${workingMsg}`;
  }

  public static live() {
    StatusbarUi.statusbar.text = "$(broadcast) Hello World";
    StatusbarUi.statusbar.tooltip = "Click to generate Code";
  }

  public static offline(port: Number) {
    StatusbarUi.statusbar.text = `Code generated`;
  }

  public static dispose() {
    StatusbarUi.statusbar.dispose();
  }
}
