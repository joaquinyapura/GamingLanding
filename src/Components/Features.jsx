const FeaturesCard = ({ src, tittle, description }) => {
  return (
    <div className="text-blue-50 relative size-full ">
      <video
        src={src}
        loop
        muted
        autoPlay
        className=" absolute left-0 top-0 z-10 size-full object-cover object-center"
      />
      <div className="relative z-30 flex size-full flex-col justify-between text-blue-50 p-5 ">
        <div>
          <h1 className="font-zentry font-bold text-blue-50 text-6xl ">
            {tittle}
          </h1>
          <p className="w-1/3 opacity-30">{description}</p>
        </div>
      </div>
    </div>
  );
};

export const Features = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular text-blue-50 text-3xl font-bold">
            Metaplayer text layer
          </p>
          <p className=" font-circular text-lg text-blue-50 opacity-40">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            molestias eum magnam impedit, maxime dolorum quisquam amet molestiae
            ex. Animi dolor voluptatum, ratione corporis maxime deleniti ex esse
            repudiandae quae.
          </p>
          <div className="border-white border-1 relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh] transition-all ease-in-out duration-500 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] ">
            <FeaturesCard
              src="videos/feature-1.mp4"
              tittle="holamundo"
              description="Lorem reaslñkdjas asdlñkjasdñl "
            />
          </div>
          <div className="border-white border-1 relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh] transition-all ease-in-out duration-500 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] ">
            <FeaturesCard
              src="videos/feature-2.mp4"
              tittle="holamundo"
              description="Lorem reaslñkdjas asdlñkjasdñl "
            />
          </div>
          <div className="border-white border-1 relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh] transition-all ease-in-out duration-500 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] ">
            <FeaturesCard
              src="videos/feature-3.mp4"
              tittle="holamundo"
              description="Lorem reaslñkdjas asdlñkjasdñl "
            />
          </div>
          <div className="border-white border-1 relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh] transition-all ease-in-out duration-500 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] ">
            <FeaturesCard
              src="videos/feature-4.mp4"
              tittle="holamundo"
              description="Lorem reaslñkdjas asdlñkjasdñl "
            />
          </div>
        </div>
      </div>
    </section>
  );
};
