import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import React, { useEffect, useState } from "react";
import WhyPlatformatic from "../components/WhyPlatformatic";
import styles from "./index.module.css";
import Explore from "../components/Explore";
import { useStoryblok, storyblokInit, apiPlugin } from "@storyblok/react";
import iconDocImg from "../images/IconDoc.svg";
import Page from "../components/sbComponents/Page";
import Teaser from "../components/sbComponents/Teaser";
import Grid from "../components/sbComponents/Grid";
import Feature from "../components/sbComponents/Feature";
import SbHomepageFeatures from "../components/sbComponents/HomePageFeatures";
import { render } from "storyblok-rich-text-react-renderer";
import ManagingNode from "../components/ManagingNode";
import PutNode from "../components/PutNode";
import TimeToChange from "../components/TimeToChange";
import BuildApi from "../components/BuildApi";
import WorksForYou from "../components/WorksForYou";
import SeamlessConsume from "../components/SeamlessConsume";
import HighPerformingApps from "../components/HighPerformingApps";
import FacingNodeChallenge from "../components/FacingNodeChallenge";
import DeployInSeconds from "../components/DeployInSeconds";
import FaqSection from "../components/FaqSection";

storyblokInit({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components: {
    page: Page,
    teaser: Teaser,
    grid: Grid,
    feature: Feature,
    HomepageFeatures: SbHomepageFeatures,
    ManageNode: ManagingNode,
    PutNode,
    TimeToChange,
    BuildApi,
    WorksForYou,
    SeamlessConsume,
    HighPerformingApps,
    FacingNodeChallenge,
    DeployInSeconds,
    WhyPlatformatic,
    FaqSection,
    Explore,
  },
  apiOptions: {
    region: "eu",
  },
});

function HomepageHeader({ blok }) {
  const { siteConfig } = useDocusaurusContext();
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <header className="dark border-top">
      <section
        className={`bg-transparent flex items-center justify-center sm:min-h-[100vh] bg-cover bg-center bg-no-repeat relative mt-20 md:mt-0`}
      >
        <img
          src={blok.hero_section[0].hero_image.filename}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover z-0 "
        />
        <div className="max-w-screen-xl mx-auto w-full text-center relative z-10 mt-10 md:mt-0">
          <div className="max-w-4xl mx-auto flex flex-col justify-center items-center px-2 md:px-0">
            <h1 className="mb-4 text-[1.6rem] leading-[1.5] md:leading-[54px] font-[700] md:font-[600] md:text-[40px] dark:text-white md:max-w-[603px]">
              {render(blok.hero_section[0].hero_title)}
            </h1>
            <p className="mb-6 text-white/80 lg:mb-8 md:text-lg text-base lg:text-xl font-normal dark:text-white/80">
              {render(blok.hero_section[0].hero_subtitle)}
            </p>
            <div className="flex flex-row justify-center items-center gap-4 w-full md:max-w-80 max-w-80 mx-auto">
              <a
                href={blok.hero_section[0].cta_buttons[0].cta_url.url}
                className="flex-1"
              >
                <button className="bg-white hover:bg-white/80 hover:translate-y-1 outline outline-white/80 outline-[1px] text-black/80 py-2 px-4 border-none rounded border border-white w-full cursor-pointer text-[14px]">
                  {render(blok.hero_section[0].cta_buttons[0].btn_caption)}
                </button>
              </a>
              <a
                href={blok.hero_section[0].cta_buttons[1].cta_url.url}
                className="flex-1"
              >
                <button className="bg-transparent hover:bg-white/30 outline outline-white/80 outline-[1px] text-white py-2 px-4 border-none rounded border border-white w-full cursor-pointer text-[14px]">
                  {render(blok.hero_section[0].cta_buttons[1].btn_caption)}
                </button>
              </a>
            </div>
            <div className="flex justify-center items-center w-full max-w-80"></div>
          </div>
        </div>
      </section>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  let slug = "home";
  if (globalThis.window && globalThis.window.location.pathname !== "/") {
    slug = globalThis.window.location.pathname.replace("/", "");
  }
  const story = useStoryblok(slug, { version: "draft" });
  if (!story || !story.content) {
    return <div>Loading...</div>;
  }
 

  return (
    <Layout
      title="Platformatic Open Source Software"
      description="The documentation of all Open Source libraries that are part of Platformatic."
    >
      <HomepageHeader blok={story.content} />
      <main className="dark">
        <ManagingNode blok={story.content} />
        <PutNode blok={story.content} />
        <Explore blok={story.content} />
        
        <SeamlessConsume blok={story.content} />
        <HighPerformingApps blok={story.content} />
        <FaqSection
          title={story.content.home_faq[0].faq_title}
          faq={story.content.home_faq[0].faq}
        />
        <section className="footer-bg overflow-hidden relative border-bottom">
          <div className="md:h-32 h-20"></div>
        </section>
        
      </main>
    </Layout>
  );
}
