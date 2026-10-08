import { useEffect, useState } from "react";

/**
 * Fetches JSON from the Express API and falls back to local sample data
 * when the request fails (for example, before the server is running).
 */
export default function useApi(path, fallback = null) {
  const [data, setData] = useState(fallback);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;
    const controller = new AbortController();

    async function load() {
      try {
        const response = await fetch(path, { signal: controller.signal });
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }
        const json = await response.json();
        if (active) setData(json.data ?? json);
      } catch (err) {
        if (active && err.name !== "AbortError") setError(err);
      } finally {
        if (active) setLoading(false);
      }
    }

    load();
    return () => {
      active = false;
      controller.abort();
    };
  }, [path]);

  return { data, loading, error };
}
