import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <section
      className="flex max-w-full min-h-screen mx-auto xl:pt-16 lg:pt-14 md:pt-12 pt-8 xl:px-32 lg:px-20 md:px-16 px-6 gap-8
     bg-bg-main xl:pb-16 lg:pb-14 md:pb-12 pb-8 justify-center"
    >
      <div className="relative font-poppins text-2xl flex flex-col justify-center text-center">
        <h1>Oops!</h1>
        <p>{error.statusText || error.message}</p>
      </div>
    </section>
  );
};

export default ErrorPage;
