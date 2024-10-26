import React from "react";
import Image from "next/image";

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "Tailwind CSS" },
  { skill: "MaterialUI" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Qwik" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Node.js" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Technical writing" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, I&#39;m Odewole Babatunde Samson -- an{" "}
              <span className="font-bold">{"ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" versatile"}</span> software
              developer and technical writer. With a deep passion for technology
              and a commitment to continuous learning, I bring a creative and
              problem-solving mindset to every project.
            </p>
            <br />
            <p>
              I specialize in HTML, CSS, JavaScript, Typescript, React.js,
              Next.js, Node.js, and Blockchain development, with proven
              experience in tackling complex challenges. I&#39;m currently open
              to a full-time role, either remote or with relocation, where I can
              contribute to innovative teams and projects
            </p>
            <br />
            <p>
              Beyond coding, I&#39;m passionate about learning and cultural
              diversity, and I believe in the power of exploring new
              perspectives. Whether I&#39;m diving into a new book, creating
              technical content, traveling, or connecting with others, I&#39;m
              always driven to expand my knowledge and experience.
            </p>
            <br />
            <p>
              My goal is to{" "}
              <span className="font-bold text-teal-500">
                push the boundaries of what’s possible in tech.
              </span>{" "}
              I&#39;m excited to see where my career journey leads, and I&#39;m
              always open to connecting with others and exploring new
              opportunities.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            <Image
              src="/hero-image.webp"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-16 md:z-0 mt-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
