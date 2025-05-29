import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "Improved OPD to IPD conversion by 14% through OCTA and Agentic AI. The automation has transformed our patient acquisition process.",
      name: "Paras Hospitals",
      role: "Multi-specialty healthcare network",
      logo: "P",
    },
    {
      id: 2,
      quote:
        "Empowered strategic decision-making with real-time BI dashboards. We can now identify operational inefficiencies and address them immediately.",
      name: "LIVASA Hospitals",
      role: "Tertiary care hospital chain",
      logo: "L",
    },
    // {
    //   id: 3,
    //   quote:
    //     "Reduced patient drop-offs by 23% with personalized WhatsApp journeys. The patient engagement modules have revolutionized our communication strategy.",
    //   name: "Star Hospital Hyderabad",
    //   role: "Specialty surgical center",
    //   logo: "S",
    // },
    {
      id: 4,
      quote:
        "Streamlined our chronic disease management program with automated patient follow-ups and real-time monitoring, improving patient outcomes by 27%.",
      name: "Apex Health Systems",
      role: "Integrated healthcare provider",
      logo: "A",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const touchEnd = e.targetTouches[0].clientX;
    if (touchStart - touchEnd > 50) {
      nextSlide();
    }
    if (touchStart - touchEnd < -50) {
      prevSlide();
    }
  };

  return (
    <section id="testimonials" className="section py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Client <span className="text-arete-red">Success</span> &
            Testimonials
          </h2>
          <div className="w-20 h-1 bg-arete-red mx-auto"></div>
        </div>

        <div
          className="relative overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="min-w-full px-4">
                <div className="bg-gradient-to-br from-white to-arete-lightBeige p-8 rounded-2xl shadow-lg max-w-3xl mx-auto">
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="bg-arete-red text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold shrink-0">
                      {testimonial.logo}
                    </div>
                    <div>
                      <blockquote className="text-lg text-gray-700 italic mb-4">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="font-semibold text-xl">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            onClick={prevSlide}
          >
            <ChevronLeft className="text-arete-red" />
          </button>
          <button
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            onClick={nextSlide}
          >
            <ChevronRight className="text-arete-red" />
          </button>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentSlide === index ? "bg-arete-red" : "bg-gray-300"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#case-studies"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <span>View More Case Studies</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
