import CartWidget from "./CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3> La Manada   </h3>
            <div><CartWidget/>
                <button>Inicio</button>
                <button>Accesorios para mascotas</button>
                <button>Alimentos y golosinas</button>
                <button>Entrenamiento y comportamiento</button>
                <button>Salud e higiene</button>
                <button>Contacto</button>
                
            </div>
            
        </nav>
    )
}

export default NavBar