
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import AboutPage from './Components/Pages/AboutPage'
import Header from './Components/Header'
import FeedBackList from './Components/FeedBackList'
import FeedbackStats from './Components/FeedbackStats'
import FeedbackForm from './Components/FeedbackForm'
import AboutIconLink from './Components/AboutIconLink'
import {FeedbackProvider} from './Context/FeedBackContext'


function App() {


  return (
  <FeedbackProvider>
    <Router>
       <Header/>
  
      <div className="container">
            <Routes>
      <Route exact path='/' element={
        <>
        <FeedbackForm/>
         <FeedbackStats/>
         <FeedBackList/>
        
        </>
      }> 
         
      </Route>
      
      <Route path='/about' element={<AboutPage/>}/>
     
      </Routes>
      
      </div>
      <AboutIconLink></AboutIconLink>
  </Router>
  </FeedbackProvider>
  )
}

export default App
