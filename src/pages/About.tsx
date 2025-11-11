import VideoHero from "@/components/VideoHero";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-about.jpg";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet"; // ✅ Added for SEO management

const About = () => {
  return (
    <div className="min-h-screen">
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        {/* --- Basic Meta Tags --- */}
        <title>About Us | The Light Mission - Illuminating Africa Through Faith and Innovation</title>
        <meta
          name="description"
          content="Learn about The Light Mission — a faith-driven movement dedicated to empowering African youth through digital innovation, leadership, and spiritual growth."
        />
        <meta
          name="keywords"
          content="The Light Mission, About The Light Mission, Africa, youth empowerment, faith-based innovation, leadership training, Christian organization, digital skills"
        />

        {/* --- Open Graph (OG) Tags --- */}
        <meta property="og:title" content="About The Light Mission | Illuminating Africa Through Faith and Innovation" />
        <meta
          property="og:description"
          content="Discover the story, vision, and values behind The Light Mission — empowering African youth through faith, excellence, and innovation."
        />
        <meta property="og:image" content={heroImage} />
        <meta property="og:url" content="https://thelightmission.com/about" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="The Light Mission" />
      </Helmet>

      <VideoHero
        imageSrc={heroImage}
        title="Our Vision: Africa Rising"
        subtitle="A movement to illuminate Africa through faith, purpose, and digital excellence"
      >
        <Button variant="hero" size="lg" asChild>
          <Link to="/contact">Join Our Mission</Link>
        </Button>
      </VideoHero>

      {/* Story Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground text-center">Our Story</h2>
            <div className="space-y-6 text-lg text-foreground/80">
              <p>
                The Light Mission was born from a divine vision: to see African youth rise as beacons of hope,
                innovation, and godly leadership in their communities and beyond.
              </p>
              <p>
                We believe that Africa's greatest resource is not found in its minerals or natural wealth, but in the
                hearts and minds of its young people. When empowered with faith, skills, and purpose, they become
                unstoppable agents of transformation.
              </p>
              <p>
                What started as a small gathering of passionate believers has grown into a continental movement touching
                thousands of lives through digital training, leadership development, and faith-based mentorship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-foreground text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Faith-Rooted",
                description:
                  "Everything we do is anchored in biblical truth and the transforming power of the Gospel",
              },
              {
                title: "Excellence-Driven",
                description: "We pursue the highest standards in all we do, reflecting God's glory in our work",
              },
              {
                title: "Innovation-Focused",
                description: "We embrace technology and creativity to solve Africa's most pressing challenges",
              },
              {
                title: "Community-Centered",
                description: "We build strong, supportive networks that uplift and empower every member",
              },
              {
                title: "Impact-Oriented",
                description:
                  "We measure success by the transformed lives and thriving communities we serve",
              },
              {
                title: "Kingdom-Minded",
                description:
                  "We work for eternal impact, advancing God's purposes in Africa and beyond",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-card/60 backdrop-blur-md border border-primary/20 rounded-lg p-6 hover:border-primary/40 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-2xl font-semibold mb-4 text-primary">{value.title}</h3>
                <p className="text-foreground/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">Our Vision for 2030</h2>
            <p className="text-xl text-foreground/80 mb-8">
              To have empowered 100,000 African youth with digital skills, leadership training, and faith-based
              mentorship, creating a ripple effect of transformation across the continent.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/programs">See How We're Getting There</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
