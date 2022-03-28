import {BrowserRouter, Routes, Route} from "react-router-dom";

//Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Article from "./pages/Article";
import ArticlesList from "./pages/ArticlesList";
import NotFound from "./pages/errors/404"

//admin
import Dashboard from "./pages/admin/Dashboard";

//Components
import Navbar from "./components/Navbar";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import AddArticle from "./pages/admin/AddArticle";


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
          <Route exact path='/auth/login' element={<Login/>}></Route>
          <Route exact path='/auth/register' element={<Register/>}></Route>
          <Route exact path='/dashboard' element={<Dashboard/>}></Route>
          <Route exact path='/dashboard/add-article' element={<AddArticle/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
