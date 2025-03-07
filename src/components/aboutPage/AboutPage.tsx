import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      {/* Right Image */}
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Image
          src="/logo.png"
          alt="Hero Image"
          width={500}
          height={500}
          className="w-auto h-auto rounded-full"
        />
        <h2 className="text-center text-8xl text-[#816cb8] font-bold tracking-wider">
          QASIM HASSAN
        </h2>
        <h3 className="text-center font-semibold text-xl">
          Meet the Creator of This Portfolio
        </h3>
      </div>

      <div>
        <h4 className="text-3xl font-bold">About Me</h4>
        <hr className="w-[12%] border-t-4 border-[#816cb8]" />
        <p className="text-lg font-semibold mt-6 text-[#4d4b4b]">
          Hi, folks. I'm Qasim Hassan @ aiwithqasim a Computer Engineer
          graduate & Data Engineer by profession from Pakistan. Worked with 48+
          different ML Engineers globally to solve energy crises problem.
          Certified from 10+ International Joints including Microsoft, Udacity,
          Datacamp & Deeplearning.ai. I have recently completed my Bachelor's
          from Bahria University Karachi Campus (BUKC). Quality Time and Acts of
          Service are my primary languages. Highly empathetic loves to get to
          know people deeply. Family is a priority. Supporters of growth, my
          friends, become family. Open-minded and always learning. Draws outside
          lines to engage in creativity. Big picture thinker but specializes in
          subtleties.Like an anomaly, tries to be creatively apart - break the
          status quo. Works hard but can make mistakes - human. Errors,
          mistakes, and obstacles build strength and character.I appreciate the
          beauty of education; never stop learning. Uses communication to form
          relationships, solve problems, understand people, and set/achieve
          goals. I embarked on a career path where I can use these gifts and
          skills (mentioned above) to help businesses / skills and those that
          make up the companies. I love to help people excel and achieve their
          potential and goals. I love to analyze the things that work, whether
          people's talents or a community's success. I thrive off of
          understanding that(very data-driven) and redirecting that success and
          energy to lift those around me. My ultimate goal is to serve a
          community of people and help them thrive.My era Of intreset lies in
          Data related fields i:e Data Scientist , Deep Lerning ,Machine
          learning.My expertise are in
        </p>
        <ul className="list-disc pl-8 font-semibold text-[#4d4b4b] mt-4">
            <li>Python (Microsoft Certified)</li>
            <li>SQL</li>
            <li>Python (Microsoft Certified)</li>
            <li>Data Mining / Extraction</li>
            <li>Data Pipelineing (ETL)</li>
            <li>Data Preprocessing (Numpy, Pandas)</li>
            <li>Data Visualization (PowerBi, Matplotlib, Seaborn)</li>
            <li>Big Data Analytics (Spark, Hadoop)</li>
            <li>Exploratory Data Analysis (EDA)</li>
            <li>Deep Learning</li>
            <li>Neural Network Architecture (CNN)</li>
            <li>Cloud: Amazon Web Service (AWS)</li>
        </ul>
      </div>
    </section>
  );
};

export default AboutPage;
