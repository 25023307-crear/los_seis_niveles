import { RootRoute, Outlet } from "@tanstack/react-router";

export const Route = new RootRoute({
  head: () => ({
    meta: [
      {
        tag: "link",
        attrs: {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
      },
      {
        tag: "link",
        attrs: {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossOrigin: "anonymous",
        },
      },
      {
        tag: "link",
        attrs: {
          href: "https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap",
          rel: "stylesheet",
        },
      },
    ],
  }),
  component: () => <Outlet />,
});
