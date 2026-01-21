'use client';

import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';

declare global {
    interface Window {
        Calendly?: {
            initPopupWidget: (options: { url: string }) => void;
        };
    }
}

export default function Home() {
    const calendlyUrl = "https://calendly.com/hardik-shahpura/intro-call";

    const openCalendly = () => {
        if (window.Calendly) {
            window.Calendly.initPopupWidget({ url: calendlyUrl });
        }
    };

    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#ffffff', color: '#18181b' }}>
            {/* Calendly CSS & Script */}
            <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
            <Script
                src="https://assets.calendly.com/assets/external/widget.js"
                strategy="lazyOnload"
            />

            {/* Navigation */}
            <nav style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 50,
                backgroundColor: 'rgba(255,255,255,0.9)',
                backdropFilter: 'blur(12px)',
                borderBottom: '1px solid #e4e4e7'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Link href="/" style={{ fontSize: '20px', fontWeight: 600, letterSpacing: '-0.025em', textDecoration: 'none', color: '#18181b' }}>
                        Autosys<span className="text-gradient">AI</span>
                    </Link>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '32px', fontSize: '14px', color: '#71717a' }}>
                        <Link href="#services" style={{ textDecoration: 'none', color: 'inherit' }}>Services</Link>
                        <Link href="#clients" style={{ textDecoration: 'none', color: 'inherit' }}>Clients</Link>
                        <Link href="#contact" style={{ textDecoration: 'none', color: 'inherit' }}>Contact</Link>
                        <button
                            onClick={openCalendly}
                            style={{
                                padding: '10px 20px',
                                backgroundColor: '#18181b',
                                color: '#fff',
                                borderRadius: '9999px',
                                border: 'none',
                                cursor: 'pointer',
                                fontWeight: 500
                            }}
                        >
                            Book Demo
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '120px 24px 80px',
                backgroundColor: '#ffffff'
            }}>
                <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <div className="animate-fade-in" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '6px 16px',
                        borderRadius: '9999px',
                        backgroundColor: '#f4f4f5',
                        color: '#52525b',
                        fontSize: '14px',
                        marginBottom: '32px'
                    }}>
                        <span style={{ width: '8px', height: '8px', backgroundColor: '#22c55e', borderRadius: '50%' }}></span>
                        AI-Powered Automation
                    </div>

                    <h1 className="animate-fade-in-delay-1" style={{
                        fontSize: 'clamp(40px, 8vw, 72px)',
                        fontWeight: 600,
                        letterSpacing: '-0.03em',
                        lineHeight: 1.1,
                        marginBottom: '24px'
                    }}>
                        Automating Conversations.
                        <br />
                        <span className="text-gradient">Scaling Growth.</span>
                    </h1>

                    <p className="animate-fade-in-delay-2" style={{
                        fontSize: 'clamp(18px, 3vw, 24px)',
                        color: '#71717a',
                        maxWidth: '640px',
                        margin: '0 auto 48px',
                        lineHeight: 1.6
                    }}>
                        Autosys AI is building an autonomous AI workforce that transforms
                        how businesses grow and operate.
                    </p>

                    <div className="animate-fade-in-delay-3">
                        <button
                            onClick={openCalendly}
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                padding: '16px 32px',
                                backgroundColor: '#18181b',
                                color: '#fff',
                                borderRadius: '9999px',
                                border: 'none',
                                fontSize: '18px',
                                fontWeight: 500,
                                cursor: 'pointer'
                            }}
                        >
                            <span>👉</span> Book a Free Demo
                        </button>
                    </div>
                </div>
            </section>

            {/* Services Cards */}
            <section id="services" style={{ padding: '96px 24px', backgroundColor: '#fafafa' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                        <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 600, letterSpacing: '-0.03em', marginBottom: '16px' }}>
                            What We Build
                        </h2>
                        <p style={{ fontSize: '20px', color: '#71717a', maxWidth: '640px', margin: '0 auto' }}>
                            Three powerful AI solutions to automate your business
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
                        {/* Voice AI Card */}
                        <Link
                            href="/voice-ai"
                            style={{
                                padding: '32px',
                                backgroundColor: '#fff',
                                borderRadius: '24px',
                                border: '1px solid #e4e4e7',
                                textDecoration: 'none',
                                color: 'inherit',
                                display: 'block',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <div style={{
                                width: '64px',
                                height: '64px',
                                borderRadius: '16px',
                                background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '24px'
                            }}>
                                <svg style={{ width: '32px', height: '32px', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                                </svg>
                            </div>
                            <h3 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '12px' }}>Voice AI Agents</h3>
                            <p style={{ color: '#71717a', marginBottom: '16px', lineHeight: 1.6 }}>
                                Human-like AI callers that sell, support, and follow up—24/7.
                                Perfect for sales, appointments, and customer support.
                            </p>
                            <ul style={{ fontSize: '14px', color: '#52525b', listStyle: 'none', padding: 0, margin: '0 0 24px 0' }}>
                                <li style={{ marginBottom: '8px' }}>✓ Outbound Sales & Cold Calling</li>
                                <li style={{ marginBottom: '8px' }}>✓ Lead Qualification</li>
                                <li>✓ Appointment Booking</li>
                            </ul>
                            <div style={{ color: '#3b82f6', fontWeight: 500 }}>Learn more →</div>
                        </Link>

                        {/* Agentic AI Card */}
                        <Link
                            href="/agentic-workflows"
                            style={{
                                padding: '32px',
                                backgroundColor: '#fff',
                                borderRadius: '24px',
                                border: '1px solid #e4e4e7',
                                textDecoration: 'none',
                                color: 'inherit',
                                display: 'block',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <div style={{
                                width: '64px',
                                height: '64px',
                                borderRadius: '16px',
                                background: 'linear-gradient(135deg, #a855f7, #7c3aed)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '24px'
                            }}>
                                <svg style={{ width: '32px', height: '32px', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '12px' }}>Agentic AI Workflows</h3>
                            <p style={{ color: '#71717a', marginBottom: '16px', lineHeight: 1.6 }}>
                                Autonomous AI agents that execute marketing workflows end-to-end.
                                Email, LinkedIn, Reddit automation.
                            </p>
                            <ul style={{ fontSize: '14px', color: '#52525b', listStyle: 'none', padding: 0, margin: '0 0 24px 0' }}>
                                <li style={{ marginBottom: '8px' }}>✓ Email Marketing AI</li>
                                <li style={{ marginBottom: '8px' }}>✓ LinkedIn Outreach AI</li>
                                <li>✓ Reddit Marketing AI</li>
                            </ul>
                            <div style={{ color: '#a855f7', fontWeight: 500 }}>Learn more →</div>
                        </Link>

                        {/* Chatbots Card */}
                        <Link
                            href="/chatbots"
                            style={{
                                padding: '32px',
                                backgroundColor: '#fff',
                                borderRadius: '24px',
                                border: '1px solid #e4e4e7',
                                textDecoration: 'none',
                                color: 'inherit',
                                display: 'block',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <div style={{
                                width: '64px',
                                height: '64px',
                                borderRadius: '16px',
                                background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '24px'
                            }}>
                                <svg style={{ width: '32px', height: '32px', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                            </div>
                            <h3 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '12px' }}>AI Chatbots</h3>
                            <p style={{ color: '#71717a', marginBottom: '16px', lineHeight: 1.6 }}>
                                Smart chatbots for websites, WhatsApp, and internal tools.
                                Convert visitors and support customers 24/7.
                            </p>
                            <ul style={{ fontSize: '14px', color: '#52525b', listStyle: 'none', padding: 0, margin: '0 0 24px 0' }}>
                                <li style={{ marginBottom: '8px' }}>✓ Website Chatbots</li>
                                <li style={{ marginBottom: '8px' }}>✓ WhatsApp Bots</li>
                                <li>✓ Lead Qualification</li>
                            </ul>
                            <div style={{ color: '#22c55e', fontWeight: 500 }}>Learn more →</div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Client Logos */}
            <section id="clients" style={{ padding: '80px 24px', backgroundColor: '#fff' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <p style={{ textAlign: 'center', color: '#a1a1aa', fontSize: '12px', marginBottom: '40px', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 500 }}>
                        Trusted by companies worldwide
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '48px', flexWrap: 'wrap' }}>
                        <Image src="/clients/harvest-sbf.png" alt="Harvest SBF" width={140} height={50} style={{ height: '48px', width: 'auto', objectFit: 'contain', opacity: 0.6, filter: 'grayscale(1)' }} />
                        <Image src="/clients/ezspanglish.png" alt="ezSpanglish" width={140} height={50} style={{ height: '48px', width: 'auto', objectFit: 'contain', opacity: 0.6, filter: 'grayscale(1)' }} />
                        <Image src="/clients/uk-realty.png" alt="UK Realty" width={140} height={50} style={{ height: '48px', width: 'auto', objectFit: 'contain', opacity: 0.6, filter: 'grayscale(1)' }} />
                        <Image src="/clients/sage-holidays.png" alt="Sage Holidays" width={70} height={70} style={{ height: '64px', width: 'auto', objectFit: 'contain', opacity: 0.6, filter: 'grayscale(1)' }} />
                        <Image src="/clients/lotusvida.png" alt="LotusVida" width={140} height={50} style={{ height: '48px', width: 'auto', objectFit: 'contain', opacity: 0.6, filter: 'grayscale(1)' }} />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section style={{ padding: '96px 24px', backgroundColor: '#18181b', color: '#fff' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 600, letterSpacing: '-0.03em', marginBottom: '24px' }}>
                        Ready to Automate
                        <br />
                        <span className="text-gradient">Your Growth?</span>
                    </h2>
                    <p style={{ fontSize: '20px', color: '#a1a1aa', marginBottom: '48px', maxWidth: '640px', margin: '0 auto 48px' }}>
                        Join businesses already using Autosys AI to scale their operations.
                    </p>
                    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <button
                            onClick={openCalendly}
                            style={{
                                padding: '16px 32px',
                                backgroundColor: '#fff',
                                color: '#18181b',
                                borderRadius: '9999px',
                                border: 'none',
                                fontSize: '18px',
                                fontWeight: 500,
                                cursor: 'pointer'
                            }}
                        >
                            Book a Free Demo
                        </button>
                        <a
                            href="mailto:hardik@autosysai.dev"
                            style={{
                                padding: '16px 32px',
                                backgroundColor: 'transparent',
                                color: '#fff',
                                borderRadius: '9999px',
                                border: '1px solid #3f3f46',
                                fontSize: '18px',
                                fontWeight: 500,
                                textDecoration: 'none'
                            }}
                        >
                            Contact Sales
                        </a>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" style={{ padding: '96px 24px', backgroundColor: '#fff' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '36px', fontWeight: 600, letterSpacing: '-0.03em', marginBottom: '48px' }}>
                        Get in Touch
                    </h2>
                    <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a
                            href="mailto:hardik@autosysai.dev"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '16px',
                                padding: '20px 32px',
                                backgroundColor: '#fafafa',
                                borderRadius: '16px',
                                textDecoration: 'none',
                                color: 'inherit'
                            }}
                        >
                            <span style={{ fontSize: '28px' }}>📧</span>
                            <div style={{ textAlign: 'left' }}>
                                <p style={{ fontSize: '14px', color: '#71717a', margin: 0 }}>Email</p>
                                <p style={{ fontSize: '18px', fontWeight: 600, margin: 0 }}>hardik@autosysai.dev</p>
                            </div>
                        </a>
                        <a
                            href="tel:+917340400524"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '16px',
                                padding: '20px 32px',
                                backgroundColor: '#fafafa',
                                borderRadius: '16px',
                                textDecoration: 'none',
                                color: 'inherit'
                            }}
                        >
                            <span style={{ fontSize: '28px' }}>📞</span>
                            <div style={{ textAlign: 'left' }}>
                                <p style={{ fontSize: '14px', color: '#71717a', margin: 0 }}>Phone</p>
                                <p style={{ fontSize: '18px', fontWeight: 600, margin: 0 }}>+91 7340400524</p>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer style={{ padding: '48px 24px', borderTop: '1px solid #f4f4f5', backgroundColor: '#fafafa' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
                    <div style={{ fontSize: '20px', fontWeight: 600 }}>
                        Autosys<span className="text-gradient">AI</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '32px', fontSize: '14px', color: '#71717a' }}>
                        <Link href="/voice-ai" style={{ textDecoration: 'none', color: 'inherit' }}>Voice AI</Link>
                        <Link href="/agentic-workflows" style={{ textDecoration: 'none', color: 'inherit' }}>Agentic AI</Link>
                        <Link href="/chatbots" style={{ textDecoration: 'none', color: 'inherit' }}>Chatbots</Link>
                        <Link href="#contact" style={{ textDecoration: 'none', color: 'inherit' }}>Contact</Link>
                    </div>
                    <div style={{ fontSize: '14px', color: '#a1a1aa' }}>
                        © {new Date().getFullYear()} Autosys AI. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
}
