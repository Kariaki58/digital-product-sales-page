export default function Pricing() {
    return (
        <section id="pricing" className="py-20 bg-white">
            <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Get Your Online Store Today</h2>
            <p className="text-xl text-center mb-16 text-gray-600">Everything you need to start selling professionally online</p>
            
            <div className="max-w-2xl mx-auto bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl shadow-xl overflow-hidden">
                <div className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-2 text-gray-800">Complete E-Commerce Package</h3>
                <div className="text-5xl font-bold mb-4 text-purple-600">₦60,000</div>
                <p className="text-gray-600 mb-8">One-time payment • Delivered in 24 hours</p>
                
                <ul className="space-y-3 mb-8 text-left text-gray-700">
                    <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Professional e-commerce website</span>
                    </li>
                    <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Admin dashboard to manage products & orders</span>
                    </li>
                    <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Payment gateway integration (Paystack)</span>
                    </li>
                    <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Mobile-responsive design</span>
                    </li>
                    <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Setup for your first Facebook/Instagram ads</span>
                    </li>
                    <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Basic SEO optimization</span>
                    </li>
                    <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>24/7 support for the first 7 days</span>
                    </li>
                </ul>
                
                <a 
                    href="https://wa.me/+2349138314501" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-12 rounded-lg transition duration-300"
                >
                    Order Now on WhatsApp
                </a>
                
                <p className="mt-4 text-sm text-gray-500">Limited slots available - Get yours today!</p>
                </div>
            </div>
            
            <div className="mt-16 text-center">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Still Using WhatsApp for Orders?</h3>
                <p className="text-xl text-gray-600 mb-8">Every day you wait is another day of:</p>
                
                <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-red-100 text-gray-800 p-6 rounded-lg">
                    <div className="text-red-500 text-3xl mb-4">😫</div>
                    <p>Lost sales from unprofessional presentation</p>
                </div>
                <div className="bg-red-100 text-gray-800 p-6 rounded-lg">
                    <div className="text-red-500 text-3xl mb-4">😤</div>
                    <p>Frustration managing orders across multiple chats</p>
                </div>
                <div className="bg-red-100 text-gray-800 p-6 rounded-lg">
                    <div className="text-red-500 text-3xl mb-4">😭</div>
                    <p>Missed opportunities from customers who want to pay instantly</p>
                </div>
                </div>
                
                <p className="mt-10 text-xl font-bold text-purple-600">Don't let another day go by get your professional store today!</p>
            </div>
            </div>
        </section>
    );
}