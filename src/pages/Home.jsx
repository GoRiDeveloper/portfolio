import { HomePresentation } from "../components/home/HomePresentation";
import { HomeProjects } from "../components/home/HomeProjects";
//import { HomeSkills } from "../components/home/HomeSkills";
import { HomeAboutMe } from "../components/home/HomeAboutMe";
//import { HomeAboutPortfolio } from "../components/home/HomeAboutPortfolio";

export const Home = () => {

    return (

        <div className="home">
            <HomePresentation />
            <div className="home__content">

                <HomeProjects />
                {/* <HomeSkills /> */}
                <HomeAboutMe />
                {/* <HomeAboutPortfolio /> */}

            </div>
        </div>

    );

};