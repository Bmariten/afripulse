
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import PulseButton from '@/components/ui/PulseButton';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, CheckIcon, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

// Define form schema with validation
const formSchema = z.object({
  fullName: z.string().min(2, { message: 'Full name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().min(10, { message: 'Phone number must be at least 10 digits' }),
  linkedInUrl: z.string().url({ message: 'Please enter a valid LinkedIn URL' }).optional().or(z.literal('')),
  location: z.string().min(2, { message: 'Please enter your location' }),
  marketingExperience: z.enum(['none', 'some', 'experienced'], {
    required_error: 'Please select your experience level',
  }),
  goals: z.string().min(10, { message: 'Please tell us more about your goals' }).max(500, { message: 'Maximum 500 characters' }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      linkedInUrl: '',
      location: '',
      marketingExperience: 'none',
      goals: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    // In a real implementation, this would send the data to a server or email service
    console.log('Form submitted with data:', data);
    
    // Simulate API call with a timeout
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Show success toast
    toast({
      title: "Application Submitted!",
      description: "We'll review your details and get back to you shortly.",
      variant: "default",
    });
    
    // Reset form
    form.reset();
  };

  return (
    <div className="min-h-screen bg-afrinova-black text-white py-16 px-4">
      <div className="container max-w-3xl mx-auto">
        <Link to="/" className="inline-flex items-center text-afrinova-neon hover:underline mb-8">
          <ArrowLeft size={16} className="mr-2" />
          Back to Home
        </Link>
        
        <div className="glass-card p-8 rounded-xl border border-afrinova-neon/20">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-afrinova-neon to-afrinova-gold bg-clip-text text-transparent mb-4">
              Join AfriPulse
            </h1>
            <p className="text-gray-300 max-w-xl mx-auto">
              Take the first step towards financial independence. Fill out the form below to apply for our affiliate marketing program.
            </p>
          </div>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-afrinova-gold">Personal Information</h2>
                
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Full Name*</FormLabel>
                      <FormControl>
                        <Input placeholder="Your full name" {...field} className="bg-gray-900 border-gray-700 text-white" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Email Address*</FormLabel>
                        <FormControl>
                          <Input placeholder="your.email@example.com" {...field} className="bg-gray-900 border-gray-700 text-white" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Phone Number*</FormLabel>
                        <FormControl>
                          <Input placeholder="+254 7XX XXX XXX" {...field} className="bg-gray-900 border-gray-700 text-white" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="linkedInUrl"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">LinkedIn Profile URL (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="https://linkedin.com/in/yourusername" {...field} className="bg-gray-900 border-gray-700 text-white" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Location*</FormLabel>
                        <FormControl>
                          <Input placeholder="City, Country" {...field} className="bg-gray-900 border-gray-700 text-white" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              
              {/* Experience & Goals */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-afrinova-gold">Experience & Goals</h2>
                
                <FormField
                  control={form.control}
                  name="marketingExperience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Marketing Experience*</FormLabel>
                      <FormControl>
                        <select 
                          {...field}
                          className="flex h-10 w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-base text-white ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                        >
                          <option value="none">No experience (I'm new to this)</option>
                          <option value="some">Some experience (I've tried marketing before)</option>
                          <option value="experienced">Experienced (I've worked in marketing)</option>
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="goals"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">
                        What are your goals with AfriPulse?*
                      </FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about what you hope to achieve..." 
                          {...field} 
                          className="bg-gray-900 border-gray-700 text-white min-h-[120px]" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="pt-4 flex justify-center">
                <PulseButton type="submit" variant="neon" className="w-full max-w-xs flex items-center justify-center gap-2">
                  <Send size={18} />
                  Submit Application
                </PulseButton>
              </div>
              
              <div className="text-center text-sm text-gray-400 mt-6">
                <div className="flex items-center justify-center mb-2">
                  <CheckIcon size={16} className="text-afrinova-neon mr-2" />
                  <span>Your information is secure and will never be shared.</span>
                </div>
                <p>By submitting, you agree to our Terms of Service and Privacy Policy.</p>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
