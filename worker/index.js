/* worker/index.js
   Cloudflare Worker simple AI endpoint (POST /api/decide)
*/
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: { "Access-Control-Allow-Origin":"*", "Access-Control-Allow-Methods":"GET,POST,OPTIONS", "Access-Control-Allow-Headers":"Content-Type" }});
    }

    if (url.pathname.endsWith("/api/decide") && request.method === "POST") {
      try {
        const body = await request.json();
        const question = body.question || "";
        const context = body.context || "";

        // TODO: Replace this block with call to Raindrop/Vultr AI
        const answer = `Mock AI reply for: "${question}".\n\nQuick plan:\n1) Clarify your goal.\n2) Pick one small action for next 7 days.\n3) Track progress and re-evaluate.`;

        // Example of later use: call external API using env.API_KEY
        // const ai = await fetch("https://api.provider/...", { headers: { Authorization: `Bearer ${env.PROVIDER_KEY}` }, body: JSON.stringify({prompt:question}) });

        return new Response(JSON.stringify({ answer }), {
          status: 200,
          headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
        });
      } catch (err) {
        return new Response(JSON.stringify({ error: err.toString() }), { status: 500, headers: { "Content-Type":"application/json", "Access-Control-Allow-Origin":"*" }});
      }
    }

    return new Response("Not found", { status: 404 });
  }
        }
