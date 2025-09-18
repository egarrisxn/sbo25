import { useState, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "@/lib/cookies";

export function useCookies() {
  const [consent, setConsent] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = getLocalStorage("mot_cookie_consent", null);
    setConsent(stored);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (consent !== null) {
      setLocalStorage("mot_cookie_consent", consent);

      const analyticsValue = consent ? "granted" : "denied";
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("consent", "update", {
          analytics_storage: analyticsValue,
        });
      }
    }
  }, [consent]);

  return { consent, setConsent, loading };
}
