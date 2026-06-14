"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { topProducts } from "@/lib/data";
import { ShoppingCart, DollarSign, Star, TrendingUp } from "lucide-react";

export default function TopPicksPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="bg-gradient-to-br from-gray-900 to-red-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge className="bg-amber-500 text-gray-900 font-semibold mb-4">🏆 Expert Curated</Badge>
          <h1 className="text-4xl font-bold mb-3">Editor's Top Picks</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Hand-selected products from 30+ years of fine dining experience.
          </p>
        </div>
      </section>
      <section className="bg-amber-50 border-b border-amber-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-amber-800 text-sm">
            <TrendingUp className="w-5 h-5 text-amber-600" />
            <strong>Affiliate Income:</strong> Amazon Associates pays <strong>4–7% commission</strong> on restaurant supply categories. At $200 avg. order, that's $8–$14 per sale.
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {topProducts.map((product) => (
              <Card key={product.id} className="h-full border shadow-sm hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="secondary" className="text-xs">{product.category}</Badge>
                    {product.badge && <Badge className="bg-amber-500 text-gray-900 text-xs font-bold">{product.badge}</Badge>}
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2 leading-snug">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed flex-1">{product.description}</p>
                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 mb-4">
                    <div className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-semibold text-blue-800 mb-1">Why it earns:</div>
                        <p className="text-xs text-blue-700 leading-snug">{product.whyBuy}</p>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-5 text-xs">
                    <div className="bg-gray-50 border rounded-lg p-3 text-center">
                      <DollarSign className="w-4 h-4 text-gray-400 mx-auto mb-1" />
                      <div className="text-gray-400 mb-0.5">Retail Range</div>
                      <div className="font-bold text-gray-800 text-sm">{product.priceRange}</div>
                    </div>
                    <div className="bg-green-50 border border-green-100 rounded-lg p-3 text-center">
                      <TrendingUp className="w-4 h-4 text-green-500 mx-auto mb-1" />
                      <div className="text-gray-400 mb-0.5">Commission</div>
                      <div className="font-bold text-green-700 text-sm">{product.commissionRate}</div>
                    </div>
                  </div>
                  <a href={product.amazonUrl} target="_blank" rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold text-sm py-3 rounded-lg transition-colors">
                    <ShoppingCart className="w-4 h-4" /> View on Amazon
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
