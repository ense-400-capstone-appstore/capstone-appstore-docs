// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
// const users = [];

const siteConfig = {
    title: "Capstone Appstore", // Title for your website.
    tagline: "Documentation for the Capstone Appstore Project",
    url: "https://your-docusaurus-test-site.com", // Your website URL
    baseUrl: "/", // Base URL for your project */
    // For github.io type URLs, you would set the url and baseUrl like:
    //   url: 'https://facebook.github.io',
    //   baseUrl: '/test-site/',

    // Used for publishing and more
    projectName: "capstone-appstore-docs",
    organizationName: "capstone-appstore",
    // For top-level user or org sites, the organization is still the same.
    // e.g., for the https://JoelMarcey.github.io site, it would be set like...
    //   organizationName: 'JoelMarcey'

    // For no header links in the top nav bar -> headerLinks: [],
    headerLinks: [
        { page: "index", label: "Home" },
        { doc: "doc1", label: "Docs" },
        { page: "help", label: "Help" }
    ],

    // If you have users set above, you add it here:
    // users,

    /* path to images for header/footer */
    // headerIcon: "img/docusaurus.svg",
    // footerIcon: "img/docusaurus.svg",
    // favicon: "img/favicon.png",

    /* Colors for website */
    colors: {
        primaryColor: "#2E8555",
        secondaryColor: "#205C3B"
    },

    /* Custom fonts for website */
    /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

    // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
    copyright: `Copyright © ${new Date().getFullYear()} Capstone Appstore`,

    highlight: {
        // Highlight.js theme to use for syntax highlighting in code blocks.
        theme: "default"
    },

    // Add custom scripts here that would be placed in <script> tags.
    scripts: ["https://buttons.github.io/buttons.js"],

    // On page navigation for the current documentation page.
    onPageNav: "separate",
    // No .html extensions for paths.
    cleanUrl: true,

    // Open Graph and Twitter card images.
    ogImage: "img/docusaurus.png",
    twitterImage: "img/docusaurus.png"

    // You may provide arbitrary config keys to be used as needed by your
    // template. For example, if you need your repo's URL...
    //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
