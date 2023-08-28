import { useState, useEffect } from 'react'
import axios from "axios"
import SectionTitle from "~/components/ui/SectionTitle"
import CategoryItem from "~/components/ui/CategoryItem"

function Categories() {

  const [categoryList, setcategoryList] = useState([])

  useEffect(() => {
    axios.get('/fake_data/categories.json').then((res) => {
      setcategoryList(res.data)
    })
  }, [])

  return (
    <div>
      <SectionTitle>Categories</SectionTitle>
      {categoryList.map((object, index) =>
        <CategoryItem
          key={index}
          index={index}
          url={object.url}
          title={object.title}
          img={object.img}
          posts={object.posts}
        />
      )}
    </div>
  )
}

export default Categories
