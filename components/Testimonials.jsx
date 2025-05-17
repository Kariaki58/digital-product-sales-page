export default function Testimonials() {
    return (
        <section className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">What Boutique Owners Are Saying</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-2xl">★★★★★</div>
                </div>
                <p className="text-gray-600 mb-4">"I went from taking orders on WhatsApp to having a professional website in 24 hours. My sales increased by 40% in the first month!"</p>
                <div className="font-bold text-gray-500">- Amina's Fashion House</div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-2xl">★★★★★</div>
                </div>
                <p className="text-gray-600 mb-4">"The admin dashboard makes managing my inventory so easy. No more spreadsheets or forgetting orders in my WhatsApp chats!"</p>
                <div className="font-bold text-gray-500">- Bella's Boutique</div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-2xl">★★★★★</div>
                </div>
                <p className="text-gray-600 mb-4">"For ₦60,000, this was the best investment I made for my business. The ads setup helped me reach new customers immediately."</p>
                <div className="font-bold text-gray-500">- Chic Styles NG</div>
                </div>
            </div>
            </div>
        </section>
    );
}