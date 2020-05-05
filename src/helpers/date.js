export const getFrom = () => {
  const date = new Date()
  date.setDate(date.getDate() - 7)
  return date.toISOString()
}
export const getTo = () => {
  const date = new Date()
  return date.toISOString()
}

export const dateFormat = (d) => {
  const date = new Date(d)
  return date.toLocaleDateString()
}
