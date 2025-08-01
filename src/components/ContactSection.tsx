import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Github, X, Linkedin, Mail } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
const socialLinks = [{
  name: "GitHub",
  icon: Github,
  url: "https://github.com/Chams-sat"
}, {
  name: "LinkedIn",
  icon: Linkedin,
  url: "https://www.linkedin.com/in/chams-satour-b0a489378/"
}, {
  name: "X",
  icon: X,
  url: "https://x.com/ChamsSatour"
}, {
  name: "Email",
  icon: Mail,
  url: "https://satour.chams@gmail.com"
}];
interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}
const initialFormState: FormState = {
  name: '',
  email: '',
  subject: '',
  message: ''
};
const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    toast
  } = useToast();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form submitted:', formData);

      // Show success message
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
        duration: 5000
      });

      // Reset form
      setFormData(initialFormState);
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Something went wrong",
        description: "Unable to send your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <section id="contact" className="py-16 md:py-24">
      <div className="container-section">
        <h2 className="section-heading">
          Get In Touch
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
          <div>
            <h3 className="text-2xl font-bold text-text-dark mb-4">Let's Talk</h3>
            <p className="text-slate mb-8">
              Have a project in mind or just want to say hi ?. I'd love to hear from you.
              Feel free to reach out using the contact form or through my social media.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              {socialLinks.map(link => <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 rounded-full bg-navy-light text-slate hover:text-highlight hover:bg-navy-light/80 transition-all duration-300 transform hover:-translate-y-1">
                  <link.icon size={20} />
                </a>)}
            </div>
            
            <Card className="glass p-6 bg-gradient-to-br from-navy-light to-navy-dark border-slate-dark/30">
              <h4 className="text-xl font-bold mb-2 text-text-dark">Contact Information</h4>
              <div className="space-y-3 mt-4">
                <p className="flex items-center text-slate">
                  <Mail className="mr-3 text-highlight" size={18} />
                  satour.chams@gmail.com
                </p>
                <p className="text-slate">Based in Algeria. Available for remote work worldwide.</p>
              </div>
            </Card>
          </div>
          
          <Card className="card overflow-hidden">
            <form onSubmit={handleSubmit} className="space-y-6 p-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="relative group">
                  <input id="name" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} className="bg-navy-dark/50 border-slate-dark placeholder:text-slate-dark focus:border-highlight transition-all w-full px-3 py-2 rounded" />
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-highlight group-focus-within:w-full transition-all duration-300"></span>
                </div>
                
                <div className="relative group">
                  <input id="email" name="email" type="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} className="bg-navy-dark/50 border-slate-dark placeholder:text-slate-dark focus:border-highlight transition-all w-full px-3 py-2 rounded" />
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-highlight group-focus-within:w-full transition-all duration-300"></span>
                </div>
              </div>
              
              <div className="relative group">
                <input id="subject" name="subject" placeholder="Subject" required value={formData.subject} onChange={handleChange} className="bg-navy-dark/50 border-slate-dark placeholder:text-slate-dark focus:border-highlight transition-all w-full px-3 py-2 rounded" />
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-highlight group-focus-within:w-full transition-all duration-300"></span>
              </div>
              
              <div className="relative group">
                <textarea id="message" name="message" placeholder="Your Message" required rows={6} value={formData.message} onChange={handleChange} className="bg-navy-dark/50 border-slate-dark placeholder:text-slate-dark focus:border-highlight transition-all resize-none w-full px-3 py-2 rounded" />
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-highlight group-focus-within:w-full transition-all duration-300"></span>
              </div>
              
              <Button type="submit" className="btn btn-primary w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>;
};
export default ContactSection;