import { Col, Row } from "react-bootstrap";
import storeItems from "../data/items.json";
import { StoreItem } from "../components/StoreItem";
import { Link } from "react-router-dom";

export function Store() {
    return (
        <section className="min-h-screen py-12 bg-gray-50 dark:bg-gray-900 flex flex-col items-center">
            <h1 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500 drop-shadow-lg tracking-widest uppercase mb-10">
                Products
            </h1>

            <div className="container px-4">
                <Row md={2} xs={1} lg={3} className="g-4">
                    {storeItems.map((item) => (
                        <Col key={item.id} className="flex justify-center">
                            <StoreItem {...item} />
                        </Col>
                    ))}
                </Row>
            </div>

            {/* Move the button inside the section */}
            <div className="mt-12">
                <Link to="/home">
                    <button className="px-3 py-2 text-lg font-semibold text-gray-700 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-all">
                        ⬅ Back to Home
                    </button>
                </Link>
            </div>
        </section>
    );
}
