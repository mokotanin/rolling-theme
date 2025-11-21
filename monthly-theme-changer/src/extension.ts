import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    const config = vscode.workspace.getConfiguration("workbench");

    const today = new Date();
    const month = today.getMonth(); // Décembre = 11

    const xmasTheme = "Cozy Christmas";   // Ton thème Noël
    const normalTheme = "GitHub Dark";    // Ton thème normal

    // Pour t'afficher le mois dans la console :
    const monthNames = [
        "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
        "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
    ];

    console.log(`🎄 Theme Switcher → On est en : ${monthNames[month]}`);

    if (month === 11) {
        console.log("👉 Décembre détecté : activation du thème Cozy Christmas");
        config.update("colorTheme", xmasTheme, vscode.ConfigurationTarget.Global);
    } else {
        console.log("👉 Pas décembre : activation du thème normal GitHub Dark");
        config.update("colorTheme", normalTheme, vscode.ConfigurationTarget.Global);
    }
}

export function deactivate() {}