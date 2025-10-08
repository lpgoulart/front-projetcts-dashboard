import AboutMe from "@/components/landing-page/aboutme";
import Footer from "@/components/landing-page/footer";
import Jumbotron from "@/components/landing-page/jumbotron";
import Projects from "@/components/landing-page/projects";
import ContactMe from "@/components/landing-page/contact";
import Knowledge from "@/components/landing-page/knowledge";
import Header from "@/components/landing-page/header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Header />
      <Jumbotron />
      <AboutMe />
      <Projects />
      <Knowledge />
      <ContactMe />
      <Footer />
    </div>
  );
}
