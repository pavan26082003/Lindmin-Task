import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Users, Target, Zap, Shield, Heart, Award, ChevronRight } from "lucide-react";
import Button from "../components/common/Button";
import SectionHeader from "../components/common/SectionHeader";
import { team } from "../data/team";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const About = () => {
  return (
    <div className="w-full pt-20">
      {/* 1. PAGE HERO */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-6 uppercase tracking-wider font-semibold">
              <Link to="/" className="hover:text-cyan-brand transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-cyan-brand">About</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-heading">About Landmine Soft</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Born from a passion for technology. Built to solve real problems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. OUR STORY */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="aspect-[4/3] rounded-3xl bg-gray-100 overflow-hidden relative shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-tr from-navy/10 to-transparent"></div>
                <div className="w-full h-full bg-navy/5 flex items-center justify-center border-2 border-dashed border-gray-300">
                  <span className="text-gray-400 font-medium">Abstract Tech Visual</span>
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, delay: 0.2 }}>
              <SectionHeader label="Our History" title="The Story So Far" />
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-12">
                <p>
                  Landmine Soft began in 2019 with a simple, yet ambitious goal: to detonate the traditional barriers of software development and provide agile, reliable solutions to businesses stepping into the digital age.
                </p>
                <p>
                  Over the years, we have grown from a small group of passionate coders into a full-scale digital agency. Our journey is paved with successful deployments, constant learning, and an unwavering commitment to our clients' success.
                </p>
                <p>
                  Today, we stand at the forefront of technological innovation, building everything from dynamic cloud infrastructure to cutting-edge AI integrations.
                </p>
              </div>
              
              {/* Timeline */}
              <div className="border-l-2 border-cyan-brand/30 pl-8 space-y-8">
                {[
                  { year: "2019", title: "Company Founded" },
                  { year: "2021", title: "Expanded to Enterprise Solutions" },
                  { year: "2024", title: "Global Client Base Achieved" }
                ].map((item, i) => (
                  <div key={i} className="relative">
                    <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-cyan-brand border-4 border-white shadow-sm"></span>
                    <h4 className="text-xl font-bold text-navy">{item.year}</h4>
                    <p className="text-gray-500">{item.title}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. VISION & MISSION */}
      <section className="py-24 bg-gray-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white p-12 rounded-3xl shadow-sm border-t-4 border-cyan-brand">
              <Target className="w-12 h-12 text-cyan-brand mb-6" />
              <h3 className="text-3xl font-bold text-navy mb-4 font-heading">Our Vision</h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                "To be the most trusted software partner for businesses worldwide, empowering them with technology that scales."
              </p>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, delay: 0.2 }} className="bg-white p-12 rounded-3xl shadow-sm border-t-4 border-orange-brand">
              <Zap className="w-12 h-12 text-orange-brand mb-6" />
              <h3 className="text-3xl font-bold text-navy mb-4 font-heading">Our Mission</h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                "To deliver innovative, reliable, and scalable digital solutions that solve real-world complexities."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. WHAT PROBLEMS WE SOLVE */}
      <section className="py-24 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Our Focus" title={<span className="text-white">What Problems We Solve</span>} centered={true} />
          <div className="grid md:grid-cols-3 gap-12 mt-16">
            {[
              { title: "Scaling Tech Debt", desc: "Legacy systems slowing you down? We refactor and modernize without breaking production.", solution: "Microservices & Cloud" },
              { title: "Poor UX Costing Clients", desc: "Users abandoning your app?", solution: "User-Centered Design Systems" },
              { title: "Digital Transformation Gaps", desc: "Struggling to move offline operations to the cloud?", solution: "Custom Enterprise Portals" }
            ].map((prob, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white/5 border border-white/10 p-8 rounded-2xl glass hover:border-cyan-brand/50 transition-colors">
                <span className="text-orange-brand font-bold uppercase tracking-wider text-xs mb-2 block">Problem</span>
                <h4 className="text-xl font-bold mb-4">{prob.title}</h4>
                <p className="text-gray-400 mb-6">{prob.desc}</p>
                <div className="p-4 bg-navy-dark rounded-xl border border-cyan-brand/20">
                  <span className="text-cyan-brand font-bold uppercase tracking-wider text-xs mb-1 block">Our Solution</span>
                  <span className="font-medium text-gray-200">{prob.solution}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CORE VALUES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Our DNA" title="Core Values" centered={true} />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16">
            {[
              { icon: Shield, title: "Integrity", desc: "Honest communication and transparent practices." },
              { icon: Zap, title: "Innovation", desc: "Always exploring optimal cutting-edge solutions." },
              { icon: Users, title: "Collaboration", desc: "We work as an extension of your team." },
              { icon: Award, title: "Excellence", desc: "Quality and precision in every line of code." },
              { icon: Target, title: "Speed", desc: "Agile delivery without compromising stability." },
              { icon: Heart, title: "Client-First", desc: "Your success is our ultimate metric." }
            ].map((value, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
                <div className="w-16 h-16 mx-auto bg-navy/5 text-navy rounded-2xl flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-navy mb-3">{value.title}</h4>
                <p className="text-gray-500">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. MEET THE TEAM */}
      <section className="py-24 bg-gray-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Our People" title="Meet the Team" centered={true} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {team.map((member, i) => (
              <motion.div key={member.id} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, delay: i * 0.1 }} className="bg-white p-8 rounded-2xl shadow-sm text-center group">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-navy to-cyan-brand flex items-center justify-center text-white text-3xl font-bold mb-6">
                  {member.initials}
                </div>
                <h4 className="text-xl font-bold text-navy mb-1">{member.name}</h4>
                <p className="text-cyan-brand font-medium mb-4">{member.role}</p>
                <a href="#" className="inline-block p-2 text-gray-400 hover:text-navy hover:bg-gray-100 rounded-full transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. BOTTOM CTA */}
      <section className="py-24 bg-navy text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 font-heading">Want to work with our team?</h2>
          <Link to="/contact">
            <Button variant="primary" size="lg">Get in Touch</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
