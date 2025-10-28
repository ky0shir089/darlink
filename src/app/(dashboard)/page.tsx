const HomePage = async () => {
  return (
    <>
      <div className="grid gap-4 auto-rows-min md:grid-cols-3">
        <div className="bg-muted/50 aspect-video rounded-xl" />
        <div className="bg-muted/50 aspect-video rounded-xl" />
        <div className="bg-muted/50 aspect-video rounded-xl" />
      </div>
      <div className="flex-1 min-h-screen bg-muted/50 rounded-xl md:min-h-min" />
    </>
  );
};

export default HomePage;
