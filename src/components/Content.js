import React from 'react'
import About from '../page/About'
import Contagion from '../page/Contagion'
import Symtoms from '../page/Symtoms'
import { BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import Prevent from '../page/Prevent'
import News from '../page/News'
import NewsDetail from '../page/NewsDetail'
function Content() {
  return (
    <>
      <Routes>
        <Route index path='/' element={<About />}/>
        <Route path='symtom' element={<Symtoms />}/>
        <Route path='contagion' element={<Contagion />}/>
        <Route path='prevent' element={<Prevent />} />
        <Route path='news' element={<News />}/>
        <Route path='newsDetail/:id' element={<NewsDetail />} />
      </Routes>
    </>
  )
}

export default Content