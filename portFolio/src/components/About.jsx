import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="Educational Background" />
          <p className="text-slate-600 mt-8 leading-loose">
            Pursuing excellence in Computer Engineering, I am currently in my
            third year of studies, navigating the dynamic landscape of
            technology. Fueled by curiosity and a thirst for knowledge, I am
            honing my skills in software and hardware, aiming to bring
            innovative solutions to life in the ever-evolving realm of computer
            engineering.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
