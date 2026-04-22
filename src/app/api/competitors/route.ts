import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const ZAPIER_WEBHOOK_URL = process.env.ZAPIER_WEBHOOK_URL || "https://hooks.zapier.com/hooks/catch/...";
    
    // Sending to our Webhook Backend (Zapier Mock)
    console.log("Sending payload to Webhook Backend...");
    
    const zapierResponse = await fetch(ZAPIER_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body),
    });
    
    if (!zapierResponse.ok) throw new Error("Webhook backend rejected the payload");

    return NextResponse.json({ 
      success: true, 
      message: "Competitor profile tracked successfully and pushed to backend." 
    }, { status: 200 });
  } catch (error) {
    console.error("Error processing competitor submission:", error);
    return NextResponse.json({ success: false, error: "Failed to process request" }, { status: 500 });
  }
}
