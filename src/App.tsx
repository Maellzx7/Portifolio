import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <h1 className="logo">
          <span className="logo-text">JP & ANTHONY</span>
          <span className="logo-dot">:</span>
          <span className="logo-emoji">)</span>
        </h1>

        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a>
          <a href="#projetos" onClick={() => setMenuOpen(false)}>Projetos</a>
          <a href="#habilidades" onClick={() => setMenuOpen(false)}>Habilidades</a>
          <a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>
        </nav>

        <button 
          className={`menu-btn ${menuOpen ? 'active' : ''}`} 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      <section className="hero">
        <div className="hero-content">
          <div className="hero-image-wrapper">
            <div className="hero-image-glow"></div>
            <img 
              src="https://png.pngtree.com/png-vector/20230909/ourmid/pngtree-happy-emoticon-teeth-png-image_9222501.png" 
              alt="José Paulo e Anthony" 
              className="profile-img"
            />
          </div>

          <div className="hero-text">
            <h2 className="animate-title">
              <span className="greeting">Olá, somos</span>
              <span className="name">José Paulo & Anthony</span>
            </h2>
            <p className="animate-subtitle">
              Alunos do 3DS da Etec
            </p>
            <div className="hero-badges">
              <span className="badge">✨ JavaScript</span>
              <span className="badge">🌐 HTML/CSS</span>
            </div>
          </div>
        </div>

        <a href="#contato" className="btn hero-btn">
          <span>Fale conosco</span>
          <svg className="btn-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 2L15 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M22 2L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </a>
      </section>

      <section id="sobre" className="section">
        <div className="section-header">
          <h2 className="section-title">Sobre Nós</h2>
          <div className="section-line"></div>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p className="about-paragraph">
              Somos José Paulo e Anthony, alunos da Etec desde 2026, buscando conhecimento em tecnologia e construindo nosso caminho rumo a uma vida profissional na área de desenvolvimento.
            </p>
            <div className="about-stats">
              <div className="stat">
                
              </div>
              <div className="stat">
                
              </div>
              <div className="stat">
                
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="habilidades" className="section">
        <div className="section-header">
          <h2 className="section-title">Habilidades</h2>
          <div className="section-line"></div>
        </div>
        <ul className="skills">
          <li className="skill-item">
            <span className="skill-icon">💛</span>
            <span className="skill-name">JavaScript</span>
          </li>
          <li className="skill-item">
            <span className="skill-icon">🌐</span>
            <span className="skill-name">HTML</span>
          </li>
          <li className="skill-item">
            <span className="skill-icon">🎨</span>
            <span className="skill-name">CSS</span>
          </li>

        </ul>
      </section>

      <section id="contato" className="section">
        <div className="section-header">
          <h2 className="section-title">Contato</h2>
          <div className="section-line"></div>
        </div>
        <div className="contact-content">
          <div className="contact-info">

            {/* José Paulo */}
            <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>José Paulo</p>
            <a href="mailto:lepolepochalenge@gmail.com" className="contact-item">
              <svg className="contact-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span>lepolepochalenge@gmail.com</span>
            </a>
            <a href="https://github.com/Maellzx7" target="_blank" rel="noopener noreferrer" className="contact-item">
              <svg className="contact-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.166 8.839 21.489C9.339 21.581 9.5 21.27 9.5 21.008C9.5 20.774 9.492 20.14 9.488 19.273C6.726 19.89 6.139 17.98 6.139 17.98C5.685 16.828 5.029 16.513 5.029 16.513C4.12 15.878 5.099 15.891 5.099 15.891C6.102 15.963 6.629 16.924 6.629 16.924C7.521 18.45 8.968 17.996 9.518 17.748C9.61 17.1 9.889 16.658 10.192 16.404C7.955 16.147 5.62 15.092 5.62 11.341C5.62 10.269 5.99 9.392 6.608 8.708C6.507 8.451 6.184 7.445 6.704 6.078C6.704 6.078 7.586 5.799 9.497 7.087C10.334 6.864 11.232 6.752 12.125 6.752C13.018 6.752 13.916 6.864 14.753 7.087C16.664 5.799 17.546 6.078 17.546 6.078C18.066 7.445 17.743 8.451 17.642 8.708C18.26 9.392 18.63 10.269 18.63 11.341C18.63 15.1 16.292 16.145 14.05 16.397C14.428 16.711 14.77 17.328 14.77 18.259C14.77 19.602 14.76 20.684 14.76 21.008C14.76 21.273 14.92 21.588 15.428 21.489C19.139 20.162 22 16.418 22 12C22 6.477 17.523 2 12 2Z" fill="currentColor"/>
              </svg>
              <span>github.com/Maellzx7</span>
            </a>

            {/* Anthony */}
            <p style={{ fontWeight: 'bold', margin: '1.5rem 0 0.5rem' }}>Anthony</p>
            <a href="mailto:lepolepochalenge@gmail.com" className="contact-item">
              <svg className="contact-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span>lepolepochalenge@gmail.com</span>
            </a>
            <a href="https://github.com/anthonyetec" target="_blank" rel="noopener noreferrer" className="contact-item">
              <svg className="contact-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.166 8.839 21.489C9.339 21.581 9.5 21.27 9.5 21.008C9.5 20.774 9.492 20.14 9.488 19.273C6.726 19.89 6.139 17.98 6.139 17.98C5.685 16.828 5.029 16.513 5.029 16.513C4.12 15.878 5.099 15.891 5.099 15.891C6.102 15.963 6.629 16.924 6.629 16.924C7.521 18.45 8.968 17.996 9.518 17.748C9.61 17.1 9.889 16.658 10.192 16.404C7.955 16.147 5.62 15.092 5.62 11.341C5.62 10.269 5.99 9.392 6.608 8.708C6.507 8.451 6.184 7.445 6.704 6.078C6.704 6.078 7.586 5.799 9.497 7.087C10.334 6.864 11.232 6.752 12.125 6.752C13.018 6.752 13.916 6.864 14.753 7.087C16.664 5.799 17.546 6.078 17.546 6.078C18.066 7.445 17.743 8.451 17.642 8.708C18.26 9.392 18.63 10.269 18.63 11.341C18.63 15.1 16.292 16.145 14.05 16.397C14.428 16.711 14.77 17.328 14.77 18.259C14.77 19.602 14.76 20.684 14.76 21.008C14.76 21.273 14.92 21.588 15.428 21.489C19.139 20.162 22 16.418 22 12C22 6.477 17.523 2 12 2Z" fill="currentColor"/>
              </svg>
              <span>github.com/anthonyetec</span>
            </a>

          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <p>© 2026 José Paulo & Anthony. Todos os direitos reservados.</p>
          <div className="footer-heart"></div>
        </div>
      </footer>
    </>
  )
}

export default App