import { useState, useEffect } from 'react';
import styles from '@/components/Navbar/Buttons/Buttons.module.scss';
import Button from './Button/Button';
import LanguageSwitch from '@/components/LanguageSwitch/LanguageSwitch';
import { useTranslation } from 'react-i18next';

const Buttons = () => {
    const { t } = useTranslation('common');
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
                <Button text={t('btn_path')} href='#about' active={activeSection === 'about'} />
                <Button text={t('btn_project')} href='#projects' active={activeSection === 'projects'} />
                <Button text={t('btn_contact')} href='#contact' active={activeSection === 'contact'} />
            </nav>

            <LanguageSwitch />
            
        </>
    );
};

export default Buttons;