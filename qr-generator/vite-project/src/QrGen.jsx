import {useState} from 'react';
import {QRCodeSVG} from 'qrcode.react';

const QrGen = () => {
    const [inputValue, setInputValue] = useState('');

    const [isQrVisible, setIsQrVisible] = useState('');

    const OnClickHandler = () => {
        setIsQrVisible(inputValue);
    };

    const OnChangeHandler = (event) => {
        setInputValue(event.target.value);
        setIsQrVisible('');
    };

    return (
        <div className='qr-generator'>
            {isQrVisible !== '' && <QRCodeSVG className="qr-generator__qr-code" value={inputValue} />}
            {isQrVisible == '' && <div className="qr-generator__filler-square"></div>}
            <input type="text" className="qr-generator__input" value={inputValue} onChange={OnChangeHandler} placeholder="Введите текст для QR"/>
            <button type='button' className="qr-generator__button" onClick={OnClickHandler}>
                <strong>Сгенерировать</strong>
            </button>
        </div>
    );
};


export { QrGen };