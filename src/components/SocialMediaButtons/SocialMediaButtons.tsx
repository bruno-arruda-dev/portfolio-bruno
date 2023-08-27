import styles from '@/components/SocialMediaButtons/SocialMediaButtons.module.scss';
import { BsWhatsapp } from 'react-icons/bs';
import { FiLinkedin, FiGithub } from 'react-icons/fi';
import { BsPersonVcard } from 'react-icons/bs';

const SocialMediaButtons = () => {

    return (
        <div className={styles.socialMediaButtons}>
            <a
                className={styles.social} target='_blank' rel='noopener noreferer'
                href='/helpers/cv/CV-Bruno.pdf'
            >
                <BsPersonVcard />
            </a>
            <a
                className={styles.social} target='_blank' rel='noopener noreferer'
                href='https://www.linkedin.com/in/bruno-arruda-dev/'
            >
                <FiLinkedin />
            </a>
            <a
                className={styles.social} target='_blank' rel='noopener noreferer'
                href='https://github.com/bruno-arruda-dev'
            >
                <FiGithub />
            </a>

            <a
                className={styles.social} target='_blank' rel='noopener noreferer'
                href='https://wa.me/5562998281602?text=Ol%C3%A1+Bruno%21+Dei+uma+olhada+no+seu+portf%C3%B3lio+e+vim+conversar+com+voc%C3%AA.'
            >
                <BsWhatsapp />
            </a>
        </div>
    );
}

export default SocialMediaButtons;