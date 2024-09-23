import React from "react";
import {
  useStoryblok,
  storyblokInit,
  apiPlugin,
  StoryblokComponent,
} from "@storyblok/react";
import Layout from "@theme/Layout";
import Page from "../../components/sbComponents/Page";
import { render } from "storyblok-rich-text-react-renderer";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import WattExplore from "../../components/watt/WattExplore";
import WattBenefits from "../../components/watt/WattCompare";
import FaqSection from "../../components/FaqSection";
import WattDiscover from "../../components/watt/WattDiscover";
import WattCompare from "../../components/watt/WattCompare";
import WattSupported from "../../components/watt/WattSupported";
import WattReady from "../../components/watt/WattReady";

storyblokInit({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components: {
    page: Page,
  },

  apiOptions: {
    region: "eu",
    cache: {
      clear: "auto",
      type: "none",
    },
    headers: {
      "Cache-Control": "no-store",
    },
  },
});

function PageHeader({ blok }) {
  return (
    <header className="dark ">
      <section
        className={`bg-transparent flex items-center justify-center min-h-screen lg:min-h-[100vh] bg-cover bg-center bg-no-repeat relative`}
      >
        <img
          src={blok.Hero_section[0].Hero_image.filename}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="max-w-screen-xl mx-auto w-full text-center relative z-10">
          <div className="max-w-2xl mx-auto">
            <h1 className="mb-4 text-4xl font-bold tracking-tight leading-[1.5] md:text-5xl dark:text-white">
              {render(blok.Hero_section[0].Hero_title)}
            </h1>
            <p className="mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              {render(blok.Hero_section[0].Hero_subtitle)}
            </p>
            <div className="flex flex-row justify-center items-center gap-4">
              <button className="bg-white hover:bg-white/80 hover:translate-y-1 outline outline-white/80 outline-[1px] text-[#00050B] py-2 px-4 border-none rounded border border-white w-[10em] cursor-pointer">
                {render(blok.Hero_section[0].get_started)}
              </button>
              <button className="bg-transparent hover:bg-white/10 outline outline-white/80 outline-[1px] text-white py-2 px-4 border-none rounded border border-white w-[10em] cursor-pointer">
                {render(blok.Hero_section[0].hero_button)}
              </button>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}

export default function Watt() {
  const { siteConfig } = useDocusaurusContext();
  let slug = "watt";
  if (globalThis.window && globalThis.window.location.pathname !== "/") {
    slug = globalThis.window.location.pathname.replace("/", "");
  }
  const story = useStoryblok(slug, { version: "draft" });
  if (!story || !story.content) {
    return <div>Loading...</div>;
  }

  return (
    <Layout title="Watt" description="Hello React Page">
      <PageHeader blok={story.content} />
      <WattExplore blok={story.content} />
      <WattCompare blok={story.content} />
      <WattSupported blok={story.content} />
      <WattReady blok={story.content} />
      <FaqSection
        title={story.content.Hero_section[5].faq_title}
        faq={story.content.Hero_section[5].faq}
      />
      <section className="footer-bg overflow-hidden relative h-32 border-bottom">
        <div className="h-32"></div>
      </section>
      {/* 
      <WhyPlatformatic blok={story.content} />
      <StructureNodejs blok={story.content} />
      <div
        className="!text-[#00050b] dark:!text-white w-[90%] lg:w-[35%] mx-auto border border-[#FFFFFF26] rounded-[6px] my-4 px-[1rem] py-8"
        id="database"
      />
      <HubSpotForm
        portalId="22380288"
        formId="9d88e23d-89fb-4beb-9d4d-0a844ca6639d"
        targetId="database"
        region="na1"
      /> */}
    </Layout>
  );
}
