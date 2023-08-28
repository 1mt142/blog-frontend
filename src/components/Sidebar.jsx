import PopularArticles from "~/components/PopularArticles"
import Categories from "~/components/Categories"

function Sidebar() {
  return (
    <div className="w-80 max-xl:w-full flex-shrink-0 flex flex-col gap-16">
      <PopularArticles />
      <Categories />
    </div>
  )
}

export default Sidebar
