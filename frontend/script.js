// frontend/script.js
async function askAI() {
  const question = document.getElementById("question").value || "";
  const context = document.getElementById("context") ? document.getElementById("context").value : "";

  document.getElementById("response").innerText = "Thinking...";

  try {
    const res = await fetch("https://YOUR_WORKER_SUBDOMAIN.workers.dev/api/decide", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question, context })
    });
    const data = await res.json();
    document.getElementById("response").innerText = data.answer || "No answer";
  } catch (err) {
    document.getElementById("response").innerText = "Error: " + err.message;
  }
}
