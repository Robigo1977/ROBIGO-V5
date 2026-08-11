const supabaseUrl = "https://evrjuuxmmbrjkuioqrqd.supabase.co";
const publishableKey = "sb_publishable_8v0h6_JYQ3F5hill7Rph4g_u01d_F11";
const sessionKey = "robigo-review-admin-session";

export interface AdminSession {
  accessToken: string;
  email: string;
  expiresAt: number;
}

function requestHeaders(token?: string) {
  return {
    apikey: publishableKey,
    Authorization: `Bearer ${token ?? publishableKey}`,
    "Content-Type": "application/json",
  };
}

async function parseError(response: Response) {
  const body = await response.json().catch(() => null) as {
    message?: string;
    error?: string;
    error_description?: string;
    msg?: string;
  } | null;

  return body?.message ?? body?.error ?? body?.error_description ?? body?.msg ?? "Request failed";
}

export async function fetchApprovedReviews() {
  const query = new URLSearchParams({
    select: "id,name,location,service,rating,review,featured,created_at",
    approved: "eq.true",
    order: "featured.desc,created_at.desc",
  });

  const response = await fetch(
    `${supabaseUrl}/rest/v1/reviews?${query.toString()}`,
    {
      headers: requestHeaders(),
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error(await parseError(response));
  }

  return response.json();
}

export async function submitReview(payload: Record<string, unknown>) {
  const response = await fetch(`${supabaseUrl}/functions/v1/submit-review`, {
    method: "POST",
    headers: {
      apikey: publishableKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(await parseError(response));
  }
}

export function getStoredAdminSession(): AdminSession | null {
  try {
    const stored = window.localStorage.getItem(sessionKey);
    if (!stored) return null;

    const session = JSON.parse(stored) as Partial<AdminSession>;
    const valid =
      typeof session.accessToken === "string" &&
      typeof session.email === "string" &&
      typeof session.expiresAt === "number" &&
      session.expiresAt * 1000 > Date.now() + 30_000;

    if (!valid) {
      window.localStorage.removeItem(sessionKey);
      return null;
    }

    return session as AdminSession;
  } catch {
    window.localStorage.removeItem(sessionKey);
    return null;
  }
}

export async function signInAdmin(email: string, password: string) {
  const response = await fetch(
    `${supabaseUrl}/auth/v1/token?grant_type=password`,
    {
      method: "POST",
      headers: requestHeaders(),
      body: JSON.stringify({ email, password }),
    }
  );

  if (!response.ok) {
    throw new Error(await parseError(response));
  }

  const data = await response.json() as {
    access_token: string;
    expires_at?: number;
    expires_in?: number;
    user: { email?: string };
  };

  const expiresAt = data.expires_at ?? Math.floor(Date.now() / 1000) + (data.expires_in ?? 3600);
  const session: AdminSession = {
    accessToken: data.access_token,
    email: data.user.email ?? email,
    expiresAt,
  };

  window.localStorage.setItem(sessionKey, JSON.stringify(session));
  return session;
}

export async function createAdminAccount(email: string, password: string) {
  const response = await fetch(`${supabaseUrl}/auth/v1/signup`, {
    method: "POST",
    headers: requestHeaders(),
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error(await parseError(response));
  }
}

export function signOutAdmin() {
  window.localStorage.removeItem(sessionKey);
}

export async function fetchPendingReviews(token: string) {
  const query = new URLSearchParams({
    select: "id,name,email,location,service,rating,review,approved,featured,created_at",
    approved: "eq.false",
    order: "created_at.asc",
  });

  const response = await fetch(
    `${supabaseUrl}/rest/v1/reviews?${query.toString()}`,
    {
      headers: requestHeaders(token),
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error(await parseError(response));
  }

  return response.json();
}

export async function approveReviewById(token: string, id: string) {
  const query = new URLSearchParams({
    id: `eq.${id}`,
    select: "id,approved",
  });

  const response = await fetch(
    `${supabaseUrl}/rest/v1/reviews?${query.toString()}`,
    {
      method: "PATCH",
      headers: {
        ...requestHeaders(token),
        Prefer: "return=representation",
      },
      body: JSON.stringify({ approved: true }),
    }
  );

  if (!response.ok) {
    throw new Error(await parseError(response));
  }

  const rows = await response.json() as Array<{ id: string; approved: boolean }>;
  if (rows.length !== 1 || rows[0]?.id !== id || rows[0]?.approved !== true) {
    throw new Error("The approval was not saved. Please sign in again and retry.");
  }

  return rows[0];
}

export async function deleteReviewById(token: string, id: string) {
  const query = new URLSearchParams({
    id: `eq.${id}`,
    select: "id",
  });

  const response = await fetch(
    `${supabaseUrl}/rest/v1/reviews?${query.toString()}`,
    {
      method: "DELETE",
      headers: {
        ...requestHeaders(token),
        Prefer: "return=representation",
      },
    }
  );

  if (!response.ok) {
    throw new Error(await parseError(response));
  }

  const rows = await response.json() as Array<{ id: string }>;
  if (rows.length !== 1 || rows[0]?.id !== id) {
    throw new Error("The review was not deleted. Please sign in again and retry.");
  }
}
