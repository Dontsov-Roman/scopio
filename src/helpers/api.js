import queryString from 'query-string'
import routes from 'constants/routes'
import { last } from 'lodash'

export default {
  getCountries: async () => {
    const response = await fetch(routes.api)
    return response.json()
  },
  getTodayStatus: async (Slug) => {
    const url = routes.covid19ApiLive.replace('{Slug}', Slug)
    const response = await fetch(url)
    const data = await response.json()
    return last(data)
  },
  getStatus: async (Slug, from, to) => {
    const query = queryString.stringify({ from, to })
    const url = routes.covid19Api.replace('{Slug}', Slug)
    const response = await fetch(query ? `${url}?${query}` : url)
    return response.json()
  },
}
