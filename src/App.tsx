import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Store } from './pages/ProductList';
import { Navbar } from './components/Navbar';
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4 ">
        <Routes>
          <Route path="/" element={<Store />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  )
}

export default App
