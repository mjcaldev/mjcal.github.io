"use client"

import { useState } from 'react';
import { useEffect } from 'react';

export default function CookieConsent({ onConsent }: { onConsent: () => void }) {
  const [show, setShow] = useState(false);
 useEffect(() => {
    const consent = localStorage.getItem("analytics-consent");
    if (!consent) setShow(true);
    if (consent === "true") onConsent();
  }, [onConsent]);

  const handleAccept = () => {
    localStorage.setItem("analytics-consent", "true");
    setShow(false);
    onConsent();
  };

  const handleDecline = () => {
    localStorage.setItem("analytics-consent", "false");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 bg-gray-800 text-white p-4 rounded-xl shadow-lg flex flex-col sm:flex-row sm:justify-between sm:items-cente gap-4">
      <span>I am using cookies to track basic site traffic. Is that cool?</span>
      <div className="space-x-2">
        <button onClick={handleAccept} className="bg-green-500 px-3 py-1 rounded">Accept</button>
        <button onClick={handleDecline} className="bg-red-500 px-3 py-1 rounded">Decline</button>
      </div>
    </div>
  );
}