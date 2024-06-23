import './App.css'
import Classes from './components/ClassesSection/Classes'
import Contact from './components/ContactSection/Contact'
import Footer from './components/Footer/Footer'
import Header from './components/HeaderSection/Header'
import Home from './components/HomeSection/Home'
import Review from './components/ReviewSection/Review'
import Trainer from './components/TrainerSection/Trainer'


export function App() {

  return (
    <body>

      <Header />

      {/* hero-home: */}
      <Home />

      {/* our classes-bmi calculator: */}
      <Classes />

      {/* trainers-purchase: */}
      <Trainer />

      <Review />

      <Contact />

      <Footer />
      
    </body>
  )
}
