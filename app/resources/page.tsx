"use client";

import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import ResourceCard from "@/components/ResourceCard";
import {
  linkedinCourses,
  industrySections,
  articles,
} from "@/lib/resources";

const tabs = [
  { id: "courses", label: "LinkedIn Learning" },
  { id: "industry", label: "Industry Research" },
  { id: "articles", label: "Articles & Reading" },
] as const;

type Tab = (typeof tabs)[number]["id"];

export default function Resources() {
  const [activeTab, setActiveTab] = useState<Tab>("courses");

  // Group articles by category
  const articleCategories = articles.reduce<Record<string, typeof articles>>(
    (acc, article) => {
      if (!acc[article.category]) acc[article.category] = [];
      acc[article.category].push(article);
      return acc;
    },
    {}
  );

  return (
    <>
      <HeroSection
        headline="Tools for the search."
        subhead="A curated set of resources for students and guides — updated as we find things worth sharing."
        accent="neutral"
      />

      <section className="py-16 md:py-24 px-6 border-t border-border">
        <div className="max-w-content mx-auto">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-12 border-b border-border">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-3 text-sm font-medium transition-colors relative ${
                  activeTab === tab.id
                    ? "text-navy"
                    : "text-foreground/50 hover:text-foreground/80"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold" />
                )}
              </button>
            ))}
          </div>

          {/* LinkedIn Learning */}
          {activeTab === "courses" && (
            <div>
              <p className="text-foreground/70 mb-8 max-w-3xl">
                LinkedIn Learning courses worth your time — focused on what
                actually helps in an entry-level search.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {linkedinCourses.map((course) => (
                  <ResourceCard
                    key={course.title}
                    title={course.title}
                    url={course.url}
                    description={course.description}
                    duration={course.duration}
                  />
                ))}
              </div>
              <p className="text-sm text-foreground/50 mt-6 italic">
                All courses require LinkedIn Premium. Many universities provide
                free access — check with your school&rsquo;s library or career
                center.
              </p>
            </div>
          )}

          {/* Industry Research */}
          {activeTab === "industry" && (
            <div>
              <p className="text-foreground/70 mb-8 max-w-3xl">
                Useful starting points for researching industries and
                understanding what employers are actually looking for.
              </p>
              <div className="space-y-10">
                {industrySections.map((section) => (
                  <div key={section.industry}>
                    <h3 className="font-display text-xl font-semibold text-navy mb-4">
                      {section.industry}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {section.resources.map((resource) => (
                        <ResourceCard
                          key={resource.name}
                          title={resource.name}
                          url={resource.url}
                          description={resource.description}
                          tag={section.industry}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Articles */}
          {activeTab === "articles" && (
            <div>
              <p className="text-foreground/70 mb-8 max-w-3xl">
                Short reads worth your time. Updated periodically.
              </p>
              <div className="space-y-10">
                {Object.entries(articleCategories).map(
                  ([category, categoryArticles]) => (
                    <div key={category}>
                      <h3 className="font-display text-xl font-semibold text-navy mb-4">
                        {category}
                      </h3>
                      <div className="space-y-4">
                        {categoryArticles.map((article) => (
                          <a
                            key={article.title}
                            href={article.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block bg-card border border-border rounded-lg p-5 hover:shadow-md hover:-translate-y-0.5 transition-all group"
                          >
                            <div className="flex items-start justify-between gap-4">
                              <div>
                                <h4 className="font-display text-base font-semibold text-navy group-hover:text-gold transition-colors">
                                  {article.title}
                                </h4>
                                <p className="text-xs text-foreground/40 mt-1">
                                  {article.source}
                                </p>
                                <p className="text-sm text-foreground/60 mt-2 leading-relaxed">
                                  {article.description}
                                </p>
                              </div>
                              <span className="shrink-0 text-xs text-navy font-medium group-hover:underline mt-1">
                                Read &rarr;
                              </span>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
