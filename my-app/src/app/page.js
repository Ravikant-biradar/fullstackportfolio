import Footer from "@/Components/Footer/Footer";
import Middlecomponent from "@/Components/Middlecomponent/Middlecomponent";
import Navbar from "@/Components/Navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section>
        <Navbar />
        <Middlecomponent />
        <Footer />
      </section>
    </>
  );
}
