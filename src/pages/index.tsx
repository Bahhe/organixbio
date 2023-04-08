import { type NextPage } from "next";
import Head from "next/head";
import Header from "~/components/Header";
// import Hero from "~/components/Hero";
// import SectionFour from "~/components/SectionFour";
// import SectionThree from "~/components/SectionThree";
// import SectionTwo from "~/components/SectionTwo";
// import SectionFive from "~/components/SectionFive";
// import SectionSix from "~/components/SectionSix";
// import SectionSeven from "~/components/SectionSeven";
import Footer from "~/components/Footer";
import Images from "~/components/Images";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Organixbio | Home</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <Header />
        <Images />
        {/* <Hero /> */}
        {/* <SectionTwo /> */}
        {/* <SectionThree /> */}
        {/* <SectionFour /> */}
        {/* <SectionFive /> */}
        {/* <SectionSix /> */}
        {/* <SectionSeven /> */}
        <Footer />
      </main>
    </>
  );
};

export default Home;
