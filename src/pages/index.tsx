import { MotionConfig } from 'framer-motion';
import Head from 'next/head';
import { useEffect } from 'react';
import { Slide, ToastContainer } from 'react-toastify';
import { themeChange } from 'theme-change';

import About from '@/components/About/About';
import { BackToTop } from '@/components/BackToTop/BackToTop';
import Footer from '@/components/Footer/Footer';
import Hero from '@/components/Hero';
import Layout from '@/components/Layout';
import MetaTags from '@/components/MetaTags/MetaTags';
import Projects from '@/components/Projects/Projects';
import Skills from "@/components/Skills/Skills";

import 'react-toastify/dist/ReactToastify.min.css';

const Home = () => {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <>
      <Head>
        <MetaTags />
        <title>Portfolio</title>
      </Head>
      <ToastContainer
        position='bottom-right'
        hideProgressBar={false}
        newestOnTop={false}
        transition={Slide}
        autoClose={5000}
        pauseOnFocusLoss
        theme='colored'
        pauseOnHover
        closeOnClick
        rtl={false}
        draggable
        bodyClassName='font-body font-medium'
      />
      <MotionConfig
        transition={{ duration: 1.5, type: 'tween', ease: 'backInOut' }}
      >
        <Layout>
          <Hero />
          <About />
          <Projects />
          <Skills/>
          <Footer />
        </Layout>
        <BackToTop />
      </MotionConfig>
    </>
  );
};

export default Home;
