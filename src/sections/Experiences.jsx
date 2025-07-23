import { Timeline } from "../components/Timeline";
import { experiences } from "../constants";
const Experiences = () => {
    return (
        <div id="experience" className="w-full scroll-mt-20">
            <Timeline data={experiences} />
        </div>
    );
};

export default Experiences;
