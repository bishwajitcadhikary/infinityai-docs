import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <>
    <img src="/images/logo-dark.png" alt="logo" className="logo-light"/>
    <img src="/images/logo.png" alt="logo" className="logo-dark"/>
  </>,
  useNextSeoProps() {
    return {
      titleTemplate: '%s – InfinityAI'
    }
  },
  project: {
    icon: (
        <>
          <img src="/images/wrap-bootstrap.png" alt="logo" width={50} />
        </>
    ),
    link: 'https://wrapbootstrap.com/user/kindigi',
  },
  chat: {
      icon: (
          <>
              <img src="/images/kindigi-light.png" alt="chat" width={50} className={"icon-dark"} />
              <img src="/images/kindigi-dark.png" alt="chat" width={50} className={"icon-light"} />
          </>
      ),
    link: 'https://kindigi.com',
  },
  docsRepositoryBase: 'https://github.com/bishwajitcadhikary/infinityai-docs/tree/main/',
  head: (
      <>
        <link type="image/x-icon" rel="shortcut icon" href="/images/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="InfinityAI - AI Content Writer Tools & Image Generator (SaaS)" />
        <meta property="og:description" content="🚀 Experience the Future of AI Content Creation! ✨ InfinityAI brings you cutting-edge AI tools like an advanced Content Writer, Image Generator, Chatbots, Code Generation, Speech To Text, and Web Page Summarizer. Elevate your content and productivity today! 📝🎨💬" />
        <meta property="og:image" content="https://infinityai-docs.vercel.app/images/preview.png" />
        <meta property="og:url" content="https://infinityai-docs.kindigi.com/" />
        <meta property="og:type" content="website" />
        <meta property="fb:app_id" content="234635452287600" />

        <meta name="twitter:card" content="🚀 Experience the Future of AI Content Creation! ✨ InfinityAI brings you cutting-edge AI tools like an advanced Content Writer, Image Generator, Chatbots, Code Generation, Speech To Text, and Web Page Summarizer. Elevate your content and productivity today! 📝🎨💬" />
        <meta name="twitter:site" content="@kindigi" />
        <meta name="twitter:creator" content="@kindigi" />
        <meta name="twitter:title" content="InfinityAI - AI Content Writer Tools & Image Generator (SaaS)" />
        <meta name="twitter:description" content="🚀 Experience the Future of AI Content Creation! ✨ InfinityAI brings you cutting-edge AI tools like an advanced Content Writer, Image Generator, Chatbots, Code Generation, Speech To Text, and Web Page Summarizer. Elevate your content and productivity today! 📝🎨💬" />
        <meta name="twitter:image" content="https://infinityai-docs.vercel.app/images/preview.png" />
      </>
  ),
  footer: {
    text: <span>
            Copyright © {new Date().getFullYear()} <a href="https://kindigi.com" target="_blank">KinDigi</a>. All Rights Reserved.
        </span>,
  },
}

export default config
