import { StatusBarItem, window, StatusBarAlignment } from 'vscode';

export class StatusbarUi {

    private static _statusBarItem: StatusBarItem;

    private static get statusbar() {
        if (!StatusbarUi._statusBarItem) {
            StatusbarUi._statusBarItem = window
                .createStatusBarItem(StatusBarAlignment.Right, 100);
        }

        return StatusbarUi._statusBarItem;
    }

    static Init() {
        StatusbarUi.Working('Loading...');
        setTimeout(function () {
            StatusbarUi.Live();
        }, 1000);
    }

    static Working(workingMsg: string = 'Working on it...') {
        StatusbarUi.statusbar.text = `$(pulse) ${workingMsg}`;
    }

    public static Live() {
        StatusbarUi.statusbar.text = '$(broadcast) Hello World';
        StatusbarUi.statusbar.tooltip = 'Click to generate Code';
    }

    public static Offline(port: Number) {
        StatusbarUi.statusbar.text = `Code generated`;
    }

    public static dispose() {
        StatusbarUi.statusbar.dispose();
    }
}