async function askAI() {
  const question = document.getElementById("question").value;

  const res = await fetch("https://your-backend-url/api/decide", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question })
  });

  const data = await res.json();
  document.getElementById("response").innerText = data.answer;
}
