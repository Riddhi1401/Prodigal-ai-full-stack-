import { useState } from 'react'

import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import NewsClassifier from './components/NewsClassifier/NewsClassifier';
import SourcesChecker from './components/SourcesChecker/SourcesChecker';
import History from './components/History/History';
import Analytics from './components/Analytics/Analytics';
import PremiumFeatures from './components/PremiumFeatures/PremiumFeatures';


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
       <Dashboard />
         <NewsClassifier/>
         <SourcesChecker/>
         <History/>
         <Analytics/>
         <PremiumFeatures/>
    

    </>
  )
}

export default App
