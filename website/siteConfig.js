// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
// const users = [];

const siteConfig = {
    title: "MATRYOSHKA", // Title for your website.
    tagline: "Documentation for the Matryoshka Project",
    url: "https://docs.matryoshkadoll.me", // Your website URL
    baseUrl: "/", // Base URL for your project */
    // For github.io type URLs, you would set the url and baseUrl like:
    //   url: 'https://facebook.github.io',
    //   baseUrl: '/test-site/',

    // Used for publishing and more
    projectName: "matryoshka-docs",
    organizationName: "matryoshkadoll",
    // For top-level user or org sites, the organization is still the same.
    // e.g., for the https://JoelMarcey.github.io site, it would be set like...
    //   organizationName: 'JoelMarcey'

    // GitHub Pages CNAME file
    cname: "docs.matryoshkadoll.me",

    // "Edit this doc" button on each page
    editUrl:
        "https://github.com/matryoshkadoll/matryoshka-docs/blob/master/docs/",

    // Algolia search API
    algolia: {
        apiKey: "155140484a2f197c0b25751d4c8dd796",
        indexName: "matryoshkadoll",
        algoliaOptions: {} // Optional, if provided by Algolia
    },

    // For no header links in the top nav bar -> headerLinks: [],
    headerLinks: [
        { href: "/", label: "Home" },
        { doc: "welcome", label: "Docs" },
        { page: "help", label: "Help" },
        { href: "https://github.com/matryoshkadoll/", label: "GitHub" },
        { search: true },
        { href: "https://matryoshkadoll.me", label: "Back to Matryoshka" }
    ],

    // If you have users set above, you add it here:
    // users,

    /* path to images for header/footer */
    headerIcon: "img/Icon.svg",
    footerIcon: "img/Icon.svg",
    favicon: "img/favicon.png",

    /* Colors for website */
    colors: {
        primaryColor: "#6075E0",
        secondaryColor: "#576490"
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
    copyright: `Copyright © ${new Date().getFullYear()} Matryoshka`,

    highlight: {
        // Highlight.js theme to use for syntax highlighting in code blocks.
        theme: "tomorrow-night"
    },

    // Add custom scripts here that would be placed in <script> tags.
    scripts: [
        "https://buttons.github.io/buttons.js",
        "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js",
        "/js/code-block-buttons.js"
    ],
    stylesheets: ["/css/code-block-buttons.css"],

    // On page navigation for the current documentation page.
    onPageNav: "separate",

    // No .html extensions for paths.
    cleanUrl: true,

    // Scroll to top button
    scrollToTop: true,

    // Collapsible sidebars
    docsSideNavCollapsible: false,

    // Last updated on text
    enableUpdateBy: true,
    enableUpdateTime: true,

    // You may provide arbitrary config keys to be used as needed by your
    // template. For example, if you need your repo's URL...
    repoUrl: "https://github.com/matryoshkadoll/matryoshka-docs",
    orgUrl: "https://github.com/matryoshkadoll/"
};

module.exports = siteConfig;
