import { useState } from "react";
import { motion } from "motion/react";

function Navigation({ onNavClick }) {
    const handleNavClick = (e, targetId) => {
        e.preventDefault();

        // Close mobile menu if callback provided
        if (onNavClick) onNavClick();

        // Handle home link - scroll to top
        if (targetId === "#home") {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
            return;
        }

        // Try multiple methods to find the element
        let element = document.querySelector(targetId);

        // If not found, try without the hash
        if (!element) {
            const id = targetId.replace("#", "");
            element = document.getElementById(id);
        }

        // If still not found, try different selectors
        if (!element) {
            element = document.querySelector(
                `[id="${targetId.replace("#", "")}"]`
            );
        }

        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        } else {
            // Try common section patterns if direct ID doesn't work
            const sectionName = targetId.replace("#", "");
            const alternativeSelectors = [
                `section[data-section="${sectionName}"]`,
                `.${sectionName}`,
                `.${sectionName}-section`,
                `#${sectionName}-section`,
                `[data-id="${sectionName}"]`,
            ];

            for (const selector of alternativeSelectors) {
                element = document.querySelector(selector);
                if (element) break;
            }

            if (element) {
                element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        }
    };

    return (
        <ul className="nav-ul">
            <li className="nav-li">
                <a
                    className="nav-link"
                    href="#home"
                    onClick={(e) => handleNavClick(e, "#home")}
                >
                    Home
                </a>
            </li>
            <li className="nav-li">
                <a
                    className="nav-link"
                    href="#about"
                    onClick={(e) => handleNavClick(e, "#about")}
                >
                    About
                </a>
            </li>
            <li className="nav-li">
                <a
                    className="nav-link"
                    href="#projects"
                    onClick={(e) => handleNavClick(e, "#projects")}
                >
                    Projects
                </a>
            </li>
            <li className="nav-li">
                <a
                    className="nav-link"
                    href="#experience"
                    onClick={(e) => handleNavClick(e, "#experience")}
                >
                    Work
                </a>
            </li>
            <li className="nav-li">
                <a
                    className="nav-link"
                    href="#contact"
                    onClick={(e) => handleNavClick(e, "#contact")}
                >
                    Contact
                </a>
            </li>
        </ul>
    );
}
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);

    return (
        <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
            <div className="mx-auto c-space max-w-7xl">
                <div className="flex items-center justify-between py-2 sm:py-0">
                    <a
                        href="/"
                        className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
                    >
                        Nishan
                    </a>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
                    >
                        <img
                            src={
                                isOpen ? "assets/close.svg" : "assets/menu.svg"
                            }
                            className="w-6 h-6"
                            alt="toggle"
                        />
                    </button>
                    <nav className="hidden sm:flex">
                        <Navigation />
                    </nav>
                </div>
            </div>
            {isOpen && (
                <motion.div
                    className="block overflow-hidden text-center sm:hidden"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    style={{ maxHeight: "100vh" }}
                    transition={{ duration: 1 }}
                >
                    <nav className="pb-5">
                        <Navigation onNavClick={closeMenu} />
                    </nav>
                </motion.div>
            )}
        </div>
    );
};

export default Navbar;
