import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/app.scss"
import {
    HashRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import SEO from '@americanexpress/react-seo';
import { FaArrowUp } from "react-icons/fa";
import Header from "./components/header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Gallery from "./pages/Gallery/Gallery";
import Blog from "./pages/Blog/Blog";
import BlogSingle from "./pages/Blog/BlogSingle";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
      <Router basename="/">
          <div className="App">
            <SEO
              title="Rafoz Farzo Photography React JS Template"
              description="Rafoz Farzo is the best Photography React JS template on the market to help photographers, bloggers."
              robots={['index', 'follow']}
              keywords={['gallery', 'magazine', 'multipurpose', 'photographer', 'template']}
              siteUrl="https://rafozfarzo-react.netlify.app/"
              image={{
                  src: 'https://themeforest.img.customer.envatousercontent.com/files/254515795/01_preview.__large_preview.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=fa197ed858d2d4f48814c0825199a21d'
              }}
            />
            <ScrollToTop smooth className="scroll-up" component={<FaArrowUp />} />
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog-single" element={<BlogSingle />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer/>
          </div>
      </Router>
  );
}

export default App;
