export default function Hero() {
    return (
        <section className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-20">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Stop Losing Sales to WhatsApp DMs!</h1>
                <p className="text-xl mb-8">Get a professional e-commerce website with admin dashboard and payment integration in just <span className="font-bold">24 hours</span> for only <span className="font-bold">₦60,000</span>.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                <a 
                    href="#pricing" 
                    className="bg-white text-purple-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg text-center transition duration-300"
                >
                    Get My Website Now
                </a>
                <a 
                    href="https://clothing-store-fawn.vercel.app/" 
                    target="_blank"
                    className="border-2 border-white text-white hover:bg-white hover:text-purple-700 font-bold py-3 px-8 rounded-lg text-center transition duration-300"
                >
                    See How It Works
                </a>
                </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
                <img 
                src="/images/header-image.png" 
                alt="Boutique E-Commerce Website Example" 
                className="rounded-lg shadow-2xl border-4 border-white max-w-full h-auto"
                />
            </div>
            </div>
        </section>
    );
}