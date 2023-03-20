import React from 'react'
import Layout from '../../components/layout'
import { Cards } from '../../components/cards'

function Index() {
  return (
    <Layout>
        <section className="flex flex-col mx-auto gap-y-10">
            <h5 className="text-3xl font-medium text-center">Your One-Stop Shop for <br /> the Hottest Products</h5>
            <input type="text" placeholder='Search Here' className='mx-auto border-b w-96 pl-4 pb-1 focus:outline-none' />
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 mt-20">
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
        </section>
    </Layout>
  )
}

export default Index