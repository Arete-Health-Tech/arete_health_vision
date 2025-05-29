import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowLeft, CheckCircle, TrendingUp, TrendingDown } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const CaseStudies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const caseStudy1Results = [
    {
      indicator: "OP to IP Conversion Rate",
      baseline: "28%",
      after: "41%",
      change: "↑ 46%",
    },
    {
      indicator: "Diagnostics Conversion",
      baseline: "63%",
      after: "79%",
      change: "↑ 25%",
    },
    {
      indicator: "Post-Consult Pharmacy Sales",
      baseline: "38%",
      after: "59%",
      change: "↑ 55%",
    },
    {
      indicator: "Follow-up Consult Rate",
      baseline: "31%",
      after: "49%",
      change: "↑ 58%",
    },
  ];

  const caseStudy2Results = [
    {
      metric: "Average Claim Processing Time",
      before: "12 days",
      after: "5 days",
      improvement: "↓ 58%",
    },
    { metric: "Denial Rate", before: "17%", after: "7%", improvement: "↓ 59%" },
    {
      metric: "Claim Resubmission Rate",
      before: "23%",
      after: "10%",
      improvement: "↓ 57%",
    },
    {
      metric: "Payment Collection Efficiency",
      before: "68%",
      after: "84%",
      improvement: "↑ 23%",
    },
  ];

  const caseStudy3Results = [
    {
      function: "Report Generation TAT",
      before: "4–5 days",
      after: "Instantaneous",
      change: "↓ 100%",
    },
    {
      function: "Departmental Revenue Leak Visibility",
      before: "None",
      after: "Daily View",
      change: "100% Gain",
    },
    {
      function: "Forecast Planning Frequency",
      before: "Monthly",
      after: "Weekly",
      change: "↑ 4x",
    },
    {
      function: "Diagnostic Funnel Optimization",
      before: "Manual",
      after: "Auto-alerted",
      change: "+Predictive",
    },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <Link
              to="/"
              className="inline-flex items-center text-coral-500 hover:text-coral-600 mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Detailed Case Studies
            </h1>
            <p className="text-xl text-gray-600">
              Real-world success stories showcasing our healthcare
              transformation solutions
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Case Study 1 */}
          <Card className="mb-12">
            <CardHeader>
              <div className="flex items-center mb-4">
                <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                <span className="text-green-600 font-semibold">
                  Case Study 1
                </span>
              </div>
              <CardTitle className="text-3xl text-coral-500 mb-2">
                Boosting Patient Conversions Across Touchpoints
              </CardTitle>
              <p className="text-lg text-gray-600">
                Solution Used:{" "}
                <span className="font-semibold">
                  CarePro – Patient Journey Management Platform
                </span>
              </p>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Challenge
                </h3>
                <p className="text-gray-700">
                  The hospital experienced drop-offs after OPD visits with low
                  conversion to IPD, missed diagnostics orders, poor pharmacy
                  adherence, and minimal follow-up consults.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Solution Implemented
                </h3>
                <p className="text-gray-700 mb-4">
                  CarePro was deployed to orchestrate the full patient journey
                  across OPD → IPD → Diagnostics → Pharmacy → Follow-up using:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>WhatsApp nudges with procedure education</li>
                  <li>Agent follow-up for scheduling investigations</li>
                  <li>Embedded in-clinic coordinators with CRM tools</li>
                  <li>Real-time patient status tracking & task automation</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Key Results (within 60 days)
                </h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Performance Indicator</TableHead>
                      <TableHead>Baseline</TableHead>
                      <TableHead>After CarePro</TableHead>
                      <TableHead>% Change</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {caseStudy1Results.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">
                          {row.indicator}
                        </TableCell>
                        <TableCell>{row.baseline}</TableCell>
                        <TableCell>{row.after}</TableCell>
                        <TableCell className="text-green-600 font-semibold">
                          {row.change}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Impact</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Increased treatment acceptance</li>
                  <li>Reduced revenue leakage</li>
                  <li>Higher patient recall and retention</li>
                  <li>Better care continuity and brand perception</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Case Study 2 */}
          <Card className="mb-12">
            <CardHeader>
              <div className="flex items-center mb-4">
                <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                <span className="text-green-600 font-semibold">
                  Case Study 2
                </span>
              </div>
              <CardTitle className="text-3xl text-coral-500 mb-2">
                AI-Powered Revenue Acceleration
              </CardTitle>
              <p className="text-lg text-gray-600">
                Solution Used:{" "}
                <span className="font-semibold">RCM AI Suite</span>
              </p>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Challenge
                </h3>
                <p className="text-gray-700">
                  The hospital faced revenue realization delays, high denial
                  rates, and long turnaround times in the billing process.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Solution Implemented
                </h3>
                <p className="text-gray-700 mb-4">
                  The RCM AI Suite automated end-to-end revenue cycle tasks:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>AI-based claim pre-validation and coding check</li>
                  <li>Predictive denial analysis with real-time alerts</li>
                  <li>Automated reconciliation dashboards</li>
                  <li>NLP-powered compliance tracking</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Key Results (within 90 days)
                </h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Metric</TableHead>
                      <TableHead>Before RCM AI</TableHead>
                      <TableHead>After RCM AI</TableHead>
                      <TableHead>Improvement</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {caseStudy2Results.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">
                          {row.metric}
                        </TableCell>
                        <TableCell>{row.before}</TableCell>
                        <TableCell>{row.after}</TableCell>
                        <TableCell className="text-green-600 font-semibold">
                          {row.improvement}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Impact</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Accelerated revenue realization</li>
                  <li>Reduced manual errors & manpower cost</li>
                  <li>Improved cash flow and patient trust</li>
                  <li>Full visibility into RCM leakage and recovery</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Case Study 3 */}
          <Card className="mb-12">
            <CardHeader>
              <div className="flex items-center mb-4">
                <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                <span className="text-green-600 font-semibold">
                  Case Study 3
                </span>
              </div>
              <CardTitle className="text-3xl text-coral-500 mb-2">
                Unified Visibility for Strategic Decision-Making
              </CardTitle>
              <p className="text-lg text-gray-600">
                Solution Used:{" "}
                <span className="font-semibold">
                  INTELLICA – Unified Hospital Analytics
                </span>
              </p>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Challenge
                </h3>
                <p className="text-gray-700">
                  Leadership lacked real-time visibility into operational
                  inefficiencies, diagnostics leakage, and specialty-wise
                  financial performance. Existing systems provided only
                  retrospective data in silos.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Solution Implemented
                </h3>
                <p className="text-gray-700 mb-4">
                  INTELLICA unified data from HIS, LIS, EMR, CRM, and ERP into a
                  single real-time analytics interface, featuring:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Executive and departmental dashboards</li>
                  <li>
                    Root cause drilldowns by specialty, consultant, and service
                  </li>
                  <li>What-if simulations for planning and forecasting</li>
                  <li>Predictive alerts for clinical and financial KPIs</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Key Results (within 45 days)
                </h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Function</TableHead>
                      <TableHead>Before INTELLICA</TableHead>
                      <TableHead>After INTELLICA</TableHead>
                      <TableHead>Change</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {caseStudy3Results.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">
                          {row.function}
                        </TableCell>
                        <TableCell>{row.before}</TableCell>
                        <TableCell>{row.after}</TableCell>
                        <TableCell className="text-green-600 font-semibold">
                          {row.change}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Impact</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Improved operational efficiency and response time</li>
                  <li>Informed leadership decisions at every level</li>
                  <li>Identification of high-risk leakage areas</li>
                  <li>Scalable, data-driven culture established</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Healthcare Operations?
            </h2>
            <p className="text-gray-600 mb-6">
              See how our solutions can deliver similar results for your
              organization.
            </p>
            <Link to="/">
              <Button className="bg-coral-500 hover:bg-coral-600 text-white px-8 py-3 rounded-lg font-medium">
                Schedule Your Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CaseStudies;
