import { Context, Hono } from "@hono";

const Heading = (props: { msg: string }) => {
  return <h1>Hello {props.msg}!</h1>;
};

const View = (props: { msg: string }) => {
  return (
    <html>
      <body>
        {/* title等に対してrollupを行う機能がhonoに備わっているため、こういった具合の定義をして良い */}
        <title>{props.msg}</title>
        <Heading msg={props.msg} />
      </body>
    </html>
  );
};

// ある程度の関連性があるパス群をまとめる場合には、Honoインスタンスを分ける&exportする形が良い
// (main.ts側でapp.route("/tsx", tsxroute);のように使用する)
const localApp = new Hono();

localApp.get("/", (c: Context) => {
  const name = c.req.query("name") || "Hono TSX";

  console.log(`name: ${name}`);

  return c.html(<View msg={name} />);
});

export default localApp;
