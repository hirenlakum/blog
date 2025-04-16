import Post from "./Post"
import { useState } from "react"
import { useContext } from "react"
import {PostContext} from "../Store/PostStore"

const Home = () => {

    const {data} = useContext(PostContext)
 

    return(
        <>
<Post key={data.id} Mydata={data}/>
        </>
    )
}

export default Home