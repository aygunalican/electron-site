import { useState } from 'react'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Home from './pages/Home'
import { ApiProvider } from './components/ApiContext'
import ProductDetail from './pages/ProductDetail'
import { BrowserRouter, Route, Routes } from 'react-router'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Header /> <ApiProvider>
        <Routes>

         


            <Route path="/" element={<Home />} />

            <Route path="/product/:slug" element={<ProductDetail />} />
      
        </Routes>    </ApiProvider>
        <Footer />
      </BrowserRouter>




    </>
  )
}

export default App
