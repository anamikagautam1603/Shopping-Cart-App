import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { StarFill, StarHalf, Star } from "react-bootstrap-icons";

type StoreItemProps = {
    id: number;
    title: string;
    price: number;
    image: string; 
    rating: {
        rate: number;
        count: number;
    };
};


export function StoreItem({ id, title, price, image, rating }: StoreItemProps) {

    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();
    const quantity = getItemQuantity(id);

    return (
        <Card className="h-100 shadow-sm border-0">
           
            <Card.Img variant="top" src={image} height="200px" style={{ objectFit: "contain" }} />

            <Card.Body className="d-flex flex-column">
              
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-2">
                    <span className="fs-5 fw-bold">{title}</span>
                    <span className="text-muted">{formatCurrency(price)}</span>
                </Card.Title>

                <div className="d-flex align-items-center gap-1 text-warning mb-3">
                    {renderStars(rating.rate)}
                    <span className="text-muted fs-6">({rating.count} reviews)</span>
                </div>

                
                <div className="mt-auto">
                    {quantity === 0 ? (
                        <Button className="w-100" onClick={() => increaseCartQuantity(id)}>
                            + Add To Cart
                        </Button>
                    ) : (
                       <div className="d-flex flex-column align-items-center gap-2">
    <div className="d-flex align-items-center justify-content-center gap-2">
        <Button variant="primary" onClick={() => decreaseCartQuantity(id)}>−</Button>
        <div>
            <span className="fs-5 text-primary fw-bold">{quantity}</span> in cart
        </div>
        <Button variant="success" onClick={() => increaseCartQuantity(id)}>+</Button>
    </div>
    <Button variant="danger" size="sm" className="text-white fw-semibold" onClick={() => removeFromCart(id)}>
        Remove
    </Button>
</div>

                    )}
                </div>
            </Card.Body>
        </Card>
    );
}


function renderStars(rate: number) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rate)) {
            stars.push(<StarFill key={i} size={16} className="text-warning" />);
        } else if (i === Math.ceil(rate) && rate % 1 !== 0) {
            stars.push(<StarHalf key={i} size={16} className="text-warning" />);
        } else {
            stars.push(<Star key={i} size={16} className="text-secondary" />);
        }
    }
    return stars;
}
