// Footer Component
// Generated: 2025-08-25T22:31:13.741Z
// Template: footer-c001
// Context: layout
// Position: layout.footer.0

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  TrendingUp,
  Award,
  Users,
  Target
} from "lucide-react"

export default function Footer() {
  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Business Transformation", href: "/services/transformation" },
        { name: "Operational Excellence", href: "/services/operations" },
        { name: "Digital Strategy", href: "/services/digital" },
        { name: "Change Management", href: "/services/change" },
        { name: "Performance Optimization", href: "/services/performance" },
        { name: "Strategic Planning", href: "/services/planning" }
      ]
    },
    {
      title: "Industries",
      links: [
        { name: "Financial Services", href: "/industries/financial" },
        { name: "Healthcare", href: "/industries/healthcare" },
        { name: "Manufacturing", href: "/industries/manufacturing" },
        { name: "Technology", href: "/industries/technology" },
        { name: "Retail & Consumer", href: "/industries/retail" },
        { name: "Energy & Utilities", href: "/industries/energy" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Case Studies", href: "/case-studies" },
        { name: "Industry Insights", href: "/insights" },
        { name: "White Papers", href: "/resources/whitepapers" },
        { name: "Webinars", href: "/resources/webinars" },
        { name: "Research Reports", href: "/resources/reports" },
        { name: "Best Practices", href: "/resources/practices" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Leadership Team", href: "/about/leadership" },
        { name: "Careers", href: "/careers" },
        { name: "News & Press", href: "/news" },
        { name: "Client Portal", href: "/portal" },
        { name: "Contact", href: "/contact" }
      ]
    }
  ]

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/apex-strategy" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/apexstrategy" },
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/apexstrategy" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/apexstrategy" }
  ]

  return (
    <footer className="bg-secondary border-t border-primary/20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-3 mb-6">
                <div className="size-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <TrendingUp className="size-6 text-background" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-xl text-background">Apex Strategy</span>
                  <span className="text-sm text-primary/80 font-medium">Consultants</span>
                </div>
              </Link>
              <p className="text-primary/70 text-sm leading-relaxed mb-6">
                Transforming Fortune 500 companies through strategic consulting, operational excellence, 
                and innovative business solutions. Your success is our mission.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <span className="text-primary/80">contact@apexstrategy.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <span className="text-primary/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-primary flex-shrink-0" />
                <span className="text-primary/80">1250 Broadway, Suite 3500, New York, NY 10001</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-4">
              <h4 className="font-semibold text-sm text-background">Strategic Insights Newsletter</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 text-sm border border-primary/30 rounded-md bg-background/10 text-background placeholder:text-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
                />
                <Button size="sm" className="px-3 bg-primary hover:bg-primary/90 text-background">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-primary/60">
                Get exclusive insights on business transformation and industry trends. Unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm text-background">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        href={link.href}
                        className="text-sm text-primary/70 hover:text-primary transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 pt-8 border-t border-primary/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center gap-3">
              <Award className="size-5 text-accent" />
              <span className="text-sm text-primary/80">Fortune 500 Trusted</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Users className="size-5 text-accent" />
              <span className="text-sm text-primary/80">200+ Successful Projects</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Target className="size-5 text-accent" />
              <span className="text-sm text-primary/80">98% Client Satisfaction</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary/20 bg-secondary/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-primary/70">
              <span>© 2024 Apex Strategy Consultants. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">
                Transforming businesses since 2010
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-primary/70 mr-2">Connect with us:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-primary/20 hover:bg-primary/30 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="size-4 text-primary/80 group-hover:text-primary transition-colors" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-primary/10">
            <Link href="/privacy" className="text-xs text-primary/60 hover:text-primary/80 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-primary/60 hover:text-primary/80 transition-colors">
              Terms of Service
            </Link>
            <Link href="/compliance" className="text-xs text-primary/60 hover:text-primary/80 transition-colors">
              Compliance
            </Link>
            <Link href="/accessibility" className="text-xs text-primary/60 hover:text-primary/80 transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}