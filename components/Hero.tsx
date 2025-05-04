    // components/Hero.tsx
    'use client';

    import Link from 'next/link';
    import Image from 'next/image';
    import { motion } from 'framer-motion';
    import { CalendarPlus, MessageSquareText } from 'lucide-react';

    const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }, };

    const Hero = () => {
      const heroBackgroundImage = '/images/steel.jpg'; // <<< VERIFY/CORRECT PATH
      const logoPath = '/images/RB-AUTO-LOGO-1.png'; // <<< VERIFY/CORRECT PATH

      return (
        <section className="hero relative flex items-center justify-center text-white py-20 md:py-28 px-4 min-h-[calc(80vh-76px)] md:min-h-[calc(70vh-76px)]"> {/* Adjusted default header height */}
          <div className="absolute inset-0 z-0">
            <Image
              src={heroBackgroundImage}
              alt="Metallic texture background" // <<< UPDATE ALT TEXT if needed
              fill
              style={{ objectFit: 'cover' }}
              quality={85}
              priority
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8WQ8AAnkBewKPWHQAAAAASUVORK5CYII="
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10"></div>
          </div>
          <motion.div
            className="relative z-20 text-center container mx-auto max-w-4xl"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          >
            <motion.div className="flex justify-center items-center mb-6 md:mb-8" variants={fadeIn}>
              <div className="w-full max-w-md md:max-w-lg h-[100px] md:h-[150px] relative">
                <Image src={logoPath} alt="RB Automotive Mobile Mechanics Logo" fill style={{ objectFit: 'contain' }} priority sizes="(max-width: 768px) 80vw, 500px"/>
              </div>
            </motion.div>
            <motion.h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5 md:mb-6 text-white text-shadow-md tracking-tight" variants={fadeIn}>
              Your Trusted Mobile Mechanic
            </motion.h2>
            <motion.p className="text-lg md:text-xl lg:text-2xl mb-10 md:mb-12 text-gray-200 text-shadow-sm leading-relaxed" variants={fadeIn}>
              We bring the expertise to you. Convenient, reliable, and affordable auto repair services, right at your location from Perth to Mandurah.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6" variants={fadeIn}>
              <Link href="#contact" className="btn-secondary w-full sm:w-auto text-base md:text-lg px-8 py-3.5">
                <CalendarPlus size={22} className="mr-2.5" /> Book an Appointment
              </Link>
              <a href="sms:0492992211" className="btn-primary w-full sm:w-auto text-base md:text-lg px-8 py-3.5">
                <MessageSquareText size={22} className="mr-2.5" /> Text Now
              </a>
            </motion.div>
          </motion.div>
        </section>
      );
    };
    export default Hero;
    