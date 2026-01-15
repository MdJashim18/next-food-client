
import Foods from "./foods/page";
import Hero from "@/Components/Hero";
import Categories from "@/Components/Categories";
import SpecialOffers from "@/Components/SpecialOffers";
import Features from "@/Components/Features";
import Services from "@/Components/Services";
import Testimonials from "@/Components/Testimonials";


export default function Home() {
  return (
    <>

      <main style={{ minHeight: "60vh", padding: "20px" }}>
        <Hero></Hero>
        <Foods></Foods>
        <Categories></Categories>
        <SpecialOffers></SpecialOffers>
        <Features></Features>
        <Services></Services>
        <Testimonials></Testimonials>

      </main>

    </>
  );
}
