import { z } from "zod";

// Contact form schema
const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  organization: z.string().optional(),
  message: z.string().min(1, "Message is required")
});

export const handler = async (event, context) => {
  // Handle CORS preflight
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: "",
    };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ message: "Method not allowed" }),
    };
  }

  try {
    const body = JSON.parse(event.body);
    const validatedData = contactSchema.parse(body);
    
    // Log the contact submission
    console.log("Contact form submission:", {
      name: validatedData.name,
      email: validatedData.email,
      organization: validatedData.organization,
      message: validatedData.message.substring(0, 100) + "...",
      timestamp: new Date().toISOString()
    });
    
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        message: "Contact form submitted successfully! We'll get back to you soon.",
        id: Date.now()
      }),
    };
  } catch (error) {
    console.error("Contact form error:", error);
    return {
      statusCode: 400,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        message: error instanceof z.ZodError 
          ? "Please check your form data and try again" 
          : "Failed to submit contact form" 
      }),
    };
  }
};