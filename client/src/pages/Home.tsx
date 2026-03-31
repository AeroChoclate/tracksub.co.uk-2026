import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  BarChart3,
  TrendingUp,
  Eye,
  Zap,
  ArrowRight,
  Check,
  Chrome,
} from "lucide-react";

export default function Home() {
  const handleGetExtension = () => {
    window.open("https://google.com", "_blank");
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-emerald-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="text-xl font-bold text-gray-900">TrackSub</span>
          </div>
          <Button
            onClick={handleGetExtension}
            className="bg-indigo-600 hover:bg-indigo-700 text-white gap-2"
          >
            <Chrome className="w-4 h-4" />
            Get Extension
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        </div>

        <div className="container relative z-10 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                  Take Control of Your{" "}
                  <span className="bg-gradient-to-r from-indigo-600 to-emerald-500 bg-clip-text text-transparent">
                    Subscriptions
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  TrackSub automatically detects and monitors your subscriptions
                  across 50+ services. Get insights, track spending, and never
                  miss a renewal date.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleGetExtension}
                  size="lg"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white gap-2 px-8"
                >
                  <Chrome className="w-5 h-5" />
                  Get Extension Now
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 bg-gradient-to-br from-indigo-400 to-emerald-400 rounded-full border-2 border-white"
                    ></div>
                  ))}
                </div>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-900">10K+</span>{" "}
                  users tracking their subscriptions
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-indigo-50 to-emerald-50 rounded-2xl p-8 shadow-2xl border border-indigo-100">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663489162260/gFAUF62eKRpcNsqWPkqQ5R/tracksub-insights_66c08b2c.png"
                  alt="TrackSub Dashboard"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 max-w-xs">
                <p className="text-sm font-semibold text-gray-900">
                  💰 Save up to 30% on subscriptions
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  By identifying unused services
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50 relative">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powerful Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage your subscriptions in one place
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 border-0 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                50+ Services Detected
              </h3>
              <p className="text-gray-600">
                Automatically identifies subscriptions from Netflix, Spotify,
                Adobe, Microsoft, and many more. No manual entry needed.
              </p>
            </Card>

            <Card className="p-8 border-0 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Spending Insights
              </h3>
              <p className="text-gray-600">
                Visualize your subscription spending by category. Track daily,
                weekly, and monthly costs at a glance.
              </p>
            </Card>

            <Card className="p-8 border-0 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Trends & History
              </h3>
              <p className="text-gray-600">
                Monitor subscription trends over time. Get alerts for upcoming
                renewals and price changes.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              See It In Action
            </h2>
            <p className="text-lg text-gray-600">
              Get a closer look at TrackSub's intuitive interface
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="group">
              <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663489162260/gFAUF62eKRpcNsqWPkqQ5R/tracksub-insights_66c08b2c.png"
                  alt="Insights View"
                  className="w-full h-auto"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mt-4">
                Insights Dashboard
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                View your total spending and upcoming renewals
              </p>
            </div>

            <div className="group">
              <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663489162260/gFAUF62eKRpcNsqWPkqQ5R/tracksub-upcoming_38287090.png"
                  alt="Upcoming Renewals"
                  className="w-full h-auto"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mt-4">
                Upcoming Renewals
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Never miss a renewal date with timely alerts
              </p>
            </div>

            <div className="group">
              <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663489162260/gFAUF62eKRpcNsqWPkqQ5R/tracksub-all-subscriptions_fdd72a25.png"
                  alt="All Subscriptions"
                  className="w-full h-auto"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mt-4">
                All Subscriptions
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Browse and manage all your subscriptions in one place
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600">
              Get started in just 3 simple steps
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-600 text-white font-bold text-lg">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Install the Extension
                </h3>
                <p className="text-gray-600">
                  Add TrackSub to your Chrome browser in seconds. It's free and
                  requires no account setup.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-emerald-600 text-white font-bold text-lg">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Browse Normally
                </h3>
                <p className="text-gray-600">
                  Visit your subscription services as usual. TrackSub
                  automatically detects them in the background.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-600 text-white font-bold text-lg">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Get Insights
                </h3>
                <p className="text-gray-600">
                  Open the extension to view your dashboard, spending trends,
                  and upcoming renewals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Supports 50+ Services
            </h2>
            <p className="text-lg text-gray-600">
              TrackSub works with all major subscription platforms
            </p>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-emerald-50 rounded-2xl p-12 border border-indigo-100">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                "Netflix",
                "Spotify",
                "Adobe",
                "Microsoft 365",
                "Amazon Prime",
                "Disney+",
                "Hulu",
                "GitHub",
                "Figma",
                "Notion",
                "Slack",
                "Dropbox",
                "iCloud+",
                "YouTube Premium",
                "ChatGPT Plus",
                "And 35+ more...",
              ].map((service, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-gray-700 font-medium"
                >
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-sm">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-r from-indigo-600 to-emerald-500">
        <div className="container max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Take Control?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of users who are saving money on subscriptions
          </p>
          <Button
            onClick={handleGetExtension}
            size="lg"
            className="bg-white text-indigo-600 hover:bg-gray-100 gap-2 px-8 font-semibold"
          >
            <Chrome className="w-5 h-5" />
            Get TrackSub Now
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-12 px-4">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-emerald-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">T</span>
                </div>
                <span className="text-white font-bold">TrackSub</span>
              </div>
              <p className="text-sm">
                Take control of your subscriptions with smart tracking and
                insights.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-center text-sm">
              © 2026 TrackSub. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
