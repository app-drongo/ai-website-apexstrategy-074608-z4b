// Aboutabout Component
// Generated: 2025-08-25T22:31:13.745Z
// Template: about-c001
// Context: About
// Position: pages.3.sections.1

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
  Lightbulb,
  Building2
} from "lucide-react"

export default function Aboutabout() {
  const values = [
    {
      icon: Target,
      title: "Results-Driven Excellence",
      description: "We deliver measurable outcomes that directly impact your bottom line, with every engagement focused on creating sustainable competitive advantage."
    },
    {
      icon: Lightbulb,
      title: "Strategic Innovation",
      description: "We combine proven methodologies with cutting-edge insights to solve complex business challenges and unlock new growth opportunities."
    },
    {
      icon: Building2,
      title: "Enterprise Partnership",
      description: "We work as an extension of your leadership team, bringing deep industry expertise and Fortune 500 experience to every engagement."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "From multinational corporations to emerging market leaders, we drive transformation across industries and geographies worldwide."
    }
  ]

  const stats = [
    { value: "1998", label: "Founded", icon: Award },
    { value: "500+", label: "Fortune 500 Clients", icon: Users },
    { value: "$2.5B+", label: "Value Created", icon: TrendingUp },
    { value: "40+", label: "Countries", icon: Globe }
  ]

  const team = [
    {
      name: "Margaret Chen",
      role: "Managing Partner & CEO",
      image: "MC",
      bio: "Former McKinsey Principal. 20+ years driving transformation for Fortune 100 companies."
    },
    {
      name: "Robert Harrison",
      role: "Senior Partner, Operations", 
      image: "RH",
      bio: "Ex-GE Six Sigma Black Belt. Expert in operational excellence and lean transformation."
    },
    {
      name: "Dr. Sarah Williams",
      role: "Partner, Strategy & Innovation",
      image: "SW",
      bio: "Former BCG Partner. PhD in Organizational Behavior from Harvard Business School."
    },
    {
      name: "James Rodriguez",
      role: "Partner, Digital Transformation",
      image: "JR",
      bio: "Former Accenture Managing Director. Specialist in enterprise technology strategy."
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            About Apex Strategy
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Transforming Business
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Performance Since 1998
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We are a premier strategy consulting firm dedicated to helping Fortune 500 companies 
            achieve operational excellence and sustainable competitive advantage through proven methodologies and strategic innovation.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our Legacy</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 1998 by former executives from leading consulting firms, Apex Strategy Consultants 
                was born from a vision to deliver transformational results for the world's most complex organizations.
              </p>
              <p>
                Over 25 years, we've partnered with Fortune 500 leaders across industries, from manufacturing 
                and technology to healthcare and financial services, creating over $2.5 billion in measurable value.
              </p>
              <p>
                Today, we continue to set the standard for strategic consulting excellence, combining deep industry 
                expertise with innovative methodologies to solve the most challenging business problems.
              </p>
            </div>
            <Button className="group">
              Explore Our Methodology
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
                      "Excellence is not a destination, but a continuous journey of strategic innovation and operational mastery."
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">- Margaret Chen, Managing Partner</cite>
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
            <h3 className="text-3xl font-bold mb-4">Our Core Values</h3>
            <p className="text-muted-foreground">
              The principles that drive our commitment to delivering exceptional results for every client engagement.
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
              Seasoned executives and former partners from top-tier consulting firms, united by a passion for driving transformational results.
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
                "Apex Strategy Consultants transformed our operations across 15 countries, delivering $180M in cost savings 
                while improving customer satisfaction by 40%. Their expertise is unmatched."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="size-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-secondary-foreground font-bold">
                  RJ
                </div>
                <div className="text-left">
                  <div className="font-semibold">Robert Johnson</div>
                  <div className="text-sm text-muted-foreground">CEO, Global Manufacturing Corp</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}