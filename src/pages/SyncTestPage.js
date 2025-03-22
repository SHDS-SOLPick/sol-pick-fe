import React, { useState } from "react";
import RecipickSyncApi from "../api/RecipickSyncApi";

const SyncTestPage = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleTestSync = async () => {
    setLoading(true);
    try {
      const syncResult = await RecipickSyncApi.syncRecipickOrders();
      setResult(syncResult);
      console.log("동기화 결과:", syncResult);
    } catch (error) {
      console.error("동기화 테스트 오류:", error);
      setResult({ error: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>레시픽 동기화 테스트</h1>

      <button
        onClick={handleTestSync}
        disabled={loading}
        style={{ padding: "10px 20px", marginBottom: "20px" }}
      >
        {loading ? "동기화 중..." : "동기화 테스트"}
      </button>

      {result && (
        <div>
          <h2>테스트 결과:</h2>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default SyncTestPage;
