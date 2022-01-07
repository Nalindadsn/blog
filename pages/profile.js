import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

import React, { useEffect, useContext } from 'react'


import { Store } from '../utils/Store'

function Profile() {
  return (
    <div title="Profile">
 <br/> <br/> <br/>
 
    </div>
  )
}

export default dynamic(() => Promise.resolve(Profile), { ssr: false })
