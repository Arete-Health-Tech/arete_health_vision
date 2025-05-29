import { Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const VisionSection = () => {
  return (
    <section id="about-section" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-coral-500">Prodigy.AI</span>
          </h2>
          <div className="w-16 h-1 bg-coral-500 mx-auto"></div>
        </div>

        <div className="gap-16 items-center flex">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-coral-500 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />{" "}
              </div>
              <h3 className="text-2xl  font-bold text-gray-900">
                What is Prodigy.AI?
              </h3>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Prodigy.AI is Arete HealthTech’s unified healthcare technology
              platform designed to solve critical challenges across care
              delivery, operations, and financing. With AI at its core,
              Prodigy.AI empowers providers and payors to improve outcomes,
              streamline workflows, and enhance financial sustainability.
            </p>

            <div className="p-1 bg-gradient-to-r from-coral-400 to-coral-600 rounded-2xl shadow-lg">
              <div className="bg-white rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-coral-500">8+</div>
                    <div className="text-sm text-gray-600 mt-1">
                      Intelligent Modules
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-coral-500">
                      100+
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      Healthcare Partners
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-coral-500">
                      24/7
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      Patient Monitoring
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-coral-500">99%</div>
                    <div className="text-sm text-gray-600 mt-1">
                      Accuracy Rate
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To enable intelligent, integrated, and scalable healthcare
              transformation.
            </p>

            <blockquote className="border-l-4 border-coral-500 pl-6 py-4 bg-gray-50 rounded-r-lg">
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              <p className="text-gray-700 italic">
                "Deliver AI-first solutions that improve care, drive efficiency,
                and reduce cost—across the patient lifecycle."
              </p>
            </blockquote>

            <Button
              variant="outline"
              className="border-coral-500 text-coral-500 hover:bg-coral-50 font-medium"
            >
              Request a Demo
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
