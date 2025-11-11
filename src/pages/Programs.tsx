import VideoHero from "@/components/VideoHero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import heroImage from "@/assets/hero-programs.jpg";
import { Code, Cpu, Palette, Users, BookOpen, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet"; // ✅ Added for SEO meta management

const Programs = () => {
  const programs = [
    {
      icon: Code,
      title: "Digital Skills Training",
      description: "Comprehensive coding bootcamps in web development, mobile apps, and software engineering",
      duration: "3-6 months",
      level: "Beginner to Advanced",
    },
    {
      icon: Cpu,
      title: "Robotics & AI",
      description: "Hands-on learning in robotics, artificial intelligence, and emerging technologies",
      duration: "4 months",
      level: "Intermediate",
    },
    {
      icon: Palette,
      title: "Digital Creativity",
      description: "Graphic design, video production, UI/UX design, and digital content creation",
      duration: "3 months",
      level: "All Levels",
    },
    {
      icon: Users,
      title: "Leadership Development",
      description: "Faith-based leadership training, mentorship, and character formation programs",
      duration: "6 months",
      level: "All Levels",
    },
    {
      icon: BookOpen,
      title: "Entrepreneurship",
      description: "Business skills, startup incubation, and social enterprise development",
      duration: "5 months",
      level: "Intermediate to Advanced",
    },
    {
      icon: Rocket,
      title: "Innovation Labs",
      description: "Project-based learning to solve real African challenges using technology",
      duration: "Ongoing",
      level: "Advanced",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        {/* --- Basic Meta Tags --- */}
        <title>Programs | The Light Mission - Digital Empowerment for Africa</title>
        <meta
          name="description"
          content="Explore The Light Mission’s world-class programs in coding, AI, leadership, and digital creativity. Empower your future and make a lasting impact in Africa."
        />
        <meta
          name="keywords"
          content="The Light Mission programs, coding bootcamp Africa, AI training Africa, faith-based education, digital innovation, leadership training, youth empowerment"
        />

        {/* --- Open Graph (OG) Tags --- */}
        <meta property="og:title" content="Programs | The Light Mission - Digital Empowerment for Africa" />
        <meta
          property="og:description"
          content="Join The Light Mission’s training programs — from coding and robotics to leadership and entrepreneurship — equipping Africa’s youth for the digital future."
        />
        <meta property="og:image" content={heroImage} />
        <meta property="og:url" content="https://thelightmission.com/programs" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="The Light Mission" />
      </Helmet>

      <VideoHero
        imageSrc={heroImage}
        title="Transform Your Future"
        subtitle="World-class digital training programs designed to empower African youth"
      >
        <Button variant="hero" size="lg" asChild>
          <Link to="/contact">Apply Now</Link>
        </Button>
      </VideoHero>

      {/* Programs Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Our Programs</h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Cutting-edge training designed to equip you with the skills needed to thrive in the digital economy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card
                key={index}
                className="bg-card/60 backdrop-blur-md border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <program.icon className="w-12 h-12 text-primary mb-4" />
                  <CardTitle className="text-2xl">{program.title}</CardTitle>
                  <CardDescription>{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-foreground/60">Duration:</span>
                      <span className="text-foreground font-medium">{program.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/60">Level:</span>
                      <span className="text-foreground font-medium">{program.level}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-6" asChild>
                    <Link to="/contact">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-foreground text-center">What You Get</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              "Expert instructors with industry experience",
              "Hands-on project-based learning",
              "Mentorship from tech leaders",
              "Certificate upon completion",
              "Job placement support",
              "Access to alumni network",
              "Spiritual formation sessions",
              "Entrepreneurship resources",
            ].map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-3 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <p className="text-foreground/80">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Ready to Start Learning?</h2>
          <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Applications are open for our next cohort. Don't miss this opportunity to transform your future.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Apply for Programs</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Programs;
