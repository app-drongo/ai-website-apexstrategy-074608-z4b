// Contactcontact Component
// Generated: 2025-08-25T22:31:13.745Z
// Template: contact-c001
// Context: Contact
// Position: pages.4.sections.1

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare,
  Users,
  Briefcase,
  Calendar,
  Building2
} from "lucide-react"

export default function Contactcontact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    position: "",
    consultingNeeds: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Consultation request submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactMethods = [
    {
      icon: Calendar,
      title: "Schedule Consultation",
      description: "Book a strategic planning session",
      contact: "Free 30-minute discovery call",
      action: "Book Now"
    },
    {
      icon: Phone,
      title: "Executive Hotline",
      description: "Direct access to senior partners",
      contact: "+1 (555) 847-9200",
      action: "Call Partners"
    },
    {
      icon: Mail,
      title: "Business Inquiries",
      description: "Detailed project discussions",
      contact: "partnerships@apexstrategy.com",
      action: "Send Proposal"
    }
  ]

  const offices = [
    {
      city: "New York",
      address: "432 Park Avenue, 28th Floor",
      timezone: "EST (UTC-5)",
      focus: "Financial Services & Healthcare"
    },
    {
      city: "Chicago",
      address: "875 North Michigan Ave, Suite 3200",
      timezone: "CST (UTC-6)",
      focus: "Manufacturing & Supply Chain"
    },
    {
      city: "San Francisco",
      address: "101 California Street, 48th Floor",
      timezone: "PST (UTC-8)",
      focus: "Technology & Innovation"
    }
  ]

  const consultingAreas = [
    "Digital Transformation",
    "Operational Excellence",
    "Strategic Planning",
    "Change Management",
    "Process Optimization",
    "Performance Improvement",
    "Organizational Restructuring",
    "Market Entry Strategy"
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary/20">
            <Briefcase className="size-3 mr-2" />
            Strategic Partnership
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Transform Your Business
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Starting Today
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ready to unlock operational excellence? Our Fortune 500 consulting experts are 
            standing by to discuss your transformation goals and strategic initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <Card className="border-border/50 shadow-lg">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl flex items-center gap-2">
                <Send className="size-6 text-primary" />
                Request Strategic Consultation
              </CardTitle>
              <CardDescription>
                Share your business challenges and we'll connect you with the right consulting partner within 4 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Executive Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="position" className="block text-sm font-medium mb-2">
                      Position/Title *
                    </label>
                    <input
                      type="text"
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="CEO, COO, VP Operations"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="john.smith@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="Fortune 500 Company"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="consultingNeeds" className="block text-sm font-medium mb-2">
                    Primary Consulting Focus *
                  </label>
                  <select
                    id="consultingNeeds"
                    name="consultingNeeds"
                    value={formData.consultingNeeds}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  >
                    <option value="">Select your primary need</option>
                    {consultingAreas.map((area, index) => (
                      <option key={index} value={area}>{area}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Business Challenge Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                    placeholder="Describe your current business challenges, transformation goals, and expected outcomes. Include timeline and budget considerations if available..."
                  />
                </div>

                <Button type="submit" className="w-full text-base py-6 group bg-primary hover:bg-primary/90">
                  Request Strategic Consultation
                  <Send className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our confidentiality terms and strategic partnership evaluation process.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact Methods */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Building2 className="size-5 text-primary" />
                Connect with Our Partners
              </h3>
              <div className="grid gap-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon
                  return (
                    <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 cursor-pointer group hover:shadow-md">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Icon className="size-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold mb-1 text-foreground">{method.title}</h4>
                            <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                            <p className="font-medium text-primary">{method.contact}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>

            {/* Office Locations */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <MapPin className="size-5 text-primary" />
                Strategic Offices
              </h3>
              <div className="space-y-3">
                {offices.map((office, index) => (
                  <div key={index} className="p-4 border border-border/50 rounded-lg hover:border-primary/20 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-foreground">{office.city}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{office.address}</p>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {office.timezone}
                      </Badge>
                    </div>
                    <div className="mt-3 pt-3 border-t border-border/30">
                      <p className="text-xs text-primary font-medium">Specialization: {office.focus}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <Card className="border-border/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                  <Clock className="size-5 text-primary" />
                  Consultation Hours
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="text-foreground">7:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="text-foreground">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="text-foreground">Emergency Only</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                  <p className="text-sm text-primary font-medium flex items-center gap-2">
                    <Users className="size-4" />
                    24/7 crisis management support for active Fortune 500 clients
                  </p>
                </div>
                <div className="mt-3 p-3 bg-accent/10 rounded-lg">
                  <p className="text-sm text-accent font-medium">
                    Average response time: 4 hours for strategic inquiries
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}