import { Route, Routes } from "react-router"
import HomePage from "./Pages/HomePage"
import ArticlesPage from "./Pages/ArticlesPage"
import ArticlePage from "./Pages/ArticlePage"
import SignIn from "./Pages/SignIn"
import SignUp from "./Pages/SignUp"
import Header from "./components/Header"
import Footer from "./components/Footer"
function App() {

  return (
    <div>
      {/* header section */}
      <Header/>
      <main>
        {/* main section */}
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/articles' element={<ArticlesPage/>} />
          <Route path='/article/:id' element={<ArticlePage/>} />

          {/* unathenticated routes (redirected to login) */}
          <Route path='signin' element={<SignIn/>} />
          <Route path='signup' element={<SignUp/>} />
        </Routes>
      </main>
      {/* footer section */}
      <Footer/>
    </div>
  )
}

export default App
