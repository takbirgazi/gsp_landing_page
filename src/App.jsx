import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'

function App() {

  return (
    <main className="font-sans mx-auto bg-gray-200">
      <Header />
      <section>
        <Outlet />
      </section>
      <Footer />
    </main>
  )
}

export default App;
