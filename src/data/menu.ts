// Central menu data. Update names, prices, images, and Toast deeplinks here.

export type MenuItem = {
  name: string;
  price: string;
  image: string;
  orderUrl: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  items: MenuItem[];
};

export const siteConfig = {
  TOAST_URL: "https://order.toasttab.com/online/hotchickenmama?utm_source=pwa_app&utm_medium=button&utm_campaign=order_online",
  toast_loyalty_url: "https://www.toasttab.com/hotchickenmama/rewardsSignup?utm_source=pwa_app&utm_medium=button&utm_campaign=join_rewards",
  toast_rewards_lookup_url: "https://www.toasttab.com/hotchickenmama/rewards?utm_source=pwa_app&utm_medium=button&utm_campaign=check_rewards",
};

// Backwards-compatible aliases used throughout the app.
const TOAST_URL = siteConfig.TOAST_URL;
const toast_loyalty_url = siteConfig.toast_loyalty_url;
const toast_rewards_lookup_url = siteConfig.toast_rewards_lookup_url;
const IMG = "nashville-lineup.jpg";

// Featured highlights shown in the streamlined home carousel.
export type FeaturedItem = MenuItem & { tag: string; description: string };

export const FEATURED: FeaturedItem[] = [
  {
    name: "Nashville Style Chicken Sandwich",
    price: "$12",
    image: "/photos/nashville-sando.jpg",
    orderUrl: TOAST_URL,
    tag: "Most Popular",
    description: "The classic Nashville style you know and love. Purple Slaw, Pickles and our house Comeback Sauce. Choose your heat!",
  },
  {
    name: "Lemon Pepper Sando",
    price: "$12",
    image: "/photos/lp-sando.jpg",
    orderUrl: TOAST_URL,
    tag: "Limited Time!",
    description: "Lemon Pepper spiced, with a creamy buttermilk sauce and Purple Slaw. Choose your heat!",
  },
  {
    name: "Honey Ranch Snack Wrap",
    price: "$8",
    image: "/photos/ranch-wrap.jpg",
    orderUrl: TOAST_URL,
    tag: "Sweet & Spiced Honey",
    description: "Sweet, Savory, and hot as you'd like it. Chopped Lettuce and Shredded Cheese. Choose your heat!",
  },
  {
    name: "Lavender Lemonade",
    price: "$5",
    image: "/photos/lavender-2.jpg",
    orderUrl: TOAST_URL,
    tag: "Ultimate Refreshment",
    description: "Our signature two-tone lemonade, unmatched refreshment. Don't forget to give it a swirl!",
  },
];

export const RESTAURANT = {
  name: "Hot Chicken Mama",
  tagline: "Nashville Roots, New York Hot Chicken.",
  address: "168 Montauk Hwy, Blue Point",
  phoneDisplay: "(631) 621-8200",
  phoneTel: "+6316218200",
  hours: "Mon–Sat: 12pm–9pm\nSun: 12pm–7pm",
  orderUrl: TOAST_URL,
  loyaltyUrl: siteConfig.toast_loyalty_url,
  rewardsLookupUrl: siteConfig.toast_rewards_lookup_url,
  instagramUrl: "https://www.instagram.com/hotchickenmama/?utm_source=pwa_app&utm_medium=button&utm_campaign=instagram",
};
