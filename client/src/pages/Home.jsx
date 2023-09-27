import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Card from '../components/Card'
import Form from '../components/Form'
import Loader from '../components/Loader'

const RenderCards = ({ data, title }) => {
    if (data?.length > 0) {
        return data.map((post) => (
        <Card key={post._id}{...post}></Card>
        ))
    }
    return (
        <h2 className='mt-5 font-bold text-purple-500 text-xl uppercase'>
            {title}
        </h2>
    )
}

const Home = () => {
    const [loading, setLoading] = useState(false);
    const [allPosts, setAllPost] = useState(null);
    const [searchText, setSearchText] = useState('');

  return (
   <section className='max-w-7xl mx-auto'>
        <div>
            <h1 className=' font-bold'>Community Ideas</h1>
            <p className='mt-3 text-slate-600 max-w[500px'>Browse the communities
             collection of images made with this very website and DALL-E AI! </p>
        </div>
        <div className='mt-10'>
            <Form></Form>
        </div>
        <div className='mt-10'>
            { loading ? 
                <div className='flex justify-center items-center'> <Loader />
                </div> 
                : 
                <>
                { searchText && (
                    <h2 className=' font-medium text-slate-600'>
                        Showing results for <span className='text-purple-500'>{searchText}</span>
                    </h2>
                ) }
                <div className='grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cold-1 gap-3'>
                    { searchText ? 
                        <RenderCards data={[]} title='No search results found'/> 
                    :
                        <RenderCards data={[]} title='No posts found'/>
                    }
                </div>
                </>
            } 
        </div>

   </section>
  )
}

export default Home