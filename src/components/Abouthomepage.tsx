// Abouthomepage Component
// Generated: 2025-08-25T22:31:13.742Z
// Template: about-c001
// Context: Homepage
// Position: pages.0.sections.2

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Target, 
  Users, 
  Award, 
  Globe,
  ArrowRight,
  Quote,
  Star,
  TrendingUp,
  Heart,
  Lightbulb
} from "lucide-react"

export default function Abouthomepage() {
  const values = [
    {
      icon: Target,
      title: "Results-Driven Excellence",
      description: "We're committed to delivering measurable business outcomes and sustainable competitive advantage for every Fortune 500 client we serve."
    },
    {
      icon: Lightbulb,
      title: "Strategic Innovation",
      description: "We combine proven methodologies with cutting-edge insights to create transformative solutions that drive industry leadership."
    },
    {
      icon: Heart,
      title: "Client Partnership",
      description: "Your success defines our success. We build lasting partnerships based on trust, transparency, and shared commitment to excellence."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "From Fortune 500 headquarters to global operations, we're helping the world's leading enterprises achieve operational excellence."
    }
  ]

  const stats = [
    { value: "2008", label: "Founded", icon: Award },
    { value: "200+", label: "Fortune 500 Clients", icon: Users },
    { value: "$2.4B", label: "Value Created", icon: TrendingUp },
    { value: "35+", label: "Countries", icon: Globe }
  ]

  const team = [
    {
      name: "Michael Harrison",
      role: "Managing Partner & CEO",
      image: "MH",
      bio: "Former McKinsey Principal. 20+ years transforming Fortune 500 operations."
    },
    {
      name: "Sarah Chen",
      role: "Senior Partner, Strategy", 
      image: "SC",
      bio: "Ex-BCG Partner. Expert in digital transformation and operational excellence."
    },
    {
      name: "David Rodriguez",
      role: "Senior Partner, Operations",
      image: "DR",
      bio: "Former GE Six Sigma Master Black Belt. Lean operations specialist."
    },
    {
      name: "Jennifer Kim",
      role: "Partner, Leadership Development",
      image: "JK",
      bio: "Former Deloitte Principal. Executive coaching and organizational development expert."
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            About Apex Strategy Consultants
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Transforming Fortune 500
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Business Excellence
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We're a premier strategy consulting firm dedicated to helping Fortune 500 companies 
            achieve operational excellence and sustainable competitive advantage through proven transformation methodologies.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our Legacy</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2008 by former McKinsey and BCG partners, Apex Strategy Consultants emerged from a 
                simple belief: Fortune 500 companies deserve consulting partners who understand the complexity 
                of large-scale transformation.
              </p>
              <p>
                Over 15 years, we've helped more than 200 Fortune 500 companies navigate digital transformation, 
                operational excellence initiatives, and strategic repositioning challenges, creating over $2.4 billion 
                in measurable value.
              </p>
              <p>
                Today, we're recognized as a trusted advisor to C-suite executives worldwide, 
                known for our rigorous methodology, proven results, and commitment to sustainable change.
              </p>
            </div>
            <Button className="group">
              View Our Case Studies
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="relative">
            <Card className="border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="size-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                      <Quote className="size-8 text-primary" />
                    </div>
                    <blockquote className="text-lg font-medium max-w-sm">
                      "Excellence is not a destination, but a journey of continuous transformation."
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">- Michael Harrison, Managing Partner</cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="text-center border-border/50 hover:border-primary/20 transition-colors">
                <CardContent className="p-6">
                  <div className="size-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Values</h3>
            <p className="text-muted-foreground">
              The principles that guide our approach to every client engagement and strategic initiative.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Team */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Leadership Team</h3>
            <p className="text-muted-foreground">
              Seasoned consultants and industry experts with decades of Fortune 500 transformation experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {team.map((member, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="size-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {member.image}
                  </div>
                  <h4 className="font-semibold mb-1">{member.name}</h4>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button variant="outline" className="group">
              Meet Our Full Team
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-20">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 text-primary fill-current" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl font-medium mb-6 max-w-3xl mx-auto">
                "Apex Strategy Consultants transformed our global operations, delivering $150M in cost savings 
                while improving customer satisfaction by 40%. Their expertise is unmatched."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="size-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-secondary-foreground font-bold">
                  RJ
                </div>
                <div className="text-left">
                  <div className="font-semibold">Robert Johnson</div>
                  <div className="text-sm text-muted-foreground">CEO, Fortune 100 Manufacturing</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}