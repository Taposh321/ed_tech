import { useState } from 'react'
import Layout from './layout'
import Hero from './components/heroSection/hero'
import Services from './components/services/services'
import Course from './components/course/course'
import FreeTrail from './components/freeTrail/freeTrail'
import Newsletter from './components/newsletter/newsletter'
import Footer from './components/footer/footer'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <Layout>
     <Hero />
     <Services />
     <Course />
     <FreeTrail />
     <Newsletter />
     <Footer />
    </Layout>
    
    </>
  )
}

export default App
