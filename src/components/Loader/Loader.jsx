import { Oval } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.Loader}>
      <Oval
        height={40}
        width={40}
        color="#303f9f"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#303f9f"
        strokeWidth={5}
        strokeWidthSecondary={5}
      />
    </div>
  );
};
export { Loader };
