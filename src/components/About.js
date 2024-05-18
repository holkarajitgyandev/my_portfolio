import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-screen">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8">
            <p className="text-4xl font-bold inline border-b-4  border-[#53c94d]">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[900px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'm Ajit Holkar. Thank you for taking time out to visit my
              portfolio.
            </p>
          </div>
          <div className="text-start">
            <p>
              I am a fullstack web developer. I graduated from Savitribai Phule Pune University, Pune with
              a degree in Bachelor of Mechanical Engineering.
            </p>
          
              

            <p>
              I developed an interest in Web Development and started
              learning through online resources. To further enhance my skills and build real-world projects, I joined at Almabetter. As a result, I have gained expertise in front-end technologies like HTML, CSS, JavaScript, React as
              well as back-end technologies like Node.js and MongoDB. I'm always
              keen to learn and implement new technologies to create efficient
              and elegant web solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
