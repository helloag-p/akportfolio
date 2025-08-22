import React from 'react';
import { ArrowRight, Mail, Github, Linkedin, Instagram, Play, Menu, X, ExternalLink, ChevronRight } from "lucide-react";
import { Button } from "../Component/ui/Button";
import { Badge } from "../Component/ui/Badge";
import { Card, CardContent } from "../Component/ui/Card";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../lib/utils"
import * as Tabs from "@radix-ui/react-tabs";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "../Component/ui/tabs";
import { Link } from 'react-router-dom';
import GlobeBackground from './GlobalBg';
import emailjs from '@emailjs/browser';

import { Toaster, toast } from 'sonner';

const Heropage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [isScrolled, setIsScrolled] = useState(false);
    const formRef = useRef();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const sections = ["home", "work", "about", "contact"];
                    const scrollPosition = window.scrollY + 100;

                    for (const section of sections) {
                        const element = document.getElementById(section);
                        if (element) {
                            const offsetTop = element.offsetTop;
                            const offsetHeight = element.offsetHeight;

                            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                                setActiveSection(section);
                                break;
                            }
                        }
                    }
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await emailjs.sendForm(
                'service_eapnshd', // Replace with your EmailJS service ID
                'template_ohg6j26', // Replace with your EmailJS template ID
                formRef.current,
                '_FwN9x8MJE6KuTaaO' // Replace with your EmailJS public key
            );

            toast.success('Message sent successfully!');
            formRef.current.reset();
        } catch (error) {
            toast.error('Failed to send message. Please try again.');
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    const videosRef = useRef([]);

    const handlePlay = (index) => {
       videosRef.current.forEach((video, i) => {
          if (i !== index && video && !video.paused) {
           video.pause();
       }
       });
      };

    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Soft Radial Gradient Background */}
            <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_60%_40%,rgba(120,120,255,0.10),transparent_70%)]" />
            {/* Subtle SVG Dots Pattern Overlay */}
            <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden="true">
                <svg width="100%" height="100%">
                    <defs>
                        <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                            <circle cx="1" cy="1" r="1.5" fill="#a3a3a3" fillOpacity="0.10" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#dots)" />
                </svg>
            </div>
            {/* Faint Grid Pattern Overlay */}
            <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(90deg,rgba(120,120,255,0.04)_1px,transparent_1px),linear-gradient(180deg,rgba(120,120,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" aria-hidden="true" />
            {/* Large Blurred Blob for Depth */}
            <div className="pointer-events-none fixed -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-purple-400 opacity-20 blur-3xl -z-10" aria-hidden="true" />
            <main className="pt-16 relative z-10">
                <section id="home" className="min-h-screen flex items-center">
                    <div className="container mx-auto px-4 py-20">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="space-y-6"
                            >
                                <Badge className="bg-primary/10 text-primary">
                                    Available for freelance
                                </Badge>
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                                    <span className="block">Video Editor &</span>
                                    <span className="block gradient-text">Videographer</span>
                                </h1>
                                <p className="text-lg text-muted-foreground max-w-lg">
                                    I create compelling visual stories and design intuitive user experiences that engage and inspire.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a href="#work" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                                        View My Work <ArrowRight className="ml-2 h-4 w-4" />
                                    </a>
                                    <a href="#contact" size="lg" variant="outline">
                                        Get in Touch
                                    </a>
                                </div>
                                <div className="flex gap-4 pt-4">
                                    <a href="https://www.linkedin.com/in/abhishek-kumar-b77b91288/" className="text-muted-foreground hover:text-primary transition-colors">
                                        <Linkedin className="h-5 w-5" />
                                    </a>
                                    <a href="https://www.instagram.com/abhishek._.075/" className="text-muted-foreground hover:text-primary transition-colors">
                                        <Instagram className="h-5 w-5" />
                                    </a>
                                </div>
                            </motion.div>
                    
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl"
                            >
                                {/* Background Glow/Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-black to-indigo-500 opacity-25 blur-xl z-0" />

                                {/* Image Layer */}
                                <img
                                    src="/ak.jpg"
                                    alt="Abhishek Kumar - Video Editor"
                                    className="relative z-10 w-full h-full object-cover rounded-3xl border-4 border-white/80 shadow-2xl ring-4 ring-purple-400/30 transition-transform duration-300 hover:scale-105 hover:brightness-110"
                                    style={{ boxShadow: "0 0 48px 8px rgba(128,0,255,0.18), 0 4px 32px 0 rgba(0,0,0,0.10)" }}
                                />
                            </motion.div>
                        </div>
                    </div>
                </section>
                <div className="flex justify-center py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative rounded-3xl overflow-hidden shadow-2xl max-w-3xl w-full flex justify-center items-center border-4 border-yellow-400/80 bg-gradient-to-br from-purple-600/20 via-black/60 to-indigo-500/20 p-4"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-black to-indigo-500 opacity-25 blur-xl z-0" />
        <video
          ref={(el) => (videosRef.current[0] = el)}
          autoPlay
          loop
          controls
          controlsList="nodownload"
          playsInline
          onPlay={() => handlePlay(0)}
          className="relative z-10 w-full h-full object-cover rounded-2xl transition-transform duration-500 hover:scale-105 shadow-xl"
        >
          <source
            src="https://res.cloudinary.com/dfpshm02e/video/upload/v1755878850/lv_0_20250528001613_swa1oj.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </motion.div>
    </div>
                <div className="flex justify-center py-12">
                    <div className="bg-gradient-to-br from-yellow-900/60 via-black/80 to-yellow-700/40 rounded-2xl shadow-2xl p-8 w-full max-w-3xl flex flex-col items-center border border-yellow-900/30">
                        <img
                            src="/content.jpg"
                            alt="Contents of Video Editor"
                            className="max-w-full h-auto rounded-2xl shadow-2xl border-4 border-white/70 ring-4 ring-yellow-400/40 transition-transform duration-300 hover:scale-105 hover:brightness-110"
                            style={{ boxShadow: "0 0 32px 8px rgba(255, 215, 0, 0.25)" }}
                        />
                    </div>
                </div>
                
                <div className="flex justify-center py-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-gradient-to-br from-purple-500/10 via-yellow-900/10 to-yellow-700/10 rounded-2xl shadow-2xl p-8 w-full max-w-xl flex flex-col items-center border-4 border-purple-500/40"
                    >
                        <img
                            src="whychoose.jpg"
                            alt="Skills - Why Choose Me"
                            className="max-w-full h-auto rounded-xl shadow-lg border-4 border-purple-500/20"
                        />
                        <div className="mt-6 text-center">
                            <h3 className="text-xl font-semibold mb-2 text-purple-700">Why Choose Me?</h3>
                            <p className="text-muted-foreground text-base">Skilled in both video editing and videography, I bring a unique blend of creativity and technical expertise to every project.</p>
                        </div>
                    </motion.div>
                </div>
                <section id="work" className="py-20 md:py-32">
                    <div className="container">
                        <WorkShowcase videosRef={videosRef} handlePlay={handlePlay}  />
                    </div>
                </section>
                <PricingPackages />
                
                <section id="about" className="py-24 md:py-32 bg-[#0b0b0c] text-white relative">
  {/* Glow Background */}
  <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_20%,rgba(0,255,128,0.06),transparent_60%)]" />

  <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-10 items-start">
    
    {/* === Left Column (4/12) === */}
    <div className="lg:col-span-4 flex flex-col items-center  text-center  space-y-4">
      <div className="relative w-40 h-40 rounded-full  overflow-hidden border-4 border-green-500 shadow-lg">
        <img src="/me.jpg" alt="Suryansh Srivastava" className="w-full h-full object-cover" />
      </div>
      <div>
        <h2 className="text-2xl font-bold text-white">Abhishek Kumar</h2>
        <p className="text-green-400 font-medium text-sm mt-1">Video Editor · Videographer</p>
        <p className="text-gray-400 text-xs mt-1">BTech in Electrical Engineering, MMMUT · Gorakhpur</p>
      </div>
      <a
        href="https://drive.google.com/file/d/1FvT9YAOHmWipal-yNaC8rVTMWuEkVWVi/view?usp=drivesdk"
        target="_blank"
        className="inline-flex items-center mt-4 px-5 py-2.5 bg-green-500 hover:bg-green-600 text-white font-medium rounded-md shadow transition text-sm"
      >
        Resume
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 13l-5 5m0 0l-5-5m5 5V6" />
        </svg>
      </a>
    </div>

    {/* === Right Column (8/12) === */}
    <div className="lg:col-span-8 grid md:grid-cols-2 gap-6">
      
      {/* About Me */}
      <div className="bg-[#131313] p-6 rounded-xl border border-[#2a2a2a] shadow-md h-full">
        <h3 className="text-md font-semibold text-green-400 mb-2">👋 About Me</h3>
        <p className="text-sm text-gray-300 leading-relaxed">
          I’m a passionate motion designer blending cinematic visuals with compelling storytelling.
          I aim to craft edits that move people — emotionally and visually — combining design thinking with technical edge.
        </p>
      </div>

      {/* Tools & Skills */}
      <div className="bg-[#131313] p-6 rounded-xl border border-[#2a2a2a] shadow-md h-full">
        <h3 className="text-md font-semibold text-green-400 mb-3">🛠 Tools I Use</h3>
        <ul className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm text-gray-300">
          {[
            ["Premiere Pro", 3],
            ["After Effects", 4],
            ["Capcut", 5],
            ["Photoshop", 4],
            ["Canva", 3],
          ].map(([tool, level], i) => (
            <li key={i}>
              <div className="flex justify-between items-center">
                <span>{tool}</span>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className={`w-2 h-2 rounded-full ${j < level ? "bg-green-400" : "bg-gray-600"}`} />
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Experiences */}
      <div className="md:col-span-2 bg-[#131313] p-6 rounded-xl border border-[#2a2a2a] shadow-md">
        <h3 className="text-md font-semibold text-green-400 mb-3">🎬 Experiences</h3>
        <div className="space-y-4 text-sm text-gray-300">
          {[
            {
              title: "Executive Member",
              org: "SAE Collegiate, MMMUT",
              time: "2023–Present",
              desc: "Produced official video for TECHSRIJAN. Improved reach through storytelling."
            },
            {
              title: "Executive Member",
              org: "EEL, MMMUT",
              time: "2023–Present",
              desc: "Designed promotional content for Fest Electra. Amplified digital presence."
            }
          ].map((item, i) => (
            <div key={i}>
              <p className="text-white font-semibold">{item.title} – <span className="text-green-400">{item.org}</span> <span className="text-xs text-gray-500">{item.time}</span></p>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>





                {/* <section id="about" className="relative py-20 md:py-32 overflow-hidden">
  <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_50%,rgba(120,120,255,0.1),transparent_50%)]"></div>

  <div className="container mx-auto px-4">
    <div className="grid gap-16 lg:grid-cols-2 items-center">

      {/* Image Section */}
      {/* <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex justify-center"
      >
        <div className="relative w-full max-w-md">
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary/40 to-purple-600/40 blur-xl opacity-50"></div>
          <img
            src="/ak.jpg?height=500&width=500"
            alt="About me"
            className="relative w-full h-auto object-cover rounded-3xl shadow-xl"
          />
        </div>
      </motion.div> */}

      {/* Text Content Section */}
      {/* <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-semibold tracking-wider mb-4">
          About Me
        </span>

        <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight text-white">
          Crafting Visual Stories & Intuitive Experiences
        </h2>

        <div className="text-muted-foreground space-y-4 text-base leading-relaxed">
          <p>
            I'm a passionate video editor and UI/UX designer with over 5 years of experience creating compelling
            visual content and intuitive digital experiences.
          </p>
          <p>
            My background in film and digital media, combined with my expertise in user experience design,
            allows me to approach projects with a unique perspective that balances aesthetic appeal with
            functional design.
          </p>
          <p>
            I believe in the power of storytelling through visuals and creating interfaces that feel natural and
            effortless to users.
          </p>
        </div>

        {/* Skills */}
        {/* <div className="mt-10 grid gap-6 sm:grid-cols-2"> */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 shadow-sm backdrop-blur-sm">
            <h3 className="text-lg font-semibold mb-3 text-white">🎬 Video Editing</h3>
            <ul className="space-y-2 text-m text-muted-foreground">
              {["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Motion Graphics", "Color Grading"].map((item, i) => (
                <li key={i} className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-primary before:rounded-full">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {/* <div className="bg-white/5 border border-white/10 rounded-xl p-5 shadow-sm backdrop-blur-sm">
            <h3 className="text-lg font-semibold mb-3 text-white">🧠 Videographer</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["Figma", "Adobe XD", "User Research", "Wireframing", "Prototyping"].map((item, i) => (
                <li key={i} className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-primary before:rounded-full">
                  {item}
                </li>
              ))}
            </ul>
          </div> */}
        {/* </div> */}

        {/* Resume Button */}
        {/* <div className="mt-10">
          <Button asChild>
            <Link href="/resume.pdf" target="_blank">
              Download Resume <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div> */}
      {/* </motion.div> */}
    {/* </div>
  </div> */}
{/* // </section> */} 


                {/* <section id="contact" className="py-20 md:py-32">
                    <div className="container">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mx-auto max-w-2xl text-center"
                        >
                            <Badge className="mb-3">Contact</Badge>
                            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Let's Work Together</h2>
                            <p className="mb-8 text-muted-foreground">
                                I'm currently available for freelance projects and collaborations. Get in touch to discuss how we can
                                create something amazing.
                            </p>

                            <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-xl">
                                <CardContent className="grid gap-6 p-6 sm:p-8">
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <div className="rounded-lg border bg-card p-4 text-center shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">
                                            <Mail className="mx-auto mb-2 h-6 w-6" />
                                            <h3 className="font-medium">Email Me</h3>
                                            <p className="mt-1 text-sm text-muted-foreground">abhishekkumardev57@gmail.com</p>
                                        </div>
                                        <div className="rounded-lg border bg-card p-4 text-center shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">
                                            <Instagram className="mx-auto mb-2 h-6 w-6" />
                                            <h3 className="font-medium">Follow Me</h3>
                                            <p className="mt-1 text-sm text-muted-foreground">@abhishek._.075</p>
                                        </div>
                                    </div>

                                    <div className="relative overflow-hidden rounded-lg border">
                                        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10"></div>
                                        <div className="relative p-6 sm:p-8">
                                            <h3 className="mb-4 text-xl font-semibold">Send a Message</h3>
                                            <form ref={formRef} onSubmit={handleSubmit} className="grid gap-4">
                                                <div className="grid gap-4 sm:grid-cols-2">
                                                    <div className="grid gap-2">
                                                        <label htmlFor="name" className="text-sm font-medium">
                                                            Name
                                                        </label>
                                                        <input
                                                            id="name"
                                                            name="user_name"
                                                            required
                                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                                            placeholder="Your name"
                                                        />
                                                    </div>
                                                    <div className="grid gap-2">
                                                        <label htmlFor="email" className="text-sm font-medium">
                                                            Email
                                                        </label>
                                                        <input
                                                            id="email"
                                                            name="user_email"
                                                            type="email"
                                                            required
                                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                                            placeholder="Your email"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="grid gap-2">
                                                    <label htmlFor="message" className="text-sm font-medium">
                                                        Message
                                                    </label>
                                                    <textarea
                                                        id="message"
                                                        name="message"
                                                        required
                                                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                                        placeholder="Your message"
                                                    />
                                                </div>
                                                <Button
                                                    type="submit"
                                                    size="lg"
                                                    className="w-full"
                                                    disabled={loading}
                                                >
                                                    {loading ? (
                                                        <div className="flex items-center gap-2">
                                                            <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></div>
                                                            Sending...
                                                        </div>
                                                    ) : (
                                                        'Send Message'
                                                    )}
                                                </Button>
                                            </form>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                    <Toaster position="top-right" />
                </section> */}
                <section id="contact" className="py-24 md:py-32 bg-[#0d0d0d] text-white relative">
  <div className="container">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-3xl text-center"
    >
      <Badge className="mb-4">Contact</Badge>
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight text-green-400">
        Let's Work Together
      </h2>
      <p className="mb-10 text-sm sm:text-base text-gray-400">
        Available for freelance gigs, internships, and collaborations. Let’s build something great together!
      </p>

      <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl">
        <CardContent className="grid gap-8 p-8 sm:p-10">

          {/* Contact Info */}
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                icon: <Mail className="mx-auto mb-2 h-6 w-6 text-green-400" />,
                label: 'Email Me',
                value: 'abhishekkumardev57@gmail.com'
              },
              {
                icon: <Instagram className="mx-auto mb-2 h-6 w-6 text-pink-400" />,
                label: 'Follow Me',
                value: '@abhishek._.075'
              }
            ].map((info, idx) => (
              <div
                key={idx}
                className="rounded-xl border bg-[#1a1a1a] p-5 text-center shadow-sm hover:shadow-lg transition hover:border-green-400 hover:bg-[#222]"
              >
                {info.icon}
                <h3 className="font-semibold text-white">{info.label}</h3>
                <p className="text-sm text-gray-400 mt-1">{info.value}</p>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="relative overflow-hidden rounded-xl border border-[#2a2a2a] bg-[#121212]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,255,128,0.05),transparent_60%)] pointer-events-none" />
            <div className="relative p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-green-400 mb-6">📩 Send a Message</h3>

              <form ref={formRef} onSubmit={handleSubmit} className="grid gap-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="grid gap-2 text-left">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                    <input
                      id="name"
                      name="user_name"
                      required
                      placeholder="Your name"
                      className="rounded-md bg-[#1b1b1b] border border-gray-600 px-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                  </div>
                  <div className="grid gap-2 text-left">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                    <input
                      id="email"
                      name="user_email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="rounded-md bg-[#1b1b1b] border border-gray-600 px-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                  </div>
                </div>
                <div className="grid gap-2 text-left">
                  <label htmlFor="message" className="text-sm font-medium text-gray-300">Phone Number</label>
                  <input
                    id="phone"
                    name="user_phone"
                    rows="1"
                    required
                    placeholder="Your phone number"
                    className="rounded-md bg-[#1b1b1b] border border-gray-600 px-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                </div>
                <div className="grid gap-2 text-left">
                  <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    placeholder="Tell me about your project..."
                    className="rounded-md bg-[#1b1b1b] border border-gray-600 px-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-green-500 hover:bg-green-600 transition"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </Button>
              </form>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  </div>

  <Toaster position="top-right" />
</section>


            </main>
        </div>
    );
};

// Work showcase data and component
const workData = [
  // Long Videos
  {
    type: "Long Video",
    title: "Movie Review",
    // description: "A full-length cinematic aftermovie for a major event.",
    media: "https://res.cloudinary.com/dfpshm02e/video/upload/v1755878830/SSYouTube.online_Doctor_Strange_Third_Eye_Explained_in_Hindi_1080p_mpzywq.mp4",
    previewType: "video",
  },
  {
    type: "Long Video",
    title: "Event Aftermovie",
    // description: "A documentary exploring unique stories.",
    media: "https://res.cloudinary.com/dfpshm02e/video/upload/v1755879808/VID-20250630-WA0000_ylfzqn.mp4",
    previewType: "video",
  },
  // Shorts
  {
    type: "Shorts",
    title: "Short Video 1",
    // description: "A quick, engaging vertical short.",
    media: "https://res.cloudinary.com/dfpshm02e/video/upload/v1755878802/lv_0_20250407134817_nwkwjr.mp4",
    previewType: "video",
  },
  {
    type: "Shorts",
    title: "Short Video 2",
    // description: "Another creative short for social media.",
    media: "https://res.cloudinary.com/dfpshm02e/video/upload/v1755878815/lv_0_20250430225617_b6icpy.mp4",
    previewType: "video",
  },
  {
    type: "Shorts",
    title: "Short Video 3",
    // description: "A trending short with cinematic effects.",
    media: "https://res.cloudinary.com/dfpshm02e/video/upload/v1755878718/lv_0_20250420163425_ovwz5l.mp4",
    previewType: "video",
  },
  // Cinematography
  {
    type: "Cinematography",
    title: "Cinematic Scene 1",
    // description: "A visually stunning scene shot with professional equipment.",
    media: "https://res.cloudinary.com/dfpshm02e/video/upload/v1755878736/lv_0_20250521023647_vtaf7y.mp4",
    previewType: "video",
  },
  {
    type: "Cinematography",
    title: "Cinematic Scene 2",
    // description: "Capturing the essence of storytelling through visuals.",
    media: "https://res.cloudinary.com/dfpshm02e/video/upload/v1755878733/lv_0_20250330151242_g7qz6x.mp4",
    previewType: "video",
  },
  {
    type: "Cinematography",
    title: "Cinematic Scene 3",
    // description: "A breathtaking timelapse of nature.",
    media: "https://res.cloudinary.com/dfpshm02e/video/upload/v1755878732/lv_0_20250526160450_v8iwiy.mp4",
    previewType: "video",
  },
  {
    type: "Cinematography",
    title: "Cinematic Scene 4",
    // description: "Exploring the city with cinematic shots.",
    media: "https://res.cloudinary.com/dfpshm02e/video/upload/v1755878718/lv_0_20250420163425_ovwz5l.mp4",
    previewType: "video",
  },
  // Thumbnails
  {
    type: "Thumbnails",
    title: "YouTube Thumbnail 1",
    // description: "A vibrant thumbnail for maximum clicks.",
    media: "https://res.cloudinary.com/dfpshm02e/image/upload/v1755878714/20230212_224703_wkd2o4.png",
    previewType: "image",
  },
  {
    type: "Thumbnails",
    title: "YouTube Thumbnail 2",
    // description: "A bold, cinematic thumbnail.",
    media: "https://res.cloudinary.com/dfpshm02e/image/upload/v1755878770/20230131_145753_zjfgse.png",
    previewType: "image",
  },
  {
    type: "Thumbnails",
    title: "Thumbnail 3",
    // description: "A thumbnail for a travel vlog.",
    media: "https://res.cloudinary.com/dfpshm02e/image/upload/v1755878710/20230208_115452_dkxjdc.png",
    previewType: "image",
  },
  {
    type: "Thumbnails",
    title: "Thumbnail 4",
    // description: "A tech review video thumbnail.",
    media: "https://res.cloudinary.com/ddwh4d4sn/image/upload/v1751271884/nfidnwmobbau4dlwjbjn.png",
    previewType: "image",
  },
  {
    type: "Thumbnails",
    title: "Thumbnail 5",
    // description: "A delicious cooking show thumbnail.",
    media: "https://res.cloudinary.com/dfpshm02e/image/upload/v1755878710/20230208_115452_dkxjdc.png",
    previewType: "image",
  },
  {
    type: "Thumbnails",
    title: "Thumbnail 6",
    // description: "A thumbnail for a music video.",
    media: "https://res.cloudinary.com/dfpshm02e/image/upload/v1755878710/20230208_115452_dkxjdc.png",
    previewType: "image",
  },
  {
    type: "Thumbnails",
    title: "Thumbnail 7",
    // description: "A gaming highlight video thumbnail.",
    media: "https://res.cloudinary.com/dfpshm02e/image/upload/v1755878700/20230131_103327_ys4p5n.png",
    previewType: "image",
  },
  // Banners
  {
    type: "Banners",
    title: "Youtube Banner",
    // description: "A bold, eye-catching banner design.",
    media: "https://res.cloudinary.com/dfpshm02e/image/upload/v1755878709/20221208_131808_serotk.png",
    previewType: "image",
  },
  {
    type: "Banners",
    title: "Linkedin Banner",
    // description: "A cinematic banner for a special event.",
    media: "https://res.cloudinary.com/dfpshm02e/image/upload/v1755878703/20221212_141214_g0lt3m.png",
    previewType: "image",
  },
];

const WorkShowcase = ({ videosRef, handlePlay }) => {
  // Group works by type
  const groupedWorks = workData.reduce((acc, work) => {
    acc[work.type] = acc[work.type] || [];
    acc[work.type].push(work);
    return acc;
  }, {});
  const categoryOrder = ["Long Video", "Shorts", "Cinematography", "Thumbnails", "Banners"];
  const categoryColors = {
    "Long Video": "text-green-400",
    Shorts: "text-pink-400",
    Cinematography: "text-purple-400",
    Thumbnails: "text-blue-400",
    Banners: "text-yellow-400",
  };
  // const videoRefs = useRef([]);
let globalIndex = 1;
// const handlePlay = (index) => {
//   videoRefs.current.forEach((video, i) => {
//     if (i !== index && video && !video.paused) {
//       video.pause();
//     }
//   });
// };
  const cardColors = {
    "Long Video": "from-green-600/20 to-green-400/10 border-green-400/40",
    Shorts: "from-pink-500/20 to-yellow-400/10 border-pink-400/40",
    Cinematography: "from-purple-600/20 to-indigo-600/10 border-purple-400/40",
    Thumbnails: "from-blue-400/20 to-purple-400/10 border-blue-400/40",
    Banners: "from-yellow-400/20 to-orange-400/10 border-yellow-400/40",
    default: "from-black/80 to-primary/10 border-primary/20"
  };
  return (
    <section id="work" className="py-20 md:py-32">
      <div className="container">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="inline-block px-4 py-1 mb-3 rounded-full bg-primary/10 text-primary font-semibold uppercase tracking-wider">Portfolio</span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">My Creative Works</h2>
          <p className="text-muted-foreground">A professional showcase of my cinematic and creative projects.</p>
        </div>
        {categoryOrder.map(category => (
          groupedWorks[category] && (
            <div key={category} className="mb-16">
              <h3 className={`text-2xl md:text-3xl font-extrabold mb-6 text-center tracking-tight`}>
                <span className={categoryColors[category]}>
                  {category === "Long Video" ? "Long Videos" :
                   category === "Shorts" ? "Short Videos" :
                   category === "Cinematography" ? "Cinematography Videos" :
                   category}
                </span>
              </h3>
              <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
                {groupedWorks[category].map((work,index) => {
                    const currentIndex = globalIndex++; 
                    return (
                     <div className="w-full sm:w-[48%] lg:w-[45%] xl:w-[22%]">
                    <motion.div
                    key={work.title + index}
                    whileHover={{ scale: 1.05, boxShadow: "0 8px 32px 0 rgba(80,0,120,0.25)" }}
                    className={`group bg-gradient-to-br ${cardColors[work.type] || cardColors.default} rounded-2xl shadow-xl p-5 border flex flex-col items-center transition-all duration-300 hover:shadow-2xl hover:border-primary/60`}
                  >
                    <div className="w-full aspect-video rounded-xl overflow-hidden mb-4 relative">
                      {work.previewType === "image" ? (
                        <img src={work.media} alt={work.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
                      ) : (
                        <>
                        <video ref={(el) => (videosRef.current[currentIndex] = el)}
  onPlay={() => handlePlay(currentIndex)}
                     src={work.media} controls controlsList="nodownload" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-black/60 shadow-lg">
                              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <circle cx="16" cy="16" r="16" fill="white" fillOpacity="0.15"/>
                                <polygon points="13,10 24,16 13,22" fill="white" />
                              </svg>
                            </span>
                          </div>
                        </>
                      )}
                      <div className="absolute inset-0 pointer-events-none rounded-xl ring-2 ring-primary/20 group-hover:ring-4 group-hover:ring-primary/40 transition-all duration-300" />
                    </div>
                    <h4 className="text-lg font-bold mb-1 text-primary drop-shadow-lg text-center">{work.title}</h4>
                    <p className="text-muted-foreground text-xs mb-2 text-center">{work.description}</p>
                  </motion.div>
                    </div>
                    )
                   
                })}
              </div>
            </div>
          )
        ))}
      </div>
    </section>
  );
}

function PricingPackages() {
  const packages = [
    {
      name: "Basic",
      price: "₹585",
      length: "30 seconds running time",
      features: [
        { label: "1 video", status: true },
        { label: "30 seconds running time", status: true },
        { label: "1 version", status: true },
        { label: "Content ideation", status: true },
        { label: "Script writing", status: false },
        { label: "Special effects included", status: false },
        { label: "Filming included", status: false },
        { label: "Live-model included", status: false },
        { label: "Subtitles included", status: false },
      ],
    },
    {
      name: "Standard",
      price: "₹1,570",
      length: "1 Minute Video-contact me before ordering",
      features: [
        { label: "1 video", status: true },
        { label: "10 minute running time", status: true },
        { label: "2 versions", status: true },
        { label: "Content ideation", status: true },
        { label: "Script writing", status: true },
        { label: "Special effects included", status: true },
        { label: "Filming included", status: false },
        { label: "Live-model included", status: false },
        { label: "Subtitles included", status: false },
      ],
    },
    {
      name: "Premium",
      price: "₹5,285",
      length: "Up to 2 Minutes-contact me before ordering",
      features: [
        { label: "1 video", status: true },
        { label: "Up to 15 minutes", status: true },
        { label: "3 versions", status: true },
        { label: "Content ideation", status: true },
        { label: "Script writing", status: true },
        { label: "Special effects included", status: true },
        { label: "Filming included", status: true },
        { label: "Live-model included", status: true },
        { label: "Subtitles included", status: true },
      ],
    },
  ];

  return (
   
    <section className="py-16 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-800">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-10 text-white">📦 Packages</h2>

    <Tabs.Root defaultValue="Basic" className="w-full max-w-2xl mx-auto">
      {/* Tab Switcher */}
      <Tabs.List className="flex justify-center bg-zinc-800/70 border border-zinc-700 rounded-full p-1 mb-8 shadow-md">
        {packages.map((pkg) => (
          <Tabs.Trigger
            key={pkg.name}
            value={pkg.name}
            className="flex-1 px-4 py-2 text-sm sm:text-base font-medium rounded-full text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-primary data-[state=active]:text-white data-[state=active]:shadow-md transition-all"
          >
            {pkg.name}
          </Tabs.Trigger>
        ))}
      </Tabs.List>

      {/* Package Cards */}
      {packages.map((pkg) => (
        <Tabs.Content key={pkg.name} value={pkg.name}>
          <div className="relative bg-zinc-900/70 border border-zinc-700 rounded-2xl shadow-xl p-6 sm:p-10 text-white mx-auto max-w-2xl backdrop-blur-xl transition duration-300">
            <h3 className="text-2xl text-center font-semibold mb-1">{pkg.name}</h3>
            <p className="text-3xl text-center font-bold mb-2 text-purple-300">{pkg.price}</p>
            <p className="text-sm text-center text-zinc-400 mb-6">{pkg.length}</p>

            <ul className="text-left max-w-md mx-auto space-y-3 mb-6">
              {pkg.features.map((feature, i) => (
                <li
                  key={i}
                  className={`flex items-center gap-3 text-sm ${
                    feature.status ? "text-white" : "text-zinc-500"
                  }`}
                >
                  <span
                    className={`w-5 h-5 flex items-center justify-center rounded-full ${
                      feature.status
                        ? "bg-green-500 text-white"
                        : "bg-zinc-700 text-zinc-500"
                    }`}
                  >
                    {feature.status ? (
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12l6 6 6-6" />
                      </svg>
                    )}
                  </span>
                  <span>{feature.label}</span>
                </li>
              ))}
            </ul>

            <a href="https://wa.link/3skci6" target="_blank" className="w-full flex justify-center items-center bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-primary py-2 px-6 rounded-lg text-white font-semibold transition-all shadow-lg">
              Request to Order
            </a>
          </div>
        </Tabs.Content>
      ))}
    </Tabs.Root>
  </div>
</section>

  );
}

export default Heropage;


