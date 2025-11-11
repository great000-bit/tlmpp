import { Helmet } from "react-helmet";
import VideoHero from "@/components/VideoHero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import heroImage from "@/assets/hero-blog.jpg";
import { Calendar, User, ArrowRight } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      title: "From Dropout to Developer: James' Journey",
      excerpt: "How a struggling high school student found purpose and became a successful software engineer",
      author: "Sarah Kamau",
      date: "January 15, 2025",
      category: "Success Stories",
    },
    {
      title: "The Power of Faith-Driven Innovation",
      excerpt: "Exploring how biblical principles guide our approach to technology and entrepreneurship",
      author: "Rev. Joshua Mwangi",
      date: "January 10, 2025",
      category: "Faith & Tech",
    },
    {
      title: "5000 Youth Trained: Celebrating a Milestone",
      excerpt: "Reflecting on our journey and the lives transformed through digital skills training",
      author: "Dr. Emmanuel Okonkwo",
      date: "December 28, 2024",
      category: "Impact Report",
    },
    {
      title: "Building Africa's Tech Future, One Cohort at a Time",
      excerpt: "Inside our intensive 12-week leadership development program and its transformative results",
      author: "David Mensah",
      date: "December 20, 2024",
      category: "Programs",
    },
    {
      title: "When Purpose Meets Opportunity",
      excerpt: "Stories of young people discovering their calling through mentorship and training",
      author: "Pastor Grace Adeyemi",
      date: "December 15, 2024",
      category: "Testimonies",
    },
    {
      title: "The Future of Work in Africa",
      excerpt: "How digital skills are opening doors to global opportunities for African youth",
      author: "Sarah Kamau",
      date: "December 5, 2024",
      category: "Insights",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>The Light Mission | Impact Stories & Transformational Journeys</title>
        <meta
          name="description"
          content="Read powerful stories of transformation from The Light Mission — where faith, innovation, and purpose empower Africa's youth to build a brighter future."
        />
        <meta
          name="keywords"
          content="The Light Mission, TLM Blog, African youth transformation, faith and technology, leadership training, digital discipleship, impact stories, empowerment, innovation"
        />
        <meta property="og:title" content="The Light Mission | Impact Stories & Transformational Journeys" />
        <meta
          property="og:description"
          content="Discover how The Light Mission is transforming lives through faith-driven innovation, leadership, and digital empowerment across Africa."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thelightmission.com/" />
        <meta property="og:image" content="https://thelightmission.com/og-image.jpg" />
        <meta property="og:site_name" content="The Light Mission" />
      </Helmet>

      <VideoHero
        imageSrc={heroImage}
        title="Stories of Transformation"
        subtitle="Real lives, real impact, real hope for Africa's future"
      />

      {/* Blog Posts Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Latest Impact Stories</h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Be inspired by the incredible journeys of young people whose lives have been transformed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card
                key={index}
                className="bg-card/60 backdrop-blur-md border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="text-xs font-semibold text-primary mb-2">{post.category}</div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">{post.title}</CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-foreground/60 mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <Button variant="ghost" className="w-full group/btn">
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Stories
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Story */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-primary">FEATURED STORY</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
                From the Streets to Silicon Valley
              </h2>
              <p className="text-xl text-foreground/80">
                How Mary Wanjiru went from selling vegetables to building apps used by millions
              </p>
            </div>
            <div className="bg-card/60 backdrop-blur-md border border-primary/20 rounded-lg p-8 md:p-12">
              <p className="text-lg text-foreground/80 mb-6">
                Mary's story began in the bustling markets of Nairobi, where she sold vegetables to support her family. Despite her circumstances, she never lost sight of her dreams. When she joined TLM's coding bootcamp in 2022, everything changed...
              </p>
              <p className="text-lg text-foreground/80 mb-6">
                "I didn't even own a laptop when I started," Mary recalls. "But the TLM team believed in me. They provided the equipment, the training, and most importantly, the encouragement I needed to keep going."
              </p>
              <p className="text-lg text-foreground/80 mb-8">
                Today, Mary works as a software engineer at a leading tech company and has built several apps that serve communities across East Africa. She's also a mentor in TLM's program, paying it forward to the next generation.
              </p>
              <Button variant="hero" size="lg">
                Read Full Story
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Get Stories in Your Inbox</h2>
          <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Subscribe to receive monthly updates about the lives being transformed through The Light Mission
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-background border-border flex-1"
            />
            <Button variant="hero" size="lg">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
