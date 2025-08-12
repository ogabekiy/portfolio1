import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify'
import { Helmet } from 'react-helmet-async'

export default function App() {
  return (
    <>
      <Helmet>
        <title>Ogabek Mullajonov — Full Stack Developer</title>
        <meta
          name="description"
          content="Ogabek Mullajonov — Node.js, React, PostgreSQL va MongoDB bo‘yicha tajribali Full Stack Developer. Portfolio va loyihalar."
        />
        <meta
          name="keywords"
          content="Ogabek Mullajonov, Full Stack Developer, Node.js, React, Web Dasturlash, Portfolio"
        />
        <link rel="canonical" href="https://ogabek.plutosoft.uz" />

        {/* Open Graph */}
        <meta property="og:title" content="Ogabek Mullajonov — Full Stack Developer" />
        <meta
          property="og:description"
          content="Node.js, React va zamonaviy texnologiyalar bilan ishlaydigan web dasturchi. Portfolio sahifasi."
        />
        <meta property="og:image" content="https://ogabek.plutosoft.uz/preview.jpg" />
        <meta property="og:url" content="https://ogabek.plutosoft.uz" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ogabek Mullajonov — Full Stack Developer" />
        <meta
          name="twitter:description"
          content="Node.js, React va zamonaviy texnologiyalar bilan ishlaydigan web dasturchi. Portfolio sahifasi."
        />
        <meta name="twitter:image" content="https://ogabek.plutosoft.uz/preview.jpg" />
      </Helmet>

      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <ToastContainer />
    </>
  )
}
