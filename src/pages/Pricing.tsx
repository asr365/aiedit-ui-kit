import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Sparkles, Crown, Zap } from "lucide-react";
import Navigation from "@/components/Navigation";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Free",
      description: "Perfect for trying out our basic features",
      price: { monthly: 0, annually: 0 },
      icon: Sparkles,
      features: [
        "5 documents per month",
        "Basic PDF conversion",
        "Standard processing speed",
        "Email support",
        "Basic OCR",
      ],
      limitations: [
        "File size limit: 10MB",
        "No AI features",
        "No bulk processing",
      ],
      cta: "Start Free",
      popular: false,
    },
    {
      name: "Pro",
      description: "For professionals and small teams",
      price: { monthly: 19, annually: 190 },
      icon: Zap,
      features: [
        "Unlimited documents",
        "All PDF tools",
        "AI-powered features",
        "Priority processing",
        "Advanced OCR",
        "Bulk operations",
        "API access",
        "Priority support",
        "Custom watermarks",
        "Team collaboration",
      ],
      cta: "Start Pro Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For large organizations with advanced needs",
      price: { monthly: 49, annually: 490 },
      icon: Crown,
      features: [
        "Everything in Pro",
        "AI document analysis",
        "Custom AI training",
        "White-label solution",
        "Advanced security",
        "SSO integration",
        "Dedicated support",
        "Custom integrations",
        "SLA guarantee",
        "Advanced analytics",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Simple, Transparent
              </span>
              <br />
              Pricing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Choose the perfect plan for your document processing needs. 
              All plans include our core PDF tools with varying AI capabilities.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 bg-white rounded-full p-1 shadow-elegant inline-flex">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  !isAnnual
                    ? "bg-gradient-primary text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  isAnnual
                    ? "bg-gradient-primary text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Annual
                <Badge className="ml-2 bg-green-500 text-xs">Save 20%</Badge>
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={plan.name}
                className={`relative bg-white/80 backdrop-blur-lg border-0 shadow-feature-card hover:shadow-xl transition-all duration-300 ${
                  plan.popular
                    ? "ring-2 ring-brand-primary scale-105 bg-gradient-card"
                    : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-primary text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                    <plan.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <p className="text-gray-600 text-sm">{plan.description}</p>
                  
                  <div className="mt-4">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold">
                        ${isAnnual ? plan.price.annually : plan.price.monthly}
                      </span>
                      {plan.price.monthly > 0 && (
                        <span className="text-gray-500 ml-1">
                          /{isAnnual ? "year" : "month"}
                        </span>
                      )}
                    </div>
                    {isAnnual && plan.price.monthly > 0 && (
                      <p className="text-sm text-green-600 mt-1">
                        Save ${(plan.price.monthly * 12 - plan.price.annually)} per year
                      </p>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <Button
                    variant={plan.popular ? "hero" : "default"}
                    size="lg"
                    className="w-full"
                  >
                    {plan.cta}
                  </Button>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">What's included:</h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className="w-4 h-4 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {plan.limitations && (
                      <div className="pt-4 border-t">
                        <h4 className="font-semibold text-gray-900 mb-2">Limitations:</h4>
                        <ul className="space-y-1">
                          {plan.limitations.map((limitation, limitIndex) => (
                            <li key={limitIndex} className="text-sm text-gray-500">
                              • {limitation}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  q: "Can I change plans anytime?",
                  a: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately."
                },
                {
                  q: "Is there a free trial?",
                  a: "Yes, we offer a 14-day free trial for all paid plans with full feature access."
                },
                {
                  q: "What payment methods do you accept?",
                  a: "We accept all major credit cards, PayPal, and wire transfers for enterprise plans."
                },
                {
                  q: "Can I cancel anytime?",
                  a: "Absolutely! You can cancel your subscription at any time with no cancellation fees."
                }
              ].map((faq, index) => (
                <div key={index} className="text-left bg-white/60 backdrop-blur-lg p-6 rounded-lg">
                  <h3 className="font-semibold mb-2">{faq.q}</h3>
                  <p className="text-gray-600 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;