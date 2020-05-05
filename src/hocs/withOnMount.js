import React, { useEffect } from 'react'

const withOnMount = (Component) =>
  function WithOnMount({ onMount, ...props }) {
    useEffect(() => {
      onMount(props)
    }, [])
    return <Component {...props} />
  }

export default withOnMount
