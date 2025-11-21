import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    const config = vscode.workspace.getConfiguration("workbench");

    const today = new Date();
    const month = today.getMonth(); // Décembre = 11

    const xmasTheme = "Cozy Christmas";   // Ton thème Noël
    const normalTheme = "GitHub Dark";    // Ton thème normal

    // Pour t'afficher le mois dans la console :
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    console.log(`We are in : ${monthNames[month]}`);

    if (month === 11) {
        console.log("We are in december: activating Cozy Christmas theme");
        config.update("colorTheme", xmasTheme, vscode.ConfigurationTarget.Global);
    } else {
        console.log("Not december: activating normal GitHub Dark theme");
        config.update("colorTheme", normalTheme, vscode.ConfigurationTarget.Global);
    }
}

export function deactivate() {}