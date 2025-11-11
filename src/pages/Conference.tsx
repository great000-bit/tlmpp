import VideoHero from "@/components/VideoHero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import heroImage from "@/assets/hero-conference.jpg";
import { Calendar, MapPin, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Conference = () => {
  const upcomingEvents = [
    {
      title: "TLM Annual Summit 2025",
      date: "November 22-24, 2025",
      location: "Orlu, Imo State, Nigeria",
      attendees: "2000+ expected",
      description:
        "Three days of inspiration, training, and networking with Africa's brightest young innovators",
    },
    {
      title: "Digital Skills Bootcamp",
      date: "April 5-30, 2025",
      location: "Lagos, Nigeria",
      attendees: "500 participants",
      description:
        "Intensive month-long training in web development, design, and entrepreneurship",
    },
    {
      title: "Leadership Cohort Q2",
      date: "May 1 - July 31, 2025",
      location: "Virtual & In-Person",
      attendees: "100 selected leaders",
      description:
        "12-week intensive leadership development program for emerging African leaders",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* ✅ SEO & Open Graph Meta Tags */}
      <Helmet>
        <title>Conferences & Events | The Light Mission</title>
        <meta
          name="description"
          content="Join The Light Mission's powerful conferences, summits, and leadership cohorts transforming Africa through digital innovation and faith-based impact."
        />
        <meta
          name="keywords"
          content="The Light Mission, conferences, leadership training, Africa, digital skills, youth empowerment, innovation, summits"
        />

        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content="Conferences & Events | The Light Mission" />
        <meta
          property="og:description"
          content="Be part of The Light Mission's transformative conferences and leadership events empowering Africa’s next generation of innovators."
        />
        <meta property="og:image" content={heroImage} />
        <meta property="og:url" content="https://thelightmission.com/conference" />
        <meta property="og:type" content="website" />
      </Helmet>

      <VideoHero
        imageSrc={heroImage}
        title="Join the Movement"
        subtitle="Conferences, cohorts, and events that transform lives"
      >
        <Button variant="hero" size="lg" asChild>
          <Link to="/contact">Register Now</Link>
        </Button>
      </VideoHero>

      {/* Upcoming Events */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Upcoming Events</h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Don't miss these life-changing opportunities to connect, learn, and grow with fellow changemakers
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card
                key={index}
                className="bg-card/60 backdrop-blur-md border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-2xl">{event.title}</CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-foreground/70">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground/70">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground/70">
                      <Users className="w-5 h-5 text-primary" />
                      <span>{event.attendees}</span>
                    </div>
                  </div>
                  <Button variant="hero" className="w-full" asChild>
                    <Link to="/contact">Register</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cohort Programs */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-foreground text-center">Our Cohort Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Tech Leadership Cohort",
                duration: "12 weeks",
                description:
                  "Intensive training for emerging tech leaders who want to make a kingdom impact",
              },
              {
                title: "Founders Fellowship",
                duration: "16 weeks",
                description:
                  "Support and training for Christian entrepreneurs building impact-driven startups",
              },
              {
                title: "Mentorship Cohort",
                duration: "6 months",
                description:
                  "Train to become a mentor and guide the next generation of African youth",
              },
              {
                title: "Digital Disciples Program",
                duration: "8 weeks",
                description:
                  "Learn to use digital tools for evangelism, discipleship, and kingdom advancement",
              },
            ].map((program, index) => (
              <Card
                key={index}
                className="bg-card/60 backdrop-blur-md border-primary/20 hover:border-primary/40 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-2xl">{program.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {program.duration}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70 mb-4">{program.description}</p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/contact">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">Past Event Highlights</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
            {[
              { number: "15+", label: "Annual Summits" },
              { number: "50+", label: "Bootcamps" },
              { number: "8000+", label: "Total Attendees" },
              { number: "35", label: "Cities Reached" },
            ].map((stat, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
          <Button variant="glass" size="lg" asChild>
            <Link to="/blog">View Event Gallery</Link>
          </Button>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Don't Miss Out</h2>
          <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Register for our next event and be part of a movement that's transforming Africa
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Register Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Conference;
