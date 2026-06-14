"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { planSteps } from "@/lib/data";
import { CheckCircle, ExternalLink, TrendingUp, DollarSign, AlertCircle, ArrowRight } from "lucide-react";

const incomeEstimates = [
  { month: "Month 1–2", traffic: "0–200 visitors/mo", income: "$0–$50", stage: "Setup & seeding content" },
  { month: "Month 3–4", traffic: "200–800 visitors/mo", income: "$50–$300", stage: "Content + SEO traction" },
  { month: "Month 5–6", traffic: "800–2,500 visitors/mo", income: "$300–$1,000", stage: "Growing authority" },
  { month: "Month 7–12", traffic: "2,500–8,000 visitors/mo", income: "$1,000–$3,000", stage: "Scaling" },
  { month: "Year 2+", traffic: "8,000–25,000+ visitors/mo", income: "$3,000–$8,000+", stage: "Passive engine running" },
];

const warnings = [
  "Amazon requires 3 qualifying sales within 180 days of signup or your account is closed. Get those first sales fast by promoting to your own network.",
  "Commission rates can change. Amazon has reduced rates before — always diversify with secondary income over time.",
  "This is NOT overnight income. Expect 4–6 months before meaningful commission checks.",
  "Content quality beats content quantity. One authoritative 2,000-word buying guide outranks 10 thin posts.",
];

export default function PlanPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="bg-gradient-to-br from-gray-900 to-red-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge className="bg-amber-500 text-gray-900 font-semibold mb-4">📋 The Complete Roadmap</Badge>
          <h1 className="text-4xl font-bold mb-3">Amazon Associates Partner Plan</h1>
          <p className="text-gray-300 text-lg max-w-3xl">
            A step-by-step action plan to build a real, growing passive income stream through Amazon's affiliate program.
          </p>
        </div>
      </section>

      <section className="bg-blue-50 border-b py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mt-1">
              <DollarSign className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">What Is Amazon Associates?</h2>
              <p className="text-gray-700 leading-relaxed">
                Amazon Associates is Amazon's free affiliate marketing program. You earn a percentage commission (typically 4–7% for restaurant/kitchen categories) every time someone clicks your link and buys on Amazon within 24 hours. You don't hold inventory, handle shipping, or deal with customers. Free to join at{" "}
                <a href="https://affiliate-program.amazon.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 font-semibold underline">
                  affiliate-program.amazon.com <ExternalLink className="inline w-3 h-3" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Your 5-Phase Action Plan</h2>
          <p className="text-gray-500 mb-10">Follow these phases in order. Each builds on the last.</p>
          <div className="space-y-8">
            {planSteps.map((step) => (
              <Card key={step.phase} className="border-l-4 shadow-sm border-l-red-700">
                <CardContent className="p-6">
                  <div className="flex items-start gap-5">
                    <div className={`flex-shrink-0 w-12 h-12 ${step.color} rounded-xl flex items-center justify-center text-white font-bold text-lg shadow`}>
                      {step.phase}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                        <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                        <Badge variant="secondary" className="sm:ml-2 w-fit text-xs">{step.timeframe}</Badge>
                      </div>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mb-4">
                        {step.tasks.map((task) => (
                          <div key={task} className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>{task}</span>
                          </div>
                        ))}
                      </div>
                      <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-2 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm font-semibold text-green-800">Phase Goal: {step.goal}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Realistic Income Projections</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left px-4 py-3 rounded-tl-lg">Period</th>
                  <th className="text-left px-4 py-3">Monthly Traffic</th>
                  <th className="text-left px-4 py-3 text-amber-400">Est. Monthly Income</th>
                  <th className="text-left px-4 py-3 rounded-tr-lg">Focus</th>
                </tr>
              </thead>
              <tbody>
                {incomeEstimates.map((row, i) => (
                  <tr key={row.month} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-semibold text-gray-900">{row.month}</td>
                    <td className="px-4 py-3 text-gray-600">{row.traffic}</td>
                    <td className="px-4 py-3 font-bold text-green-700">{row.income}</td>
                    <td className="px-4 py-3 text-gray-500">{row.stage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">⚠️ Honest Warnings</h2>
          <div className="space-y-4">
            {warnings.map((warning, i) => (
              <div key={i} className="flex gap-4 bg-amber-50 border border-amber-200 rounded-xl p-4">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-amber-900 leading-relaxed">{warning}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-red-700 to-red-900 text-white py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start?</h2>
          <p className="text-red-100 text-lg mb-8">Sign up for Amazon Associates — Step 1 takes 15 minutes.</p>
          <a href="https://affiliate-program.amazon.com" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold text-lg px-10 py-4 rounded-xl transition-colors shadow-lg">
            Join Amazon Associates — It's Free <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
