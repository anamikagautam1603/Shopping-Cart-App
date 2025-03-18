import { Link } from "react-router-dom";
import storeItems from "../data/items.json";
import { StoreItem } from "../components/StoreItem";

export function Home() {
    return (
        <section className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center py-12 px-6">
            <div className="text-center max-w-3xl">
                
                <h1 className="text-5xl font-extrabold text-yellow-900 dark:text-white tracking-wide bg-gradient-to-r from-cyan-500 to-blue-600 p-4 rounded-lg">
                    Welcome to <span className="text-blue-600 dark:text-blue-400">ShopEase</span>
                </h1>

              
                <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    Your one-stop shop for the latest trends, fashion, and technology!  
                    Explore our vast collection of products at unbeatable prices.
                </p>

                <div className="mt-8">
    <Link to="/products">
        <button className="px-6 py-3 text-lg font-semibold text-black bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-600 dark:to-pink-600 rounded-full shadow-md hover:from-purple-600 hover:to-pink-700 dark:hover:from-purple-700 dark:hover:to-pink-800 transition-all">
            Start Shopping Now 🚀
        </button>
    </Link>
</div>

            </div>

            
            <div className="mt-12 w-full max-w-6xl">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-6">Featured Products</h2>

             
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {storeItems.slice(0, 34).map((item) => (
                        <div key={item.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                            <StoreItem {...item} />
                        </div>
                    ))}
                </div>
            </div>

            
           
        </section>
    );
}
