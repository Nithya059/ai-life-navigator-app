// simple backend for GitHub users (later move to Raindrop)

export default {
  async fetch(request) {
    return new Response(JSON.stringify({
      answer: "Here is an example AI answer. Later you will replace this with Raindrop + Vultr."
    }), {
      headers: { "Content-Type": "application/json" }
    });
  }
}
