import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "IrvineSoft: Test Documentation",
  description: "An experiment in what makes up a documenation website.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Derek\'s Personal Test Pages', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Derek\'s Personal Test Pages',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  base: "github.com/derekcha-irvinesoft/custom-documentation.git"
})
