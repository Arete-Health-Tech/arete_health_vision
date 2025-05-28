import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const SuccessStoriesSection = () => {
  const caseStudies = [
    {
      category: "Healthcare",
      title: "Boosting Patient Conversions Across Touchpoints",
      description:
        "Solution Used: CarePro – Patient Journey Management Platform",
      author: "Ayush Jain",
      date: "11 Jan 2022",
      readTime: "5 min read",
      image: "/lovable-uploads/19a7a977-bcda-4c59-8de8-8b249d52168e.png",
    },
    {
      category: "Innovation",
      title: "AI-Powered Revenue Acceleration",
      description: "Solution Used: RCM AI Suite",
      author: "Ayush Jain",
      date: "12 Feb 2022",
      readTime: "6 min read",
      image: "/lovable-uploads/19a7a977-bcda-4c59-8de8-8b249d52168e.png",
    },
    {
      category: "Results",
      title: "Unified Visibility for Strategic Decision-Making",
      description: "Solution Used: INTELLICA – Unified Hospital Analytics.",
      author: "Ayush Jain",
      date: "15 Mar 2022",
      readTime: "4 min read",
      image: "/lovable-uploads/19a7a977-bcda-4c59-8de8-8b249d52168e.png",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm text-gray-600 uppercase tracking-wider mb-2">
            Case Studies
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our impactful healthcare transformations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-video bg-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                  <div className="w-16 h-12 bg-gray-400 rounded flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 19V5c0-1.1-.9-2-2-2H5c0-1.1-.9-2-2-2s2 .9 2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                    </svg>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">
                  {study.category}
                </p>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {study.title}
                </h3>
                <p className="text-gray-600 mb-4">{study.description}</p>
                <div className="flex items-center space-x-3">
                  {/* <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-xs font-medium text-gray-600">
                      {study.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div> */}
                  {/* <div className="text-sm text-gray-500">
                    <span className="font-medium text-gray-700">
                      {study.author}
                    </span>
                    <span className="mx-1">•</span>
                    <span>{study.date}</span>
                    <span className="mx-1">•</span>
                    <span>{study.readTime}</span>
                  </div> */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-lg font-medium"
          >
            View all
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
