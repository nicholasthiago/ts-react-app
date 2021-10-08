import style from 'style';

import CreditCard from 'components/credit-card';


const Home = () => {
    return (
        <section className={ style.page }>

            <span className={'w-full flex flex-col'}>
                <h3 className={ style.small }> {'Welcome,'} </h3>
                <h1 className={ style.subtitle }> {'Bruce'} </h1>
            </span>

            <CreditCard />

        </section>
    )
};

export default Home