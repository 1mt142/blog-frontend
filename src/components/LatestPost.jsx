import { useState, useEffect } from 'react'
import axios from "axios"
import SinglePostItem from "~/components/ui/SinglePostItem"
import SectionTitle from "~/components/ui/SectionTitle"

function LatestPost() {

  const [latestPosts, setLatestPosts] = useState([])

  useEffect(() => {
    axios.get('/fake_data/latest-posts.json').then((res) => {
      setLatestPosts(res.data)
    })
  }, [])

  return (
    <div className="flex flex-wrap gap-6 flex-grow">
      <SectionTitle>Latest Posts</SectionTitle>
      <div className="grid grid-cols-2 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5 w-full">
        {latestPosts.map((object, index) =>
          <SinglePostItem
            key={index}
            url={object.url}
            img={object.img}
            category={object.category}
            title={object.title}
            date={object.date}
          />
        )}
      </div>
    </div>
  )
}

export default LatestPost
