import { FC } from "react";
import ProjectsCart from "@/app/components/projects-cart";
import r from "@/app/components/projectesImages/reddit.jpg";
import st from "@/app/components/projectesImages/store.jpeg";
import dash from "@/app/components/projectesImages/dashboard.jpeg";

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = () => {
  return (
    <div className="h-screen w-screen relative flex justify-center items-center">
      <div className="absolute top-14 inset-x-0 flex justify-center text-gray-700 tracking-[6px] font-bold">
        Projects
      </div>
      <div className="flex ml-6 md:ml-0 gap-4 z-50 mt-11 overflow-x-scroll snap-x snap-mandatory lg:overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-100">
        <ProjectsCart
          url={"https://reddit-clone-suleiman.vercel.app/"}
          contact="Reddit clone app that has a log in and log out using nextAuth with google it has
          a home interface with all your post and comment and also you can vote and subscripe to diffrent people
          and enjoy there post."
          src={r}
          title={"reddit clone"}
        />
        <ProjectsCart
          url={"https://suleiman-store.vercel.app/"}
          contact="store app that controlled by dashboard and all the category is dynamic from the dashboard
        also you can buy usnig stripe"
          src={st}
          title={"store"}
        />
        <ProjectsCart
          url={"https://suleiman-dashboard.vercel.app/"}
          contact="dashboard create diffrent store dependes on one dashboard with out coding this the idea of this product
        with flexable image uploding and adding or updating product this web can atshive all the functionalty to build your dream strore without code"
          src={dash}
          title={"dashboard"}
        />
      </div>
    </div>
  );
};
export default Projects;
