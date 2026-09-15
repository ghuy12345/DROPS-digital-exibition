(function (window) {
  "use strict";

  var config = window.POSTHOG_CONFIG || {};
  var key = config.projectToken;
  var host = config.host;
  var isDevelopment = /^(localhost|127\.0\.0\.1)$/.test(window.location.hostname);

  function requireConfiguration(name, value) {
    if (value) return true;
    if (isDevelopment) {
      throw new Error(
        name + " variable required by PostHog is missing or un-configured, this causes events to be silently missed. This error stops appearing once " + name + " is configured"
      );
    }
    return false;
  }

  if (!requireConfiguration("VITE_POSTHOG_PROJECT_TOKEN", key) || !requireConfiguration("VITE_POSTHOG_HOST", host)) return;

  var script = document.createElement("script");
  script.async = true;
  script.src = new URL("/static/array.js", host).toString();
  script.onload = function () {
    window.posthog.init(key, {
      api_host: host,
      capture_exceptions: {
        capture_unhandled_errors: true,
        capture_unhandled_rejections: true,
        capture_console_errors: false
      }
    });
    window.dispatchEvent(new Event("posthog:ready"));
  };
  document.head.appendChild(script);
})(window);
