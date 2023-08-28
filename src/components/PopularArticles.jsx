import { useState, useEffect } from 'react'
import axios from "axios"
import SectionTitle from "~/components/ui/SectionTitle"
import PopularArticle from "~/components/ui/PopularArticle"

function PopularArticles() {

  const [popularPosts, setPopularPosts] = useState([])

  useEffect(() => {
    axios.get('/fake_data/popular-posts.json').then((res) => {
      setPopularPosts(res.data)
    })
  }, [])

  return (
    <div>
      <SectionTitle>Popular Articles</SectionTitle>
      {popularPosts.map((object, index) =>
        <PopularArticle
          key={index}
          url={object.url}
          img={object.img}
          title={object.title}
          date={object.date}
        />
      )}
    </div>
  )
}

export default PopularArticles
