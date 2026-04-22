import { Link } from "react-router";
import { Brain, Code, Sparkles, Rocket, LineChart, Shield, Users, Zap, ChevronRight, CheckCircle2 } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Brain,
      title: "AI Strategy & Consulting",
      description: "Navigate the AI landscape with confidence through expert strategic guidance tailored to your business goals.",
      features: [
        "AI readiness assessment and maturity modeling",
        "Use case identification and prioritization",
        "Technology stack recommendations",
        "ROI analysis and business case development",
        "AI governance and ethics frameworks",
        "Implementation roadmap planning"
      ],
      color: "blue"
    },
    {
      icon: Code,
      title: "Custom Model Development",
      description: "Build cutting-edge machine learning models designed specifically for your unique requirements and data.",
      features: [
        "Deep learning model architecture design",
        "Large language model fine-tuning",
        "Computer vision solutions",
        "Natural language processing systems",
        "Recommendation engines",
        "Predictive analytics models"
      ],
      color: "purple"
    },
    {
      icon: Sparkles,
      title: "AI Integration & Deployment",
      description: "Seamlessly embed AI capabilities into your existing infrastructure and workflows.",
      features: [
        "API development and integration",
        "MLOps pipeline setup",
        "Model serving and optimization",
        "A/B testing frameworks",
        "Monitoring and observability",
        "Continuous model improvement"
      ],
      color: "indigo"
    },
    {
      icon: Rocket,
      title: "Generative AI Solutions",
      description: "Harness the power of generative AI to automate content creation and enhance productivity.",
      features: [
        "ChatGPT and LLM integration",
        "Custom chatbot development",
        "Content generation systems",
        "Prompt engineering and optimization",
        "RAG (Retrieval-Augmented Generation)",
        "AI-powered automation workflows"
      ],
      color: "cyan"
    },
    {
      icon: LineChart,
      title: "Data Science & Analytics",
      description: "Transform raw data into actionable insights with advanced analytics and visualization.",
      features: [
        "Exploratory data analysis",
        "Statistical modeling",
        "Data pipeline development",
        "Feature engineering",
        "Interactive dashboards",
        "Business intelligence solutions"
      ],
      color: "green"
    },
    {
      icon: Shield,
      title: "AI Optimization & Maintenance",
      description: "Keep your AI systems running at peak performance with ongoing optimization and support.",
      features: [
        "Model performance monitoring",
        "Drift detection and retraining",
        "Cost optimization",
        "Security audits",
        "Scalability improvements",
        "Technical support and troubleshooting"
      ],
      color: "amber"
    }
  ];

  return (
    <>
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300">Comprehensive AI Solutions</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Services
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              From strategy to deployment, I provide end-to-end AI consulting services to help your business harness the full potential of artificial intelligence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-slate-900/50 border border-slate-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all">
                  <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-slate-400 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Why Choose AI Consulting?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Personalized Approach</h3>
              <p className="text-slate-400">
                One-on-one collaboration tailored to your specific needs and goals
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Rapid Execution</h3>
              <p className="text-slate-400">
                Agile delivery without the overhead of large consulting firms
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Proven Expertise</h3>
              <p className="text-slate-400">
                Deep technical knowledge backed by real-world AI implementation experience
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Let's discuss how AI can transform your business. Schedule a consultation to explore the possibilities.
          </p>
          <div className="flex justify-center gap-4">
            <a href="/contact" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg flex items-center gap-2 transition-colors">
              Contact Me
              <ChevronRight className="w-5 h-5" />
            </a>
            <Link to="/" className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-lg transition-colors">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
