"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [status, setStatus] = useState<any>(null);

  useEffect(() => {
    fetch("http://localhost:8000/api/health")
      .then(res => res.json())
      .then(data => setStatus(data));
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h1>Enterprise System</h1>

      <pre>
        {status ? JSON.stringify(status, null, 2) : "Loading..."}
      </pre>
    </div>
  );
}