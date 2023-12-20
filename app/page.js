import Image from 'next/image'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Business from './components/Business'
import Food from './components/Food'
import Categories from './components/Categories'
import Review from "./components/Review"
import Featured from './components/Featured'
import Background from './components/Background'
import Coupons from './components/Coupons'
import Foodbanner from './components/Foodbanner'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div >
      <Navbar />
      <Hero />
      <Business />
      <div className='w-10/12 mx-auto'>
        <Food />
        <Categories />
        <Review />
        <Featured />
        
      </div>
      <Background />
      <Coupons />
      <Foodbanner />
      <Footer/>
    </div>
  )
}
