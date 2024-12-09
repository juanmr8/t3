import "server-only";

import { PostHog } from "posthog-node";

function serverSideAnalytics() {
  const postHogClient = new PostHog(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    flushAt: 1,
    flushInterval: 0,
  });

  return postHogClient;
}

const analyticsServerClient = serverSideAnalytics();

export default analyticsServerClient;
