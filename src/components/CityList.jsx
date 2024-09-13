/* eslint-disable react/prop-types */
import CityItem from "./CityItem";
import styles from "../styles/CityList.module.css";
import Message from "./Message";
import Spinner from "./Spinner";
import { useCities } from '../contexts/CitiesContext';

const CityList = () => {
  const { cities, isLoading } = useCities();

  if (isLoading) {
    return <Spinner />;
  }

  if (!cities.length) {
  return  <Message message={'City is empty, click on the map to add. '}  />;
  }

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  );
};

export default CityList;
