import { MiddlewareConfig } from "next/dist/build/analysis/get-page-static-info";

export { default } from "next-auth/middleware";

export const config = {
  matchers: ["/home"],
};
