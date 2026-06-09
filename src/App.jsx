import { Route, Routes } from "react-router";
import HomePage from "./Pages/HomePage";
import ArticlesPage from "./Pages/ArticlesPage";
import ArticlePage from "./Pages/ArticlePage";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AuthProvider } from "./Context/AuthContext";
import { UnAuthenticatedRoute } from "./components/UnAuthenticatedRoute";
import ManageArticles from "./Pages/ManageArticles";
import Profile from "./Pages/Profile";
import Editor from "./Pages/Editor";
import { ProtectedRoute} from './components/ProtectedRoute';
function App() {
  return (
    <AuthProvider>
      {/* header section */}
      <Header />
      <main>
        {/* main section */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/article/:id" element={<ArticlePage />} />

          {/* unathenticated routes (redirected to login) */}
          <Route
            path="signin"
            element={
              <UnAuthenticatedRoute>
                <SignIn />
              </UnAuthenticatedRoute>
            }
          />
          <Route
            path="signup"
            element={
              <UnAuthenticatedRoute>
                <SignUp />
              </UnAuthenticatedRoute>
            }
          />

          {/* Protected Routes */}
          <Route
            path="/editor"
            element={
              <ProtectedRoute>
                {" "}
                <Editor />{" "}
              </ProtectedRoute>
            }
          />
          <Route
            path="/editor/:id"
            element={
              <ProtectedRoute>
                {" "}
                <Editor />{" "}
              </ProtectedRoute>
            }
          />
          <Route path="/manage-articles" element={
            <ProtectedRoute><ManageArticles /></ProtectedRoute>
            
        } />
          <Route path="profile" 
          element={
            <ProtectedRoute><Profile /></ProtectedRoute>
          }
          />
        </Routes>
      </main>
      {/* footer section */}
      <Footer />
    </AuthProvider>
  );
}

export default App;
