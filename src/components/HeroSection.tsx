import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative py-40  bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Transforming <br />
            Healthcare with <br />
            Prodigy. <span className="text-coral-500">AI</span>
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
            AI-first platform for Provider and Payer—improving care, reducing
            cost, and maximizing patient lifetime value.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-coral-500 hover:bg-coral-600 text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors">
              Request a Demo
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="border-coral-500 text-coral-500 hover:bg-coral-50 px-8 py-3 rounded-lg font-medium text-lg transition-colors"
            >
              Explore Prodigy.AI
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="relative w-96 h-96">
            <div className="absolute inset-0 rounded-full border-4 border-gradient-to-r from-coral-500 via-purple-500 to-blue-500 p-1">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-coral-500 mb-2">
                    AI
                  </div>
                  <div className="text-xl font-semibold text-gray-700">
                    Prodigy.AI Platform
                  </div>
                  <div className="text-lg text-gray-500 mt-2 max-w-48">
                    Intelligent healthcare solutions powered by advanced
                    artificial intelligence
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

export default HeroSection;
