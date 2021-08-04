import './navBar.css'
import './CartWidget'

function NavBar(){
    return <div className="navbar">
        
 <ul>
 <li><p className="brandName">Butterfly Store</p></li>
  <li><a href="default.html">Inicio</a></li>
  <li><a href="news.asp">Combos</a></li>
  <li><a href="contact.asp">Productos</a></li>
  <li><a href="about.asp">Contacto</a></li>
</ul>
    <CartWidget />
    </div>
}

export default NavBar;