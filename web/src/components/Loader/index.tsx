const Loader = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-white dark:bg-dark">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent" />
      <div>
        <h2>Loading..</h2>
      </div>
    </div>
  );
};

export default Loader;
