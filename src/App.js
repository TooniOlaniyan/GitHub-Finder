import {BrowserRouter as Router ,Routes , Route} from 'react-router-dom'
import NavBar from './Component/Layout/NavBar';
import Footer from './Component/Layout/Footer';
import Alert from './Component/Layout/Alert';
import About from './Pages/About';
import Home from './Pages/Home';
import User from './Pages/User'
import PageNotFound from './Pages/PageNotFound';
import {GithubProvider} from './Context/GithubContext'
import {AlertProvider} from './Context/alert/AlertContext'

function App() {
  return (
    <GithubProvider>
     <AlertProvider>
    <Router >
        <div className="flex flex-col justify-between h-screen">
        <NavBar/> 
        <main className='container mx-auto px-5 pb-12'>
          <Alert/>
          
          <Routes>
            <Route path='/about' element={<About/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='https://api.github.com/user/:ologin' element={<User/>}/>
            <Route path='/notfound' element={<PageNotFound/>}/>
            <Route element={<PageNotFound/>}/>
          </Routes>
         
        </main>
          <Footer/>
      </div>
    </Router>
    </AlertProvider> 
    </GithubProvider>
  );
}

export default App;
