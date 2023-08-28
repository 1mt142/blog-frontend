import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "~/components/Header"
import Footer from "~/components/Footer"
import NotFound from '~/pages/NotFound'
import Home from '~/pages/Home'
import SinglePost from '~/pages/SinglePost'
import Category from "~/pages/Category"

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/blog/:post" element={<SinglePost />} />
          <Route path="/category/:name" element={<Category />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
