import axios from 'axios';
import config from '../../config.json';


const javaInstallerUrl = 'https://download.oracle.com/java/17/latest/jdk-17_windows-x64_bin.exe'; // Update URL as needed

const getPlatform = (): 'Unknown' | 'Windows' | 'MacOS' | 'Linux' => {
  let os: 'Unknown' | 'Windows' | 'MacOS' | 'Linux' = 'Unknown';

  if (navigator.userAgent.indexOf('Win') !== -1) {
    os = 'Windows';
  }
  if (navigator.userAgent.indexOf('Mac') !== -1) {
    os = 'MacOS';
  }
  if (navigator.userAgent.indexOf('Linux') !== -1) {
    os = 'Linux';
  }

  return os;
};

const getMainColor = () => {
  const platform = getPlatform();
  const themeName = localStorage.getItem('theme');
  const theme = themes.find((theme) => theme.name.toLowerCase() === themeName);

  switch (platform) {
    case 'MacOS':
      return theme.cyan;
    case 'Windows':
      return theme.blue;
    case 'Linux':
      return theme.red;
  }
};

const getJavaInstallInstructions = () => {
  const platform = getPlatform();
  const mainColor = getMainColor();

  switch (platform) {
    case 'Windows':
      return `<p style="color: ${mainColor}">Download the Java 17 installer for Windows <a href="${javaInstallerUrl}" target="_blank">here</a>.</p>`;
    case 'MacOS':
      return `<p style="color: ${mainColor}">You can download Java 17 for macOS from the <a href="https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html" target="_blank">official Oracle page</a>.</p>`;
    case 'Linux':
      return `<p style="color: ${mainColor}">Install Java 17 on Linux using your package manager, e.g., <code style="color: ${mainColor}">sudo apt install openjdk-17-jdk</code>.</p>`;
    default:
      return `<p style="color: ${mainColor}">Platform not recognized. Visit the <a href="https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html" target="_blank">official Oracle page</a> for Java 17.</p>`;
  }
};

// New Java Install API Route
export const javaInstall = async (req, res) => {
  const instructions = getJavaInstallInstructions();
  res.status(200).json({ instructions });
};


export const getRepos = async () => {
  const { data } = await axios.get(
    `https://api.github.com/users/${config.social.github}/repos`,
  );

  return data;
};

export const getBio = async () => {
  const { data } = await axios.get(config.bioUrl);

  return data;
};

export const getExp = async () => {
  const { data } = await axios.get(config.experience);

  return data;
};

export const getResume = async () => {
  const { data } = await axios.get(config.resume);

  return data;
};

export const getPortfolio = async () => {
  const { data } = await axios.get(config.portfolio);

  return data;
};

export const getProjects = async () => {
  const { data } = await axios.get(config.projects);

  return data;
};

export const getWeather = async (city: string) => {
  const { data } = await axios.get(`https://wttr.in/${city}?ATm`);

  return data;
};

export const getQuote = async () => {
  const { data } = await axios.get('https://api.quotable.io/random');

  return {
    quote: `“${data.content}” — ${data.author}`,
  };
};

// Mortal Kombat
export const getMK = async () => {
  const { data } = await axios.get(config['mortal-kombat']);

  return data;
};
