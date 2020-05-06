import React from 'react'

const withEmptyScreen = ({ EmptyScreen, isEmpty = () => false }) => (Component) =>
  function WithEmptyScreen(props) {
    console.warn(props)
    return isEmpty(props) ? <EmptyScreen /> : <Component {...props} />
  }

export default withEmptyScreen
