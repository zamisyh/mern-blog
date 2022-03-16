import {BrowserRouter, Routes, Route} from "react-router-dom";

//Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Article from "./pages/Article";
import ArticlesList from "./pages/ArticlesList";
import NotFound from "./pages/errors/404"

//Components
import Navbar from "./components/Navbar";


function App() {
  return(
    <BrowserRouter>
      <Navbar />
      <div className='max-w-screen-md pt-16 mx-auto'>
        <Routes>
          <Route Route path="*" element={<NotFound/>}></Route>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path='/about' element={<About/>}></Route>
          <Route exact path='/articles-list' element={<ArticlesList />}></Route>
          <Route exact path='/article/:name' element={<Article/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
