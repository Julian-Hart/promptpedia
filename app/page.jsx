import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Promptpedia is a colabrative AI prompting tool for people to discover,
        create and inventive prompts
      </p>

      <Feed />
    </section>
  );
};

export default Home;
