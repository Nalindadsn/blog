import React from 'react'
import { signOut } from 'next-auth/client'

const Tt = () => {
  return (
    <div>
      Home
      <button onClick={() => signOut()}>signOut</button>
    </div>
  )
}

export default Tt