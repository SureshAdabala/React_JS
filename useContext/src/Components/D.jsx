import React, { useContext } from 'react'
import { GiftContext } from '../Context/GiftContext'

function D() {
    const {gift} = useContext(GiftContext)
  return (
    <>
     <h1>This is the D Component</h1>
     <h2>I Got a {gift} on App Component by using Context</h2>
    </>
  )
}

export default D