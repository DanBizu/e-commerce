export async function getData() {
  const data = await fetch('https://random-data-api.com/api/beer/random_beer?size=40')
    .then(response => response.json())
    .then(json => {
      console.log('+++ json', json);
      return json
    });

  return data;
}