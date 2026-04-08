/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Server, 
  Shield, 
  Zap, 
  Cpu, 
  Globe, 
  Lock, 
  Terminal, 
  BarChart3, 
  Check, 
  ChevronRight, 
  Menu, 
  X,
  ArrowRight,
  Database,
  Cloud,
  Layers,
  Activity,
  Users,
  MessageSquare,
  Mail,
  Eye,
  EyeOff,
  Github
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Products', href: '/#products' },
    { name: 'Features', href: '/#features' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'Security', href: '/#security' },
    { name: 'Docs', href: '#' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
      isScrolled ? "bg-white/80 backdrop-blur-md border-slate-200 py-3" : "bg-transparent border-transparent py-5"
    )}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center shadow-lg shadow-amber-500/20">
            <Server className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">
            BeeMozaik<span className="text-amber-500">Production</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-slate-600 hover:text-amber-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link to="/login" className="text-sm font-medium text-slate-600 hover:text-slate-900">Login</Link>
          <Link to="/register" className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10">
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-medium text-slate-900"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-slate-100" />
              <div className="flex flex-col gap-4">
                <button className="w-full py-3 text-center font-medium text-slate-600">Login</button>
                <button className="w-full py-3 bg-amber-500 text-white rounded-xl font-bold">Get Started</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-amber-200/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-blue-200/20 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-100 text-amber-700 text-xs font-bold uppercase tracking-wider mb-6">
              <Zap className="w-3 h-3 fill-amber-500" />
              Next-Gen Cloud Infrastructure
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
              High-Performance <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">VPS</span> for Modern Builders.
            </h1>
            <p className="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed">
              Experience the raw power of NVMe storage, dedicated CPU threads, and a global network built for speed. Deploy in 55 seconds. Scale in one click.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/20 flex items-center justify-center gap-2 group">
                Deploy Your Server <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                View Pricing
              </button>
            </div>
            
            <div className="mt-12 flex items-center gap-8 opacity-60 grayscale">
              <div className="flex items-center gap-2 font-bold text-slate-400">99.99% Uptime</div>
              <div className="flex items-center gap-2 font-bold text-slate-400">ISO 27001</div>
              <div className="flex items-center gap-2 font-bold text-slate-400">24/7 Support</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-slate-900 rounded-2xl p-4 shadow-2xl border border-slate-800 overflow-hidden">
              <div className="flex items-center gap-2 mb-4 px-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                <div className="ml-4 text-[10px] font-mono text-slate-500">beemozaik-cloud-vps-01</div>
              </div>
              <div className="font-mono text-sm text-slate-300 space-y-2 p-4 bg-slate-950 rounded-lg">
                <div className="flex gap-2"><span className="text-amber-500">$</span> <span>beemozaik deploy --region us-east-1 --plan pro-2</span></div>
                <div className="text-slate-500">Initializing infrastructure... [DONE]</div>
                <div className="text-slate-500">Allocating NVMe storage (160GB)... [DONE]</div>
                <div className="text-slate-500">Provisioning 4 vCPUs... [DONE]</div>
                <div className="text-green-400">Server online at 142.250.190.46</div>
                <div className="flex gap-2"><span className="text-amber-500">$</span> <span className="animate-pulse">_</span></div>
              </div>
            </div>
            
            {/* Floating Stats */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-4"
            >
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <Activity className="text-green-600 w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Latency</div>
                <div className="text-xl font-bold text-slate-900">12ms</div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-4"
            >
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Database className="text-blue-600 w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Storage</div>
                <div className="text-xl font-bold text-slate-900">NVMe Gen4</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Dedicated Resources",
      description: "No noisy neighbors. Your vCPUs and RAM are 100% dedicated to your workloads, ensuring consistent performance 24/7."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "NVMe Gen4 Storage",
      description: "Up to 10x faster than standard SSDs. Perfect for database-heavy applications and high-traffic websites."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Edge Network",
      description: "Deploy in 15+ global regions. Our low-latency backbone ensures your users get the fastest experience possible."
    },
    {
      icon: <Terminal className="w-6 h-6" />,
      title: "Developer API",
      description: "Full programmatic control. Automate deployments, snapshots, and scaling with our robust REST API and CLI."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "DDoS Protection",
      description: "Enterprise-grade protection included by default. We mitigate attacks at the edge before they reach your server."
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Instant Scaling",
      description: "Traffic spike? Upgrade your plan in seconds without downtime. Our hot-plug technology handles the rest."
    }
  ];

  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-amber-600 uppercase tracking-[0.2em] mb-4">Why BeeMozaik?</h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Engineered for Performance.</h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            We don't just host servers; we provide the foundation for your next big thing. Every component is optimized for speed and reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-amber-200 transition-all hover:shadow-xl hover:shadow-amber-500/5 group"
            >
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                {f.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h4>
              <p className="text-slate-600 leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "5",
      specs: ["1 vCPU", "2GB RAM", "40GB NVMe", "2TB Bandwidth"],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "19",
      specs: ["4 vCPU", "8GB RAM", "160GB NVMe", "5TB Bandwidth", "Daily Backups"],
      popular: true,
      cta: "Deploy Now"
    },
    {
      name: "Enterprise",
      price: "49",
      specs: ["8 vCPU", "16GB RAM", "320GB NVMe", "10TB Bandwidth", "Priority Support"],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  return (
    <section id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-amber-600 uppercase tracking-[0.2em] mb-4">Pricing</h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Simple, Transparent Plans.</h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            No hidden fees. No long-term contracts. Pay only for what you use with our hourly billing options.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {plans.map((p, i) => (
            <div 
              key={i}
              className={cn(
                "relative p-8 rounded-3xl border transition-all",
                p.popular 
                  ? "bg-slate-900 border-slate-800 shadow-2xl scale-105 z-10 py-12" 
                  : "bg-white border-slate-200 hover:border-slate-300"
              )}
            >
              {p.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h4 className={cn("text-xl font-bold mb-2", p.popular ? "text-white" : "text-slate-900")}>{p.name}</h4>
                <div className="flex items-baseline gap-1">
                  <span className={cn("text-4xl font-extrabold", p.popular ? "text-white" : "text-slate-900")}>${p.price}</span>
                  <span className={cn("text-sm", p.popular ? "text-slate-400" : "text-slate-500")}>/mo</span>
                </div>
              </div>
              <ul className="space-y-4 mb-10">
                {p.specs.map((spec, si) => (
                  <li key={si} className="flex items-center gap-3">
                    <Check className={cn("w-5 h-5", p.popular ? "text-amber-500" : "text-green-500")} />
                    <span className={cn("text-sm", p.popular ? "text-slate-300" : "text-slate-600")}>{spec}</span>
                  </li>
                ))}
              </ul>
              <button className={cn(
                "w-full py-4 rounded-xl font-bold transition-all",
                p.popular 
                  ? "bg-amber-500 text-white hover:bg-amber-600 shadow-lg shadow-amber-500/20" 
                  : "bg-slate-100 text-slate-900 hover:bg-slate-200"
              )}>
                {p.cta}
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-slate-500 text-sm">
            Need more power? <a href="#" className="text-amber-600 font-bold hover:underline">Build a custom server</a> or explore our <a href="#" className="text-amber-600 font-bold hover:underline">Bare Metal options</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

const Security = () => {
  return (
    <section id="security" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white rounded-full animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white rounded-full opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold text-amber-500 uppercase tracking-[0.2em] mb-4">Security First</h2>
            <h3 className="text-4xl lg:text-5xl font-bold mb-8">Your Data, Fortified.</h3>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Security isn't an afterthought at BeeMozaik. We've built our infrastructure from the ground up with a zero-trust architecture to keep your workloads safe.
            </p>
            
            <div className="space-y-8">
              {[
                { title: "Hardware Isolation", desc: "KVM-based virtualization ensures your server is completely isolated from others on the same host." },
                { title: "Automated Patching", desc: "Optional managed updates for your OS and core services to keep vulnerabilities at bay." },
                { title: "Encrypted Backups", desc: "All snapshots and backups are encrypted at rest with AES-256 bit encryption." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0">
                    <Lock className="text-amber-500 w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">{item.title}</h4>
                    <p className="text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 p-8 rounded-3xl">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <Shield className="text-green-400 w-6 h-6" />
                  <span className="font-bold">Security Health Check</span>
                </div>
                <div className="px-3 py-1 bg-green-400/10 text-green-400 text-xs font-bold rounded-full">SECURE</div>
              </div>
              
              <div className="space-y-6">
                {[
                  { label: "Firewall Rules", status: "Active", color: "text-green-400" },
                  { label: "DDoS Mitigation", status: "Standby", color: "text-blue-400" },
                  { label: "Intrusion Detection", status: "Monitoring", color: "text-amber-400" },
                  { label: "SSL/TLS Encryption", status: "Enabled", color: "text-green-400" }
                ].map((row, i) => (
                  <div key={i} className="flex items-center justify-between border-b border-slate-700 pb-4">
                    <span className="text-slate-400">{row.label}</span>
                    <span className={cn("font-mono font-bold", row.color)}>{row.status}</span>
                  </div>
                ))}
              </div>
              
              <button className="w-full mt-8 py-4 bg-white text-slate-900 rounded-xl font-bold hover:bg-slate-100 transition-all">
                Download Compliance Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "How fast can I deploy a server?", a: "Most servers are online and accessible via SSH in under 55 seconds. Some custom ISO installations may take a bit longer." },
    { q: "Do you offer a free trial?", a: "Yes! New accounts get $50 in credit to test our platform for 30 days. No credit card required to start." },
    { q: "Can I upgrade my plan later?", a: "Absolutely. You can scale your CPU, RAM, and storage at any time from the dashboard. Upgrades are near-instant." },
    { q: "Where are your data centers located?", a: "We have locations in New York, San Francisco, London, Amsterdam, Frankfurt, Singapore, and Tokyo." }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h3>
          <p className="text-slate-600">Everything you need to know about BeeMozaik VPS.</p>
        </div>
        
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="p-6 rounded-2xl border border-slate-200 hover:border-slate-300 transition-all">
              <h4 className="text-lg font-bold text-slate-900 mb-2">{faq.q}</h4>
              <p className="text-slate-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-amber-500 rounded flex items-center justify-center">
                <Server className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-slate-900">BeeMozaik</span>
            </div>
            <p className="text-slate-500 mb-6 max-w-xs">
              High-performance cloud infrastructure for the next generation of digital builders.
            </p>
            <div className="flex gap-4">
              {/* Social Icons Placeholder */}
              <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-amber-500 transition-colors cursor-pointer">
                <Globe className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-amber-500 transition-colors cursor-pointer">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-amber-500 transition-colors cursor-pointer">
                <Users className="w-5 h-5" />
              </div>
            </div>
          </div>
          
          <div>
            <h5 className="font-bold text-slate-900 mb-6">Products</h5>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><a href="#" className="hover:text-amber-600 transition-colors">Cloud VPS</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors">Bare Metal</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors">Object Storage</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors">Managed Kubernetes</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-bold text-slate-900 mb-6">Resources</h5>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><a href="#" className="hover:text-amber-600 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors">Community Forum</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors">Status Page</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-bold text-slate-900 mb-6">Company</h5>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><a href="#" className="hover:text-amber-600 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-200 pt-10 flex flex-col md:row items-center justify-between gap-6">
          <p className="text-slate-400 text-sm">
            © 2026 BeeMozaik Production. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">All Systems Operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Home = () => (
  <>
    <Hero />
    <Features />
    <Pricing />
    <Security />
    <FAQ />
  </>
);

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 pt-20 pb-12 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200">
          <div className="text-center mb-8">
            <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-amber-500/20">
              <Server className="text-white w-7 h-7" />
            </div>
            <h1 className="text-2xl font-bold text-slate-900">Welcome Back</h1>
            <p className="text-slate-500 mt-2">Log in to manage your cloud infrastructure</p>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input 
                  type="email" 
                  placeholder="name@company.com"
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-bold text-slate-700">Password</label>
                <a href="#" className="text-xs font-bold text-amber-600 hover:underline">Forgot?</a>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <button className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10">
              Sign In
            </button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100"></div></div>
            <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-slate-400 font-bold">Or continue with</span></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-all font-medium text-slate-600">
              <Github className="w-5 h-5" /> GitHub
            </button>
            <button className="flex items-center justify-center gap-2 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-all font-medium text-slate-600">
              <Globe className="w-5 h-5" /> Google
            </button>
          </div>

          <p className="text-center mt-8 text-sm text-slate-500">
            Don't have an account? <Link to="/register" className="text-amber-600 font-bold hover:underline">Create one</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 pt-28 pb-12 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl"
      >
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-8 lg:p-12">
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-slate-900">Get Started</h1>
              <p className="text-slate-500 mt-2">Deploy your first server in minutes.</p>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                <input type="email" placeholder="name@company.com" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none" />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Password</label>
                <input type="password" placeholder="Min. 8 characters" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none" />
              </div>

              <div className="flex items-start gap-3 py-2">
                <input type="checkbox" className="mt-1 rounded border-slate-300 text-amber-500 focus:ring-amber-500" />
                <p className="text-xs text-slate-500 leading-relaxed">
                  I agree to the <a href="#" className="text-amber-600 font-bold">Terms of Service</a> and <a href="#" className="text-amber-600 font-bold">Privacy Policy</a>.
                </p>
              </div>

              <button className="w-full py-4 bg-amber-500 text-white rounded-xl font-bold hover:bg-amber-600 transition-all shadow-lg shadow-amber-500/20">
                Create Account
              </button>
            </form>

            <p className="text-center mt-8 text-sm text-slate-500">
              Already have an account? <Link to="/login" className="text-amber-600 font-bold hover:underline">Log in</Link>
            </p>
          </div>

          <div className="hidden md:block w-1/2 bg-slate-900 p-12 text-white relative overflow-hidden">
            <div className="relative z-10">
              <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center mb-8">
                <Zap className="text-white w-7 h-7" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Join the elite builders.</h2>
              <ul className="space-y-6">
                {[
                  "Free $50 credit for 30 days",
                  "Access to NVMe Gen4 storage",
                  "Global edge network",
                  "24/7 technical support"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="text-amber-500 w-5 h-5" />
                    <span className="text-slate-300 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Abstract Background */}
            <div className="absolute top-0 right-0 w-full h-full opacity-20">
              <div className="absolute top-[-20%] right-[-20%] w-[80%] h-[80%] bg-amber-500 blur-[120px] rounded-full" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-amber-100 selection:text-amber-900">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
