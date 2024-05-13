import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="relative">
        <img src={'/home-panel.jpg'} alt="Panel" className="w-full h-auto opacity-50" />
        <div className="absolute top-0 right-0 mt-8 mr-8">
          <div className="bg-transparent px-4 py-2 rounded-lg border border-gray-300 w-96">
            <input
              type="text"
              placeholder="Search..."
              className="w-full h-full px-2 bg-transparent placeholder-gray-500 focus:outline-none"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;