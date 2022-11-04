export async function ByCity(props) {
  return await fetch(
    "https://api.openbrewerydb.org/breweries?by_city=" + props
  ).then((response) => {
    return response.json();
  });
}
