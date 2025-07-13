QR Code Generator

A simple React + Vite application for generating QR codes from text or URLs.

FEATURES:

* Generate QR codes on-the-fly for any input text or link
* Instant preview and copy-to-clipboard
* Download QR code as an image

PREREQUISITES:

* Node.js (version 14 or higher) and npm installed
* Git installed

INSTALLATION:

1. Clone the repository:
   git clone [https://github.com/your-username/qr-code-generator.git](https://github.com/your-username/qr-code-generator.git)
2. Navigate to the project folder:
   cd qr-code-generator/vite-project
3. Install dependencies:
   npm install

RUNNING THE DEVELOPMENT SERVER:

1. Start the local server:
   npm run dev
2. Open your browser and go to the URL shown in the terminal (usually [http://localhost:5173/](http://localhost:5173/))

BUILDING FOR PRODUCTION:

1. Create an optimized build:
   npm run build
2. The production-ready files will be in the 'dist' directory

PROJECT STRUCTURE:
vite-project/
public/            Static assets (favicon, images, etc.)
src/               React source code
App.jsx          Main application component
index.jsx        Entry point
package.json       Scripts and dependencies
vite.config.js     Vite configuration

USAGE TIPS & TROUBLESHOOTING:

* If you see "vite: command not found", make sure you ran 'npm install' in the 'vite-project' folder.
* If the QR code does not appear, check that the input field has a value and the <QRCode value="..." /> prop is set correctly.
* If the default port is already in use, run on a different port:
  npm run dev -- --port 3000

ADDING DEPENDENCIES:

* Runtime dependency:
  npm install <package-name> --save
* Development dependency:
  npm install <package-name> --save-dev

GITIGNORE CONTENT:
node\_modules/
dist/
.env
\*.log

LICENSE:
MIT License. Feel free to use, modify, and distribute as you like.
