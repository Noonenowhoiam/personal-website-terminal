import packageJson from '../../../package.json';
import * as bin from './index';

export const h = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');

  return `Available commands:\n${commands}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.

+---------------------+      +---------------------+      +-----------------------+
|    'resume' / 'r'   |      |       Socials       |      |       Try These       |
+---------------------+      +----------+----------+      +-----------------------+
| 'portfolio' / 'p'   |      | Linkedin |'linkedin'|      |        'cowsay'       |
+---------------------+      +----------+----------+      +-----------------------+
| 'internships' / 'i' |      |  Spotify | 'spotify'|      |         'date'        |
+---------------------+      +----------+----------+      +-----------------------+
|    'about' / 'a'    |      |   Email  |  'email' |      |       'doritos'       |
+---------------------+      +----------+----------+      +-----------------------+
|    'banner' / 'b'   |      |  Github  | 'github' |      |        'emacs'        |
+---------------------+      +----------+----------+      +-----------------------+
|        'gui'        |                                   |          'vi'         |          
+---------------------+                                   +-----------------------+
|       'help'        |                                   |         'vim'         |     
+---------------------+                                   +-----------------------+
|      'github'       |                                   |     'super_secret'    |
+---------------------+                                   +-----------------------+
                                                          | 'weather {your_city}' |
                                                          +-----------------------+
                                                          |        'whoami'       |
                                                          +-----------------------+
                                                          |     'theme random'    |
                                                          +-----------------------+
`;
};

export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');

  return `Available commands:\n${commands}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.

+---------------------+      +---------------------+      +-----------------------+
|    'resume' / 'r'   |      |       Socials       |      |       Try These       |
+---------------------+      +----------+----------+      +-----------------------+
| 'portfolio' / 'p'   |      | Linkedin |'linkedin'|      |        'cowsay'       |
+---------------------+      +----------+----------+      +-----------------------+
| 'internships' / 'i' |      |  Spotify | 'spotify'|      |         'date'        |
+---------------------+      +----------+----------+      +-----------------------+
|    'about' / 'a'    |      |   Email  |  'email' |      |       'doritos'       |
+---------------------+      +----------+----------+      +-----------------------+
|    'banner' / 'b'   |      |  Github  | 'github' |      |        'emacs'        |
+---------------------+      +----------+----------+      +-----------------------+
|        'gui'        |                                   |          'vi'         |          
+---------------------+                                   +-----------------------+
|       'help'        |                                   |         'vim'         |     
+---------------------+                                   +-----------------------+
|      'github'       |                                   |     'super_secret'    |
+---------------------+                                   +-----------------------+
                                                          | 'weather {your_city}' |
                                                          +-----------------------+
                                                          |        'whoami'       |
                                                          +-----------------------+
                                                          |     'theme random'    |
                                                          +-----------------------+
`;
};

export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return 'guest';
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const gui = async (args: string[]): Promise<string> => {
  window.open('https://m4tt72.com', '_self'); // TODO: Add personal url

  return 'Opening GUI version...';
};

export const email = async (args: string[]): Promise<string> => {
  window.open('mailto:vgautam2@illinois.edu');

  return 'Opening mailto:vgautam2@illinois.edu...';
};

export const vi = async (args: string[]): Promise<string> => {
  return `why use vi? try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `the right choice 🙃`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `really? emacs? you should be using 'vim'. 
It is safer for your pinky!`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  }, 1000);

  return `Permission denied: unable to run the command '${args[0]}' as root.`;
};

/* export const repo = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.open('https://github.com/m4tt72/terminal', '_blank');
  }, 1000);

  return 'Opening repository...';
}; */

/* export const donate = async (args?: string[]): Promise<string> => {
  window.open(packageJson.funding.url, '_blank');

  return 'Opening donation url...';
}; */

export const doritos = async (args?: string[]): Promise<string> => {
  return `
-----------------------------------------------------------------------------------------
Sorry i drop my smallpack of doritos ▲▼▶◀▼▲▲▼▶▼▲▲▼▶◀▶▲▲▶▶▼▲▶▶▶▼▲◀◀▶▼◀▶▼▶▶◀▼▲◀▶▲▼▶▶▼▼▲◀▶▼▲
-----------------------------------------------------------------------------------------
`;
};

export const banner = (args?: string[]): string => {
  return `
██╗░░░██╗██╗██████╗░██╗████████╗  ░██████╗░░█████╗░██╗░░░██╗████████╗░█████╗░███╗░░░███╗
██║░░░██║██║██╔══██╗██║╚══██╔══╝  ██╔════╝░██╔══██╗██║░░░██║╚══██╔══╝██╔══██╗████╗░████║
╚██╗░██╔╝██║██║░░██║██║░░░██║░░░  ██║░░██╗░███████║██║░░░██║░░░██║░░░███████║██╔████╔██║
░╚████╔╝░██║██║░░██║██║░░░██║░░░  ██║░░╚██╗██╔══██║██║░░░██║░░░██║░░░██╔══██║██║╚██╔╝██║
░░╚██╔╝░░██║██████╔╝██║░░░██║░░░  ╚██████╔╝██║░░██║╚██████╔╝░░░██║░░░██║░░██║██║░╚═╝░██║
░░░╚═╝░░░╚═╝╚═════╝░╚═╝░░░╚═╝░░░  ░╚═════╝░╚═╝░░╚═╝░╚═════╝░░░░╚═╝░░░╚═╝░░╚═╝╚═╝░░░░░╚═╝ v${packageJson.version}

Welcome to my linux-terminal style website!
Want to use a regular website? type 'gui' and press enter

Example Commands:
  - Resume: 'resume' or 'r'
  - Projects: 'portfolio' or 'p'
  - Github: 'github'

Contacts:
  - Email me: 'email'
  - Linkedin: 'linkedin'
  - Spotify 🙃: 'spotify'

Type 'help' to see a list of available commands.
`;
};

export const b = (args?: string[]): string => {
  return `
██╗░░░██╗██╗██████╗░██╗████████╗  ░██████╗░░█████╗░██╗░░░██╗████████╗░█████╗░███╗░░░███╗
██║░░░██║██║██╔══██╗██║╚══██╔══╝  ██╔════╝░██╔══██╗██║░░░██║╚══██╔══╝██╔══██╗████╗░████║
╚██╗░██╔╝██║██║░░██║██║░░░██║░░░  ██║░░██╗░███████║██║░░░██║░░░██║░░░███████║██╔████╔██║
░╚████╔╝░██║██║░░██║██║░░░██║░░░  ██║░░╚██╗██╔══██║██║░░░██║░░░██║░░░██╔══██║██║╚██╔╝██║
░░╚██╔╝░░██║██████╔╝██║░░░██║░░░  ╚██████╔╝██║░░██║╚██████╔╝░░░██║░░░██║░░██║██║░╚═╝░██║
░░░╚═╝░░░╚═╝╚═════╝░╚═╝░░░╚═╝░░░  ░╚═════╝░╚═╝░░╚═╝░╚═════╝░░░░╚═╝░░░╚═╝░░╚═╝╚═╝░░░░░╚═╝ v${packageJson.version}

Welcome to my linux-terminal style website!
Want to use a regular website? type 'gui' and press enter

Example Commands:
  - Resume: 'resume' or 'r'
  - Projects: 'portfolio' or 'p'
  - Github: 'github'

Contacts:
  - Email me: 'email'
  - Linkedin: 'linkedin'
  - Spotify 🙃: 'spotify'

Type 'help' to see a list of available commands.
`;
};
