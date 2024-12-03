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
import { ArchitectureImage } from "../../components/caching/architecture-image";
import CacheFeatures from "../../components/caching/cachefeatures";
import GetStarted from "../../components/caching/getstarted";
import LearnMore from "../../components/caching/learnmore";
import HubSpotForm from "../../components/HubSpotForm";

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
      <div className="relative min-h-screen overflow-hidden text-white">
        <div className="relative z-10">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
              <div className="flex flex-col justify-center">
                <img
                  src={blok.cache_hero[0].left_gradient.filename}
                  className="absolute -z-10 left-0 lg:-top-[25%]"
                  alt="gradient"
                />
                <div className="inline-flex text-[14px]">
                  <span className="rounded-full bg-green px-3 py-1 text-sm font-medium text-[#00050B] flex items-center">
                    <img
                      src={blok.cache_hero[0].tag_logo.filename}
                      className="w-[1rem] h-[1rem] mr-2"
                      alt="tag logo"
                    />
                    <span>{blok.cache_hero[0].tag_text}</span>
                  </span>
                </div>

                <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl lg:leading-[80px]">
                  {blok.cache_hero[0].hero_title}
                </h1>

                <p className="mt-4 text-lg text-white/70">
                  {blok.cache_hero[0].hero_subtitle}
                </p>

                <div className="mt-8 flex gap-4">
                  {blok.cache_hero[0].cta_buttons.map((cta) => (
                    <a
                      key={cta._uid}
                      href={cta.cta_url.url}
                      className={`${
                        cta.btn_variant == "filled"
                          ? "text-[#00283D]"
                          : "hover:text-white"
                      }`}
                    >
                      <button
                        className={`${
                          cta.btn_variant == "filled"
                            ? "bg-[#FFFFFF] text-[#00283D]"
                            : "border border-[#FFFFFF] bg-transparent"
                        } rounded-[4px] h-[2.5rem] w-[8rem] cursor-pointer lg:w-[9.28rem] text-[1rem] font-[600]`}
                      >
                        {cta.btn_caption}
                      </button>
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-center">
                <img
                  src={blok.cache_hero[0].hero_image.filename}
                  alt="hero_image"
                />
              </div>
            </div>

            <div className="mx-auto lg:mt-60 mt-10 max-w-3xl space-y-8 text-lg leading-relaxed text-white">
              {render(blok.cache_hero[0].hero_long_text)}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Caching() {
  const { siteConfig } = useDocusaurusContext();
  let slug = "caching";
  if (globalThis.window && globalThis.window.location.pathname !== "/") {
    slug = globalThis.window.location.pathname.replace("/", "");
  }
  const story = useStoryblok(slug, { version: "draft" });
  if (!story || !story.content) {
    return <div>Loading...</div>;
  }
  console.log(story.content);

  return (
    <Layout title="caching" description="Caching page">
      <PageHeader blok={story.content} />
      <ArchitectureImage blok={story.content} />
      <CacheFeatures blok={story.content} />
      <GetStarted blok={story.content} />
      <LearnMore blok={story.content} />
      <div className="cache-footer-bg overflow-hidden relative border-bottom">
        <div className="lg:w-full w-[90%] max-w-[538px] mx-auto mb-20">
          <HubSpotForm
            portalId="22380288"
            formId="41f6c57b-e484-4425-b64a-2f3fa815e36a"
            targetId="database"
            region="na1"
          />
        </div>
      </div>
    </Layout>
  );
}
