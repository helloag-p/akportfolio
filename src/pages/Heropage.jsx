import React from 'react';
import { ArrowRight, Mail, Github, Linkedin, Instagram, Play, Menu, X, ExternalLink, ChevronRight } from "lucide-react";
import { Button } from "../Component/ui/Button";
import { Badge } from "../Component/ui/Badge";
import { Card, CardContent } from "../Component/ui/Card";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../lib/utils"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../Component/ui/tabs";
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
                'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
                'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
                formRef.current,
                'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
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
                                    <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                                        View My Work <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                    <Button size="lg" variant="outline">
                                        Get in Touch
                                    </Button>
                                </div>
                                <div className="flex gap-4 pt-4">
                                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                        <Github className="h-5 w-5" />
                                    </a>
                                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                        <Linkedin className="h-5 w-5" />
                                    </a>
                                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
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
                                    className="relative z-10 w-full h-full object-cover rounded-3xl transition-transform duration-500 hover:scale-105"
                                />
                            </motion.div>

                        </div>
                    </div>
                </section>
                <div className="flex justify-center py-12">
                <div className="bg-gradient-to-br from-yellow-900/60 via-black/80 to-yellow-700/40 rounded-2xl shadow-2xl p-8 w-full max-w-3xl flex flex-col items-center border border-yellow-900/30">
                        <img
                            src="/content.jpg"
                            alt="Contents of Video Editor"
                            className="max-w-full h-auto rounded-xl shadow-lg border-4 border-yellow-700/40"
                        />
                    </div>
                </div>
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
                            autoPlay
                            loop
                            controls
                            playsInline
                            className="relative z-10 w-full h-full object-cover rounded-2xl transition-transform duration-500 hover:scale-105 shadow-xl"
                        >
                            <source src="main.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </motion.div>
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
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mx-auto mb-12 max-w-2xl text-center"
                        >
                            <Badge className="mb-3">Portfolio</Badge>
                            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Featured Work</h2>
                            <p className="text-muted-foreground">
                                A selection of my recent projects showcasing my skills in video editing and UI/UX design.
                            </p>
                        </motion.div>

                        <Tabs defaultValue="all" className="mb-12">
                            <div className="flex justify-center">
                                <TabsList className="grid w-full max-w-md grid-cols-3">
                                    <TabsTrigger value="all">All Projects</TabsTrigger>
                                    <TabsTrigger value="video">Video Editing</TabsTrigger>
                                    <TabsTrigger value="ui">UI/UX Design</TabsTrigger>
                                </TabsList>
                            </div>

                            <TabsContent value="all" className="mt-8">
                                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                                    <ProjectCard
                                        type="video"
                                        title="Brand Campaign"
                                        category="Video Editing"
                                        image="/placeholder.svg?height=400&width=600"
                                        description="A dynamic brand campaign video for a tech startup showcasing their innovative products."
                                        index={0}
                                    />
                                    <ProjectCard
                                        type="ui"
                                        title="Finance App Redesign"
                                        category="UI/UX Design"
                                        image="/placeholder.svg?height=400&width=600"
                                        description="Complete redesign of a finance application focusing on improved user experience and accessibility."
                                        index={1}
                                    />
                                    <ProjectCard
                                        type="video"
                                        title="Documentary Short"
                                        category="Video Editing"
                                        image="/placeholder.svg?height=400&width=600"
                                        description="An award-winning documentary short film about sustainable farming practices."
                                        index={2}
                                    />
                                    <ProjectCard
                                        type="ui"
                                        title="E-commerce Website"
                                        category="UI/UX Design"
                                        image="/placeholder.svg?height=400&width=600"
                                        description="End-to-end design for an e-commerce platform with a focus on conversion optimization."
                                        index={3}
                                    />
                                    <ProjectCard
                                        type="video"
                                        title="Music Video"
                                        category="Video Editing"
                                        image="/placeholder.svg?height=400&width=600"
                                        description="Creative music video editing for an indie band's debut single."
                                        index={4}
                                    />
                                    <ProjectCard
                                        type="ui"
                                        title="Health App"
                                        category="UI/UX Design"
                                        image="/placeholder.svg?height=400&width=600"
                                        description="User-centered design for a health tracking application with intuitive data visualization."
                                        index={5}
                                    />
                                </div>
                            </TabsContent>

                            <TabsContent value="video" className="mt-8">
                                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                                    <ProjectCard
                                        type="video"
                                        title="Brand Campaign"
                                        category="Video Editing"
                                        image="/placeholder.svg?height=400&width=600"
                                        description="A dynamic brand campaign video for a tech startup showcasing their innovative products."
                                        index={0}
                                    />
                                    <ProjectCard
                                        type="video"
                                        title="Documentary Short"
                                        category="Video Editing"
                                        image="/placeholder.svg?height=400&width=600"
                                        description="An award-winning documentary short film about sustainable farming practices."
                                        index={1}
                                    />
                                    <ProjectCard
                                        type="video"
                                        title="Music Video"
                                        category="Video Editing"
                                        image="/placeholder.svg?height=400&width=600"
                                        description="Creative music video editing for an indie band's debut single."
                                        index={2}
                                    />
                                </div>
                            </TabsContent>

                            <TabsContent value="ui" className="mt-8">
                                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                                    <ProjectCard
                                        type="ui"
                                        title="Finance App Redesign"
                                        category="UI/UX Design"
                                        image="/placeholder.svg?height=400&width=600"
                                        description="Complete redesign of a finance application focusing on improved user experience and accessibility."
                                        index={0}
                                    />
                                    <ProjectCard
                                        type="ui"
                                        title="E-commerce Website"
                                        category="UI/UX Design"
                                        image="/placeholder.svg?height=400&width=600"
                                        description="End-to-end design for an e-commerce platform with a focus on conversion optimization."
                                        index={1}
                                    />
                                    <ProjectCard
                                        type="ui"
                                        title="Health App"
                                        category="UI/UX Design"
                                        image="/placeholder.svg?height=400&width=600"
                                        description="User-centered design for a health tracking application with intuitive data visualization."
                                        index={2}

                                    />
                                </div>
                            </TabsContent>
                        </Tabs>

                        <div className="text-center">
                            <Button variant="outline" size="lg">
                                View All Projects <ChevronRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </section>
                <section id="about" className="relative py-20 md:py-32">
                    <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_50%,rgba(120,120,255,0.1),transparent_50%)]"></div>
                    <div className="container">
                        <div className="grid gap-12 lg:grid-cols-2">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="flex items-center justify-center"
                            >
                                <div className="relative">
                                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/50 to-purple-500/50 opacity-70 blur-xl"></div>
                                    <img
                                        src="/placeholder.svg?height=500&width=500"
                                        width={500}
                                        height={500}
                                        alt="About me"
                                        className="relative rounded-2xl object-cover"
                                    />
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <Badge className="mb-3">About Me</Badge>
                                <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
                                    Crafting Visual Stories & Intuitive Experiences
                                </h2>
                                <div className="space-y-4 text-muted-foreground">
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

                                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                                    <div className="rounded-lg border bg-card p-4 shadow-sm">
                                        <h3 className="mb-2 font-semibold">Video Editing</h3>
                                        <ul className="space-y-1 text-sm text-muted-foreground">
                                            <li className="flex items-center gap-2">
                                                <Badge variant="outline" className="h-1.5 w-1.5 rounded-full p-0" />
                                                Adobe Premiere Pro
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <Badge variant="outline" className="h-1.5 w-1.5 rounded-full p-0" />
                                                After Effects
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <Badge variant="outline" className="h-1.5 w-1.5 rounded-full p-0" />
                                                DaVinci Resolve
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <Badge variant="outline" className="h-1.5 w-1.5 rounded-full p-0" />
                                                Motion Graphics
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <Badge variant="outline" className="h-1.5 w-1.5 rounded-full p-0" />
                                                Color Grading
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="rounded-lg border bg-card p-4 shadow-sm">
                                        <h3 className="mb-2 font-semibold">UI/UX Design</h3>
                                        <ul className="space-y-1 text-sm text-muted-foreground">
                                            <li className="flex items-center gap-2">
                                                <Badge variant="outline" className="h-1.5 w-1.5 rounded-full p-0" />
                                                Figma
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <Badge variant="outline" className="h-1.5 w-1.5 rounded-full p-0" />
                                                Adobe XD
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <Badge variant="outline" className="h-1.5 w-1.5 rounded-full p-0" />
                                                User Research
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <Badge variant="outline" className="h-1.5 w-1.5 rounded-full p-0" />
                                                Wireframing
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <Badge variant="outline" className="h-1.5 w-1.5 rounded-full p-0" />
                                                Prototyping
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <Button asChild>
                                        <Link href="/resume.pdf" target="_blank">
                                            Download Resume <ExternalLink className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <section id="contact" className="py-20 md:py-32">
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
                                            <p className="mt-1 text-sm text-muted-foreground">abhishekkumar@gmail.com</p>
                                        </div>
                                        <div className="rounded-lg border bg-card p-4 text-center shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">
                                            <Instagram className="mx-auto mb-2 h-6 w-6" />
                                            <h3 className="font-medium">Follow Me</h3>
                                            <p className="mt-1 text-sm text-muted-foreground">@abhishekkumar</p>
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
                </section>
            </main>
        </div>
    );
};

// Project Card Component
// function ProjectCard({ type, title, category, image, description, index }) {
//     return (
//         <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             whileHover={{ y: -5 }}
//         >
//             <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg">
//                 <div className="relative aspect-video overflow-hidden">
//                     <img
//                         src={image || "/placeholder.svg"}
//                         width={600}
//                         height={400}
//                         alt={title}
//                         className="object-cover transition-transform duration-500 group-hover:scale-105"
//                     />
//                     <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
//                         {type === "video" ? (
//                             <Button variant="secondary" size="icon" className="h-12 w-12 rounded-full">
//                                 <Play className="h-6 w-6" />
//                             </Button>
//                         ) : (
//                             <Button variant="secondary">View Project</Button>
//                         )}
//                     </div>
//                 </div>
//                 <CardContent className="p-4">
//                     <Badge className="mb-2" variant={type === "video" ? "default" : "secondary"}>
//                         {category}
//                     </Badge>
//                     <h3 className="mb-2 font-bold">{title}</h3>
//                     <p className="text-sm text-muted-foreground">{description}</p>
//                 </CardContent>
//             </Card>
//         </motion.div>
//     );
// }
function ProjectCard({ type, title, category, image, description, index, variant = "gradient" }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
        >
            <Card
                variant={variant}
                className="group overflow-hidden transition-all duration-300 hover:shadow-2xl"
            >
                <div className="relative aspect-video overflow-hidden rounded-xl">
                    {/* Background gradient layer */}
                    <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-pink-500/30" />

                    {/* Image Layer */}
                    <img
                        src={image || "/placeholder.svg"}
                        width={600}
                        height={400}
                        alt={title}
                        className="object-cover w-full h-full relative z-10 opacity-90 transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/60 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                        {type === "video" ? (
                            <Button variant="secondary" size="icon" className="h-12 w-12 rounded-full">
                                <Play className="h-6 w-6" />
                            </Button>
                        ) : (
                            <Button variant="secondary">View Project</Button>
                        )}
                    </div>
                </div>

                {/* Gradient can also be applied below here */}
                <CardContent className="p-4" variant="gradient">
                    <Badge className="mb-2" variant={type === "video" ? "default" : "secondary"}>
                        {category}
                    </Badge>
                    <h3 className="mb-2 font-bold text-lg">{title}</h3>
                    <p className="text-sm text-muted-foreground">{description}</p>
                </CardContent>
            </Card>
        </motion.div>
    );
}



export default Heropage;


