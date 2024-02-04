import {useContext} from 'react';
import styles from '@/components/SocialMediaButtons/SocialMediaButtons.module.scss';
import { BsWhatsapp } from 'react-icons/bs';
import { FiLinkedin, FiGithub } from 'react-icons/fi';
import { MdFilePresent } from 'react-icons/md';
import { LangContext } from '@/context/LangContext';

const SocialMediaButtons = () => {
    const {lang} = useContext(LangContext);
    const pt_cv = '/helpers/cv/CV-Bruno-2024.pdf';
    const en_cv = '/helpers/cv/CV-Bruno-2024-EN.pdf';

    return (
        <div className={styles.socialMediaButtons}>
            <a
                className={`${styles['social']} curricullum`} target='_blank' rel='noopener noreferer'
                href={lang == 'pt' ? pt_cv : en_cv}
            >
                <MdFilePresent />
            </a>
            <a
                className={`${styles['social']} linkedin`} target='_blank' rel='noopener noreferer'
                href='https://www.linkedin.com/in/bruno-arruda-dev/'
            >
                <FiLinkedin />
            </a>
            <a
                className={`${styles['social']} github`} target='_blank' rel='noopener noreferer'
                href='https://github.com/bruno-arruda-dev'
            >
                <FiGithub />
            </a>

            <a
                className={`${styles['social']} whatsapp`} target='_blank' rel='noopener noreferer'
                href='https://wa.me/5562998281602?text=Ol%C3%A1+Bruno%21+Dei+uma+olhada+no+seu+portf%C3%B3lio+e+vim+conversar+com+voc%C3%AA.'
            >
                <BsWhatsapp />
            </a>
        </div>
    );
}

export default SocialMediaButtons;