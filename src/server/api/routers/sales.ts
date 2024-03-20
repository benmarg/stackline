import stackline_data from "./stackline_data.json";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const salesRouter = createTRPCRouter({
  getSales: publicProcedure.query(({}) => {
    return stackline_data;
  }),
});
