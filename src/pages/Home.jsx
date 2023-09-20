import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { HomePresentation } from "../components/home/HomePresentation";
import { HomeProjects } from "../components/home/HomeProjects";
import { HomeSkills } from "../components/home/HomeSkills";
import { HomeAboutMe } from "../components/home/HomeAboutMe";

const Home = () => {

    const { handleShowHome } = useContext(GlobalContext);

    useEffect(() => {
        handleShowHome();
    }, []);

    return (
        <div className="home">
            <HomePresentation />
            <div className="home__content">
                <HomeProjects />
                <HomeSkills />
                <HomeAboutMe />
            </div>
        </div>
    );

};

export default Home;