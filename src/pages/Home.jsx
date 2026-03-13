import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Code, Maximize, Star, Shield, Zap, Globe, Smartphone, Server } from "lucide-react";
import Button from "../components/common/Button";
import SectionHeader from "../components/common/SectionHeader";
import ServiceCard from "../components/common/ServiceCard";
import { services } from "../data/services";
import { stats } from "../data/stats";
import { techStack } from "../data/techStack";
import { testimonials } from "../data/testimonials";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Home = () => {
  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-navy">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,_#00D4FF_0%,_transparent_60%)] animate-pulse" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 font-heading">
              Defusing <span className="text-cyan-brand">Complexity.</span><br />
              Delivering <span className="text-orange-brand">Innovation.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
              We build scalable software solutions that transform your business and drive digital excellence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button variant="primary" size="lg">Start Your Project</Button>
              </Link>
              <Link to="/services">
                <Button variant="ghost" size="lg">View Our Work</Button>
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative rounded-2xl overflow-hidden glass p-4 shadow-2xl border border-white/10 rotate-2 hover:rotate-0 transition-all duration-500">
              <div className="bg-[#061829] rounded-xl p-6 shadow-inner font-mono text-sm text-cyan-brand whitespace-pre-wrap">
                {`const App = () => {
  return (
    <InnovationProvider>
      <ScalableArchitecture>
        <UnmatchedPerformance />
      </ScalableArchitecture>
    </InnovationProvider>
  );
};

export default App;`}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. COMPANY INTRO */}
      <section className="py-20 bg-gray-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <h3 className="text-4xl md:text-5xl font-bold text-navy mb-2">
                    {stat.value}<span className="text-cyan-brand">{stat.suffix}</span>
                  </h3>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>
            <div>
              <SectionHeader 
                label="About Our Company"
                title="Engineered for Growth"
                subtitle="Since our inception, Landmine Soft has been on a mission to dismantle complex technical debt and build robust, scalable applications. We partner with startups and enterprises alike to architect solutions that stand the test of time."
              />
              <Link to="/about" className="inline-flex items-center gap-2 font-bold text-navy hover:text-cyan-brand transition-colors">
                Read Our Story <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. SERVICES OVERVIEW */}
      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
            <div className="text-center mx-auto max-w-2xl mb-16">
              <span className="text-sm font-semibold tracking-widest uppercase text-cyan-brand mb-4 inline-block">What We Build</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-heading">Our Expertise</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.slice(0, 6).map((service) => (
                <ServiceCard key={service.id} {...service} />
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <Link to="/services">
                <Button variant="outline" size="lg">Explore All Services</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            label="The Landmine Advantage"
            title="Why Choose Us"
            centered={true}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">
            {[
              { icon: Shield, title: "Reliable Architecture", desc: "We design systems that don't just work today, but scale flawlessly tomorrow." },
              { icon: Zap, title: "Agile Delivery", desc: "Two-week sprints, transparent communication, and rapid iteration." },
              { icon: Star, title: "Top-Tier Talent", desc: "Our engineers are hand-picked veterans from top tech companies." },
              { icon: Code, title: "Clean Code", desc: "Maintainable, fully tested, and well-documented codebases." },
              { icon: Maximize, title: "Scalable Solutions", desc: "Cloud-native designs ready for high traffic and big data." },
              { icon: CheckCircle, title: "24/7 Support", desc: "Round-the-clock monitoring and maintenance for peace of mind." }
            ].map((feature, i) => (
              <motion.div 
                key={i} 
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                className="flex gap-4 items-start group"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-brand/10 text-orange-brand flex items-center justify-center shrink-0 group-hover:bg-orange-brand group-hover:text-white transition-colors duration-300">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-navy mb-2">{feature.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TECH STACK (Ticker) */}
      <section className="py-20 bg-gradient-to-br from-navy to-navy-light overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
          <h2 className="text-2xl font-bold text-white font-heading">Technologies We Master</h2>
        </div>
        <div className="relative w-full flex overflow-x-hidden">
          <div className="animate-ticker flex whitespace-nowrap min-w-full items-center gap-16 px-8">
            {techStack.map((tech, i) => (
              <span key={i} className="text-2xl font-bold text-white/50 hover:text-cyan-brand transition-colors cursor-default">
                {tech}
              </span>
            ))}
            {/* Duplicate for infinite loop */}
            {techStack.map((tech, i) => (
              <span key={`dup-${i}`} className="text-2xl font-bold text-white/50 hover:text-cyan-brand transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PORTFOLIO HIGHLIGHT */}
      <section className="py-24 bg-[#061829]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            label="Case Studies"
            title={<span className="text-white">Our Recent Work</span>}
            subtitle={<span className="text-gray-400">Discover how we've helped businesses transform their operations through custom software.</span>}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { name: "FinTrack Portal", category: "Fintech App", img: "bg-gradient-to-br from-blue-400 to-blue-600" },
              { name: "HealthSync API", category: "Healthcare APIs", img: "bg-gradient-to-br from-green-400 to-emerald-600" },
              { name: "RetailConnect", category: "E-Commerce", img: "bg-gradient-to-br from-purple-400 to-fuchsia-600" }
            ].map((project, i) => (
              <motion.div 
                key={i} 
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                className="group cursor-pointer"
              >
                <div className={`w-full h-64 rounded-2xl mb-6 relative overflow-hidden ${project.img}`}>
                  <div className="absolute inset-0 bg-navy/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                    <Button variant="outline">View Details</Button>
                  </div>
                </div>
                <p className="text-cyan-brand font-semibold text-sm tracking-uppercase mb-2">{project.category}</p>
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-brand transition-colors">{project.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="py-24 bg-gray-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            label="Client Feedback"
            title="What They Say"
            centered={true}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {testimonials.map((test, i) => (
              <motion.div 
                key={i} 
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative"
              >
                <div className="flex text-orange-brand mb-6">
                  {[...Array(test.rating)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-gray-600 italic mb-8">"{test.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center font-bold text-navy">
                    {test.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-navy">{test.name}</h4>
                    <p className="text-sm text-gray-500">{test.role}, {test.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA BANNER */}
      <section className="py-20 bg-gradient-to-r from-navy to-navy-light text-center">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-heading">Ready to Build Something Great?</h2>
            <p className="text-xl text-gray-300 mb-10">Let's discuss your next project and find out how we can help you achieve your goals.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">Contact Us</Button>
              </Link>
              <Link to="/services">
                <Button variant="ghost" size="lg" className="w-full sm:w-auto">See All Services</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
