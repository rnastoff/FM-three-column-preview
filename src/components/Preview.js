import classes from './Preview.module.css'

import Card from './Card';

import iconLuxury from '../images/icon-luxury.svg';
import iconSedans from '../images/icon-sedans.svg';
import iconSuvs from '../images/icon-suvs.svg';

const sedansText = "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.";
const suvsText = "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-raod adventures."
const luxuryText = "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."

const Preview = () => {
  return (
    <div className={classes.cardGroup}>
      <Card icon={iconSedans} title={"SEDANS"} paragraph={sedansText} color={"#E38826"} />
      <Card icon={iconSuvs} title={"SUVS"} paragraph={suvsText} color={"#006970"} />
      <Card icon={iconLuxury} title={"LUXURY"} paragraph={luxuryText} color={"#004241"} />
    </div>
  )
}

export default Preview;