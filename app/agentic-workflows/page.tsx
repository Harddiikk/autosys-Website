'use client';

import Link from 'next/link';
import Script from 'next/script';

declare global {
    interface Window {
        Calendly?: {
            initPopupWidget: (options: { url: string }) => void;
        };
    }
}

export default function AgenticWorkflows() {
    const calendlyUrl = "https://calendly.com/hardik-shahpura/intro-call";

    const openCalendly = () => {
        if (window.Calendly) {
            window.Calendly.initPopupWidget({ url: calendlyUrl });
        }
    };

    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#ffffff', color: '#18181b' }}>
            <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
            <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />

            {/* Navigation */}
            <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, backgroundColor: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(12px)', borderBottom: '1px solid #e4e4e7' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Link href="/" style={{ fontSize: '20px', fontWeight: 600, letterSpacing: '-0.025em', textDecoration: 'none', color: '#18181b' }}>
                        Autosys<span className="text-gradient">AI</span>
                    </Link>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '32px', fontSize: '14px', color: '#71717a' }}>
                        <Link href="/#services" style={{ textDecoration: 'none', color: 'inherit' }}>Services</Link>
                        <Link href="/#clients" style={{ textDecoration: 'none', color: 'inherit' }}>Clients</Link>
                        <Link href="/#contact" style={{ textDecoration: 'none', color: 'inherit' }}>Contact</Link>
                        <button onClick={openCalendly} style={{ padding: '10px 20px', backgroundColor: '#18181b', color: '#fff', borderRadius: '9999px', border: 'none', cursor: 'pointer', fontWeight: 500 }}>
                            Book Demo
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <section style={{ padding: '140px 24px 80px', backgroundColor: '#faf5ff' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
                    <div style={{ width: '80px', height: '80px', borderRadius: '20px', background: 'linear-gradient(135deg, #a855f7, #7c3aed)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 32px' }}>
                        <svg style={{ width: '40px', height: '40px', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <h1 style={{ fontSize: 'clamp(36px, 6vw, 56px)', fontWeight: 600, letterSpacing: '-0.03em', marginBottom: '24px' }}>
                        Agentic AI Workflows
                    </h1>
                    <p style={{ fontSize: '20px', color: '#71717a', maxWidth: '700px', margin: '0 auto 40px', lineHeight: 1.7 }}>
                        Autonomous AI agents that execute marketing workflows end-to-end. Email, LinkedIn, Reddit automation.
                    </p>
                    <button onClick={openCalendly} style={{ padding: '16px 32px', backgroundColor: '#a855f7', color: '#fff', borderRadius: '9999px', border: 'none', fontSize: '18px', fontWeight: 500, cursor: 'pointer' }}>
                        See Agentic Workflows in Action
                    </button>
                </div>
            </section>

            {/* Services */}
            <section style={{ padding: '80px 24px', backgroundColor: '#fff' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '32px', fontWeight: 600, marginBottom: '48px', textAlign: 'center' }}>What We Offer</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                        {[
                            { title: 'Email Marketing AI Agents', desc: 'Automated outreach, follow-ups, and lead nurturing' },
                            { title: 'LinkedIn AI Agents', desc: 'Profile scraping, personalized outreach, follow-ups' },
                            { title: 'Reddit Marketing AI Agents', desc: 'Community monitoring, contextual replies, brand engagement' },
                            { title: 'Lead Research & Data Enrichment', desc: 'Automated data collection and qualification' },
                            { title: 'Multi-Step Campaign Automation', desc: 'Complex workflows executed autonomously' },
                        ].map((service, i) => (
                            <div key={i} style={{ padding: '24px', backgroundColor: '#faf5ff', borderRadius: '16px', border: '1px solid #e9d5ff' }}>
                                <h3 style={{ fontWeight: 600, marginBottom: '8px', color: '#7c3aed' }}>{service.title}</h3>
                                <p style={{ color: '#71717a', fontSize: '14px' }}>{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section style={{ padding: '80px 24px', backgroundColor: '#fafafa' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '32px', fontWeight: 600, marginBottom: '48px', textAlign: 'center' }}>Key Features</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
                        {[
                            { title: 'Fully Autonomous Agentic Workflows', desc: 'AI that thinks and acts independently.' },
                            { title: 'Personalization at Scale', desc: 'Tailored messages for thousands of leads.' },
                            { title: 'Multi-Channel Execution', desc: 'Email, LinkedIn, Reddit all in one.' },
                            { title: 'AI Decision-Making', desc: 'Smart responses based on recipient behavior.' },
                            { title: 'CRM & Database Sync', desc: 'Seamless integration with your tools.' },
                            { title: 'n8n-style Automation Logic', desc: 'Powerful workflow orchestration.' },
                        ].map((f, i) => (
                            <div key={i} style={{ padding: '24px' }}>
                                <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', color: '#a855f7' }}>{f.title}</h3>
                                <p style={{ color: '#71717a', lineHeight: 1.6 }}>{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries */}
            <section style={{ padding: '80px 24px', backgroundColor: '#fff' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '32px', fontWeight: 600, marginBottom: '32px' }}>Industries We Serve</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
                        {['SaaS & Startups', 'Agencies', 'E-commerce Brands', 'B2B Services', 'Founders & Solopreneurs'].map((ind, i) => (
                            <span key={i} style={{ padding: '10px 20px', backgroundColor: '#faf5ff', color: '#7c3aed', borderRadius: '9999px', fontSize: '14px', fontWeight: 500 }}>{ind}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '80px 24px', backgroundColor: '#18181b', color: '#fff', textAlign: 'center' }}>
                <h2 style={{ fontSize: '36px', fontWeight: 600, marginBottom: '24px' }}>Ready to Automate Marketing?</h2>
                <p style={{ color: '#a1a1aa', marginBottom: '32px', fontSize: '18px' }}>Get started with autonomous AI workflows.</p>
                <button onClick={openCalendly} style={{ padding: '16px 32px', backgroundColor: '#a855f7', color: '#fff', borderRadius: '9999px', border: 'none', fontSize: '18px', fontWeight: 500, cursor: 'pointer' }}>
                    Book a Free Demo
                </button>
            </section>

            {/* Footer */}
            <footer style={{ padding: '48px 24px', borderTop: '1px solid #f4f4f5', backgroundColor: '#fafafa' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
                    <Link href="/" style={{ fontSize: '20px', fontWeight: 600, textDecoration: 'none', color: '#18181b' }}>
                        Autosys<span className="text-gradient">AI</span>
                    </Link>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '32px', fontSize: '14px', color: '#71717a' }}>
                        <Link href="/voice-ai" style={{ textDecoration: 'none', color: 'inherit' }}>Voice AI</Link>
                        <Link href="/agentic-workflows" style={{ textDecoration: 'none', color: 'inherit' }}>Agentic AI</Link>
                        <Link href="/chatbots" style={{ textDecoration: 'none', color: 'inherit' }}>Chatbots</Link>
                    </div>
                    <div style={{ fontSize: '14px', color: '#a1a1aa' }}>© {new Date().getFullYear()} Autosys AI</div>
                </div>
            </footer>
        </div>
    );
}
