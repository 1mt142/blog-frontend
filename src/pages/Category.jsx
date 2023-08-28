import { useParams } from "react-router-dom"
import NotFound from "~/pages/NotFound"
import Breadcrumbs from "~/components/Breadcrumbs"
import Categories from "~/components/Categories"
import CategoryPost from "~/components/CategoryPost"

function Category() {
  const location = useParams()
  const pathname = location.name

  const categories = ['single-category']
  
  // Check if exist category
  if (!categories.includes(pathname)) {
    return <NotFound />
  }

  return (
    <>
      <Breadcrumbs>Single Category</Breadcrumbs>
      <div className="container flex gap-14 my-14 mb-28 max-xl:flex-col">
        <div className="w-80 max-xl:w-full flex-shrink-0 flex flex-col gap-16 order-1 max-xl:order-2">
          <Categories />
        </div>
        <div className="order-2 max-xl:order-1">
          <CategoryPost />
        </div>
      </div>
    </>
  )
}

export default Category
