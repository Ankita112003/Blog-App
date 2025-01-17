import React, { useEffect ,useState} from 'react'
import service from '../appwrite/config'
import {Container,PostCard} from '../components'
function Home() {
    const[posts,SetPosts] = useState([])
    useEffect(() =>{
        service.getPosts().then((posts)=>{
            if(posts){
                SetPosts(posts.documents)
            }
        })
    },[])
    if(posts.length===0){
        return(
            <div className=' w-full py-8 mt-4 text-center'>
                <Container>
                    <div className=' flex flex-wrap'>
                        <div className=' p-2 w-full'>
                            <h1 className=' text-2xl font-bold hover:text-gray-500'>
                                No Posts available
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return(
        <div className=' w-full py-8'>
            <Container>
                <div className=' flex flex-wrap'>
                    {posts.map((post)=>(
                        <div className=' p-2 w-1/4' key={post.$id}>
                            <PostCard {...post}/>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home
