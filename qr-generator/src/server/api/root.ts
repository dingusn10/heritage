import { createTRPCRouter } from "~/server/api/trpc";
import { exampleRouter } from "~/server/api/routers/qr";
import { qrRouter } from "~/server/api/routers/qr";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  qrCode: qrRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
