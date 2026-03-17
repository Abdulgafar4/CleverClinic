import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Product from './pages/Product';
import AICalling from './pages/AICalling';
import Templates from './pages/Templates';
import Pricing from './pages/Pricing';
import PlaceholderPage from './pages/PlaceholderPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="ai-calling" element={<AICalling />} />
          <Route path="templates" element={<Templates />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="use-cases/:type" element={<PlaceholderPage title="Use Cases" />} />
          <Route path="about" element={<PlaceholderPage title="About Us" />} />
          <Route path="security" element={<PlaceholderPage title="Security & Compliance" />} />
          <Route path="contact" element={<PlaceholderPage title="Contact Sales" />} />
          <Route path="blog" element={<PlaceholderPage title="Resources & Blog" />} />
          <Route path="privacy" element={<PlaceholderPage title="Privacy Policy" />} />
          <Route path="terms" element={<PlaceholderPage title="Terms of Service" />} />
          <Route path="login" element={<PlaceholderPage title="Log In" />} />
          <Route path="signup" element={<PlaceholderPage title="Start Free Trial" />} />
          <Route path="book-demo" element={<PlaceholderPage title="Book a Demo" />} />
          <Route path="*" element={<PlaceholderPage title="Page Not Found" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
