import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroSlider from './Component/HeroSlider'
import Navbar from './Component/Navbar'
import About from './Component/About'
import OurWork from './Component/Ourwork'
import Collaborations from './Component/Collaborations'
import Receenthighlights from './Component/RecentHighlights'
import InsightsAudience from './Component/InsightsAudience'
import WhyWorkWithUs from './Component/WhyWorkWithUs'
import ContactUs from './Component/ContactUs'


function App() {
  const [count, setCount] = useState(0)

  return (
<div>
<Navbar></Navbar>
<HeroSlider></HeroSlider>
<About></About>
<OurWork></OurWork>
<Collaborations></Collaborations>
<Receenthighlights></Receenthighlights>
<InsightsAudience></InsightsAudience>
<WhyWorkWithUs></WhyWorkWithUs>
<ContactUs></ContactUs>
</div>
  )
}

export default App
