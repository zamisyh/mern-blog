import {BrowserRouter, Routes, Route} from "react-router-dom";

//Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Article from "./pages/Article";
import ArticlesList from "./pages/ArticlesList";

//Components
import Navbar from "./components/Navbar";


function App() {
  return(
    <BrowserRouter>
      <Navbar />
      <div className='max-w-screen-md pt-16 mx-auto'>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path='/about' element={<About/>}></Route>
          <Route exact path='/articles-list' element={<ArticlesList />}></Route>
          <Route exact path='/article' element={<Article/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
