import React from 'react'
import { NextPage } from 'next'
import Layout from '../components/Layout'
import Postcard from '../components/Postcard'
import classNames from 'classnames'

const IndexPage: NextPage = () => {
  return (
    <Layout>
      <Postcard />
    </Layout>
  )
}

export default IndexPage
