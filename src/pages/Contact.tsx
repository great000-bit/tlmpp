import { useState } from "react";
import { Helmet } from "react-helmet";
import VideoHero from "@/components/VideoHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import heroContactImage from "@/assets/hero-contact.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formElement = e.currentTarget;
    const formDataToSend = new FormData(formElement);

    try {
      const response = await fetch("https://formspree.io/f/xldaednb", {
        method: "POST",
        body: formDataToSend,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setShowSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });

        // Hide success message after 5 seconds
        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
      } else {
        alert("There was an error sending your message. Please try again.");
      }
    } catch (error) {
      alert("There was an error sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>The Light Mission | Contact Us</title>
        <meta
          name="description"
          content="Connect with The Light Mission — partner with us to illuminate Africa through faith, technology, and leadership empowerment."
        />
        <meta
          name="keywords"
          content="The Light Mission contact, faith-based organization Africa, digital ministry, youth empowerment, Christian leadership, partnership, volunteer"
        />

        {/* ✅ Open Graph Meta Tags */}
        <meta property="og:title" content="The Light Mission | Contact Us" />
        <meta
          property="og:description"
          content="Reach out to The Light Mission to join our mission of transforming Africa through faith and innovation."
        />
        <meta property="og:url" content="https://thelightmission.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://thelightmission.com/assets/hero-contact.jpg" />
      </Helmet>

      <VideoHero
        imageSrc={heroContactImage}
        title="Join the Movement"
        subtitle="Let's illuminate Africa together. Reach out and be part of something greater."
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="border-primary/20 bg-card/60 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-3xl font-bold bg-gradient-gold bg-clip-text text-transparent">
                  Send Us a Message
                </CardTitle>
                <CardDescription className="text-foreground/70">
                  Whether you want to volunteer, partner, or learn more about our mission
                </CardDescription>
              </CardHeader>
              <CardContent>
                {showSuccess && (
                  <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg animate-fade-in">
                    <div className="flex items-center gap-3">
                      <svg
                        className="w-6 h-6 text-green-500 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <div>
                        <p className="font-semibold text-green-700 dark:text-green-400">
                          Message Sent Successfully!
                        </p>
                        <p className="text-sm text-green-600 dark:text-green-300">
                          Thank you for reaching out. We'll get back to you soon.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background/50 border-primary/30"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background/50 border-primary/30"
                    />
                  </div>
                  <div>
                    <Input
                      name="phone"
                      type="tel"
                      placeholder="Phone Number (Optional)"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-background/50 border-primary/30"
                    />
                  </div>
                  <div>
                    <Input
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-background/50 border-primary/30"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-background/50 border-primary/30"
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    <Send className="mr-2" size={20} />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 bg-gradient-gold bg-clip-text text-transparent">
                  Get in Touch
                </h2>
                <p className="text-foreground/80 mb-8">
                  We're here to answer your questions and connect with you. Join us in our mission to empower African youth through faith, innovation, and leadership.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="border-primary/20 bg-card/60 backdrop-blur-md">
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Mail className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email Us</h3>
                      <p className="text-foreground/70">info@thelightmission.org</p>
                      <p className="text-foreground/70">contact@thelightmission.org</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 bg-card/60 backdrop-blur-md">
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Phone className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Call Us</h3>
                      <p className="text-foreground/70">+234 7080038774</p>
                      <p className="text-foreground/70">+234 8068948132</p>
                      <p className="text-foreground/70">WhatsApp Available</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 bg-card/60 backdrop-blur-md">
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <MapPin className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Visit Us</h3>
                      <p className="text-foreground/70">Orlu, Imo State.</p>
                      <p className="text-foreground/70">Serving communities across Africa</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-primary/20 bg-gradient-to-br from-primary/10 to-primary/5">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">Office Hours</h3>
                  <p className="text-foreground/70">Monday - Friday: 9:00 AM - 5:00 PM (WAT)</p>
                  <p className="text-foreground/70">Saturday: 10:00 AM - 2:00 PM (WAT)</p>
                  <p className="text-foreground/70">Sunday: Closed</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;