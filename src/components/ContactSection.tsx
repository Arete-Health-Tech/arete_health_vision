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
import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";
import { toast } from "@/components/ui/sonner";
import { useRef } from "react";

const ContactSection = () => {
  const form = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    emailjs.init("YOUR_PUBLIC_KEY");
  }, []);

  const [userName, setUserName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [userOrganization, setUserOrganization] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Form Values:", {
      user_name: userName,
      user_email: userEmail,
      user_organization: userOrganization,
      user_role: role,
      message: message,
    });

    if (!userName || !userEmail || !userOrganization || !message) {
      toast.error("All Data is required");
      return;
    }

    const data = {
      name: userName,
      email: userEmail,
      organization: userOrganization,
      role: role,
      message: message,
    };
    fetch(
      "https://script.google.com/a/macros/aretehealth.tech/s/AKfycbyNvf5MLLiJeMeh43sCLgenYDDEEZKbv5sK6361rWLWh5JM442I4VEt0c5ErHlPp-V0/exec",
      {
        // Replace with your actual web app URL
        method: "POST",
        body: JSON.stringify(data),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.result === "success") {
          console.log("Data added to sheet successfully");

          // Optionally send email using EmailJS as well
          if (form.current) {
            emailjs
              .sendForm(
                "service_voahtjf",
                "template_4cmsmjb",
                form.current,
                "lYakrV8ntyld3pBXN"
              )
              .then(
                () => {
                  console.log("Email sent successfully!");
                  toast.success("Email Sent Successfully");
                  // Clear the form
                  setUserName("");
                  setUserEmail("");
                  setUserOrganization("");
                  setMessage("");
                  setRole("");
                },

                (error) => {
                  console.log("Email failed to send...", error.text);
                }
              );
          }
        } else {
          console.error("Error:", data.message);
          toast.error("Failed to send email. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Request failed", error);
        toast.error("Failed to send email. Please try again.");
      });
  };

  return (
    <section id="contact-section" className="py-20 bg-gray-50">
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
                  <div
                    className="text-gray-600 cursor-pointer hover:underline"
                    onClick={() => window.open("mailto:help@aretehealth.tech")}
                    title="Send Email"
                  >
                    help@aretehealth.tech
                  </div>
                </div>
              </div>

              <div
                className="flex items-start space-x-4 cursor-pointer hover:bg-coral-50 rounded-lg transition-colors"
                onClick={() =>
                  window.open(
                    "https://maps.google.com/?q=118-B, 2nd Floor, TSG Building, Behind UCO Bank, Shahpur Jat, New Delhi - 110049",
                    "_blank"
                  )
                }
                title="Open in Google Maps"
              >
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
                <div
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/company/arete-healthtech-pvt-ltd/",
                      "_blank"
                    )
                  }
                  className="w-10 h-10 bg-coral-100 rounded-lg flex items-center justify-center cursor-pointer hover:bg-coral-200 transition-colors"
                >
                  <span className="text-coral-500 font-bold">in</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Schedule a Demo
            </h3>

            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <Input
                  placeholder="Enter your name"
                  name="user_name"
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <Input
                  placeholder="Enter your email"
                  type="email"
                  name="user_email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Hospital/Organization Name *
                </label>
                <Input
                  placeholder="Enter organization name"
                  type="text"
                  name="user_organization"
                  value={userOrganization}
                  onChange={(e) => setUserOrganization(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Role *
                </label>
                <Select
                  name="user_role"
                  value={role}
                  onValueChange={(value) => setRole(value)}
                >
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
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
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
