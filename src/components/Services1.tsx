// Services1 Component
// Generated: 2025-08-25T22:31:13.742Z
// Template: services-c001
// Context: Services
// Position: pages.1.sections.1

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  TrendingUp,
  Target,
  Cog,
  Users,
  BarChart3,
  Shield,
  Lightbulb,
  Globe,
  ArrowRight
} from "lucide-react"

export default function Services1() {
  const services = [
    {
      id: "business-transformation",
      title: "Business Transformation",
      description: "Comprehensive organizational change management to drive sustainable growth and competitive advantage for Fortune 500 enterprises.",
      icon: TrendingUp,
      badge: "Most Popular",
      features: ["Digital Transformation", "Change Management", "Performance Optimization"],
      link: "/services/business-transformation"
    },
    {
      id: "operational-excellence",
      title: "Operational Excellence",
      description: "Streamline processes, eliminate waste, and maximize efficiency through proven methodologies and best practices.",
      icon: Cog,
      features: ["Process Optimization", "Lean Six Sigma", "Cost Reduction"],
      link: "/services/operational-excellence"
    },
    {
      id: "strategic-planning",
      title: "Strategic Planning",
      description: "Data-driven strategic roadmaps that align organizational goals with market opportunities and competitive positioning.",
      icon: Target,
      badge: "Executive Focus",
      features: ["Market Analysis", "Competitive Intelligence", "Growth Strategy"],
      link: "/services/strategic-planning"
    },
    {
      id: "leadership-development",
      title: "Leadership Development",
      description: "Executive coaching and leadership programs designed to build high-performing teams and drive organizational success.",
      icon: Users,
      features: ["Executive Coaching", "Team Building", "Succession Planning"],
      link: "/services/leadership-development"
    },
    {
      id: "performance-analytics",
      title: "Performance Analytics",
      description: "Advanced analytics and KPI frameworks to measure, monitor, and optimize business performance across all functions.",
      icon: BarChart3,
      features: ["KPI Development", "Dashboard Design", "Predictive Analytics"],
      link: "/services/performance-analytics"
    },
    {
      id: "risk-management",
      title: "Risk Management",
      description: "Comprehensive risk assessment and mitigation strategies to protect enterprise value and ensure regulatory compliance.",
      icon: Shield,
      features: ["Risk Assessment", "Compliance Framework", "Crisis Management"],
      link: "/services/risk-management"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary/20">
            Consulting Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Transform Your Business with
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Strategic Excellence
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Proven consulting solutions that drive measurable results for Fortune 500 companies seeking operational excellence and sustainable growth
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            
            return (
              <Card 
                key={service.id}
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    {service.badge && (
                      <Badge variant="secondary" className="text-xs bg-secondary/10 text-secondary border-secondary/20">
                        {service.badge}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative space-y-4">
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                  
                  {/* Features List */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="size-1.5 rounded-full bg-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Explore Service Link */}
                  <Button 
                    variant="ghost" 
                    className="w-full group/btn justify-between hover:bg-primary/10"
                    asChild
                  >
                    <a href={service.link}>
                      <span>Explore Service</span>
                      <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
                    </a>
                  </Button>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300 pointer-events-none" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Need a customized solution for your enterprise?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Schedule Strategic Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/5">
              Download Service Portfolio
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}