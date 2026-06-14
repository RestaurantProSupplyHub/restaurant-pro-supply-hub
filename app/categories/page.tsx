"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { categories } from "@/lib/data";
import { ExternalLink, ChevronRight } from "lucide-react";

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="bg-gradient-to-br from-gray-900 to-red-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge className="bg-amber-500 text-gray-900 font-semibold mb-4">All Categories</Badge>
          <h1 className="text-4xl font-bold mb-3">Shop by Category</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Every category a commercial restaurant, fine dining establishment, bar, or food service operation needs — organized and ready to shop on Amazon.
          </p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {categories.map((cat) => (
              <div key={cat.id} className="border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className={`p-6 border-b ${cat.color}`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-4xl">{cat.icon}</span>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">{cat.name}</h2>
                        <p className="text-gray-600 mt-1">{cat.description}</p>
                      </div>
                    </div>
                    <a href={cat.amazonSearchUrl} target="_blank" rel="noopener noreferrer"
                      className="hidden sm:flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold px-5 py-2 rounded-lg text-sm transition-colors whitespace-nowrap">
                      Shop All {cat.name} <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm font-semibold text-gray-700">What's included:</span>
                    <Badge variant="secondary">{cat.itemCount}+ products on Amazon</Badge>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                    {cat.items.map((item) => (
                      <a key={item}
                        href={`https://www.amazon.com/s?k=${encodeURIComponent(item + " commercial restaurant")}`}
                        target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-gray-700 hover:text-red-700 transition-colors group">
                        <ChevronRight className="w-4 h-4 text-red-700 flex-shrink-0" />
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
