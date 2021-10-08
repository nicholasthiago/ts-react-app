import { FC, useState, useEffect } from 'react';
import style from 'style';

import { CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/outline';

interface ValidItemProps {
    data: string,
    test: string,
    message: string,
};

const ValidItem: FC<ValidItemProps> = ({ data, message, test }) => {

    const iconStyle = 'w-4 h-4';

    const [ valid, setValid ] = useState( false );

    useEffect(() => {
        if ( data.match( test ) ) {
            return setValid( true );
        } else {
            return setValid( false )
        };

    }, [ data, test ]);

    return (
        <li className={( valid ? style.message : style.error ) + ' w-full flex flex-row gap-2' }>

            { valid
                ? <CheckCircleIcon          className={`${iconStyle} text-green-500`} />
                : <ExclamationCircleIcon    className={`${iconStyle} text-red-500`} />
            } { message }
        </li>
    )
};

export default ValidItem