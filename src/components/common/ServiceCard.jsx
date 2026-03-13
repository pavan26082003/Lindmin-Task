import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ServiceCard = ({ icon: Icon, title, description, features = [] }) => (
  <div className="group relative bg-navy/5 border border-navy/10 rounded-2xl p-8 
                  hover:border-cyan-brand/50 hover:shadow-xl hover:shadow-cyan-brand/10 
                  transition-all duration-300 hover:-translate-y-1 bg-white">
    <div className="w-12 h-12 bg-cyan-brand/10 rounded-xl flex items-center justify-center mb-6 
                    group-hover:bg-cyan-brand/20 transition-colors">
      <Icon className="w-6 h-6 text-cyan-brand" />
    </div>
    <h3 className="text-xl font-bold text-navy mb-3">{title}</h3>
    <p className="text-gray-500 mb-4 leading-relaxed">{description}</p>
    {features.length > 0 && (
      <ul className="space-y-1 mb-6">
        {features.map((f, i) => (
          <li key={i} className="text-sm text-gray-500 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-cyan-brand rounded-full flex-shrink-0" />
            {f}
          </li>
        ))}
      </ul>
    )}
    <Link to="/services" className="inline-flex items-center gap-1 text-sm font-semibold text-cyan-brand 
                            hover:gap-2 transition-all">
      Learn More <ArrowRight className="w-4 h-4" />
    </Link>
  </div>
);

export default ServiceCard;
