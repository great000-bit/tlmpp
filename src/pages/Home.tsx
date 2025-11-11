import { Button } from "@/components/ui/button";
import VideoHero from "@/components/VideoHero";
import heroImage from "@/assets/hero-home.jpg";
import { ArrowRight, Target, Users, Lightbulb, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet"; // ✅ Added for SEO meta management

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        {/* --- Basic Meta Tags --- */}
        <title>The Light Mission | Illuminate Africa, Empowering Futures</title>
        <meta
          name="description"
          content="Welcome to The Light Mission — empowering African youth through faith, innovation, leadership, and purpose. Join us in illuminating Africa’s future."
        />
        <meta
          name="keywords"
          content="The Light Mission, Africa, youth empowerment, faith-based leadership, digital innovation, African development, leadership training, Christian mission"
        />

        {/* --- Open Graph (OG) Tags --- */}
        <meta property="og:title" content="The Light Mission | Illuminate Africa, Empowering Futures" />
        <meta
          property="og:description"
          content="The Light Mission is empowering African youth through faith-rooted innovation and leadership development. Join the movement today."
        />
        <meta property="og:image" content={heroImage} />
        <meta property="og:url" content="https://thelightmission.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="The Light Mission" />
      </Helmet>

      <VideoHero
        imageSrc={heroImage}
        title="Illuminate Africa, Empowering Futures"
        subtitle="Empowering African youth through faith, innovation, and digital excellence"
      >
        <Button variant="hero" size="lg" asChild>
          <Link to="/contact">
            Join the Movement <ArrowRight className="ml-2" />
          </Link>
        </Button>
        <Button variant="glass" size="lg" asChild>
          <Link to="/about">Learn More</Link>
        </Button>
      </VideoHero>

      {/* Mission Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Our Mission</h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              To ignite purpose, innovation, and leadership in African youth through faith-rooted digital empowerment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Purpose",
                description: "Helping young people discover their divine calling and live with intentionality",
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                description: "Equipping youth with cutting-edge digital skills to solve African challenges",
              },
              {
                icon: Users,
                title: "Leadership",
                description: "Raising integrity-driven leaders who serve with excellence and compassion",
              },
              {
                icon: Heart,
                title: "Faith",
                description: "Anchoring everything we do in spiritual truth and kingdom values",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card/60 backdrop-blur-md border border-primary/20 rounded-lg p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <item.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
                <p className="text-foreground/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "5000+", label: "Youth Empowered" },
              { number: "50+", label: "Communities Reached" },
              { number: "200+", label: "Programs Delivered" },
              { number: "30+", label: "Partner Organizations" },
            ].map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-5xl md:text-6xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Ready to Make an Impact?</h2>
          <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Whether you want to learn, volunteer, partner, or support our mission, there's a place for you in this movement
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/programs">Explore Programs</Link>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <Link to="/get-involved">Get Involved</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
