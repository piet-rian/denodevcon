import { Context } from "@hono";

export function Get(c: Context): Response {
  console.log("GET /rootest");

  const date = c.req.query("date");

  const typedDate = queryToType(date);

  return c.json(
    {
      status: "success",
      date: typedDate,
    },
  );
}

type DateSortOrder = "asc" | "desc";

function queryToType(date: string | undefined): DateSortOrder {
  if (date === "asc" || date === "desc") {
    return date;
  }
  return "asc";
}
