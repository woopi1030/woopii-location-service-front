import { useHealthCheck } from "../hooks/useHealthCheck";

export default function HealthCheck() {
  const status = useHealthCheck();
  
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-bold">Health Status</h2>
      <p className="mt-2 text-gray-700">{status}</p>
    </div>
  );
}