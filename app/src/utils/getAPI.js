import fetchAPI from './fetchAPI';

export default async function getAPI(path, callback, apiKey) {
  const options = {
    method: 'GET',
    headers: {
      'x-apisports-key': apiKey
    }
  };
  await fetchAPI(path, callback, options);
}
