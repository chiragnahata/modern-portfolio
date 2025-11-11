import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import Head from "next/head";

import Layout from "../components/Layout";
import Transition from "../components/Transition";
import CustomCursor from "../components/CustomCursor";
import ScrollProgress from "../components/ScrollProgress";
import ThemeToggle from "../components/ThemeToggle";
import CommandPalette from "../components/CommandPalette";
import BackToTop from "../components/BackToTop";
import LiveChat from "../components/LiveChat";
import InteractiveTerminal from "../components/InteractiveTerminal";
import KeyboardShortcuts from "../components/KeyboardShortcuts";
import SpotifyPlayer from "../components/SpotifyPlayer";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Chirag Nahata - Full Stack Developer | AI Specialist | CEO</title>
        <meta name="description" content="Portfolio of Chirag Nahata - Technology Leader, Full Stack Developer, AI Specialist, and Entrepreneur with 6 granted patents and 3 research publications." />
        <meta name="keywords" content="Chirag Nahata, Full Stack Developer, AI, Machine Learning, Digidenone, Team codeARC, Patents, Research" />
        <meta name="author" content="Chirag Nahata" />
        <meta property="og:title" content="Chirag Nahata - Full Stack Developer | AI Specialist" />
        <meta property="og:description" content="CEO of Digidenone | 6 Patents | 3 Research Papers | 20+ Projects" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/favicon.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@chiragnahata" />
        <meta name="twitter:image" content="/favicon.jpg" />
        <link rel="icon" href="/favicon.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/favicon.jpg" />
      </Head>
      
      <CustomCursor />
      <ScrollProgress />
      <ThemeToggle />
      <CommandPalette />
      <BackToTop />
      <LiveChat />
      <InteractiveTerminal />
      <KeyboardShortcuts />
      <SpotifyPlayer />
      
      <Layout>
        <AnimatePresence mode="wait">
          <motion.div key={router.route} className="min-h-screen">
            <Transition />
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default MyApp;
