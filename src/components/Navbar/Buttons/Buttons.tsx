import { useState, useEffect, useContext } from 'react';
import styles from '@/components/Navbar/Buttons/Buttons.module.scss';
import Button from './Button/Button';
import LanguageSwitch from '@/components/LanguageSwitch/LanguageSwitch';
import LANGS from '@/locales/allLang';
import { LangContext } from '@/context/LangContext';

const Buttons = () => {
    const {lang} = useContext(LangContext);
    const l = LANGS[lang];
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const sections = ['home', 'about', 'projects', 'contact'];
        const observers = sections.map((id) => {
            const el = document.getElementById(id);
            if (!el) return null;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveSection(id);
                    }
                },
                {
                    rootMargin: '-30% 0px -60% 0px',
                }
            );
            observer.observe(el);
            return { observer, el };
        });

        return () => {
            observers.forEach((obs) => {
                if (obs) {
                    obs.observer.unobserve(obs.el);
                }
            });
        };
    }, []);

    return (
        <>
            <nav className={`${styles['buttons']}`}>
                <Button text={l.btn_path} href='#about' active={activeSection === 'about'} />
                <Button text={l.btn_project} href='#projects' active={activeSection === 'projects'} />
                <Button text={l.btn_contact} href='#contact' active={activeSection === 'contact'} />
            </nav>

            <LanguageSwitch />
            
        </>
    );
};

export default Buttons;