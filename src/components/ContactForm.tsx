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
    <section
      id="contactForm"
      className="py-16 my-16 sm:my-24 bg-primary dark:bg-primary/40 bg-[url('data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2228%22%20height=%2249%22%20viewBox=%220%200%2028%2049%22%3E%3Cg%20fill-rule=%22evenodd%22%3E%3Cg%20id=%22hexagons%22%20fill=%22%2384cc16%22%20fill-opacity=%220.3%22%20fill-rule=%22nonzero%22%3E%3Cpath%20d=%22M13.99%209.25l13%207.5v15l-13%207.5L1%2031.75v-15l12.99-7.5zM3%2017.9v12.7l10.99%206.34%2011-6.35V17.9l-11-6.34L3%2017.9zM0%2015l12.98-7.5V0h-2v6.35L0%2012.69v2.3zm0%2018.5L12.98%2041v8h-2v-6.85L0%2035.81v-2.3zM15%200v7.5L27.99%2015H28v-2.31h-.01L17%206.35V0h-2zm0%2049v-8l12.99-7.5H28v2.31h-.01L17%2042.15V49h-2z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat bg-fixed"
    >
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
  );
}
