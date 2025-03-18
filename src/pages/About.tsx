import { Link } from "react-router-dom";


export function About() {
    return (
        <section className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center py-12 px-6">
            <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-8 md:p-12">
            
                <h1 className="text-5xl font-extrabold text-center text-yellow-900 dark:text-white tracking-wide bg-gradient-to-r from-cyan-500 to-blue-600 p-4 rounded-lg">
                    About <span className="text-blue-600 dark:text-blue-400">ShopEase</span>
                </h1>
           
                <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                    Welcome to <span className="font-semibold text-blue-600 dark:text-blue-400">ShopEase</span> – your ultimate shopping destination! 
                    We bring you an effortless and delightful shopping experience with a vast selection of high-quality products. 
                    From trendy fashion to the latest tech, we have everything to match your style and needs.
                </p>

               
                <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FeatureCard icon="🛒" title="Wide Product Range" description="Discover thousands of products across multiple categories at unbeatable prices." />
                    <FeatureCard icon="🚀" title="Fast & Secure Checkout" description="Experience a seamless, secure, and lightning-fast checkout process." />
                    <FeatureCard icon="📦" title="Super-Fast Delivery" description="Get your orders delivered swiftly with real-time tracking and updates." />
                    <FeatureCard icon="💳" title="Easy Payment Options" description="Enjoy multiple payment methods, including UPI, Cards, and Cash on Delivery." />
                </div>

                
                <div className="mt-10 text-center">
                    <a 
                        href="/products" 
                        className="px-6 py-16 text-lg font-semibold text-black bg-blue-600 dark:bg-blue-500 rounded-full shadow-md hover:bg-blue-700 dark:hover:bg-blue-400 transition-all">
                        Start Shopping Now 🚀
                    </a>
                    <hr />
                    
                     <div className="mt-12">
                                    <Link to="/">
                                        <button className="px-3 py-1 text-lg font-semibold text-gray-700 dark:text-white bg-gray-200 dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-all">
                                            ⬅ Back to Home
                                        </button>
                                    </Link>
                                </div>
                </div>
            </div>
        </section>
    );
}


function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
    return (
        <><div className="flex items-start space-x-4 bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-sm hover:shadow-md transition-all">
            <span className="text-3xl">{icon}</span>
            <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{description}</p>
            </div>
        </div></>
        
    );
}
