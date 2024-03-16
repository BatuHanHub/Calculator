const { app, BrowserWindow, globalShortcut } = require("electron");

const createWindow = (() => {
    const window = new BrowserWindow({
        width: 350,
        height: 500,
        autoHideMenuBar: true,
        center: true,
        resizable: false,
        webPreferences: { devTools: false },
        icon: "icon.png"
    });

    window.loadFile("main.html");
});

const createWindowAbout = (() => {
    const about = new BrowserWindow ({
        width: 400,
        height: 200,
        webPreferences: { devTools: false },
        resizable: false,
        alwaysOnTop: true,
        center:true,
        autoHideMenuBar: true,
        movable: false,
        icon: "icon.png"
    });

    about.loadFile("help.html");
});

app.on("ready", () => {
    createWindow();

    globalShortcut.register("Shift+F1", () => {
        createWindowAbout();
    });
});