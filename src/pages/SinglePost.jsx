import { useState, useEffect } from 'react'
import axios from "axios"
import PostContent from "~/components/PostContent"

function SinglePost() {
  // Fetching data from server
  const [post, setPost] = useState([])

  useEffect(() => {
    axios.get('/fake_data/single-post.json').then((res) => {
      setPost(res.data)
    })
  }, [])

  return (
    <>
      <PostContent title={post.title} category={post.category} url={post.categoryUrl} date={post.date}>
        {post.content}
      </PostContent>
    </>
  )
}

export default SinglePost
