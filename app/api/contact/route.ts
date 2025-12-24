import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Choose webhook URL based on environment
        // NOTE: In production, NODE_ENV is usually 'production'.
        // If testing locally with 'npm run dev', it is 'development'.
        const webhookUrl = process.env.NODE_ENV === "development"
            ? "https://n8n.automation.lamanify.com/webhook-test/e38415c4-1827-40f8-9a10-82f9a313876c"
            : "https://n8n.automation.lamanify.com/webhook/e38415c4-1827-40f8-9a10-82f9a313876c";

        const response = await fetch(webhookUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error(`Webhook error: ${response.status} ${response.statusText}`, errorText);
            return NextResponse.json(
                { error: "Failed to submit to webhook", status: response.status, detail: errorText },
                { status: response.status }
            );
        }

        // Attempt to parse the webhook's response body for success message/status
        let webhookResponseData = {};
        try {
            webhookResponseData = await response.json();
        } catch (jsonError) {
            // If webhook response is not JSON, or empty, proceed without it
            console.warn("Webhook response was not JSON or empty on success:", jsonError);
        }

        return NextResponse.json({ success: true, webhookStatus: response.status, webhookMessage: response.statusText, webhookData: webhookResponseData });
    } catch (error) {
        console.error("Webhook proxy error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
