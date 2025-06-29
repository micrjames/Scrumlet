import { app, BrowserWindow, Event, Tray, Menu, nativeImage } from 'electron';
import * as path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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


	// Create tray icon
	const iconPath = path.join(__dirname, '../../assets/icon-data.txt');

	const iconDataURL = fs.readFileSync(iconPath, 'utf-8');
	const icon = nativeImage.createFromDataURL(iconDataURL);

	tray = new Tray(icon);

	// Context menu for tray icon
	const contextMenu = Menu.buildFromTemplate([
		{
			label: 'Show Window',
			click: () => {
				if(mainWindow) mainWindow.show();
			}
		},
		{
			label: 'Hide Window',
			click: () => {
				if(mainWindow) mainWindow.hide();
			}
		},
		{ type: 'separator' },
		{
			label: 'Quit',
			click: () => {
				app.quit();
			}
		}
	]);

	tray.setToolTip('Scrumlet');
	tray.setContextMenu(contextMenu);
	tray.setTitle('Scrumlet');

	tray.on('click', () => {
		if(mainWindow?.isVisible()) {
			mainWindow.hide();
		} else {
			mainWindow?.show();
		}
	});

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
