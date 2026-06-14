"use client";

import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { categories, topProducts } from "@/lib/data";
import {
  Star,
  TrendingUp,
  Users,
  DollarSign,
  ArrowRight,
  CheckCircle,
  ExternalLink,
  ShoppingCart,
} from "lucide-react";

const stats = [
  { label: "Product Categories", value: "10+", icon: ShoppingCart },
  { label: "Curated Products", value: "1,000+", icon: Star },
  { label: "Avg. Commission", value: "4–7%", icon: DollarSign },
  { label: "Years of Experience", value: "30+", icon: Users },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-900 via-red-950 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <Badge className="bg-amber-500 text-gray-900 font-semibold mb-4 px-3 py-1 text-sm">
              🏆 30+ Years of Fine Dining Expertise
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-5">
              Every Restaurant Supply
              <span className="text-amber-400"> You'll Ever Need</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
              Curated by an industry veteran with 30+ years in fine dining management.
              Smallwares, equipment, uniforms, storage, and cleaning supplies — all hand-picked,
              all available on Amazon with free Prime shipping.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold text-base px-8">
                <Link href="/categories">Browse All Categories <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white/10 font-semibold text-base px-8">
                <Link href="/top-picks">View Top Picks</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="flex justify-center mb-2">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-red-700" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Shop by Category</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Everything a restaurant needs, organized the way an operator thinks about it.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {categories.slice(0, 8).map((cat) => (
              <a
                key={cat.id}
                href={cat.amazonSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`block rounded-xl border-2 p-5 transition-all cursor-pointer ${cat.color} shadow-sm hover:shadow-md`}
              >
                <div className="text-3xl mb-3">{cat.icon}</div>
                <h3 className="font-bold text-gray-900 text-base mb-1">{cat.name}</h3>
                <p className="text-sm text-gray-600 mb-3 leading-snug">{cat.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">{cat.itemCount}+ items</span>
                  <span className="text-xs font-semibold text-red-700 flex items-center gap-1">
                    Shop Amazon <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </a>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg" className="border-red-700 text-red-700 hover:bg-red-700 hover:text-white">
              <Link href="/categories">View All 10 Categories <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Expert credibility */}
      <section className="bg-gradient-to-r from-red-700 to-red-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <Badge className="bg-white/20 text-white mb-4">Expert Curator</Badge>
              <h2 className="text-3xl font-bold mb-4">Recommendations You Can Trust</h2>
              <p className="text-red-100 leading-relaxed mb-6">
                With over 30 years as a General Manager and Multi-Unit Director in fine dining,
                I've purchased and used virtually every category of restaurant supply. I know
                what holds up under commercial pressure, what's worth the price, and what
                the industry actually uses.
              </p>
              <ul className="space-y-2">
                {[
                  "Multi-unit General Manager experience",
                  "Fine dining operations specialist",
                  "NSF & health code compliance expertise",
                  "Deep knowledge of commercial equipment lifecycle",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-red-100">
                    <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4">
              {[
                { label: "Fine Dining Establishments", value: "5+" },
                { label: "Staff Outfitted", value: "500+" },
                { label: "Kitchens Equipped", value: "12+" },
                { label: "Years of Service", value: "30+" },
              ].map((item) => (
                <div key={item.label} className="bg-white/10 rounded-xl p-5 text-center">
                  <div className="text-3xl font-bold text-amber-400">{item.value}</div>
                  <div className="text-xs text-red-200 mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Top Picks Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Editor's Top Picks</h2>
              <p className="text-gray-500">Hand-selected products with the best value and highest commission potential.</p>
            </div>
            <Button asChild variant="outline" className="hidden md:flex border-red-700 text-red-700 hover:bg-red-700 hover:text-white">
              <Link href="/top-picks">See All Picks <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topProducts.slice(0, 3).map((product) => (
              <Card key={product.id} className="border shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="secondary" className="text-xs">{product.category}</Badge>
                    {product.badge && (
                      <Badge className="bg-amber-500 text-gray-900 text-xs">{product.badge}</Badge>
                    )}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 leading-snug">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                  <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
                    <div className="bg-gray-50 rounded p-2">
                      <div className="text-gray-400">Price Range</div>
                      <div className="font-bold text-gray-800">{product.priceRange}</div>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <div className="text-gray-400">Commission</div>
                      <div className="font-bold text-green-700">{product.commissionRate}</div>
                    </div>
                  </div>
                  <a href={product.amazonUrl} target="_blank" rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold text-sm py-2 rounded-lg transition-colors">
                    <ShoppingCart className="w-4 h-4" /> View on Amazon
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 bg-amber-500 rounded-full flex items-center justify-center">
              <TrendingUp className="w-7 h-7 text-gray-900" />
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-4">Build Your Passive Income Stream</h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            The Amazon Associates program pays 4–7% commission on restaurant supplies.
            See our complete step-by-step plan to turn this site into a real income engine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold px-8">
              <Link href="/plan">View the Full Plan <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white/10">
              <a href="https://affiliate-program.amazon.com" target="_blank" rel="noopener noreferrer">
                Join Amazon Associates <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
