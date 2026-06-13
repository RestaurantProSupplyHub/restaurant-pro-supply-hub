import Link from "next/link";
import { Star, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Star className="w-4 h-4 text-white fill-white" />
              </div>
              <span className="font-bold text-white text-sm">RestaurantPro Supply Hub</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Curated restaurant supply recommendations powered by 30+ years of fine dining expertise.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Categories</h4>
            <ul className="space-y-2 text-sm">
              {["Smallwares", "Kitchen Equipment", "Storage Solutions", "Uniforms & Apparel", "Cleaning Supplies", "Bar Supplies"].map((cat) => (
                <li key={cat}>
                  <Link href="/categories" className="hover:text-white transition-colors">{cat}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Resources</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Top Picks", href: "/top-picks" },
                { label: "Partner Plan", href: "/plan" },
                { label: "About", href: "/plan" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-white transition-colors">{item.label}</Link>
                </li>
              ))}
              <li>
                <a
                  href="https://affiliate-program.amazon.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  Amazon Associates <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Disclosure */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Disclosure</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              RestaurantPro Supply Hub is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">© 2026 RestaurantPro Supply Hub. All rights reserved.</p>
          <p className="text-xs text-gray-500">As an Amazon Associate I earn from qualifying purchases.</p>
        </div>
      </div>
    </footer>
  );
}
