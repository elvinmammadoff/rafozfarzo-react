import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/app.scss"
import {
  BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import SEO from '@americanexpress/react-seo';
import { FaArrowUp } from "react-icons/fa";
import Header from "./components/header/Header";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import Gallery from "./components/pages/Gallery/Gallery";
import Blog from "./components/pages/Blog/Blog";
import BlogSingle from "./components/pages/Blog/BlogSingle";
import Contact from "./components/pages/Contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
      <Router>
          <div className="App">
            <SEO
              title="Rafoz Farzo Photography React JS Template"
              description="Rafoz Farzo Photography is a modern Responsive, Multi-Purpose, Multi-Page React JS template on the market to help photographers, bloggers."
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
