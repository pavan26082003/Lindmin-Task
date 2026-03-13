import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, PenTool, Code, CheckSquare, Rocket, HeadphonesIcon } from "lucide-react";
import Button from "../components/common/Button";
import SectionHeader from "../components/common/SectionHeader";
import ServiceCard from "../components/common/ServiceCard";
import { services } from "../data/services";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Services = () => {
  const [activeTab, setActiveTab] = useState("Web");

  const processSteps = [
    { icon: Search, title: "Discovery", desc: "Understanding your goals and requirements." },
    { icon: PenTool, title: "Design", desc: "Creating intuitive and beautiful interfaces." },
    { icon: Code, title: "Development", desc: "Building scalable and robust architecture." },
    { icon: CheckSquare, title: "Testing", desc: "Rigorous QA to ensure flawless execution." },
    { icon: Rocket, title: "Launch", desc: "Deploying the solution to production." },
    { icon: HeadphonesIcon, title: "Support", desc: "Continuous monitoring and maintenance." }
  ];

  const techStackData = {
    Web: ["React", "Next.js", "Vue.js", "Tailwind CSS", "TypeScript", "Redux"],
    Mobile: ["React Native", "Flutter", "Swift", "Kotlin", "iOS", "Android"],
    Backend: ["Node.js", "Python", "Express", "Django", "GraphQL", "REST APIs"],
    Cloud: ["AWS", "Google Cloud", "Docker", "Kubernetes", "CI/CD", "Terraform"]
  };

  return (
    <div className="w-full pt-20">
      {/* 1. PAGE HERO */}
      <section className="py-20 bg-navy relative overflow-hidden">
        {/* Abstract grid pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(#00D4FF 1px, transparent 1px), linear-gradient(90deg, #00D4FF 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-heading">Our Services</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              End-to-end software solutions built for modern businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. SERVICES GRID */}
      <section className="py-24 bg-gray-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, delay: index * 0.1 }}
              >
                {/* We use our common ServiceCard component */}
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OUR PROCESS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="How We Work" title="Our Process" centered={true} />
          
          <div className="mt-16 flex flex-col md:flex-row gap-8 justify-between relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-8 left-12 right-12 h-0.5 bg-gray-200 z-0"></div>
            
            {processSteps.map((step, index) => (
              <motion.div key={index} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, delay: index * 0.1 }} className="relative z-10 flex-1 text-center group">
                <div className="w-16 h-16 mx-auto bg-white border-4 border-gray-100 rounded-full flex items-center justify-center text-navy group-hover:border-cyan-brand transition-colors shadow-sm mb-4">
                  <step.icon className="w-6 h-6" />
                </div>
                <div className="bg-navy text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center absolute top-0 right-1/2 translate-x-10 -translate-y-2">
                  {index + 1}
                </div>
                <h4 className="text-lg font-bold text-navy mb-2">{step.title}</h4>
                <p className="text-sm text-gray-500">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TECH STACK PER SERVICE */}
      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            label="Our Tools" 
            title={<span className="text-white">Technologies We Use</span>} 
            centered={true}
          />
          
          <div className="mt-12 max-w-4xl mx-auto">
            {/* Tabs */}
            <div className="flex flex-wrapjustify-center gap-4 mb-12 border-b border-white/10 pb-4">
              {Object.keys(techStackData).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-t-lg font-semibold transition-all ${
                    activeTab === tab 
                      ? "text-cyan-brand border-b-2 border-cyan-brand" 
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="min-h-[200px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-2 md:grid-cols-3 gap-6"
                >
                  {techStackData[activeTab].map((tech, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-colors">
                      <span className="text-orange-brand font-mono font-bold">{tech}</span>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BOTTOM CTA */}
      <section className="py-24 bg-gradient-to-br from-gray-offwhite to-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-8 font-heading">Not sure which service you need? Let's talk.</h2>
            <Button variant="primary" size="lg">Schedule a Free Consultation</Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
