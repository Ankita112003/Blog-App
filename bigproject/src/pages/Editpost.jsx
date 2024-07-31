import React from 'react'
import {useEffect,useState} from 'react'
import service from '../appwrite/config.js'
import { Container,PostForm } from '../components'
import { useNavigate,useParams } from 'react-router-dom'
function Editpost() {
    const[post,SetPost] = useState(null)
    const{slug} = useParams()
    const navigate=useNavigate()
    useEffect(()=>{
        if(slug){
            service.getPost(slug).then((post)=>{
                if(post){
                    SetPost(post)
                }
                else{
                    navigate('/')
                }
            })
        }
    },[slug,navigate])
    return post? (<div className=' py-8'>
        <Container>
            <PostForm post={post}/>
        </Container>
    </div>) :null
}

export default Editpost
