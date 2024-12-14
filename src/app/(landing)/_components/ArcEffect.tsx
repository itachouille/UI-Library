const ArcEffect = () => {
  return (
    <div className="pointer-events-none relative -z-[2] mx-auto my-[-20rem] h-[50rem] w-full overflow-hidden bg-orange-400/60 [mask-image:radial-gradient(ellipse_at_center_center,#121212,rgba(0,0,0,0)_40%)]">
      <div className="absolute inset-0 bg-[#121212] opacity-70" />
      <div className="absolute -left-1/2 top-1/2 aspect-[1/0.7] w-[200%] rounded-[50%] border-t border-[#1D1D1D] bg-[#121212]" />
    </div>
  );
};

export default ArcEffect;
