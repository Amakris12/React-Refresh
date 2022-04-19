import {React} from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Breakfast from './Pages/BreakfastMeal'
import Lunch from './Pages/LunchMeal'
import Dinner from './Pages/DinnerMeal'
import Weekly from './Pages/WeeklyMeal'
import Footer from './Components/footer'
import Navbar from './Components/navbar'
import Banner from './Components/banner'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App = () => {
    return ( 
        <div>
            <Router>
                <Navbar/>
                <Banner />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path='About' element={(<About/>)} />
                    <Route path='Contact' element={(<Contact/>)} />
                    <Route path='Breakfast' element={(<Breakfast/>)} />
                    <Route path='Lunch' element={(<Lunch/>)} />
                    <Route path='Dinner' element={(<Dinner/>)} />
                    <Route path='Weekly' element={(<Weekly/>)} />
                </Routes>
                <Footer/>
            </Router>
        </div>
    )
}

export default App
