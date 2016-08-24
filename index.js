const electron = require('electron');

exports.onWindow = (win) => {
  const {width, height} = electron.screen.getPrimaryDisplay().workAreaSize;
  win.setSize(width, height);
};
