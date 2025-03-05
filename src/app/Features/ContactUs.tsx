"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Textarea } from "@/components/ui/textarea";

const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(5, "First name must be at least 5 characters")
    .max(50),
  lastName: z
    .string()
    .min(5, "Last name must be at least 5 characters")
    .max(50),
  contact: z
    .string()
    .length(10, "Contact must be exactly 10 digits")
    .regex(/^\d+$/, "Contact must contain only numbers"),
  email: z
    .string()
    .min(8, { message: "Email must be at least 8 characters." })
    .email({ message: "Invalid email address" })
    .trim(),
  description: z
    .string()
    .min(50, { message: "Message should be at least 50 characters." })
    .max(500, { message: "Message should not exceed 500 characters." }),
});

const ContactUs = () => {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      contact: "",
      email: "",
      description: "",
    },
  });

  function onSubmit(values: z.infer<typeof contactFormSchema>) {
    console.log(values);
  }

  return (
    <div id="contact" className="bg-white py-4">
      <h1 className="text-center text-3xl text-red-700 font-bold">
        Get In Touch With Us
      </h1>
      <div className="flex flex-col items-center justify-center lg:flex-row gap-8 p-6 mx-20">
        {/* Left Side: Form */}
        <div className="w-full lg:w-1/2">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="text-xl">First Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="First Name"
                        {...field}
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="text-xl">Last Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Last Name"
                        {...field}
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="contact"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="text-xl">Contact Number</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="+977 XXXXXXXXXX"
                        {...field}
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel className="text-xl">Email Address</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="eg@gmail.com"
                        {...field}
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Text Area for Message and Enquiry */}
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem className="sm:col-span-2 space-y-2">
                    <FormLabel className="text-xl">
                      Message or Enquiry
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Type your message here."
                        {...field}
                        className="w-full min-h-[120px]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Submit Button */}
              <div className="sm:col-span-2 py-4">
                <Button
                  type="submit"
                  className="bg-green-500 text-white md:h-12 w-32 text-lg hover:bg-green-700 cursor-pointer"
                >
                  Submit
                </Button>
              </div>
            </form>
          </Form>
        </div>

        {/* Right Side: Map */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <iframe
            className="w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl shadow-lg"
            title="Map showing our location"
            aria-label="Map of our location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4206.777660175356!2d87.14940915450742!3d26.609492589089264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef123b6c15db5d%3A0x8c9cae14fd19a5fb!2sJanak%20Smriti%20Secondary%20School!5e0!3m2!1sen!2snp!4v1740983035192!5m2!1sen!2snp"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
