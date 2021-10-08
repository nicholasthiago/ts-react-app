import style from 'style';


const MasterCardIcon = () => (
    <svg width="102" height="64" viewBox="0 0 102 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={'w-12 h-8 opacity-40'}>
        <circle cx="70" cy="32" r="32" fill="#777777"/>
        <circle cx="32" cy="32" r="32" fill="#777777"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M51 57.7515C43.1139 51.9232 38 42.5589 38 32.0001C38 21.4414 43.1139 12.077 51 6.24878C58.8861 12.077 64 21.4414 64 32.0002C64 42.5589 58.8861 51.9232 51 57.7515Z" fill="#C4C4C4"/>
    </svg>
);


const CreditCard = () => {
    return (
        <div className={'flex flex-col gap-3 bg-blue-gray-200 px-7 py-6 rounded-xl shadow-md'}>

            <MasterCardIcon />

            <h1 className={ style.subtitle }> {'**** **** **** 8709'} </h1>

            <h4 className={ style.small }> {'Current Balance'} </h4>
            <h3 className={ style.body }> {'$ 43,532.07'} </h3>

        </div>
    )
};

export default CreditCard