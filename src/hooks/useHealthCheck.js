import { useState, useEffect } from "react";

export function useHealthCheck() {
  const [status, setStatus] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:8080/health")
      .then((res) => res.text())
      .then(setStatus)
      .catch((err) => setStatus("Error: " + err.message));
  }, []);

  return status;
}