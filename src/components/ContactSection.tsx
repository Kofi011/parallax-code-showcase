
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactMethods = [
    {
      label: 'Email',
      value: 'john.doe@student.upsa.edu.gh',
      color: 'from-electric-blue to-blue-600'
    },
    {
      label: 'Phone',
      value: '+233 (0) 123 456 789',
      color: 'from-syntax-green to-green-600'
    },
    {
      label: 'Location',
      value: 'Accra, Ghana',
      color: 'from-code-orange to-orange-600'
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/johndoe-it',
      color: 'from-purple-500 to-purple-700'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-tech-gray mb-4">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-electric-blue mx-auto mb-8"></div>
          <p className="text-lg text-tech-gray/70 max-w-3xl mx-auto">
            I'm always excited to discuss new opportunities, collaborate on projects, 
            or simply connect with fellow tech enthusiasts. Don't hesitate to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-tech-gray mb-6">Send me a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-tech-gray mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-electric-blue transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-tech-gray mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-electric-blue transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-tech-gray mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-electric-blue transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-tech-gray mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-electric-blue transition-colors resize-none"
                  placeholder="Tell me about your project, opportunity, or just say hello!"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-electric-blue hover:bg-electric-blue/90 text-white py-3 text-lg font-medium rounded-lg interactive-element flex items-center justify-center"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && <ArrowRight className="ml-2 w-5 h-5" />}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-tech-gray mb-6">Get in touch</h3>
              <p className="text-tech-gray/70 mb-8 leading-relaxed">
                Whether you're a potential employer, a fellow student, or someone interested in 
                collaborating on a project, I'd love to hear from you. Let's build something amazing together!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="grid gap-4">
              {contactMethods.map((method, index) => (
                <div 
                  key={method.label}
                  className={`bg-gradient-to-r ${method.color} rounded-xl p-4 text-white interactive-element`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold mb-1">{method.label}</h4>
                      <p className="text-white/90">{method.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="font-semibold text-tech-gray mb-4">Connect on social media</h4>
              <div className="flex space-x-4">
                {['GitHub', 'LinkedIn', 'Twitter', 'Portfolio'].map((platform) => (
                  <Button
                    key={platform}
                    variant="outline"
                    className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white"
                  >
                    {platform}
                  </Button>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-tech-gray to-gray-800 rounded-xl p-6 text-white text-center">
              <h4 className="font-bold mb-2">Ready to collaborate?</h4>
              <p className="text-white/90 text-sm mb-4">
                I'm always open to new opportunities and exciting projects. 
                Let's discuss how we can work together!
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {['Internships', 'Projects', 'Mentorship', 'Networking'].map((opportunity) => (
                  <span key={opportunity} className="bg-white/20 px-3 py-1 rounded-full text-xs font-medium">
                    {opportunity}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Floating decorative elements */}
        <div className="relative mt-16">
          <div className="absolute top-0 left-10 w-20 h-20 bg-electric-blue/10 rounded-full animate-float-gentle"></div>
          <div className="absolute top-10 right-20 w-16 h-16 bg-syntax-green/10 rounded-lg animate-float-gentle" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-0 left-1/3 w-12 h-12 bg-code-orange/10 rotate-45 animate-float-gentle" style={{ animationDelay: '4s' }}></div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
