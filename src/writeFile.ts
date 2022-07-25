import fs from 'fs'
import { invoke } from '@tauri-apps/api/tauri'

fs.writeFile('message.html', await invoke('download'), (err) => {
    if (err) throw err;
    console.log('It\'s saved!');
  });