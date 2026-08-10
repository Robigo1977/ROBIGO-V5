const supabaseUrl = "https://evrjuuxmmbrjkuioqrqd.supabase.co";
const publishableKey = "sb_publishable_8v0h6_JYQ3F5hill7Rph4g_u01d_F11";
const sessionKey = "robigo-review-admin-session";

export interface AdminSession {
  accessToken: string;
  email: string;
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
    error_description?: string;
    msg?: string;
  } | null;

  return body?.message ?? body?.error_description ?? body?.msg ?? "Request failed";
}

export async function fetchApprovedReviews() {
  const query = new URLSearchParams({
    select: "id,name,location,service,rating,review,featured,created_at",
    approved: "eq.true",
    order: "featured.desc,created_at.desc",
  });

  const response = await fetch(
    `${supabaseUrl}/rest/v1/reviews?${query.toString()}`,
    { headers: requestHeaders() }
  );

  if (!response.ok) {
    throw new Error(await parseError(response));
  }

  return response.json();
}

export async function submitReview(payload: Record<string, unknown>) {
  const response = await fetch(`${supabaseUrl}/rest/v1/reviews`, {
    method: "POST",
    headers: {
      ...requestHeaders(),
      Prefer: "return=minimal",
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
    return stored ? JSON.parse(stored) as AdminSession : null;
  } catch {
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
    user: { email?: string };
  };

  const session: AdminSession = {
    accessToken: data.access_token,
    email: data.user.email ?? email,
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
    { headers: requestHeaders(token) }
  );

  if (!response.ok) {
    throw new Error(await parseError(response));
  }

  return response.json();
}

export async function approveReviewById(token: string, id: string) {
  const response = await fetch(
    `${supabaseUrl}/rest/v1/reviews?id=eq.${encodeURIComponent(id)}`,
    {
      method: "PATCH",
      headers: {
        ...requestHeaders(token),
        Prefer: "return=minimal",
      },
      body: JSON.stringify({ approved: true }),
    }
  );

  if (!response.ok) {
    throw new Error(await parseError(response));
  }
}

export async function deleteReviewById(token: string, id: string) {
  const response = await fetch(
    `${supabaseUrl}/rest/v1/reviews?id=eq.${encodeURIComponent(id)}`,
    {
      method: "DELETE",
      headers: requestHeaders(token),
    }
  );

  if (!response.ok) {
    throw new Error(await parseError(response));
  }
}
