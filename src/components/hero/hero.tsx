

import IHeroSection from '../../interfaces/components/hero/hero'

import styles from '../../styles/components/hero/hero.module.scss'

import FPLogo from '../../../public/svg/FP-logo.svg';
import LFDELogo from '../../../public/svg/LFDE-logo.svg';
import LOYSLogo from '../../../public/svg/LOYS-logo.svg';
import TBFLogo from '../../../public/svg/TBF-logo.svg';

export const Hero = (props: IHeroSection) => (
	<>
		<div className={`${styles['hero']}`}>
			<div className={`col ${styles['heroWrapper']}`}>
				<div className={`${styles['top-Tier']}`}></div>
				<div className={`${styles['heroContent']}`}>
					<h1 className={`${styles['h1']}`}>{props.heroH1}</h1>
					<div className={`${styles['h1Sub']}`}>{props.h1Sub}</div>
					<h2 className={`${styles['h2']}`}>
					<div className={`${styles['fourbyfour']}`}>4x4</div><br />Virtuelle Roadshow <br /> <small>18. Mai 2021</small>
					</h2>
					<div className={`${styles['btnWrapper']}`}>
						<button className={`${styles['btn']} ${styles['btn-primary']}`}>Anmelden</button>
						<button className={`${styles['btn']} ${styles['btn-outline-light']}`} type="button">Details</button>
					</div>
				</div>
				<div className={`row ${styles['companies']}`}>
					<div className={`col ${styles['co-wrapper']} ${styles['FP-wrapper']}`}><a href="/company/first-private"><img src={FPLogo} alt="First Private" /></a></div>
					<div className={`col ${styles['co-wrapper']} ${styles['LFDE-wrapper']}`}><a href="/company/lfde"><img src={LFDELogo} alt="LFDE" /></a></div>
					<div className={`col ${styles['co-wrapper']} ${styles['LOYS-wrapper']}`}><a href="/company/loys"><img src={LOYSLogo} alt="LOYS" /></a></div>
					<div className={`col ${styles['co-wrapper']} ${styles['TBF-wrapper']}`}><a href="/company/tbf"><img src={TBFLogo} alt="TBF" /></a></div>
				</div>
			</div>
		</div>
	</>
);
