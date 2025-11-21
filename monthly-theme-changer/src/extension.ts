import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    const config = vscode.workspace.getConfiguration("workbench");

    const today = new Date();
    const month = today.getMonth(); // décembre = 11

    const xmasTheme = "Christmas Theme";     // MET TON NOM DE THEME DE NOEL EXACT
    const normalTheme = "Default Dark+";     // MET TON THEME NORMAL

    if (month === 11) {
        // On est en décembre
        config.update("colorTheme", xmasTheme, vscode.ConfigurationTarget.Global);
    } else {
        // Pas décembre
        config.update("colorTheme", normalTheme, vscode.ConfigurationTarget.Global);
    }

    console.log("Theme switcher Noël activé.");
}

export function deactivate() {}