import { Context } from "@hono";

const Heading = (props: { msg: string }) => {
  return <h1>Hello {props.msg}!</h1>;
};

const View = (props: { msg: string }) => {
  return (
    <html>
      <body>
        <Heading msg={props.msg} />
      </body>
    </html>
  );
};

export function Get(c: Context): Response | Promise<Response> {
  console.log("GET /tsx");

  const name = c.req.query("name") || "Hono TSX";

  return c.html(<View msg={name} />);
}
