# Simple Basic Discord JS Bot
A simple basic discord bot for doing some basic administrative tasks on a server.<br>
*(This is supposed to be seen as a template and starter project.)*

## Installation and setup instructions

### Prerequisites
* Visual Studio Code (https://code.visualstudio.com/download)
* Node.js (https://nodejs.org/en/download/)

### Installation
1. Clone this repo;
2. Extract it to wherever you want to save it on your computer;
3. Open Visual Studio Code (`Run as Administrator`);
4. File -> Open Folder. Navigate to the folder that you have extracted earlier;
5. Open Terminal and run `npm i discord.js@12.5.3`, in root folder to download npm packages;
6. Create a `config` folder in the root folder and in it create a `config.json` file;
7. In this file (`config.json`), create a object with the keys `prefix` and `token`;
Fill in your desired prefix and your bots token.
```javascript
{
  "prefix": "insert your prefix here",
  "token": "insert your bot token here"
}
```
> Make sure your folder structure should look something like this when you are done:<br>
📦simple-basic-discord-js-bot<br>
┣ 📂config<br>
┃ ┗ 📜config.json<br>
┣ 📂node_modules<br>
┣ 📂src<br>
 ┃ ┣ 📂commands<br>
 ┃ ┣ 📜colors.js<br>
 ┃ ┗ 📜index.js<br>
 ┣ 📜package-lock.json<br>
 ┣ 📜package.json<br>
 ┗ 📜README.md<br>
8. Run `npm start` in root folder and your bot should be up and running in a few seconds.

