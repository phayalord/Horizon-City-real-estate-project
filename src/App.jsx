import React from 'react'
import './app.css';
import { Home, Service, Portfolio, AboutUs, Shop, Contact, Blog } from './pages';
import { Footer, ImageSider, Navbar, ProjectButton, ShopButton } from './components';

function App() {
  return (
    <div className="container">
        <Home />
    </div>
  )
}

export default App;