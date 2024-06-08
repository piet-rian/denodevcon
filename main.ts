function handler(_req: Request): Response {
  return new Response("Hello, Deno!");
}

Deno.serve(handler);
