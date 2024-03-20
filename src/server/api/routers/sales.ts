import { z } from "zod";
import stackline_data from "./stackline_data.json";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const salesRouter = createTRPCRouter({
  getSales: publicProcedure.query(({ ctx }) => {
    return stackline_data;
  }),
});
