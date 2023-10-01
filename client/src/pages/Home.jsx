import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Card from '../components/Card'
import Form from '../components/Form'
import Loader from '../components/Loader'
import axios from 'axios';
import RenderCards from '../components/RenderCards'



const Home = () => {
    const [loading, setLoading] = useState(false);
    const [allPosts, setAllPost] = useState([]);
    const [searchText, setSearchText] = useState('');
    
    const [searchResults, setSearchResults] = useState(null)
    const [searchTimeOut, setSearchTimeOut] = useState(null)

   
  
    useEffect( () => {
        const fetchPosts = async () => {
            setLoading(true);
            try {
                await axios.get('http://localhost:3000/api/images')
                .then ( res => {
                    console.log(res.data);
                    setAllPost(res.data.data.reverse())
                })
            } catch (err) {
                console.log(err)
            } finally {
                setLoading(false);
            }
        }

        fetchPosts();
       
    }, [])

    const handleSearch = (e) => {
        setSearchText(e.target.value);

        setSearchTimeOut(
            setTimeout( () => {
                const searchResults = allPosts.filter( (item) => item.name.toLowerCase().includes(searchText.toLowerCase()) ||
                item.prompt.toLowerCase().includes(searchText.toLowerCase()))
    
                setSearchResults(searchResults)
            }, 500)
        )
    }

  return (
   <section className='max-w-7xl mx-auto'>
        <div className='text-black'>
            <h1 className=' font-bold text-3xl'>Community Ideas</h1>
            <p className='mt-3 max-w[500px text-lg text-gray-600'>Browse and explore community creations! Find inspiration and
            create your own image with the help of RapidApi's simple iteration of Open Ai's DALL-E</p>
        </div>
        <div className='mt-10'>
           <Form 
                labelName="Search Image"
                type="text"
                name="text"
                placeholder="Search Image"
                value={searchText}
                handleChange={handleSearch} />
        </div>
        <div className='mt-10'>
            { loading ? 
                <div className='flex justify-center items-center'> <Loader />
                </div> 
                : 
                <>
                { searchText && (
                    <h2 className=' font-medium text-slate-600'>
                        Showing results for <span className='text-500-red'>{searchText}</span>
                    </h2>
                ) }
                <div className='grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cold-1 gap-3'>
                    { searchText ? 
                        <RenderCards data={searchResults}  title='No search results found' /> 
                    :
                        <RenderCards data={allPosts} setAllPost={setAllPost} title='No posts found' />
                    }
                </div>
                </>
            } 
        </div>

   </section>
  )
}

export default Home