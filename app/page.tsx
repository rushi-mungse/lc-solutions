import { BlurEffect } from "@/components/kico/effects/blur-effect";
import { CardGradient } from "@/components/kico/ui/card-gradient";
import { Heading } from "@/components/kico/ui/heading";
import Section from "@/components/kico/ui/section";

const Home = () => {
  return (
    <main className="relative overflow-hidden min-h-screen">
      <Section crosses>
        <div className="container w-[90%] mx-auto">
          <BlurEffect />
          <Heading
            title="Kico Design For All Developers."
            tag="Design Components"
            text="This is kico design ui component use in your app and make simple and easy development."
          />
          <CardGradient />
        </div>
      </Section>
    </main>
  );
};
export default Home;
