import Section from "@/components/kico/ui/section";
import { Card } from "@/components/kico/ui/card";
import { CardWithImage } from "@/components/kico/ui/card-with-image";
import { Heading } from "@/components/kico/ui/heading";
import { SlFire } from "react-icons/sl";
import { ProjectCard } from "@/components/kico/ui/project-card";
import { features } from "@/constants";

const Home = () => {
  return (
    <main className="relative overflow-hidden min-h-screen">
      <Section>
        <div className="relative container md:w-[90%] mx-auto">
          <div className="relative">
            <Heading
              title="Build Problem Solving Skill"
              text="Welcome to our blog dedicated to solving LeetCode problems! Whether you're a beginner just getting started with coding challenges or an experienced programmer looking to enhance your problem-solving skills, you've come to the right place."
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 justify-items-center">
            <Card
              icon={<SlFire className="size-16 text-yellow-500" />}
              title="Leetcode Daily Question Solution"
              description="452. Minimum Number of Arrows to Burst Balloons"
              buttonHref="/problem/lc-daily-question"
              buttonTitle="Read Solution"
            />

            <CardWithImage
              src="/assets/ui-kit.png"
              title="Leetcode Problems Solution"
              description="Welcome to our blog dedicated to solving LeetCode problems!.In this blog, we provide comprehensive solutions and explanations for a wide range of LeetCode problems"
              buttonHref="/problems"
              buttonTitle="Proplems"
            />

            <Card
              icon={<SlFire className="size-16 text-yellow-500" />}
              title="Leetcode Contest Solutions"
              description="LeetCode contests, providing comprehensive solutions and in-depth explanations"
              buttonHref="/contest"
              buttonTitle="Check Out"
            />
          </div>
        </div>
      </Section>

      <Section>
        <div className="relative container md:w-[90%] mx-auto">
          <div className="relative">
            <Heading title="What You Can Expect From Our Blog" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-24 justify-items-center">
            {features.map((feature, id) => (
              <ProjectCard
                key={id}
                title={feature.title}
                description={feature.description}
                src={feature.src}
                borderGradient={id % 2 == 0 ? true : false}
              />
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
};
export default Home;
