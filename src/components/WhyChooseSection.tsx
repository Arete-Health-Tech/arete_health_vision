import { Grid, Camera, Sparkles, Target } from "lucide-react";

const WhyChooseSection = () => {
  const features = [
    {
      icon: Grid,
      title: "AI at Core",
      description: "Smart automation for complex workflows.",
    },
    {
      icon: Camera,
      title: "Plug & Play",
      description: "Fast integration with hospital systems.",
    },
    {
      icon: Sparkles,
      title: "Scalable",
      description: "Works for clinics to large networks.",
    },
    {
      icon: Target,
      title: "Outcome-Oriented",
      description: "Proven revenue and retention gains.",
    },
  ];

  const results = [
    "14% improvement in OPD to IPD conversion rates",
    "23% reduction in patient drop-offs with automated engagement",
    "32% increase in post-discharge follow-up adherence",
    "18% improvement in operational efficiency",
    "Reduced administrative workload by automating 80% of routine tasks",
  ];

  return (
    <section id={"why-Prod"} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Prodigy.<span className="text-coral-500">AI</span>?
          </h2>
          <div className="w-16 h-1 bg-coral-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-coral-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <feature.icon className="h-6 w-6 text-coral-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-coral-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">
              Proven Results with Prodigy.AI
            </h3>

            <div className="space-y-4 mb-8">
              {results.map((result, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-coral-50">{result}</p>
                </div>
              ))}
            </div>

            <div className="bg-coral-600 rounded-lg p-6">
              <p className="text-coral-100 italic mb-4">
                "Prodigy.AI has transformed how we manage patient care and
                hospital operations. The platform's AI capabilities have
                significantly improved our efficiency while enhancing patient
                experience."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-coral-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">MD</span>
                </div>
                <div>
                  <div className="font-semibold text-white">Dr. John Doe</div>
                  <div className="text-coral-200 text-sm">
                    CEO, ABC Hospitals
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
