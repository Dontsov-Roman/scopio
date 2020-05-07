export default {
  root: '/',
  country: '/:id',
  api: process.env.REACT_APP_API_URL || 'http://localhost:8080',
  covid19Api: 'https://api.covid19api.com/country/{Slug}/status/confirmed',
  covid19ApiLive: 'https://api.covid19api.com/live/country/{Slug}/status/confirmed',
}
