import Home from "./pages/Home";
import About from "./pages/About";
import Article from "./pages/Article";
import ArticlesList from "./pages/ArticlesList";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return(
    <div className='max-w-screen-md pt-20 mx-auto'>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path='/about' element={<About/>}></Route>
          <Route exact path='/articles-list' element={<ArticlesList />}></Route>
          <Route exact path='/article' element={<Article/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
