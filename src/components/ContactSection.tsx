import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CTASection from "./CTASection";

const ContactSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <CTASection />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Contact Us
            </h3>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-coral-100 rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-coral-500" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Phone</div>
                  <div className="text-gray-600">+91 96504 96830</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-coral-100 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-coral-500" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Email</div>
                  <div className="text-gray-600">
                    ayushjain@aretehealth.tech
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-coral-100 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-coral-500" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Address</div>
                  <div className="text-gray-600">
                    118-B, 2nd Floor, TSG Building,
                    <br />
                    Behind UCO Bank, Shahpur Jat,
                    <br />
                    New Delhi - 110049
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="font-semibold text-gray-900 mb-4">Follow us</div>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-coral-100 rounded-lg flex items-center justify-center cursor-pointer hover:bg-coral-200 transition-colors">
                  <span className="text-coral-500 font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-coral-100 rounded-lg flex items-center justify-center cursor-pointer hover:bg-coral-200 transition-colors">
                  <span className="text-coral-500 font-bold">t</span>
                </div>
                <div className="w-10 h-10 bg-coral-100 rounded-lg flex items-center justify-center cursor-pointer hover:bg-coral-200 transition-colors">
                  <span className="text-coral-500 font-bold">in</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Schedule a Demo
            </h3>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <Input placeholder="Enter your name" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <Input placeholder="Enter your email" type="email" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Hospital/Organization Name *
                </label>
                <Input placeholder="Enter organization name" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Role *
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ceo">CEO</SelectItem>
                    <SelectItem value="cto">CTO</SelectItem>
                    <SelectItem value="doctor">Doctor</SelectItem>
                    <SelectItem value="admin">Administrator</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <Textarea
                  placeholder="Tell us about your requirements..."
                  rows={4}
                />
              </div>

              <Button className="w-full bg-coral-500 hover:bg-coral-600 text-white py-3 rounded-lg font-medium text-lg">
                Submit & Schedule Demo
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
