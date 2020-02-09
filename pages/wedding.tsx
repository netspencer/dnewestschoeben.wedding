import React from 'react'
import { NextPage } from 'next'
import classNames from 'classnames'

import Layout from '../components/Layout'
import WeddingDetails from '../components/WeddingDetails'

const WeddingPage: NextPage = () => {
  return (
    <Layout className={classNames('pb-12', 'md:pb-32')}>
      <WeddingDetails />
    </Layout>
  )
}

export default WeddingPage
