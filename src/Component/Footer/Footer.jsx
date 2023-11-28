import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div>
       
    <div className="footvara">
      <h3></h3>
    </div>
    <main className="middle-section">

      
        <section className="column">
            <h2>ABOUT</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet gravida velit.</p>
            <button>GO TO ABOUT</button>
        </section>

        <section className="column">
            <h2>CONTACT</h2>
            <p>Integer posuere tristique lectus, non condimentum metus tincidunt in.</p>
            <button>GO TO CONTACT</button>
        </section>

        <section className="column">
            <h2>HOME</h2>
            <p>Proin at risus non libero sagittis tincidunt. Curabitur vel dolor non dolor pharetra commodo.</p>
            <button>EXPLORE</button>
        </section>
    </main>

    <footer>
        <p>&copy; 2023 Your Company</p>
    </footer>
    </div>
  )
}

export default Footer
