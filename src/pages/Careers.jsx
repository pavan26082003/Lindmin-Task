import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Briefcase, Globe, Award, Zap, Coffee, Heart, Monitor } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";
import SectionHeader from "../components/common/SectionHeader";
import { jobs } from "../data/jobs";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Careers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const cultureCards = [
    { icon: Globe, title: "Remote-First Flexibility", desc: "Work from anywhere. We value output over seat time." },
    { icon: Award, title: "Continuous Learning & Growth", desc: "Access to courses, conferences, and mentorship." },
    { icon: Briefcase, title: "Collaborative Team Environment", desc: "No egos. We solve hard problems together." },
    { icon: Zap, title: "Competitive Compensation", desc: "Top-of-market pay and equity for the right talent." }
  ];

  const perks = [
    { icon: Heart, label: "Health Insurance" },
    { icon: Coffee, label: "Flexible Hours" },
    { icon: Globe, label: "Annual Retreats" },
    { icon: Award, label: "Learning Budget" },
    { icon: Monitor, label: "Work From Anywhere" },
    { icon: Briefcase, label: "Stock Options" },
  ];

  return (
    <div className="w-full pt-20">
      {/* 1. PAGE HERO */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-navy"></div>
          {/* subtle circles */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-heading">
              Build Your Career at <span className="text-cyan-brand">Landmine Soft</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 text-balance">
              We're always looking for talented people who love what they do and want to build the future of software.
            </p>
            <Button variant="primary" size="lg" onClick={() => {
              document.getElementById("open-positions")?.scrollIntoView({ behavior: 'smooth' });
            }}>
              See Open Positions
            </Button>
          </motion.div>
        </div>
      </section>

      {/* 2. COMPANY CULTURE */}
      <section className="py-24 bg-gray-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Life at Landmine" title="Our Culture" centered={true} />
          
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {cultureCards.map((card, i) => (
              <motion.div 
                key={i} 
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex gap-6"
              >
                <div className="w-14 h-14 bg-cyan-brand/10 text-cyan-brand rounded-xl flex items-center justify-center shrink-0">
                  <card.icon className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-navy mb-2">{card.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. EMPLOYEE PERKS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Benefits" title="Employee Perks" centered={true} />
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {perks.map((perk, i) => (
              <motion.div 
                key={i} 
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <div className="text-orange-brand bg-orange-brand/10 p-3 rounded-lg"><perk.icon className="w-6 h-6" /></div>
                <span className="font-semibold text-navy">{perk.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OPEN POSITIONS */}
      <section id="open-positions" className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            label="Join Us" 
            title={<span className="text-white">Open Positions</span>} 
            subtitle={<span className="text-gray-400">Explore roles across engineering, design, and business.</span>}
          />
          
          <div className="grid gap-6 mt-12">
            {jobs.map((job, i) => (
              <motion.div 
                key={job.id} 
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, delay: (i % 4) * 0.1 }}
                className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl hover:bg-white/10 transition-colors flex flex-col md:flex-row gap-6 justify-between items-start md:items-center"
              >
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">{job.title}</h3>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="px-3 py-1 bg-cyan-brand/20 text-cyan-brand text-xs font-semibold rounded-full uppercase tracking-wide">
                      {job.type}
                    </span>
                    <span className="px-3 py-1 bg-orange-brand/20 text-orange-brand text-xs font-semibold rounded-full uppercase tracking-wide flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {job.location}
                    </span>
                    <span className="px-3 py-1 bg-gray-700 text-gray-300 text-xs font-semibold rounded-full uppercase tracking-wide">
                      {job.dept}
                    </span>
                  </div>
                  <p className="text-gray-400 max-w-2xl">{job.desc}</p>
                </div>
                <div className="shrink-0 w-full md:w-auto">
                  <Button variant="outline" className="w-full border-cyan-brand/50" onClick={() => handleApplyClick(job)}>
                    Apply Now
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BOTTOM CTA */}
      <section className="py-20 bg-gray-100 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy mb-4 font-heading">Don't see the right role?</h2>
          <p className="text-lg text-gray-600 mb-8">Send your resume anyway! We are always keeping an eye out for brilliant minds.</p>
          <Link to="/contact">
            <Button variant="primary" size="lg">Send Open Application</Button>
          </Link>
        </div>
      </section>

      {/* APPLY MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <Dialog static open={isModalOpen} onClose={() => setIsModalOpen(false)} className="relative z-[100]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-navy/80 backdrop-blur-sm"
              aria-hidden="true"
            />

            <div className="fixed inset-0 flex items-center justify-center p-4">
              <Dialog.Panel
                as={motion.div}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="mx-auto max-w-lg w-full bg-white rounded-3xl p-8 shadow-2xl relative"
              >
                <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 text-gray-400 hover:text-navy">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>

                <Dialog.Title className="text-2xl font-bold text-navy mb-2 font-heading">
                  Apply for {selectedJob?.title}
                </Dialog.Title>
                <p className="text-gray-500 mb-8 max-w-sm">Fill out the details below. Our technical routing team will review your application.</p>

                <form className="space-y-4" onSubmit={(e) => {
                  e.preventDefault();
                  alert("Application submitted! (Simulated)");
                  setIsModalOpen(false);
                }}>
                  <div>
                    <label className="block text-sm font-bold text-navy mb-1">Full Name</label>
                    <input required type="text" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-brand" placeholder="Jane Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-navy mb-1">Email Address</label>
                    <input required type="email" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-brand" placeholder="jane@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-navy mb-1">Portfolio or Linkedin URL</label>
                    <input required type="url" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-brand" placeholder="https://" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-navy mb-1">Cover Note</label>
                    <textarea rows="3" required className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-brand" placeholder="Why are you a great fit?"></textarea>
                  </div>
                  <Button type="submit" variant="primary" className="w-full mt-4">
                    Submit Application
                  </Button>
                </form>
              </Dialog.Panel>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Careers;
