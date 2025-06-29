import { app, BrowserWindow, Event, Tray } from 'electron';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { createTray } from './aTray.js';


let mainWindow: BrowserWindow | null = null;
let tray: Tray | null = null;
let isQuitting = false;

function createWindow() {
	if(mainWindow !== null) return;

	mainWindow = new BrowserWindow({
		width: 1000,
		height: 700,
		show: false,	// don't show at launch
		title: 'Scrumlet',
		icon: path.join(__dirname, '../../assets/icon.png'),
		webPreferences: {
			preload: path.join(__dirname, 'preload.js'),
			contextIsolation: true
		}
	});

	mainWindow.loadFile(path.join(__dirname, 'index.html'));

	tray = createTray(mainWindow);

	app.on('before-quit', () => {
	  isQuitting = true;
	  if(tray) tray.destroy();
	});

	mainWindow.on('close', (event: Event) => {
	  if (process.platform === 'darwin' && !isQuitting) {
		event.preventDefault();
		mainWindow?.hide();
		return;
	  } else {
		mainWindow = null;
	  }
	});
}

app.whenReady().then(() => {
	createWindow();
	app.on('activate', () => {
		if(mainWindow) {
			mainWindow.show();
		} else {
			createWindow();
		}
	});
});

app.on('window-all-closed', () => {
	if(process.platform !== 'darwin') app.quit();
});
