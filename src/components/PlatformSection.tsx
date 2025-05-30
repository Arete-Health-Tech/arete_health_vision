import { Button } from "@/components/ui/button";
import Image1 from "./../assests/CareproImage.png";
import Image2 from "./../assests/Intelica.png";

const PlatformSection = () => {
  const platforms = [
    {
      title: "CarePro",
      subtitle: "Comprehensive Patient Journey Management",
      img: Image1,
      features: [
        "Boost OP to IP conversions",
        "Drive personalized patient engagement via WhatsApp, calls, and content",
        "Strengthen retention and satisfaction",
        "Reduce readmissions and leakage",
      ],
    },
    {
      title: "RCM AI Suite",
      subtitle: "Revenue Cycle Automation at Scale",
      img: Image2,
      features: [
        "Intelligent claims submission and reconciliation",
        "Predictive denial management",
        "Real-time financial visibility",
        "End-to-end compliance",
      ],
    },
    {
      title: "INTELLICA",
      subtitle: "Unified Analytics Layer for Smarter Decisions",
      img: Image2,
      features: [
        "Integrated view of HIS, EMR, CRM, LIS, and ERP data",
        "Real-time operational and financial dashboards",
        "Predictive modeling, root cause, and what-if analysis",
        "CXO-grade insights",
      ],
    },
    {
      title: "Payer Solutions",
      subtitle: "Optimize Outcomes. Lower Claim Costs.",
      img: Image1,
      features: [
        "AI-driven patient risk stratification",
        "Proactive care coordination",
        "Automated follow-ups for better adherence",
        "Reduced hospitalization and payout rates",
      ],
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Platform <span className="text-coral-500">Capabilities</span>
          </h2>
          <div className="w-16 h-1 bg-coral-500 mx-auto mb-6"></div>
        </div>

        <div className="space-y-16 md:space-y-20">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-8 lg:gap-12`}
            >
              {/* Text Content */}
              <div className="flex-1 space-y-4 md:space-y-6 text-center lg:text-left">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                  {platform.title}
                </h3>
                <h4 className="text-lg sm:text-xl text-gray-700 font-medium">
                  {platform.subtitle}
                </h4>
                <div className="space-y-2 md:space-y-3">
                  {platform.features.map((feature, featureIndex) => (
                    <p
                      key={featureIndex}
                      className="text-sm sm:text-base text-gray-600 leading-relaxed"
                    >
                      • {feature}
                    </p>
                  ))}
                </div>
              </div>

              {/* Image/Visual */}
              <div className="flex-1 w-full">
                <div className="relative h-64 sm:h-80 lg:h-96 bg-gradient-to-br  rounded-lg overflow-hidden mx-auto max-w-md lg:max-w-none shadow-lg hover:shadow-xl transition-shadow">
                  {/* Abstract geometric shapes */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img src={platform.img} />
                  </div>

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
//
export default PlatformSection;
