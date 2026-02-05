const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

// Function to create the main window
function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      // Optionally add preload scripts here if needed
    }
  });

  // Load HTML file into the window
  mainWindow.loadFile(path.join(__dirname, '../dist/maquettev3/index.html'));

  // Optionally remove the line below if you don't want to open DevTools
  // mainWindow.webContents.openDevTools();

  // Handle window close
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// App lifecycle events
app.whenReady().then(createMainWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createMainWindow();
});
