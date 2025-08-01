const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto text-center md:w-4/12 ">
      <p className="text-white mb-3"> --- {subHeading} ---</p>
      <h1 className="text-yellow-600 text-4xl font-bold uppercase border-y-4 py-4">
        {heading}
      </h1>
    </div>
  );
};

export default SectionTitle;
