export default function Features() {
    return (
        <section id="features" className="py-20 bg-white">
            <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">Everything You Need to Start Selling Online</h2>
            
            <div className="grid md:grid-cols-3 gap-10 mb-16">
                <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="text-purple-600 text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold mb-3 text-black">24-Hour Delivery</h3>
                <p className="text-gray-600">Your fully functional e-commerce website ready in just one day. No more waiting weeks or months!</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="text-purple-600 text-4xl mb-4">💳</div>
                <h3 className="text-xl font-bold mb-3 text-black">Payment Integration</h3>
                <p className="text-gray-600">Accept payments directly on your site with Flutterwave, Paystack or other payment gateways.</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="text-purple-600 text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold mb-3 text-black">Admin Dashboard</h3>
                <p className="text-gray-600">Easy-to-use dashboard to manage products, orders, and customers without technical skills.</p>
                </div>
            </div>
    
            <div className="grid md:grid-cols-2 gap-10 items-center mt-10">
                <div>
                <img 
                    src="/images/admin-db-2.png" 
                    alt="Admin Dashboard Preview" 
                    className="rounded-lg shadow-xl border border-gray-200 max-w-full h-auto"
                />
                </div>
                <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Take Control of Your Business</h3>
                <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Manage inventory and track sales in real-time</span>
                    </li>
                    <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Beautiful, mobile-friendly storefront that builds trust</span>
                    </li>
                    <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Built with Next.js 15 for blazing fast performance</span>
                    </li>
                    <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>SEO optimized to help customers find you</span>
                    </li>
                    <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Free setup for your first Facebook/Instagram ads</span>
                    </li>
                </ul>
                <a 
                    href="https://clothing-store-fawn.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mt-6 text-purple-600 font-bold hover:underline"
                >
                    View Live Demo Site →
                </a>
                </div>
            </div>
            </div>
        </section>
    );
}