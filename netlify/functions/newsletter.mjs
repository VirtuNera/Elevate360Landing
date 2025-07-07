import { z } from "zod";

// Newsletter schema
const newsletterSchema = z.object({
  email: z.string().email("Invalid email address")
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
    const validatedData = newsletterSchema.parse(body);
    
    // Log the newsletter subscription
    console.log("Newsletter subscription:", {
      email: validatedData.email,
      timestamp: new Date().toISOString()
    });
    
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        message: "Successfully subscribed to newsletter!",
        email: validatedData.email
      }),
    };
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return {
      statusCode: 400,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        message: error instanceof z.ZodError 
          ? "Please enter a valid email address" 
          : "Failed to subscribe to newsletter" 
      }),
    };
  }
};