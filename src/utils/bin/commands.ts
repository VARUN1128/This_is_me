// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';
import { ThemeContext } from '../../pages/_app';
import React from 'react';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}, Junior AI Engineer.\nWelcome to my website!\nMore about me:\n'sumfetch' - short summary.\n'resume' - my latest resume.\n'readme' - my github readme.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Donate
export const donate = async (args: string[]): Promise<string> => {
  return `Thank you for your interest. Donations are not accepted at this time.`;
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Wow, really? You are using bing for ${args.join(' ')}?`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `a
bunch
of
fake
directories`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.
if you want to help, you can type 'donate'.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
<div class="overflow-x-auto w-full text-xs md:text-base" style="font-family: 'Hack', monospace;">
<pre style="margin:0;">
  __      __    _    _   _   _    _   _           _    _           
  \\ \\    / /   | |  | | | | | | |  | | | |         | |  | |          
   \\ \\  / /__ _| | _| |_| |_| | _| |_| |__   __ _| |__| | ___  ___ 
    \\ \\/ / _ \\ '_ \\| __| __| |/ / __| '_ \\ / _\` |  __  |/ _ \\/ __|
     \\  /  __/ | | | |_| |_|   < (__| | | | (_| | |  | |  __/\\__ \\
      \\/ \\___|_| |_|\\__|\\__|_|\\_\\___|_| |_|\\__,_|_|  |_|\\___||___/
</pre>
</div>
<span class="banner-animate">Junior AI Engineer</span>

Type 'help' to see the list of available commands.\nType 'sumfetch' to display summary.\nType 'theme' to switch color themes.\nType 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.`;
};

export const theme = async (args: string[], setTheme?: (theme: string) => void): Promise<string> => {
  const availableThemes = ['dracula', 'nord', 'monokai'];
  if (!args[0] || !availableThemes.includes(args[0].toLowerCase())) {
    return `Available themes: ${availableThemes.join(', ')}\nUsage: theme [theme-name]`;
  }
  if (setTheme) setTheme(args[0].toLowerCase());
  return `Theme switched to ${args[0]}.`;
};
