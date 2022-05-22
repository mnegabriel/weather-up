import fetch from 'node-fetch';

export default async function handler(request, response) {

  const { WEATHER_API_KEY } = process.env
  const { query } = request

  const apiUrl = "http://api.weatherapi.com/v1/current.json"

  const searchQueryObject = new URLSearchParams({
    ...query,
    key: WEATHER_API_KEY
  })

  const res = await fetch(`${apiUrl}?${searchQueryObject.toString()}`)

  const data = await res.json();
  return response.status(200).json({ data });
}
