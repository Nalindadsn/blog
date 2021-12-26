import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

import React, { useEffect, useContext } from 'react'


import { Store } from '../utils/Store'
import Layout from '../components/Layout'

function Profile() {
  const { state, dispatch } = useContext(Store)

  const router = useRouter()
  const { userInfo } = state

  useEffect(() => {
    if (!userInfo) {
      return router.push('/login')
    }
  }, [])

  return (
    <Layout title="Profile">
 <br/> <br/> <br/>
 
    </Layout>
  )
}

export default dynamic(() => Promise.resolve(Profile), { ssr: false })
