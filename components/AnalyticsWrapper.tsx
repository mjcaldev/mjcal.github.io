'use client';
import { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import CookieConsent from './CookieConsent';

export default function AnalyticsWrapper() {
  const [showAnalytics, setShowAnalytics] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('analytics-consent');
    if (consent === 'true') {
      setShowAnalytics(true);
    }
  }, []);

  return (
    <>
      <CookieConsent onConsent={() => setShowAnalytics(true)} />
      {showAnalytics && <Analytics />}
    </>
  );
}
