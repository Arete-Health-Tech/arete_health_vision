import { Button } from "@/components/ui/button";

const PlatformSection = () => {
  const platforms = [
    {
      title: "CarePro",
      subtitle: "Comprehensive Patient Journey Management",
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
      features: [
        "Integrated view of HIS, EMR, CRM, LIS, and ERP data",
        "Real-time operational and financial dashboards",
        "Predictive modeling, root cause, and what-if analysis",
        "CXO-grade insights",
      ],
    },
    {
      title: "Insurer Solutions",
      subtitle: "Optimize Outcomes. Lower Claim Costs.",
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
                <div className="pt-2">
                  <Button className="bg-coral-500 hover:bg-coral-600 text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors">
                    GET STARTED
                  </Button>
                </div>
              </div>

              {/* Image/Visual */}
              <div className="flex-1 w-full">
                <div className="relative h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-gray-900 via-gray-700 to-gray-500 rounded-lg overflow-hidden mx-auto max-w-md lg:max-w-none">
                  {/* Abstract geometric shapes */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80">
                      <div className="absolute inset-0 bg-gray-800 rounded-full transform scale-100"></div>
                      <div className="absolute inset-2 sm:inset-4 bg-gray-600 rounded-full transform scale-95"></div>
                      <div className="absolute inset-4 sm:inset-8 bg-gray-400 rounded-full transform scale-90"></div>
                      <div className="absolute inset-6 sm:inset-12 bg-gray-300 rounded-full transform scale-85"></div>
                    </div>
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

export default PlatformSection;
