import { useEffect, useState, type FormEvent } from "react";
import { Check, LogOut, ShieldCheck, Star, Trash2 } from "lucide-react";

import {
  approveReviewById,
  createAdminAccount,
  deleteReviewById,
  fetchPendingReviews,
  getStoredAdminSession,
  signInAdmin,
  signOutAdmin,
  type AdminSession,
} from "../lib/supabase";
import type { Review } from "../components/sections/Reviews/reviews.data";

import styles from "./ReviewAdmin.module.css";

const ADMIN_EMAIL = "robigo.hun@gmail.com";

interface PendingReview extends Review {
  email: string;
}

export default function ReviewAdmin() {
  const [session, setSession] = useState<AdminSession | null>(null);
  const [reviews, setReviews] = useState<PendingReview[]>([]);
  const [loading, setLoading] = useState(true);
  const [authMode, setAuthMode] = useState<"login" | "create">("login");
  const [notice, setNotice] = useState("");
  const [busyId, setBusyId] = useState<string | null>(null);

  async function loadReviews(token: string) {
    setLoading(true);

    try {
      const data = await fetchPendingReviews(token);
      setReviews((data ?? []) as PendingReview[]);
    } catch (error) {
      signOutAdmin();
      setSession(null);
      setReviews([]);
      setNotice(
        error instanceof Error
          ? error.message
          : "The pending reviews could not be loaded. Please sign in again."
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const storedSession = getStoredAdminSession();
    setSession(storedSession);
    setLoading(false);

    if (storedSession?.email.toLowerCase() === ADMIN_EMAIL) {
      void loadReviews(storedSession.accessToken);
    }
  }, []);

  async function handleAuth(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice("");

    const form = new FormData(event.currentTarget);
    const password = String(form.get("password") ?? "");

    if (authMode === "create") {
      try {
        await createAdminAccount(ADMIN_EMAIL, password);
        setNotice(
          "Admin account created. Check the ROBIGO email inbox to confirm the account, then sign in."
        );
      } catch (error) {
        setNotice(error instanceof Error ? error.message : "The admin account could not be created.");
      }
      return;
    }

    try {
      const nextSession = await signInAdmin(ADMIN_EMAIL, password);
      setSession(nextSession);
      await loadReviews(nextSession.accessToken);
    } catch (error) {
      setNotice(
        error instanceof Error
          ? error.message
          : "Incorrect password or the admin account has not been confirmed yet."
      );
    }
  }

  async function approveReview(id: string) {
    setBusyId(id);
    setNotice("");

    try {
      if (!session) throw new Error("Please sign in again before approving a review.");
      await approveReviewById(session.accessToken, id);
      await loadReviews(session.accessToken);
      setNotice("Review approved and published successfully.");
    } catch (error) {
      setNotice(error instanceof Error ? error.message : "The review could not be approved.");
    } finally {
      setBusyId(null);
    }
  }

  async function rejectReview(id: string) {
    if (!window.confirm("Permanently delete this review?")) {
      return;
    }

    setBusyId(id);
    setNotice("");

    try {
      if (!session) throw new Error("Please sign in again before deleting a review.");
      await deleteReviewById(session.accessToken, id);
      await loadReviews(session.accessToken);
      setNotice("Review deleted successfully.");
    } catch (error) {
      setNotice(error instanceof Error ? error.message : "The review could not be deleted.");
    } finally {
      setBusyId(null);
    }
  }

  function signOut() {
    signOutAdmin();
    setSession(null);
    setReviews([]);
    setNotice("");
  }

  const isAdmin = session?.email.toLowerCase() === ADMIN_EMAIL;

  if (!isAdmin) {
    return (
      <main className={styles.page}>
        <div className={styles.loginCard}>
          <span className={styles.adminIcon}>
            <ShieldCheck size={28} aria-hidden="true" />
          </span>
          <p className={styles.eyebrow}>ROBIGO private area</p>
          <h1>Review approval</h1>
          <p className={styles.intro}>
            Sign in to approve or reject customer reviews before they appear
            on the website.
          </p>

          <form onSubmit={handleAuth}>
            <label>
              Admin email
              <input value={ADMIN_EMAIL} readOnly />
            </label>

            <label>
              Password
              <input
                name="password"
                type="password"
                autoComplete={authMode === "login" ? "current-password" : "new-password"}
                minLength={8}
                required
              />
            </label>

            <button type="submit">
              {authMode === "login" ? "Sign in" : "Create admin account"}
            </button>
          </form>

          <button
            className={styles.modeButton}
            type="button"
            onClick={() => {
              setNotice("");
              setAuthMode(authMode === "login" ? "create" : "login");
            }}
          >
            {authMode === "login"
              ? "First visit? Create the admin account"
              : "Already registered? Sign in"}
          </button>

          {notice && <p className={styles.notice} role="status">{notice}</p>}
        </div>
      </main>
    );
  }

  return (
    <main className={styles.page}>
      <div className={styles.dashboard}>
        <header className={styles.dashboardHeader}>
          <div>
            <p className={styles.eyebrow}>ROBIGO administration</p>
            <h1>Pending reviews</h1>
            <p>
              Approve a review to publish it instantly, or delete it permanently.
            </p>
          </div>

          <button className={styles.signOut} type="button" onClick={signOut}>
            <LogOut size={17} aria-hidden="true" />
            Sign out
          </button>
        </header>

        {notice && <p className={styles.notice} role="status">{notice}</p>}

        {loading ? (
          <p className={styles.empty}>Loading reviews...</p>
        ) : reviews.length === 0 ? (
          <p className={styles.empty}>There are no reviews waiting for approval.</p>
        ) : (
          <div className={styles.reviewList}>
            {reviews.map((review) => (
              <article className={styles.reviewCard} key={review.id}>
                <div className={styles.cardTop}>
                  <div>
                    <h2>{review.name}</h2>
                    <p>{review.email}</p>
                  </div>
                  <div className={styles.stars} aria-label={`${review.rating} out of 5 stars`}>
                    {Array.from({ length: review.rating }).map((_, index) => (
                      <Star key={index} size={17} fill="currentColor" aria-hidden="true" />
                    ))}
                  </div>
                </div>

                <p className={styles.reviewText}>“{review.review}”</p>

                <dl>
                  <div>
                    <dt>Location</dt>
                    <dd>{review.location}</dd>
                  </div>
                  <div>
                    <dt>Service</dt>
                    <dd>{review.service}</dd>
                  </div>
                  <div>
                    <dt>Received</dt>
                    <dd>
                      {review.created_at
                        ? new Date(review.created_at).toLocaleDateString("en-GB")
                        : "—"}
                    </dd>
                  </div>
                </dl>

                <div className={styles.actions}>
                  <button
                    className={styles.approve}
                    type="button"
                    onClick={() => void approveReview(review.id)}
                    disabled={busyId === review.id}
                  >
                    <Check size={18} aria-hidden="true" />
                    {busyId === review.id ? "Publishing..." : "Approve and publish"}
                  </button>

                  <button
                    className={styles.reject}
                    type="button"
                    onClick={() => void rejectReview(review.id)}
                    disabled={busyId === review.id}
                  >
                    <Trash2 size={18} aria-hidden="true" />
                    Delete
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
