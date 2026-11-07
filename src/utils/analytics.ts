/**
 * Analytics Utility for Meta Pixel and Google Analytics 4 (GA4)
 * Official Meta Pixel ID: 1138714025515674
 */

// Configured with official Meta Pixel ID; can also be overridden via environment variables
const env = (typeof import.meta !== "undefined" && (import.meta as any).env) || {};
export const META_PIXEL_ID: string = env.VITE_META_PIXEL_ID || "1138714025515674";
export const GA_MEASUREMENT_ID: string = env.VITE_GA_MEASUREMENT_ID || "";

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
    _fbq?: any;
  }
}

/**
 * Flag to prevent duplicate initial PageView calls when base script in index.html has already tracked it.
 */
let initialPageViewTrackedByHead = true;

/**
 * Initializes GA4 and Meta Pixel dynamically if not already initialized via HTML head
 */
export function initAnalytics() {
  if (typeof window === "undefined") return;

  // Google Analytics 4
  if (GA_MEASUREMENT_ID && !window.gtag) {
    const gaScript = document.createElement("script");
    gaScript.async = true;
    gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(gaScript);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer?.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", GA_MEASUREMENT_ID, {
      send_page_view: true
    });
  }

  // Meta Pixel fallback: only initialize if not already present in HTML <head>
  // Prevents duplicate pixel initialization errors in Meta Pixel Helper
  if (META_PIXEL_ID && typeof window.fbq !== "function") {
    (function (f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");

    const fb = (window as any).fbq;
    if (typeof fb === "function") {
      fb("init", META_PIXEL_ID);
      fb("track", "PageView");
    }
    initialPageViewTrackedByHead = true;
  }
}

/**
 * Track PageView event
 * Handles SPA navigation while preventing duplicate events on initial load
 */
export function trackPageView(pageName: string = "Home") {
  if (typeof window !== "undefined") {
    if (window.gtag && GA_MEASUREMENT_ID) {
      window.gtag("event", "page_view", {
        page_title: pageName,
        page_location: window.location.href,
        page_path: window.location.pathname
      });
    }

    if (typeof window.fbq === "function") {
      if (!initialPageViewTrackedByHead) {
        window.fbq("track", "PageView");
      } else {
        // First PageView was already recorded on initial HTML parse in <head>
        initialPageViewTrackedByHead = false;
      }
    }
  }
}

/**
 * Track ViewContent event (when user views key product sections / gallery)
 */
export function trackViewContent(contentName: string, contentCategory: string = "Business Research Guide") {
  if (typeof window !== "undefined") {
    if (window.gtag && GA_MEASUREMENT_ID) {
      window.gtag("event", "view_item", {
        item_id: "2027-business-opportunity-blueprint",
        item_name: "2027 Business Opportunity Blueprint",
        item_category: contentCategory,
        price: 149,
        currency: "INR"
      });
    }
    if (typeof window.fbq === "function") {
      window.fbq("track", "ViewContent", {
        content_name: contentName,
        content_category: contentCategory,
        content_ids: ["2027-business-opportunity-blueprint"],
        content_type: "product",
        value: 149,
        currency: "INR"
      });
    }
  }
}

/**
 * Track InitiateCheckout event when the user clicks any purchase / Buy Now CTA
 * NOTE: Strictly tracks InitiateCheckout, NOT Purchase (Purchase is handled on SuperProfile post-payment)
 */
export function trackInitiateCheckout(location: string = "Hero CTA") {
  if (typeof window !== "undefined") {
    if (window.gtag && GA_MEASUREMENT_ID) {
      window.gtag("event", "begin_checkout", {
        currency: "INR",
        value: 149,
        items: [
          {
            item_id: "2027-business-opportunity-blueprint",
            item_name: "2027 Business Opportunity Blueprint",
            price: 149,
            quantity: 1
          }
        ],
        cta_location: location
      });
    }
    if (typeof window.fbq === "function") {
      window.fbq("track", "InitiateCheckout", {
        content_name: "2027 Business Opportunity Blueprint",
        content_category: "Business Research Guide",
        content_ids: ["2027-business-opportunity-blueprint"],
        content_type: "product",
        value: 149,
        currency: "INR",
        num_items: 1,
        cta_location: location
      });
    }
  }
}
