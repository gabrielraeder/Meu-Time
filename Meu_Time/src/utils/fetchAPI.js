const HOST = 'v3.football.api-sports.io';

export default async function fetchAPI(path, callback, options) {
  try {
    const response = await fetch(`https://${HOST}/${path}`, options);
    const data = await response.json();
    callback(data);
  } catch (error) {
    console.log(error);
  }
}