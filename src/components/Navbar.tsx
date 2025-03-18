import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function Navbar() {

    const { openCart, cartQuantity } = useShoppingCart();

    return <NavbarBs sticky="top" expand="lg" className="bg-black shadow-sm py-3" >
            <Container>
               
                <NavbarBs.Brand className="fw-bold text-primary fs-4">
                    🛍️ ShopEase
                </NavbarBs.Brand>

         
                <NavbarBs.Toggle aria-controls="navbar-nav" />

             
                <NavbarBs.Collapse id="navbar-nav">
                    <Nav className="me-auto mx-auto gap-4" >
                       
                    <StyledNavLink to="/home">Home</StyledNavLink>
                     <StyledNavLink to="/" >Products</StyledNavLink>
                    <StyledNavLink to="/about">About</StyledNavLink>
                    
                    
                    </Nav>

                  
                    {cartQuantity > 0 && (
                    <Button
    variant="outline-light"
    className="position-relative rounded-circle p-3 border-0 text-white shadow-lg"
    style={{
        background: "linear-gradient(135deg, #4A90E2, #9013FE)", 
        transition: "all 0.3s ease-in-out",
    }}
    onClick={openCart}
>
    <span
        className="position-absolute top-0 start-100 translate-middle badge rounded-pill shadow"
        style={{
            background: "radial-gradient(circle, #FFD700, #FFA500)", 
            color: "#000", 
            fontWeight: "bold",
            padding: "5px 10px",
            fontSize: "14px",
        }}
    >
        {cartQuantity}
    </span>
</Button>


                    )}
                </NavbarBs.Collapse>
            </Container>
        </NavbarBs>

}
function StyledNavLink({ to, children }: { to: string; children: React.ReactNode }) {
    return (
        <Nav.Link
            as={NavLink}
            to={to}
            className="text-white hover:text-blue-400 fw-semibold text-uppercase px-3 py-2 rounded transition-all"
            style={{
                textDecoration: "none",
                fontSize: "1rem",
                letterSpacing: "0.5px",
            }}
        >
            {children}
        </Nav.Link>
    );
}
