import { Context } from "@hono/hono";

const Heading = () => {
  return <h1>Hello Hono!!!</h1>;
};

const View = () => {
  return (
    <html>
      <body>
        <Heading />
      </body>
    </html>
  );
};

export function Get(c: Context): Response | Promise<Response> {
  console.log("GET /tsx");

  return c.html(<View />);
}
