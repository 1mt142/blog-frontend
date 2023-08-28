import { useState, useEffect } from 'react'
import axios from "axios"
import DetailedPost from '~/components/ui/DetailedPost'

function CategoryPost() {

  const [categoryPosts, setCategoryPosts] = useState([])

  useEffect(() => {
    axios.get('/fake_data/category-posts.json').then((res) => {
      setCategoryPosts(res.data)
    })
  }, [])

  return (
    <div className="flex flex-wrap gap-6">
      <div className="grid grid-cols-2 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5 w-full">
        {categoryPosts.map((object, index) =>
          <DetailedPost
            key={index}
            url={object.url}
            img={object.img}
            title={object.title}
            date={object.date}
            content={object.content}
          />
        )}
      </div>
    </div>
  )
}

export default CategoryPost
