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

export default function VoiceAI() {
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
            <section style={{ padding: '140px 24px 80px', backgroundColor: '#eff6ff' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
                    <div style={{ width: '80px', height: '80px', borderRadius: '20px', background: 'linear-gradient(135deg, #3b82f6, #2563eb)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 32px' }}>
                        <svg style={{ width: '40px', height: '40px', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                        </svg>
                    </div>
                    <h1 style={{ fontSize: 'clamp(36px, 6vw, 56px)', fontWeight: 600, letterSpacing: '-0.03em', marginBottom: '24px' }}>
                        Voice AI Agents
                    </h1>
                    <p style={{ fontSize: '20px', color: '#71717a', maxWidth: '700px', margin: '0 auto 40px', lineHeight: 1.7 }}>
                        Human-like AI callers that sell, support, and follow up—24/7. Perfect for sales, appointments, and customer support.
                    </p>
                    <button onClick={openCalendly} style={{ padding: '16px 32px', backgroundColor: '#3b82f6', color: '#fff', borderRadius: '9999px', border: 'none', fontSize: '18px', fontWeight: 500, cursor: 'pointer' }}>
                        Schedule a Voice AI Demo
                    </button>
                </div>
            </section>

            {/* Services */}
            <section style={{ padding: '80px 24px', backgroundColor: '#fff' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '32px', fontWeight: 600, marginBottom: '48px', textAlign: 'center' }}>What We Offer</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                        {['Outbound Sales & Cold Calling', 'Lead Qualification Calls', 'Appointment Booking & Calendar Sync', 'Customer Support & FAQ Calls', 'Surveys, Feedback & Follow-ups', 'Renewals, Collections & Re-engagement'].map((service, i) => (
                            <div key={i} style={{ padding: '24px', backgroundColor: '#f8fafc', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                                <span style={{ color: '#3b82f6', fontSize: '20px', marginRight: '12px' }}>✓</span>
                                <span style={{ fontWeight: 500 }}>{service}</span>
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
                            { title: '24/7 AI Voice Availability', desc: 'Never miss a call. Your AI agents work around the clock.' },
                            { title: 'Natural, Human-Like Conversations', desc: 'Advanced AI that sounds and responds naturally.' },
                            { title: 'Smart Call Control', desc: 'Auto-hangup on "not interested" to save time.' },
                            { title: 'Multi-Language Support', desc: 'Speak to customers in their preferred language.' },
                            { title: 'CRM & Tool Integrations', desc: 'Seamless sync with your existing tools.' },
                            { title: 'Real-Time Analytics Dashboard', desc: 'Monitor performance and insights live.' },
                        ].map((f, i) => (
                            <div key={i} style={{ padding: '24px' }}>
                                <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px', color: '#3b82f6' }}>{f.title}</h3>
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
                        {['Real Estate', 'Healthcare', 'Finance & Insurance', 'E-commerce & D2C', 'Hospitality & Travel', 'Service Businesses'].map((ind, i) => (
                            <span key={i} style={{ padding: '10px 20px', backgroundColor: '#eff6ff', color: '#3b82f6', borderRadius: '9999px', fontSize: '14px', fontWeight: 500 }}>{ind}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '80px 24px', backgroundColor: '#18181b', color: '#fff', textAlign: 'center' }}>
                <h2 style={{ fontSize: '36px', fontWeight: 600, marginBottom: '24px' }}>Ready to Deploy Voice AI?</h2>
                <p style={{ color: '#a1a1aa', marginBottom: '32px', fontSize: '18px' }}>Get started with a personalized demo today.</p>
                <button onClick={openCalendly} style={{ padding: '16px 32px', backgroundColor: '#3b82f6', color: '#fff', borderRadius: '9999px', border: 'none', fontSize: '18px', fontWeight: 500, cursor: 'pointer' }}>
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
