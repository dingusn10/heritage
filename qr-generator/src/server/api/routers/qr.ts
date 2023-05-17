import { z } from "zod";
import { Prisma } from "@prisma/client";
import { inferAsyncReturnType } from "@trpc/server";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});

export const qrRouter = createTRPCRouter({
  generate: publicProcedure
    .input(z.object({ path: z.string(), target: z.string(), description: z.string() }))
    .mutation(async ({input: {path, target, description}, ctx }) => {
      const qrCode = await ctx.prisma.qrCode.create({
        data: { path, target, description }
      });
      return qrCode;
    }),
})
