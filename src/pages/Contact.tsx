
import { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Instagram, 
  Twitter, 
  Send,
  CheckCircle 
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: '', email: '', message: '' };
    
    // Name validation
    if (formData.name.trim().length < 2) {
      newErrors.name = 'Name is required (min 2 characters)';
      valid = false;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      valid = false;
    }
    
    // Message validation
    if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
      valid = false;
    }
    
    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setFormStatus('submitting');
      
      // Simulate form submission
      setTimeout(() => {
        setFormStatus('success');
        // Reset form after successful submission
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 1500);
    }
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl md:text-5xl font-bold font-orbitron mb-2 text-center">
        <span className="text-primary">Connect</span> With Me
      </h1>
      <p className="text-center text-muted-foreground mb-20">
        Let's collaborate on your next project or just say hello!
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Contact Form */}
        <div className="bg-card p-8 rounded-xl border border-border/50 shadow-lg backdrop-blur-sm animate-fade-in">
          <h2 className="text-2xl font-orbitron font-bold mb-6 text-primary">Send a Message</h2>
          
          {formStatus === 'success' ? (
            <div className="text-center py-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-6">
                <CheckCircle size={32} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Message Sent Successfully!</h3>
              <p className="text-muted-foreground mb-6">
                Thanks for reaching out. I'll get back to you soon.
              </p>
              <button 
                onClick={() => setFormStatus('idle')}
                className="px-6 py-2 rounded-md bg-primary text-primary-foreground font-medium"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">
                  Your Name <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className={`w-full p-3 bg-secondary/50 border ${errors.name ? 'border-destructive' : 'border-border'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow`}
                />
                {errors.name && <p className="mt-2 text-sm text-destructive">{errors.name}</p>}
              </div>
              
              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">
                  Email Address <span className="text-destructive">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className={`w-full p-3 bg-secondary/50 border ${errors.email ? 'border-destructive' : 'border-border'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow`}
                />
                {errors.email && <p className="mt-2 text-sm text-destructive">{errors.email}</p>}
              </div>
              
              {/* Subject Input */}
              <div>
                <label htmlFor="subject" className="block mb-2 font-medium">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className="w-full p-3 bg-secondary/50 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                />
              </div>
              
              {/* Message Input */}
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  Message <span className="text-destructive">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  rows={5}
                  className={`w-full p-3 bg-secondary/50 border ${errors.message ? 'border-destructive' : 'border-border'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none`}
                />
                {errors.message && <p className="mt-2 text-sm text-destructive">{errors.message}</p>}
              </div>
              
              {/* Submit Button */}
              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full py-3 px-6 bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium rounded-md shadow-lg hover:shadow-xl hover:translate-y-[-2px] active:translate-y-[0px] transition-all duration-200 flex items-center justify-center"
              >
                {formStatus === 'submitting' ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} className="ml-2" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
        
        {/* Contact Information */}
        <div className="space-y-8">
          {/* Contact Info Cards */}
          <div className="bg-card p-8 rounded-xl border border-border/50 shadow-lg backdrop-blur-sm animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-2xl font-orbitron font-bold mb-6 text-accent">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <div className="p-3 bg-secondary/50 rounded-full">
                    <Mail size={20} className="text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Email</h3>
                  <p className="text-muted-foreground">contact@example.com</p>
                  <a href="mailto:contact@example.com" className="text-primary hover:text-primary/80 text-sm">
                    Send an email
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <div className="p-3 bg-secondary/50 rounded-full">
                    <Phone size={20} className="text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Phone</h3>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  <a href="tel:+15551234567" className="text-primary hover:text-primary/80 text-sm">
                    Call me
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <div className="p-3 bg-secondary/50 rounded-full">
                    <MapPin size={20} className="text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Location</h3>
                  <p className="text-muted-foreground">New York City, USA</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Social Media */}
          <div className="bg-card p-8 rounded-xl border border-border/50 shadow-lg backdrop-blur-sm animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-2xl font-orbitron font-bold mb-6 text-accent">Connect on Social Media</h2>
            
            <div className="grid grid-cols-2 gap-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors"
              >
                <Github size={24} className="mr-3 text-primary" />
                <span>GitHub</span>
              </a>
              
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors"
              >
                <Linkedin size={24} className="mr-3 text-primary" />
                <span>LinkedIn</span>
              </a>
              
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors"
              >
                <Twitter size={24} className="mr-3 text-primary" />
                <span>Twitter</span>
              </a>
              
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors"
              >
                <Instagram size={24} className="mr-3 text-primary" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
