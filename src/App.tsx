import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import About from './pages/About';
import Account from './pages/Account';
import Blog from './pages/Blog';
import Booking from './pages/Booking';
import Catalog from './pages/Catalog';
import Checkout from './pages/Checkout';
import Collections from './pages/Collections';
import Collection from './pages/Collection';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Product from './pages/Product';
import Services from './pages/Services';
import Category from './pages/Category';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="catalog/:categorySlug" element={<Category />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="collections" element={<Collections />} />
        <Route path="collections/:slug" element={<Collection />} />
        <Route path="services" element={<Services />} />
        <Route path="booking" element={<Booking />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="blog" element={<Blog />} />
        <Route path="account" element={<Account />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
