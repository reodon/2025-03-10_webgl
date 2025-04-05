import { serve } from "https://deno.land/std@0.181.0/http/server.ts";

const handler = (req: Request): Response => {
  return new Response("Hello Worldn", { status: 200 });
};

console.log("Server running at http://localhost:3000/");
await serve(handler, { port: 3000 });
