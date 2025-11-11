import { Helmet } from "react-helmet";
import VideoHero from "@/components/VideoHero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import heroImage from "@/assets/hero-leadership.jpg";
import { Link } from "react-router-dom";
import { Linkedin, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";

// Leadership Images
import miracleImage from "@/assets/Miracle Chinenye Amarachi.jpg";
import chimezieImage from "@/assets/Chimezie Promise Munachiso (Amb. Muna).jpg";
import viscountImage from "@/assets/Viscount [Full Name TBD].jpg";
import trustgodImage from "@/assets/TrustGod Ewuziem.jpg";
import adebiImage from "@/assets/Adebi Precious.jpg";
import greatImage from "@/assets/Great emman-wori.png";
import beboyoImage from "@/assets/WhatsApp Image 2025-11-07 at 01.36.42_89a7e48c.jpg";
import peaceImage from "@/assets/Peace Kings.jpg";

interface Leader {
  name: string;
  role: string;
  image: string | null;
  bio: string;
  fullBio: string;
  linkedin: string;
  portfolio?: string;
}

const Leadership = () => {
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const leaders: Leader[] = [
    {
      name: "TrustGod Ewuziem",
      role: "Managing Director",
      image: trustgodImage,
      bio: "Visionary tech leader and innovation strategist passionate about using technology to empower communities",
      fullBio: "TrustGod is a visionary tech leader, innovation strategist, and social impact advocate passionate about using technology to empower communities. He is the Founder and CEO of Nexa Trux Technologies, a digital solutions company creating scalable platforms across Africa.\n\nWith a strong background in software development, digital strategy, and project leadership, he has contributed to several mission-driven initiatives, bridging technology, purpose, and social transformation.\n\nTrustGod serves as the MD The Light Mission with the conviction that faith and innovation can rebuild communities, transform economies, and shape the next generation of changemakers.",
      linkedin: "https://linkedin.com/in/trustgod-ewuziem",
      portfolio: "https://trustgodewuziem.nexatrux.com"
    },
    {
      name: "Mrs. Peace Kings",
      role: "National Youth Leader, HLCC Youths Nigeria | Director, Leadership & Spiritual Empowerment",
      image: peaceImage,
      bio: "Dynamic minister and transformational leader with a deep passion for mentorship, youth empowerment, and spiritual growth",
      fullBio: "Mrs. Peace Kings is a dynamic minister and transformational leader with a deep passion for mentorship, youth empowerment, and spiritual growth. As the National Youth Leader of HLCC Youths Nigeria, she has inspired countless young people to live purposefully and lead with conviction.\n\nThrough her role as Director of Leadership and Spiritual Empowerment, she continues to nurture emerging leaders, promote faith-driven excellence, and champion initiatives that build character, integrity, and service in the next generation.\n\nHer ministry has been instrumental in raising spiritually mature leaders who are making a difference in their communities.",
      linkedin: "https://linkedin.com/in/peace-kings"
    },
    {
      name: "Chimezie Promise Munachiso (Amb. Muna)",
      role: "Director, Creative and Operations",
      image: chimezieImage,
      bio: "Multi-talented creative visionary, gospel minister, and digital innovator building thriving creative brands",
      fullBio: "Amb. Muna is a multi-talented creative visionary, gospel minister, and digital innovator from Imo State, Nigeria. He is the founder of Muna Sax Studio, a thriving creative brand providing top-tier design, photography, and digital media solutions.\n\nCurrently pursuing a degree in Biochemistry at Kingsley Ozumba Mbadiwe University, he has built a strong reputation as a purpose-driven creative professional, merging art, media, and ministry to inspire transformation.\n\nAs a gospel minister, Amb. Muna uses his platform to spread hope, faith, and positive influence through sound, visuals, and creative expression. His leadership at TLM reflects creativity anchored in purpose, service, and excellence.",
      linkedin: "https://linkedin.com/in/chimezie-munachiso"
    },
    {
      name: "Viscount [Full Name TBD]",
      role: "Director of Partnership",
      image: viscountImage,
      bio: "Forward-thinking technologist and strategic innovator building solutions that drive real-world impact",
      fullBio: "Viscount is a forward-thinking technologist and strategic innovator with a passion for building solutions that drive real-world impact. With expertise in digital systems, project coordination, and innovation management, he brings both creativity and analytical insight into every collaboration.\n\nAs Director of Partnership, he plays a pivotal role in fostering sustainable relationships, developing collaborative frameworks, and aligning strategic goals to advance the organization's mission.\n\nHis vision is centered on innovation that empowers people and transforms communities.",
      linkedin: "https://linkedin.com/in/viscount-tlm"
    },
    {
      name: "Great Emman-wori",
      role: "Tech & Innovation Lead",
      image: greatImage,
      bio: "Visionary technology strategist building scalable, human-centered digital solutions",
      fullBio: "Great is a visionary technology strategist and creative systems thinker with a passion for building scalable, human-centered digital solutions. As the Tech & Innovation Lead, he spearheads the design, development, and implementation of forward-looking technologies that enhance efficiency and engagement.\n\nWith a strong background in web development, UI/UX design, and creative strategy, Great combines technical precision with aesthetic innovation to craft digital experiences that inspire and empower.\n\nHis leadership reflects a rare blend of creativity, excellence, and purposeful innovation.",
      linkedin: "https://linkedin.com/in/great-emman-wori"
    },
    {
      name: "Miracle Chinenye Amarachi (Phenomenon Erudite)",
      role: "Community Manager",
      image: miracleImage,
      bio: "Purpose-driven creative and thought leader passionate about using words and strategy to inspire change",
      fullBio: "Miracle Chinenye Amarachi, known by her brand name Phenomenon Erudite, is a purpose-driven creative and thought leader from Abia State, Nigeria. She is a certified Content Writer, Digital Marketer, Public Speaker, and Health Consultant passionate about using words and strategy to inspire change.\n\nAs the author of four impactful books, Miracle's work reflects a deep commitment to intellectual growth, empowerment, and transformation. Her brand, Phenomenon Erudite, embodies excellence, authenticity, and intellect—values she brings to every platform she manages.\n\nAs Community Manager, she fosters meaningful engagement, builds brand influence, and drives initiatives that connect creativity with purpose.",
      linkedin: "https://linkedin.com/in/miracle-amarachi"
    },
    {
      name: "Adebi Precious Ijeoma",
      role: "Chief Financial Officer",
      image: adebiImage,
      bio: "Content and Creative Writer, Speaker, and Personal Development Strategist dedicated to helping people grow",
      fullBio: "Adebi Precious Ijeoma is a passionate Content and Creative Writer, Speaker, and Personal Development Strategist dedicated to helping people grow with clarity, confidence, and purpose. She serves as a Content and Communication Specialist, using her expertise to strengthen brands, develop impactful messaging, and lead transformative initiatives.\n\nAs the founder of Prolific Skill Up and Growth Mentorship, she coaches young people to discover their voice, embrace personal evolution, and pursue excellence in every sphere.\n\nHer commitment to faith, creativity, and responsibility continues to inspire others toward purposeful living and growth.",
      linkedin: "https://linkedin.com/in/adebi-precious"
    },
    {
      name: "Beboyo Emmanuel",
      role: "Chief Mentor",
      image: beboyoImage,
      bio: "Seasoned leader, creative writer, and visionary mentor with a heart for faith-based leadership",
      fullBio: "Beboyo Emmanuel is a seasoned leader, creative writer, and visionary mentor with a heart for faith-based leadership and youth transformation. A devoted lover of God, he has held multiple leadership positions, including Campus President, where he built a legacy of impact, discipline, and innovation.\n\nAs Chief Mentor, he provides spiritual guidance, leadership counsel, and creative insight to nurture the next generation of changemakers.\n\nHis influence combines wisdom, humility, and a lifelong passion for empowering others to walk in purpose and excellence.",
      linkedin: "https://linkedin.com/in/beboyo-emmanuel"
    },
    {
      name: "Jefery [Last Name TBD]",
      role: "Technical Lead & Media Communications",
      image: null,
      bio: "Skilled technical expert and media strategist specializing in digital communications and creative technology",
      fullBio: "Jefery is a skilled technical expert and media strategist specializing in digital communications and creative technology. With a strong background in system management, audiovisual production, and media design, he ensures seamless integration of technology and storytelling across platforms.\n\nAs Technical Lead, he oversees technical operations, media infrastructure, and communication systems, driving excellence through innovation and precision.\n\nHis passion for digital excellence fuels his dedication to building systems that inform, engage, and inspire.",
      linkedin: "https://linkedin.com/in/jefery-tlm"
    },
  ];

  // Intersection Observer for scroll-triggered staggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setVisibleCards((prev) => new Set([...prev, index]));
            }
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* === SEO META TAGS === */}
      <Helmet>
        <title>Leadership | The Light Mission</title>
        <meta
          name="description"
          content="Meet the visionary leaders behind The Light Mission — inspiring Africa's digital and spiritual transformation through innovation, mentorship, and faith-driven leadership."
        />
        <meta
          name="keywords"
          content="The Light Mission, leadership, African youth, faith-based leadership, innovation, digital empowerment, Africa transformation"
        />

        {/* Open Graph (OG) Meta */}
        <meta property="og:title" content="Leadership | The Light Mission" />
        <meta
          property="og:description"
          content="Discover the leadership team guiding The Light Mission's vision for Africa's transformation — faith, innovation, and purpose united."
        />
        <meta property="og:image" content={heroImage} />
        <meta property="og:url" content="https://thelightmission.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="The Light Mission" />
      </Helmet>

      <VideoHero
        imageSrc={heroImage}
        title="Led by Visionaries"
        subtitle="Meet the passionate leaders driving Africa's digital renaissance"
      >
        <Button variant="hero" size="lg" asChild>
          <Link to="/contact">Contact Leadership</Link>
        </Button>
      </VideoHero>

      {/* Leadership Team - Enhanced with Andela-style Animations */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Our Leadership Team</h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Experienced leaders united by a common vision: to see African youth flourish in faith and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {leaders.map((leader, index) => (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`transition-all duration-700 ease-out ${
                  visibleCards.has(index)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12'
                }`}
                style={{ 
                  transitionDelay: visibleCards.has(index) ? `${(index % 3) * 100}ms` : '0ms'
                }}
              >
                <Card
                  className="group relative h-full bg-card/60 backdrop-blur-md border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 cursor-pointer overflow-hidden hover:-translate-y-2"
                  onClick={() => setSelectedLeader(leader)}
                >
                  <CardContent className="p-0 h-full flex flex-col">
                      
                    <div className="relative w-full aspect-square overflow-hidden">
                      {leader.image ? (
                        <img
                          src={leader.image}
                          alt={leader.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/40" />
                        )}
                        
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-0 group-hover:opacity-95 transition-opacity duration-500" />
                      
                      {/* Hover Reveal - Bio Preview with Glass Effect */}
                      <div className="absolute inset-0 bg-background/10 backdrop-blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-6 text-center">
                        <p className="text-foreground text-sm mb-4 line-clamp-4 drop-shadow-lg">
                          {leader.bio}
                        </p>
                        <Button 
                          variant="outline" 
                          size="lg"
                          className="bg-background/90 text-foreground border-2 border-foreground/20 hover:bg-background hover:border-foreground/40 font-semibold shadow-2xl backdrop-blur-sm"
                        >
                          View Full Profile 
                        </Button>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold mb-2 text-foreground leading-tight">
                        {leader.name}
                      </h3>
                      <p className="text-primary text-sm font-medium mb-3 leading-snug">
                        {leader.role}
                      </p>
                      <p className="text-foreground/70 text-sm leading-relaxed line-clamp-3 flex-1">
                        {leader.bio}
                      </p>
                      
                      {/* Social Links */}
                      <div className="mt-4 pt-4 border-t border-border/50 flex items-center gap-3">
                        <a
                          href={leader.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-foreground/60 hover:text-primary transition-colors"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                        {leader.portfolio && (
                          <a
                            href={leader.portfolio}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-sm text-foreground/60 hover:text-primary transition-colors"
                          >
                            
                          </a>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          
          {/* Sophisticated Leader Detail Modal */}
          <Dialog open={!!selectedLeader} onOpenChange={(open) => !open && setSelectedLeader(null)}>
            <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto bg-background border-primary/20 p-0">
              {/* Hero Banner Section */}
              <div className="relative h-80 overflow-hidden">
                {selectedLeader?.image ? (
                  <img
                    src={selectedLeader.image}
                    alt={selectedLeader.name}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/30 to-primary/60" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
              </div>

              <div className="p-8 md:p-12 -mt-24 relative z-10">
                {/* Profile Section with Elevated Image */}
                <div className="flex flex-col md:flex-row items-start gap-6 mb-10">
                  {selectedLeader?.image ? (
                    <div className="w-40 h-40 rounded-3xl overflow-hidden flex-shrink-0 border-4 border-background shadow-2xl ring-2 ring-primary/20">
                      <img
                        src={selectedLeader.image}
                        alt={selectedLeader.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  ) : (
                    <div className="w-40 h-40 rounded-3xl bg-gradient-to-br from-primary/30 to-primary/60 flex-shrink-0 border-4 border-background shadow-2xl ring-2 ring-primary/20" />
                  )}
                  <div className="flex-1">
                    <DialogTitle className="text-3xl md:text-4xl font-bold mb-3 text-foreground tracking-tight">
                      {selectedLeader?.name}
                    </DialogTitle>
                    <p className="text-lg md:text-xl text-primary font-semibold mb-6 leading-relaxed">
                      {selectedLeader?.role}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <a
                        href={selectedLeader?.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300 font-medium border border-primary/20 hover:border-primary/40"
                      >
                        <Linkedin className="w-5 h-5" />
                        <span>LinkedIn</span>
                      </a>
                      {selectedLeader?.portfolio && (
                        <a
                          href={selectedLeader.portfolio}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-foreground/5 text-foreground hover:bg-foreground/10 transition-all duration-300 font-medium border border-foreground/10 hover:border-foreground/20"
                        >
                          <span>View Portfolio →</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Bio Section with Better Typography */}
                <div className="prose prose-lg max-w-none space-y-6">
                  {selectedLeader?.fullBio.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="text-foreground/80 leading-relaxed text-base md:text-lg">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* Leadership Values */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-foreground text-center">Our Leadership Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[ 
              {
                title: "Servant Leadership",
                description: "We lead by serving others, following Christ's example of humility and compassion",
              },
              {
                title: "Integrity First",
                description: "Our word is our bond - we do what we say and say what we mean",
              },
              {
                title: "Collaborative Spirit",
                description: "We believe in the power of teamwork and the strength of diverse perspectives",
              },
              {
                title: "Continuous Learning",
                description: "We never stop growing, always seeking wisdom and new insights",
              },
            ].map((principle, index) => (
              <div
                key={index}
                className="bg-card/60 backdrop-blur-md border border-primary/20 rounded-lg p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-lg"
              >
                <h3 className="text-2xl font-semibold mb-4 text-primary">{principle.title}</h3>
                <p className="text-foreground/70">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Advisory Board</h2>
          <p className="text-xl text-foreground/80 mb-12 max-w-3xl mx-auto">
            Our work is guided by a distinguished board of advisors from across Africa and the global diaspora, bringing expertise in technology, ministry, education, and social impact.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/about">Learn About Our Advisors</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Leadership;