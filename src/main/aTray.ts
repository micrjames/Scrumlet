import { app, Tray, Menu, nativeImage, BrowserWindow } from 'electron';
import path from 'path';
import fs from 'fs';

function createTray(mainWindow: BrowserWindow): Tray | null {
	let tray: Tray | null = null;

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

	return tray;
}

export { createTray };
