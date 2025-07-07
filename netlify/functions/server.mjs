import serverless from "serverless-http";
import express from "express";
import { z } from "zod";

// Simplified schemas for Netlify
const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  organization: z.string().optional(),
  message: z.string().min(1, "Message is required")
});

const newsletterSchema = z.object({
  email: z.string().email("Invalid email address")
});

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Contact form submission - simplified for Netlify
app.post("/api/contact", async (req, res) => {
  try {
    const validatedData = contactSchema.parse(req.body);
    
    // Log the contact submission (in production, you'd send to a service)
    console.log("Contact form submission:", {
      name: validatedData.name,
      email: validatedData.email,
      organization: validatedData.organization,
      message: validatedData.message.substring(0, 100) + "...", // Truncate for logging
      timestamp: new Date().toISOString()
    });
    
    // For Netlify, we'll return success (in production, integrate with a service like Netlify Forms)
    res.json({ 
      message: "Contact form submitted successfully! We'll get back to you soon.",
      id: Date.now() // Simple ID for the response
    });
  } catch (error) {
    console.error("Contact form error:", error);
    res.status(400).json({ 
      message: error instanceof z.ZodError 
        ? "Please check your form data and try again" 
        : "Failed to submit contact form" 
    });
  }
});

// Newsletter subscription - simplified for Netlify
app.post("/api/newsletter", async (req, res) => {
  try {
    const validatedData = newsletterSchema.parse(req.body);
    
    // Log the newsletter subscription
    console.log("Newsletter subscription:", {
      email: validatedData.email,
      timestamp: new Date().toISOString()
    });
    
    // Return success response
    res.json({ 
      message: "Successfully subscribed to newsletter!",
      email: validatedData.email
    });
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    res.status(400).json({ 
      message: error instanceof z.ZodError 
        ? "Please enter a valid email address" 
        : "Failed to subscribe to newsletter" 
    });
  }
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

// Export the serverless function
export const handler = serverless(app);