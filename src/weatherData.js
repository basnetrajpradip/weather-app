// async function for requesting data to the api
export default async function requestCurrentData(location) {
  const API_KEY = "6af34468f7a04780b5c60908232408";
  const url = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=3`;

  const response = await fetch(url, { mode: "cors" });
  if (!response.ok) {
    if (response.status === 400) {
      throw new Error("No such location found !");
    }
  }

  const weatherData = await response.json();
  return weatherData;
}
