import { motion } from 'framer-motion';
import logo from '../assets/logo.png'
import placeholder from '../assets/image.png'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const FloatingElement = ({ className, delay = 0 }) => (
    <motion.div
        className={`absolute opacity-30 ${className}`}
        animate={{
            y: [0, -20, 0],
            rotate: [0, 360]
        }}
        transition={{
            duration: 8,
            repeat: Infinity,
            delay: delay,
            ease: "easeInOut"
        }}
    />
);

const BackgroundPattern = () => (
    <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 opacity-[0.4]" style={{
            backgroundImage: `radial-gradient(#3B82F6 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
        }}></div>

        <FloatingElement className="w-24 h-24 bg-blue-500 rounded-full blur-3xl left-1/4 top-1/4" />
    

        <div className="absolute top-20 right-[20%] w-12 h-12 border-4 border-blue-200 rounded-lg opacity-20 animate-spin-slow"></div>
        <div className="absolute bottom-32 left-[15%] w-16 h-16 border-4 border-purple-200 rotate-45 opacity-20 animate-bounce-slow"></div>
        
        <svg className="absolute top-1/4 right-0 opacity-10" width="400" height="400" viewBox="0 0 400 400">
            <path d="M0 100 Q 100 50, 200 100 T 400 100" fill="none" stroke="#3B82F6" strokeWidth="2"/>
            <path d="M0 150 Q 100 100, 200 150 T 400 150" fill="none" stroke="#3B82F6" strokeWidth="2"/>
        </svg>

        <div className="absolute bottom-0 left-0 opacity-10">
            <div className="w-40 h-40 border-8 border-yellow-200 rounded-full"></div>
            <div className="w-60 h-60 border-8 border-yellow-200 rounded-full absolute -top-10 -left-10"></div>
        </div>
    </div>
);

export default function LandingPage() {
    const navigate = useNavigate();
    const [scrollY, setScrollY] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);

    const whyUsData = [
        {
            icon: "M12,6V9L16,5L12,1V4A8,8 0 0,0 4,12C4,13.57 4.46,15.03 5.24,16.26L6.7,14.8C6.25,13.97 6,13 6,12A6,6 0 0,1 12,6M18.76,7.74L17.3,9.2C17.74,10.04 18,11 18,12A6,6 0 0,1 12,18V15L8,19L12,23V20A8,8 0 0,0 20,12C20,10.43 19.54,8.97 18.76,7.74Z",
            title: "Quick Process",
            description: "Complete the process within minutes",
            bgColor: "bg-blockblue",
            iconBg: "bg-inblockblue"
        },
        {
            icon: "M11.8,10.9c-2.27-0.59-3-1.2-3-2.15c0-1.09,1.01-1.85,2.7-1.85c1.78,0,2.44,0.85,2.5,2.1h2.21 c-0.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94,0.42-3.5,1.68-3.5,3.61c0,2.31,1.91,3.46,4.7,4.13c2.5,0.6,3,1.48,3,2.41 c0,0.69-0.49,1.79-2.7,1.79c-2.06,0-2.87-0.92-2.98-2.1h-2.2c0.12,2.19,1.76,3.42,3.68,3.83V21h3v-2.15 c1.95-0.37,3.5-1.5,3.5-3.55C16.5,12.46,14.07,11.49,11.8,10.9z",
            title: "No Hidden Fees",
            description: "No interest, No charges and no catch",
            bgColor: "bg-blockpurple",
            iconBg: "bg-inblockpurple"
        },
        {
            icon: "M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,7H13V13H11V7M11,15H13V17H11V15Z",
            title: "Simplified",
            description: "Minimal Documentation and easy process",
            bgColor: "bg-blockyellow",
            iconBg: "bg-inblockyellow"
        }
    ];

    const handleNextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % whyUsData.length);
    };

    const handlePrevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + whyUsData.length) % whyUsData.length);
    };

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

     const handleTenantClick = () => {
        navigate('/tenantapply');
     };
     const handleOwnerClick = () => {
        navigate('/ownerapply');
    };

    const fadeInUp = {
        initial: { y: 60, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.6 }
    };

    const staggerContainer = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <div className="min-h-screen bg-white overflow-hidden">
            <BackgroundPattern />

            <motion.header 
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="fixed w-full top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200"
            >
                <div className="flex items-center justify-between p-4 md:p-6 max-w-7xl mx-auto">
                    <motion.div 
                        className="flex items-center space-x-2"
                        whileHover={{ scale: 1.05 }}
                    >
                        <img src={logo} alt="NammaPg Logo" className="h-8 w-8 rounded-lg" />
                        <span className="font-semibold text-bluecus text-xl">Namma Pg</span>
                    </motion.div>
                </div>
            </motion.header>

            <main className="pt-32 md:pt-40 relative z-10">
                <div className="px-4 md:px-6 max-w-7xl mx-auto">
                    <motion.div 
                        className="md:grid md:grid-cols-2 md:gap-12 md:items-center"
                        initial="initial"
                        animate="animate"
                        variants={staggerContainer}
                    >
                        <motion.div 
                            className="text-center md:text-left space-y-6"
                            variants={fadeInUp}
                        >
                            <motion.h1 
                                className="text-5xl md:text-6xl font-bold leading-tight"
                                initial={{ opacity: 0, x: -100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                Stay Now,
                                <motion.span 
                                    className="block md:inline text-lightbluecus"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    Pay Later
                                </motion.span>
                            </motion.h1>

                            <motion.p 
                                className="text-textgreycus text-xl md:text-xl"
                                variants={fadeInUp}
                            >
                                We pay your PG rent upfront, so you can stay worry-free.
                            </motion.p>

                            <motion.div 
                                className="text-xl text-textgreycus"
                                variants={fadeInUp}
                            >
                                Enjoy up to 15 days to settle it.
                                <br />
                                No Interest. No hidden charges!
                            </motion.div>

                            <motion.div 
                                className='flex flex-col md:flex-row gap-4 md:gap-6 w-fit mx-auto md:mx-0 py-8'
                                variants={fadeInUp}
                            >
                                <motion.button 
                                    className="px-8 py-4 rounded-xl bg-bluecus text-white shadow-lg hover:shadow-bluecus/50 transition-all"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={handleTenantClick}
                                >
                                    I'm a Tenant
                                </motion.button>
                                <motion.button 
                                    className="px-8 py-4 rounded-xl bg-bluecus text-white shadow-lg hover:shadow-bluecus/50 transition-all"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={handleOwnerClick}
                                >
                                    I'm a PG Owner
                                </motion.button>
                            </motion.div>
                        </motion.div>

                        <motion.div 
                            className="hidden md:block"
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.div 
                                className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-xl"
                                style={{
                                    transform: `perspective(1000px) rotateY(${scrollY * 0.02}deg) rotateX(${scrollY * 0.02}deg)`
                                }}
                            >
                                <img 
                                    src={placeholder} 
                                    alt="Stay Now Pay Later illustration"
                                    className="w-full rounded-lg"
                                />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>

                <motion.section 
                    id="how-it-works" 
                    className="py-24 md:py-32 px-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <motion.h2 
                        className="text-4xl md:text-5xl font-bold text-center mb-16"
                        variants={fadeInUp}
                    >
                        How it works
                    </motion.h2>
                    <motion.div 
                        className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        {[
                            {
                                bg: "bg-blockblue",
                                inBg: "bg-inblockblue",
                                num: "1",
                                title: "Select PG",
                                desc: "Choose your PG from anywhere and stay"
                            },
                            {
                                bg: "bg-blockpurple",
                                inBg: "bg-inblockpurple",
                                num: "2",
                                title: "Approval",
                                desc: "Your request is approved once we confirm with your PG"
                            },
                            {
                                bg: "bg-blockyellow",
                                inBg: "bg-inblockyellow",
                                num: "3",
                                title: "Confirm",
                                desc: "Provide your details for confirmation and your request will be processed"
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className={`${item.bg} p-8 rounded-3xl text-center transform hover:scale-105 transition-transform duration-300 shadow-xl`}
                                variants={fadeInUp}
                            >
                                <motion.div 
                                    className={`${item.inBg} rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6`}
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <span className="text-4xl font-bold">{item.num}</span>
                                </motion.div>
                                <h3 className="font-semibold text-xl mb-3">{item.title}</h3>
                                <p className="text-textgreycus text-lg">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.section>

                <motion.section 
                    id="why-us" 
                    className="py-24 md:bg-gray-100  w-full px-4 md:px-24"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Why Namma Pg?</h2>
                        
                        {/* Desktop View */}
                        <div className="hidden md:grid md:grid-cols-3 gap-8 md:gap-16 max-w-full mx-auto">
                            {whyUsData.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="text-center"
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ delay: index * 0.2 }}
                                >
                                    <motion.div 
                                        className="bg-inwhyblock w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.8 }}
                                    >
                                        <svg className="w-10 h-10" viewBox="0 0 24 24">
                                            <path fill="currentColor" d={item.icon} />
                                        </svg>
                                    </motion.div>
                                    <h3 className="font-medium mb-3 text-xl">{item.title}</h3>
                                    <p className="text-lg text-gray-600">{item.description}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Mobile View */}
                        <div className="md:hidden relative max-w-3xl mx-auto">
                            {/* Left Navigation Button */}
                            <button 
                                onClick={() => handlePrevSlide()}
                                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50"
                            >
                                <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            {/* Carousel Container */}
                            <motion.div 
                                className="bg-gray-100 p-8 rounded-3xl text-center shadow-xl"
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                key={currentSlide}
                            >
                                <motion.div 
                                    className="bg-inwhyblock w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <svg className="w-10 h-10" viewBox="0 0 24 24">
                                        <path fill="currentColor" d={whyUsData[currentSlide].icon} />
                                    </svg>
                                </motion.div>
                                <h3 className="font-semibold text-xl mb-3">{whyUsData[currentSlide].title}</h3>
                                <p className="text-lg text-gray-600">{whyUsData[currentSlide].description}</p>
                            </motion.div>

                            {/* Right Navigation Button */}
                            <button 
                                onClick={() => handleNextSlide()}
                                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50"
                            >
                                <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>

                            {/* Dots Navigation */}
                            <div className="flex justify-center space-x-2 mt-6">
                                {whyUsData.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentSlide(index)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                            currentSlide === index ? 'bg-blue-500 w-4' : 'bg-gray-300'
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.section>

                <section>
                    <div className="text-center mb-12 md:my-12">
                        <button onClick={handleTenantClick} className="px-5 py-3 rounded-xl md:w-auto bg-bluecus text-white hover:scale-105">Join the waitlist</button>
                    </div>
                </section>

                <motion.section 
                    className="bg-blockyellow p-8 md:p-12 py-24"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="max-w-xl mx-auto">
                        <h2 className="text-3xl md:text-3xl text-center font-bold mb-6 text-[#352306]">Become a Namma Pg Partner</h2>
                        
                        <ul className="space-y-4 mb-8 text-lg">
                            <li className="flex items-start">
                                <span className="mr-3">•</span>
                                <span>Easily register your stay</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3">•</span>
                                <span>Get payments on time</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3">•</span>
                                <span>No more tension over late payments</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-3">•</span>
                                <span>Simple and hassle-free process for a stress-free payments </span>
                            </li>
                        </ul>

                        <div className="text-center mt-12">
                            <button className="px-5 py-3 rounded-xl md:w-auto bg-[#AD6B00] text-white font-semibold hover:scale-105" onClick={handleOwnerClick}>Partner with us</button>
                        </div>
                    </div>
                </motion.section>

                <motion.footer 
                    className="bg-[#1E293B] text-white py-12 px-4 md:px-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="max-w-6xl mx-auto">
                        <div className="flex items-center space-x-2 mb-6">
                            <img src={logo} alt="NammaPg Logo" className="h-8 w-8 rounded-lg" />
                            <span className="font-semibold text-lg">Namma Pg</span>
                        </div>
                        <div className='space-y-4'>
                            <h4 className="font-semibold">About Us</h4>
                            <p className="text-md text-gray-400 mb-6 max-w-xl">
                                India's first 'Stay Now, Pay Later' service for tenant, offering flexible payments and hassle-free accommodation.
                            </p>
                        </div>
                        
                        <div className="space-y-4 mt-6">
                            <h4 className="font-semibold">Contact</h4>
                            <p className="text-md text-gray-400">
                                <a href="mailto:vrushabmgosar@gmail.com" className="hover:underline">
                                    vrushabmgosar@gmail.com
                                </a>
                            </p>          
                        </div>
                        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-400 mt-8 pt-8 border-t border-gray-700">
                            <span >© 2024 Namma Pg™. All rights reserved.</span>
                            
                        </div>
                    </div>
                </motion.footer>
            </main>
        </div>
    );
}


