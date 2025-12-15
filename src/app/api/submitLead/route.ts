import { NextRequest, NextResponse } from "next/server";

interface LeadData {
  fullName: string;
  phone: string;
  email: string;
  gender: string;
  date: string;
  area: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: LeadData = await request.json();

    // Log the form data (in production, you'd save this to a database)
    console.log("═══════════════════════════════════════════════════════════");
    console.log("🏋️ NEW LEAD SUBMISSION - M&Y Fitness Club");
    console.log("═══════════════════════════════════════════════════════════");
    console.log(`📅 Timestamp: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}`);
    console.log("───────────────────────────────────────────────────────────");
    console.log(`👤 Full Name: ${data.fullName}`);
    console.log(`📱 Phone: ${data.phone}`);
    console.log(`📧 Email: ${data.email}`);
    console.log(`⚧️ Gender: ${data.gender}`);
    console.log(`📆 Preferred Date: ${data.date}`);
    console.log(`📍 Area: ${data.area}`);
    console.log("═══════════════════════════════════════════════════════════");

    // Validate required fields
    if (!data.fullName || !data.phone || !data.email || !data.gender || !data.date || !data.area) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate phone number (Indian format)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(data.phone)) {
      return NextResponse.json(
        { success: false, message: "Invalid phone number" },
        { status: 400 }
      );
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email address" },
        { status: 400 }
      );
    }

    // Return success response
    return NextResponse.json({
      success: true,
      message: "Lead submitted successfully! Our team will contact you shortly.",
      data: {
        id: `LEAD_${Date.now()}`,
        ...data,
        submittedAt: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error("Error processing lead submission:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: "M&Y Fitness Club Lead API",
    endpoints: {
      POST: "Submit a new lead with form data",
    },
  });
}


