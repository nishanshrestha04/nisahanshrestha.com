import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import Project from "../components/Project";
import { myProjects } from "../constants";

const Projects = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { damping: 10, stiffness: 50 });
    const springY = useSpring(y, { damping: 10, stiffness: 50 });
    const handleMouseMove = (e) => {
        x.set(e.clientX + 20);
        y.set(e.clientY + 20);
    };
    const [preview, setPreview] = useState(null);
    const [isDesktop, setIsDesktop] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 640);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section
            id="projects"
            onMouseMove={handleMouseMove}
            className="relative c-space section-spacing scroll-mt-20"
        >
            <h2 className="text-heading">My Selected Projects</h2>
            <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
            {myProjects.map((project) => (
                <Project
                    key={project.id}
                    {...project}
                    setPreview={setPreview}
                />
            ))}
            {preview && isDesktop && (
                <motion.img
                    className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80"
                    src={preview}
                    style={{ x: springX, y: springY }}
                />
            )}
        </section>
    );
};

export default Projects;
