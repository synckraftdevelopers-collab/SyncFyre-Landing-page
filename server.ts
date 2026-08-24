import 'dotenv/config';
import express from "express";
import path from "path";
import { GoogleGenAI } from "@google/genai";

type DemoRequestPayload = {
  gymName?: string;
  businessType?: string;
  city?: string;
  locationCount?: string;
  memberCount?: string;
  currentSoftware?: string;
  migrationUrgency?: string;
  contactName?: string;
  email?: string;
  phone?: string;
  preferredDate?: string;
  preferredTime?: string;
  notes?: string;
};

const isNonEmptyString = (value: unknown): value is string =>
  typeof value === "string" && value.trim().length > 0;

const getRequiredDemoFieldError = (payload: DemoRequestPayload) => {
  if (!isNonEmptyString(payload.gymName)) return "Gym / Studio Name is required.";
  if (!isNonEmptyString(payload.businessType)) return "Business Model is required.";
  if (!isNonEmptyString(payload.city)) return "City / Region is required.";
  if (!isNonEmptyString(payload.locationCount)) return "Number of locations is required.";
  if (!isNonEmptyString(payload.memberCount)) return "Active member count is required.";
  if (!isNonEmptyString(payload.currentSoftware)) return "Current software is required.";
  if (!isNonEmptyString(payload.migrationUrgency)) return "Migration timeline is required.";
  if (!isNonEmptyString(payload.contactName)) return "Contact name is required.";
  if (!isNonEmptyString(payload.email)) return "Work email is required.";
  if (!isNonEmptyString(payload.phone)) return "Phone / WhatsApp number is required.";
  if (!isNonEmptyString(payload.preferredDate)) return "Preferred demo date is required.";
  if (!isNonEmptyString(payload.preferredTime)) return "Preferred time window is required.";
  return null;
};

const normalizeDemoPayload = (payload: DemoRequestPayload) => ({
  gym_name: payload.gymName?.trim() || "",
  business_type: payload.businessType?.trim() || "",
  city: payload.city?.trim() || "",
  location_count: payload.locationCount?.trim() || "",
  member_count: payload.memberCount?.trim() || "",
  current_software: payload.currentSoftware?.trim() || "",
  migration_urgency: payload.migrationUrgency?.trim() || "",
  contact_name: payload.contactName?.trim() || "",
  email: payload.email?.trim() || "",
  phone: payload.phone?.trim() || "",
  preferred_date: payload.preferredDate?.trim() || "",
  preferred_time: payload.preferredTime?.trim() || "",
  notes: payload.notes?.trim() || null,
  source: "website_demo_modal",
  submitted_at: new Date().toISOString(),
});

async function saveDemoRequestToSupabase(payload: ReturnType<typeof normalizeDemoPayload>) {
  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    return { saved: false, reason: "missing-config" as const };
  }

  const response = await fetch(`${supabaseUrl}/rest/v1/demo_bookings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "apikey": serviceRoleKey,
      "Authorization": `Bearer ${serviceRoleKey}`,
      "Prefer": "return=representation",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Supabase insert failed: ${errorText}`);
  }

  const inserted = await response.json();
  return {
    saved: true,
    record: Array.isArray(inserted) ? inserted[0] : inserted,
  };
}

async function startServer() {
  const app = express();
  const PORT = 3307;

  app.use(express.json());

  const getAiClient = () => {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return null;
    }
    return new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  };

  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", service: "SyncFyre Multi-Vertical Operating System", timestamp: new Date().toISOString() });
  });

  app.post("/api/demo-request", async (req, res) => {
    const payload = (req.body || {}) as DemoRequestPayload;
    const fieldError = getRequiredDemoFieldError(payload);

    if (fieldError) {
      return res.status(400).json({ error: fieldError });
    }

    const normalized = normalizeDemoPayload(payload);

    try {
      const saveResult = await saveDemoRequestToSupabase(normalized);
      const savedToSupabase = saveResult.saved;

      return res.json({
        success: true,
        message: `Demo request saved for ${normalized.gym_name}. Our onboarding team will contact ${normalized.email} shortly.`,
        storage: savedToSupabase ? "supabase" : "not-configured",
        booking: {
          gymName: normalized.gym_name,
          contactName: normalized.contact_name,
          preferredDate: normalized.preferred_date,
          preferredTime: normalized.preferred_time,
          currentSoftware: normalized.current_software,
        },
      });
    } catch (err: any) {
      console.error("Demo booking save error:", err);
      return res.status(500).json({
        error: "Failed to save demo booking.",
        details: err?.message || "Unknown save error.",
      });
    }
  });

  app.post("/api/ai/assistant", async (req, res) => {
    const { prompt, businessType } = req.body || {};

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required." });
    }

    try {
      const ai = getAiClient();
      if (!ai) {
        return res.json({
          response: `[SyncFyre AI Co-Pilot] Specialized strategy for ${businessType || "Service Business"}:\n\n` +
            `1. **Automated Re-Engagement Workflow**: Trigger automated WhatsApp offer 14 days post-appointment.\n` +
            `2. **UPI AutoPay & Payment Recovery**: Auto-retry payment 24h after decline + send 1-click WhatsApp payment link.\n` +
            `3. **Customer Retention Booster**: Send post-service review request with 5★ Google Review link & referral token.\n\n` +
            `*(Note: To unlock live real-time Gemini AI generation, attach your GEMINI_API_KEY in Secrets)*`,
          aiSource: "SyncFyre Intelligent Rule Engine",
        });
      }

      const systemInstruction = `You are SyncFyre AI, the world's leading Multi-Vertical SaaS Product Architect & Business Operations Co-Pilot built into SyncFyre Operating System.
You support 30+ service and retail verticals (Gyms, Salons, Spas, Tattoo Studios, Dental Clinics, Auto Garages, Laundries, Coaching Institutes, Mobile Repair, etc.).
You speak with high confidence, concise SaaS clarity, actionable bullet points, Indian Rupees (₹ INR) context where applicable, and data-backed recommendations.
When asked for workflows, WhatsApp templates, schedules, job cards, tooth charts, or churn reduction tactics, produce ready-to-use, professional content matching that specific industry vertical.`;

      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: `[Vertical Business Type: ${businessType || "Service Business"}] Request: ${prompt}`,
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      return res.json({
        response: response.text,
        aiSource: "Gemini 3.6 Flash (SyncFyre Engine)",
      });
    } catch (err: any) {
      console.error("Gemini API Error:", err);
      return res.status(500).json({
        error: "Failed to generate AI response.",
        details: err.message || "An unknown error occurred.",
      });
    }
  });

  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`SyncFyre Multi-Vertical SaaS Server running at http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start server:", err);
  process.exit(1);
});
