// Services Component
// Generated: 2025-08-25T22:31:13.741Z
// Template: services-c002
// Context: Homepage
// Position: pages.0.sections.1

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  ArrowRight,
  CheckCircle2,
  Star,
  TrendingUp,
  Target,
  Users,
  BarChart3,
  Cog
} from "lucide-react"

export default function Services() {
  const services = [
    {
      id: "business-transformation",
      title: "Business Transformation",
      description: "End-to-end transformation strategies for sustainable growth",
      longDescription: "Our business transformation service helps Fortune 500 companies reimagine their operations, culture, and market position. We develop comprehensive transformation roadmaps that deliver measurable results and competitive advantage.",
      icon: TrendingUp,
      benefits: [
        "Digital transformation strategy",
        "Change management excellence",
        "Cultural transformation programs",
        "Performance measurement systems"
      ],
      pricing: "Starting at $150,000/engagement",
      timeline: "6-18 months typical engagement",
      featured: true,
      badge: "Most Requested"
    },
    {
      id: "operational-excellence",
      title: "Operational Excellence",
      description: "Optimize processes and drive efficiency across your organization",
      longDescription: "We implement proven operational excellence methodologies including Lean Six Sigma, process optimization, and performance management systems to eliminate waste and maximize value creation.",
      icon: Cog,
      benefits: [
        "Lean Six Sigma implementation",
        "Process optimization and automation",
        "Supply chain excellence",
        "Quality management systems"
      ],
      pricing: "Project-based from $75,000",
      timeline: "3-12 months per initiative"
    },
    {
      id: "strategic-planning",
      title: "Strategic Planning & Execution",
      description: "Develop winning strategies and ensure flawless execution",
      longDescription: "Our strategic planning services combine market intelligence, competitive analysis, and organizational capabilities to create actionable strategies that drive sustainable competitive advantage.",
      icon: Target,
      benefits: [
        "Market analysis and positioning",
        "Competitive intelligence",
        "Strategic roadmap development",
        "Execution framework design"
      ],
      pricing: "Starting at $100,000/project",
      timeline: "4-8 months"
    },
    {
      id: "leadership-development",
      title: "Leadership Development",
      description: "Build high-performing leadership teams for the future",
      longDescription: "Develop your executive team's capabilities through our proven leadership development programs designed specifically for Fortune 500 environments and complex organizational challenges.",
      icon: Users,
      benefits: [
        "Executive coaching programs",
        "Leadership assessment and development",
        "Succession planning strategies",
        "High-potential talent programs"
      ],
      pricing: "Custom programs available",
      timeline: "6-12 months per program",
      badge: "Executive Focus"
    }
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Consulting Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Strategic Solutions for
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Fortune 500 Excellence
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Comprehensive consulting services designed to drive transformation and operational excellence for the world's leading enterprises
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-8">
          {services.map((service, index) => {
            const Icon = service.icon
            
            return (
              <div key={service.id}>
                <div className={`
                  group relative overflow-hidden rounded-2xl
                  ${service.featured 
                    ? 'border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent p-8' 
                    : 'border border-border/50 p-8 hover:border-primary/20 transition-colors duration-300'
                  }
                `}>
                  {/* Service Content */}
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className={`
                        size-14 rounded-xl flex items-center justify-center
                        ${service.featured 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-primary/10 text-primary'
                        }
                      `}>
                        <Icon className="size-7" />
                      </div>
                    </div>
                    
                    {/* Main Content */}
                    <div className="flex-grow space-y-4">
                      {/* Title and Badges */}
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-semibold">
                          {service.title}
                        </h3>
                        {service.badge && (
                          <Badge variant={service.featured ? "default" : "secondary"}>
                            {service.badge}
                          </Badge>
                        )}
                        {service.featured && (
                          <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="size-4 fill-accent text-accent" />
                            ))}
                          </div>
                        )}
                      </div>
                      
                      {/* Descriptions */}
                      <p className="text-lg text-muted-foreground">
                        {service.description}
                      </p>
                      
                      {service.longDescription && (
                        <p className="text-muted-foreground">
                          {service.longDescription}
                        </p>
                      )}
                      
                      {/* Benefits Grid */}
                      <div className="grid sm:grid-cols-2 gap-3 pt-2">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="size-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Pricing and Timeline */}
                      <div className="flex flex-wrap gap-6 pt-4">
                        {service.pricing && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Investment:</span>
                            <span className="text-sm font-semibold">
                              {service.pricing}
                            </span>
                          </div>
                        )}
                        {service.timeline && (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Timeline:</span>
                            <span className="text-sm font-semibold">
                              {service.timeline}
                            </span>
                          </div>
                        )}
                      </div>
                      
                      {/* CTA Button */}
                      <div className="pt-4">
                        <Button 
                          variant={service.featured ? "default" : "outline"}
                          className="group/btn"
                        >
                          Request Consultation
                          <ArrowRight className="ml-2 size-4 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Separator between items */}
                {index < services.length - 1 && (
                  <Separator className="my-8" />
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-muted/50 text-center">
          <h3 className="text-2xl font-semibold mb-3">Need a Custom Engagement?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We design bespoke consulting solutions tailored to your organization's unique challenges and objectives.
          </p>
          <Button size="lg">
            Discuss Your Requirements
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}