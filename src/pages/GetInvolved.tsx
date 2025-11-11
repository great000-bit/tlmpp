import VideoHero from "@/components/VideoHero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import heroImage from "@/assets/hero-getinvolved.jpg";
import { HandHeart, Users, DollarSign, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useState } from "react";

const GetInvolved = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    gender: "",
    age: "",
    location: "",
    interest: "",
    skills: "",
    availability: "",
    experience: "",
    motivation: "",
    preferredRole: "",
    commitment: "",
    reference: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const interestOptions = [
    "Mentorship & Youth Development",
    "Teaching & Training",
    "Tech Support & Development",
    "Content Creation & Media",
    "Event Planning & Management",
    "Community Outreach",
    "Administrative Support",
    "Prayer & Spiritual Support",
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formElement = e.currentTarget;
    const formDataToSend = new FormData(formElement);

    try {
      const response = await fetch("https://formspree.io/f/mvgdogay", {
        method: "POST",
        body: formDataToSend,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setShowSuccess(true);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          gender: "",
          age: "",
          location: "",
          interest: "",
          skills: "",
          availability: "",
          experience: "",
          motivation: "",
          preferredRole: "",
          commitment: "",
          reference: "",
        });
        
        // Scroll to top to show success message
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        alert("There was an error submitting the form. Please try again.");
      }
    } catch (error) {
      alert("There was an error submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* ✅ SEO & Open Graph Meta Tags */}
      <Helmet>
        <title>Get Involved | The Light Mission</title>
        <meta
          name="description"
          content="Join The Light Mission in transforming lives through volunteering, partnerships, and donations. Every contribution helps empower Africa's youth with digital and leadership skills."
        />
        <meta
          name="keywords"
          content="The Light Mission, get involved, volunteer, partner, donate, mentorship, youth empowerment, Africa, digital transformation"
        />

        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content="Get Involved | The Light Mission" />
        <meta
          property="og:description"
          content="Be part of the movement—volunteer, partner, or donate to help The Light Mission empower young people across Africa."
        />
        <meta property="og:image" content={heroImage} />
        <meta property="og:url" content="https://thelightmission.com/get-involved" />
        <meta property="og:type" content="website" />
      </Helmet>

      <VideoHero
        imageSrc={heroImage}
        title="Be the Change"
        subtitle="Every contribution makes a difference in transforming young lives"
      >
        <Button variant="hero" size="lg" asChild>
          <Link to="/contact">Start Making Impact</Link>
        </Button>
      </VideoHero>

      {/* Ways to Get Involved */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Ways to Get Involved</h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Whether you give time, resources, or expertise, your contribution fuels our mission
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: HandHeart,
                title: "Volunteer",
                description: "Share your skills and passion to mentor and train the next generation",
              },
              {
                icon: Users,
                title: "Partner",
                description: "Collaborate with us as an organization to expand our reach and impact",
              },
              {
                icon: DollarSign,
                title: "Donate",
                description: "Support our programs financially and help us empower more youth",
              },
              {
                icon: MessageSquare,
                title: "Mentor",
                description: "Guide and inspire young people on their journey to excellence",
              },
            ].map((option, index) => (
              <Card
                key={index}
                className="bg-card/60 backdrop-blur-md border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 animate-fade-in text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <option.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{option.title}</CardTitle>
                  <CardDescription>{option.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/contact">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Application Form - Sophisticated Google Form Style */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Volunteer Application Form</h2>
              <p className="text-lg text-foreground/80 mb-2">
                Join The Light Mission and help empower Africa's next generation
              </p>
              <p className="text-sm text-foreground/60">
                <span className="text-red-500">*</span> Required fields
              </p>
            </div>

            <Card className="bg-card/80 backdrop-blur-md border-primary/20 shadow-xl">
              <CardContent className="p-8 md:p-12">
                {showSuccess ? (
                  <div className="text-center py-16">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center animate-fade-in">
                      <svg
                        className="w-12 h-12 text-green-500"
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
                    </div>
                    <h3 className="text-3xl font-bold mb-4 text-foreground">Application Submitted Successfully!</h3>
                    <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
                      Thank you for your interest in volunteering with The Light Mission. 
                      We've received your application and will review it carefully. 
                      Our team will get back to you within 3-5 business days.
                    </p>
                    <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mb-8 max-w-xl mx-auto">
                      <p className="text-sm text-foreground/70">
                        <strong>What happens next?</strong><br />
                        1. Our team reviews your application<br />
                        2. We'll contact you via email for next steps<br />
                        3. You may be invited for a brief interview
                      </p>
                    </div>
                    <Button
                      variant="hero"
                      size="lg"
                      onClick={() => setShowSuccess(false)}
                    >
                      Submit Another Application
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-10">
                  {/* Personal Information Section */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-foreground border-b border-primary/20 pb-3">
                      Personal Information
                    </h3>

                    <div className="space-y-2">
                      <Label htmlFor="fullName" className="text-base font-medium">
                        Full Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        placeholder="Your full name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="bg-background border-border h-12 text-base"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-base font-medium">
                        Email Address <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-background border-border h-12 text-base"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-base font-medium">
                        Phone Number <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+234 800 000 0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-background border-border h-12 text-base"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <Label className="text-base font-medium">
                          Gender <span className="text-red-500">*</span>
                        </Label>
                        <RadioGroup
                          value={formData.gender}
                          onValueChange={(value) => setFormData({ ...formData, gender: value })}
                          required
                        >
                          <div className="flex items-center space-x-3 py-2">
                            <RadioGroupItem value="male" id="male" />
                            <Label htmlFor="male" className="font-normal cursor-pointer">Male</Label>
                          </div>
                          <div className="flex items-center space-x-3 py-2">
                            <RadioGroupItem value="female" id="female" />
                            <Label htmlFor="female" className="font-normal cursor-pointer">Female</Label>
                          </div>
                          <div className="flex items-center space-x-3 py-2">
                            <RadioGroupItem value="other" id="other" />
                            <Label htmlFor="other" className="font-normal cursor-pointer">Prefer not to say</Label>
                          </div>
                        </RadioGroup>
                        <input type="hidden" name="gender" value={formData.gender} />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="age" className="text-base font-medium">
                          Age <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="age"
                          name="age"
                          type="number"
                          placeholder="Your age"
                          value={formData.age}
                          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                          className="bg-background border-border h-12 text-base"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location" className="text-base font-medium">
                        Location (City, State, Country) <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="location"
                        name="location"
                        placeholder="e.g., Lagos, Nigeria"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="bg-background border-border h-12 text-base"
                        required
                      />
                    </div>
                  </div>

                  {/* Areas of Interest Section */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-foreground border-b border-primary/20 pb-3">
                      Area of Interest
                    </h3>
                    <div className="space-y-2">
                      <Label className="text-base font-medium">
                        Select your primary area of interest <span className="text-red-500">*</span>
                      </Label>
                      <p className="text-sm text-foreground/60 mb-4">
                        Choose one option that best matches your passion and skills
                      </p>
                      <RadioGroup
                        value={formData.interest}
                        onValueChange={(value) => setFormData({ ...formData, interest: value })}
                        required
                      >
                        {interestOptions.map((interest) => (
                          <div key={interest} className="flex items-center space-x-3 py-2">
                            <RadioGroupItem value={interest} id={interest} />
                            <Label htmlFor={interest} className="font-normal cursor-pointer">
                              {interest}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                      <input type="hidden" name="interest" value={formData.interest} />
                    </div>
                  </div>

                  {/* Skills & Experience Section */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-foreground border-b border-primary/20 pb-3">
                      Skills & Experience
                    </h3>

                    <div className="space-y-2">
                      <Label htmlFor="skills" className="text-base font-medium">
                        What skills can you bring to TLM? <span className="text-red-500">*</span>
                      </Label>
                      <p className="text-sm text-foreground/60">
                        List your relevant skills (e.g., web development, graphic design, public speaking, etc.)
                      </p>
                      <Textarea
                        id="skills"
                        name="skills"
                        placeholder="Share your skills and expertise..."
                        value={formData.skills}
                        onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                        rows={4}
                        className="bg-background border-border text-base"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="experience" className="text-base font-medium">
                        Previous volunteering or leadership experience
                      </Label>
                      <p className="text-sm text-foreground/60">
                        Tell us about any relevant experience you have
                      </p>
                      <Textarea
                        id="experience"
                        name="experience"
                        placeholder="Describe your experience..."
                        value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                        rows={4}
                        className="bg-background border-border text-base"
                      />
                    </div>
                  </div>

                  {/* Availability & Commitment Section */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-foreground border-b border-primary/20 pb-3">
                      Availability & Commitment
                    </h3>

                    <div className="space-y-2">
                      <Label htmlFor="availability" className="text-base font-medium">
                        How many hours per week can you commit? <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="availability"
                        name="availability"
                        placeholder="e.g., 5-10 hours per week"
                        value={formData.availability}
                        onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                        className="bg-background border-border h-12 text-base"
                        required
                      />
                    </div>

                    <div className="space-y-3">
                      <Label className="text-base font-medium">
                        Preferred volunteering role <span className="text-red-500">*</span>
                      </Label>
                      <RadioGroup
                        value={formData.preferredRole}
                        onValueChange={(value) => setFormData({ ...formData, preferredRole: value })}
                        required
                      >
                        <div className="flex items-center space-x-3 py-2">
                          <RadioGroupItem value="remote" id="remote" />
                          <Label htmlFor="remote" className="font-normal cursor-pointer">Remote (Online)</Label>
                        </div>
                        <div className="flex items-center space-x-3 py-2">
                          <RadioGroupItem value="onsite" id="onsite" />
                          <Label htmlFor="onsite" className="font-normal cursor-pointer">On-site (Physical location)</Label>
                        </div>
                        <div className="flex items-center space-x-3 py-2">
                          <RadioGroupItem value="hybrid" id="hybrid" />
                          <Label htmlFor="hybrid" className="font-normal cursor-pointer">Hybrid (Both)</Label>
                        </div>
                      </RadioGroup>
                      <input type="hidden" name="preferredRole" value={formData.preferredRole} />
                    </div>

                    <div className="space-y-3">
                      <Label className="text-base font-medium">
                        How long can you commit? <span className="text-red-500">*</span>
                      </Label>
                      <RadioGroup
                        value={formData.commitment}
                        onValueChange={(value) => setFormData({ ...formData, commitment: value })}
                        required
                      >
                        <div className="flex items-center space-x-3 py-2">
                          <RadioGroupItem value="1-3months" id="1-3months" />
                          <Label htmlFor="1-3months" className="font-normal cursor-pointer">1-3 months</Label>
                        </div>
                        <div className="flex items-center space-x-3 py-2">
                          <RadioGroupItem value="3-6months" id="3-6months" />
                          <Label htmlFor="3-6months" className="font-normal cursor-pointer">3-6 months</Label>
                        </div>
                        <div className="flex items-center space-x-3 py-2">
                          <RadioGroupItem value="6-12months" id="6-12months" />
                          <Label htmlFor="6-12months" className="font-normal cursor-pointer">6-12 months</Label>
                        </div>
                        <div className="flex items-center space-x-3 py-2">
                          <RadioGroupItem value="1year+" id="1year+" />
                          <Label htmlFor="1year+" className="font-normal cursor-pointer">1 year or more</Label>
                        </div>
                      </RadioGroup>
                      <input type="hidden" name="commitment" value={formData.commitment} />
                    </div>
                  </div>

                  {/* Motivation Section */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-foreground border-b border-primary/20 pb-3">
                      Your Story
                    </h3>

                    <div className="space-y-2">
                      <Label htmlFor="motivation" className="text-base font-medium">
                        Why do you want to volunteer with The Light Mission? <span className="text-red-500">*</span>
                      </Label>
                      <p className="text-sm text-foreground/60">
                        Share your motivation and what you hope to contribute
                      </p>
                      <Textarea
                        id="motivation"
                        name="motivation"
                        placeholder="Tell us your story..."
                        value={formData.motivation}
                        onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                        rows={5}
                        className="bg-background border-border text-base"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="reference" className="text-base font-medium">
                        How did you hear about us?
                      </Label>
                      <Input
                        id="reference"
                        name="reference"
                        placeholder="e.g., Social media, Friend, Church, Website, etc."
                        value={formData.reference}
                        onChange={(e) => setFormData({ ...formData, reference: e.target.value })}
                        className="bg-background border-border h-12 text-base"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6 border-t border-primary/20">
                    <Button
                      type="submit"
                      variant="hero"
                      size="lg"
                      className="w-full text-lg h-14"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Application"}
                    </Button>
                    <p className="text-sm text-center text-foreground/60 mt-4">
                      By submitting this form, you agree to our terms and conditions
                    </p>
                  </div>
                </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnership */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">Partner With Us</h2>
            <p className="text-xl text-foreground/80 mb-12">
              We collaborate with churches, NGOs, tech companies, and educational institutions to amplify our impact.
              Let's work together to transform Africa.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                "Strategic program partnerships",
                "Corporate sponsorships",
                "Resource sharing agreements",
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="bg-card/60 backdrop-blur-md border border-primary/20 rounded-lg p-6 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <p className="text-foreground/80">{benefit}</p>
                </div>
              ))}
            </div>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Explore Partnership Opportunities</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Donation CTA */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Make a Donation</h2>
          <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Your financial support helps us provide scholarships, equipment, and resources to empower youth across Africa
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">One-Time Donation</Link>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <Link to="/contact">Become a Monthly Partner</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;