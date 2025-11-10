import React from 'react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Github, X, Linkedin, Mail } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

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
  url: "mailto:satour.chams@gmail.com"
}];

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    // Here you would typically send the data to a backend service
    // e.g., using fetch, axios, or a library like react-query's useMutation

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form submitted:', data);

      // Show success message
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
        duration: 5000,
      });

      // Reset form
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Something went wrong",
        description: "Unable to send your message. Please try again.",
        variant: "destructive",
      });
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
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="relative group">
                  <input id="name" placeholder="Your Name" {...register("name")} className="bg-navy-dark/50 border-slate-dark placeholder:text-slate-dark focus:border-highlight transition-all w-full px-3 py-2 rounded" />
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-highlight group-focus-within:w-full transition-all duration-300"></span>
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>
                
                <div className="relative group">
                  <input id="email" type="email" placeholder="Your Email" {...register("email")} className="bg-navy-dark/50 border-slate-dark placeholder:text-slate-dark focus:border-highlight transition-all w-full px-3 py-2 rounded" />
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-highlight group-focus-within:w-full transition-all duration-300"></span>
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
              </div>
              
              <div className="relative group">
                <input id="subject" placeholder="Subject" {...register("subject")} className="bg-navy-dark/50 border-slate-dark placeholder:text-slate-dark focus:border-highlight transition-all w-full px-3 py-2 rounded" />
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-highlight group-focus-within:w-full transition-all duration-300"></span>
                {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
              </div>
              
              <div className="relative group">
                <textarea id="message" placeholder="Your Message" rows={6} {...register("message")} className="bg-navy-dark/50 border-slate-dark placeholder:text-slate-dark focus:border-highlight transition-all resize-none w-full px-3 py-2 rounded" />
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-highlight group-focus-within:w-full transition-all duration-300"></span>
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
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