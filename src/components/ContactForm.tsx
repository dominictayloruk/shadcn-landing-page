'use client';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { AnimatedBackground } from '@/components/AnimatedBackground';

// Schema for contact form validation
const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters long' }),
  email: z.string().email({ message: 'Invalid email address' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters long' }),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // Simulate a successful contact form submission
      console.log(values);
      toast.success('Your message has been sent successfully!');
    } catch (error) {
      console.error('Error submitting contact form', error);
      toast.error('Failed to send your message. Please try again.');
    }
  }

  return (
    <AnimatedBackground className="py-16 my-16 sm:my-24">
      <section id="contactForm">
        <div className="flex min-h-[60vh] h-full w-full items-center justify-center px-4">
          <Card className="mx-auto max-w-lg">
            <CardHeader>
              <CardTitle className="text-3xl md:text-4xl font-bold text-center">
                Get in
                <span className="bg-gradient-to-r from-primary/60 to-primary text-transparent bg-clip-text">
                  {' '}
                  Contact{' '}
                </span>
                with us
              </CardTitle>
              <CardDescription className="text-center">
                Please fill out the form below and we will get back to you shortly.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form form={form} onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid gap-4">
                  {/* Name Field */}
                  <FormField
                    name="name"
                    render={({ field }) => (
                      <FormItem className="grid gap-2">
                        <FormLabel htmlFor="name">Name</FormLabel>
                        <FormControl>
                          <Input
                            id="name"
                            placeholder="John Doe"
                            type="text"
                            autoComplete="name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Email Field */}
                  <FormField
                    name="email"
                    render={({ field }) => (
                      <FormItem className="grid gap-2">
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <FormControl>
                          <Input
                            id="email"
                            placeholder="johndoe@mail.com"
                            type="email"
                            autoComplete="email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Message Field */}
                  <FormField
                    name="message"
                    render={({ field }) => (
                      <FormItem className="grid gap-2">
                        <FormLabel htmlFor="message">Message</FormLabel>
                        <FormControl>
                          <Textarea
                            id="message"
                            placeholder="Your message..."
                            autoComplete="off"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </div>
              </Form>
            </CardContent>
          </Card>
        </div>
      </section>
    </AnimatedBackground>
  );
}
