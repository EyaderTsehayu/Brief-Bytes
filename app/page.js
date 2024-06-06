import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center ">
        Discover the Power of
        <br className="max-md:hidden" />
        <span className="violet_gradient text-center"> Concise Knowledge</span>
      </h1>
      <p className="desc text-center">
        Empower your learning and share insights with Brief Byte, the platform
        for crisp and impactful software engineering notes.
      </p>
      <Feed />
    </section>
  );
};

export default Home;
