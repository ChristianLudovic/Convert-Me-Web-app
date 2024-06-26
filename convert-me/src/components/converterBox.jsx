import { useEffect, useRef, useState } from "react";
import axios from 'axios';

export function ConvertBox() {
    const [valueEntered, setValueEntered] = useState('');
    const [valueConverted, setValueConverted] = useState('');
    const [tauxEchange, setTauxEchange] = useState(0.79);
    const dropdownLeftRef = useRef(null);
    const dropdownRightRef = useRef(null);
    const [openLeft, setOpenLeft] = useState(false);
    const [openRight, setOpenRight] = useState(false);
    const [deviseLeft, setDeviseLeft] = useState("USD");
    const [deviseRight, setDeviseRight] = useState("GBP");

    const handleChange = (event) => {
        const value = event.target.value;
        setValueEntered(value);
        const convertValue = convert(value, tauxEchange);
        setValueConverted(convertValue);
    };

    const convert = (value, tauxEchange$) => {
        if (value === '') {
            return 0;
        }
        return (parseFloat(value) * tauxEchange$).toFixed(4);
    };

    const toggleDropdownLeft = () => {
        setOpenLeft(!openLeft);
    };

    const toogleDropdownRight = () => {
        setOpenRight(!openRight);
    };

    const handleChangeDeviseLeft = (newCurrencyLeft, newEchangesFees) => {
        setDeviseLeft(newCurrencyLeft);
        setTauxEchange(newEchangesFees);
    };

    const handleChangeDeviseRight = (newCurrencyRight, newEchangesFeesRight) => {
        setDeviseRight(newCurrencyRight);
        setTauxEchange(newEchangesFeesRight);
    };

    useEffect(() => {
        axios.get(`https://v6.exchangerate-api.com/v6/117de57bbb8560f164535e04/latest/${deviseLeft}`)
            .then(response => {
                const data = response.data;
                const newExchangeRates = data.conversion_rates;
                setTauxEchange(newExchangeRates[deviseRight]);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [deviseLeft, deviseRight]);

    useEffect(() => {
        const convertValue = convert(valueEntered, tauxEchange);
        setValueConverted(convertValue);
    }, [valueEntered, tauxEchange]);

    const closeDropdownLeft = () => {
        setOpenLeft(false);
    };

    const closeDropdownRight = () => {
        setOpenRight(false);
    };

    useEffect(() => {
        const handleClickOutsideLeft = (event) => {
            if (dropdownLeftRef.current && !dropdownLeftRef.current.contains(event.target)) {
                setOpenLeft(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutsideLeft);
        return () => {
            document.removeEventListener("mousedown", handleClickOutsideLeft);
        };
    }, [dropdownLeftRef]);

    useEffect(() => {
        const handleClickOutsideRight = (event) => {
            if (dropdownRightRef.current && !dropdownRightRef.current.contains(event.target)) {
                setOpenRight(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutsideRight);
        return () => {
            document.removeEventListener("mousedown", handleClickOutsideRight);
        };
    }, [dropdownRightRef]);

    const switcher = () => {
        const temp = deviseLeft;
        setDeviseLeft(deviseRight);
        setDeviseRight(temp);

        const temp2 = valueEntered
        setValueEntered(valueConverted);
        setValueConverted(temp2);
    };


    console.log(tauxEchange)
    

    return(
        <div className="converter-box-container">
            <div className="convertBoxTile-subTitle">
                <h2>Make fast and affordable international business payments
                </h2>
                <p>Send secure international business payments in <span>XX</span> currencies, all at competitive rates with no hidden fees.</p>
            </div>
            <div className="converter-bottom">
                <div className="container">
                    <div className="amount-input">
                        <div className="amount">
                            <label htmlFor="amount">Amount</label>
                            <input type="number" inputMode="numeric" id="amount" placeholder="0.00" value={valueEntered} onChange={handleChange}/>
                            
                        </div>
                        <div className="currency-select" onClick={toggleDropdownLeft}>
                            <span>{deviseLeft}</span>
                            <svg className="caret-down" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.968806 0H9.00006C9.56256 0 9.84381 0.6875 9.43756 1.09375L5.43756 5.09375C5.18756 5.34375 4.78131 5.34375 4.53131 5.09375L0.531306 1.09375C0.125056 0.6875 0.406306 0 0.968806 0Z" fill="#1A1A1A" />
                            </svg>
                        </div>
                    </div>
                    <div className="exchenger-icon" onClick={switcher}>
                        <svg className="vector" width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.2525 20L0 14.6944L5.28 9.36111L6.435 10.5278L3.135 13.8611H20.9825V15.5278H3.135L6.4075 18.8333L5.2525 20ZM16.7475 10.6389L15.5925 9.47222L18.865 6.16667H1.0175V4.5H18.865L15.565 1.16667L16.72 0L22 5.33333L16.7475 10.6389Z" fill="#1A1A1A" />
                        </svg>
                    </div>
                    <div className="convertedAmount-input">
                        <div className="convertedAmount">
                            <label htmlFor="convertedAmount">Converted to</label>
                            <input type="text" id="convertedAmount" placeholder="0.00" readOnly value={valueConverted}/>  
                        </div>
                        <div className="currency-convert" onClick={toogleDropdownRight}>
                            <span>{deviseRight}</span>
                            <svg className="caret-down" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.968806 0H9.00006C9.56256 0 9.84381 0.6875 9.43756 1.09375L5.43756 5.09375C5.18756 5.34375 4.78131 5.34375 4.53131 5.09375L0.531306 1.09375C0.125056 0.6875 0.406306 0 0.968806 0Z" fill="#1A1A1A" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="exchangeFees-info">
                    <span>1.00 {deviseLeft} = {tauxEchange} {deviseRight}</span>
                    <svg className="info-circle" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 16C12.4062 16 16 12.4375 16 8C16 3.59375 12.4062 0 8 0C3.5625 0 0 3.59375 0 8C0 12.4375 3.5625 16 8 16ZM6.75 10.5H7.5V8.5H6.75C6.3125 8.5 6 8.1875 6 7.75C6 7.34375 6.3125 7 6.75 7H8.25C8.65625 7 9 7.34375 9 7.75V10.5H9.25C9.65625 10.5 10 10.8438 10 11.25C10 11.6875 9.65625 12 9.25 12H6.75C6.3125 12 6 11.6875 6 11.25C6 10.8438 6.3125 10.5 6.75 10.5ZM8 6C7.4375 6 7 5.5625 7 5C7 4.46875 7.4375 4 8 4C8.53125 4 9 4.46875 9 5C9 5.5625 8.53125 6 8 6Z" fill="#3D55DD" />
                    </svg>
                </div>
            </div>
            <div ref={dropdownLeftRef}>
                {openLeft && 
                    <div className="dropdown-left show" id="myDropdown" onClick={closeDropdownLeft}>
                        <div className="dropdown-container">
                            <div className="dropdown-items">
                                <div className="item-content" id="item-content1" onClick={() =>{handleChangeDeviseLeft('EUR', tauxEchange)}}>
                                    <span className="sigle">EUR</span>
                                    <span className="definition">Euro</span>
                                </div>
                                <div className="item-content" onClick={() =>{handleChangeDeviseLeft('XOF', tauxEchange)}}>
                                    <span className="sigle">XOF</span>
                                    <span className="definition">Francs CFA</span>
                                </div>
                                <div className="item-content" onClick={() =>{handleChangeDeviseLeft('TRY', tauxEchange)}}>
                                    <span className="sigle">TRY</span>
                                    <span className="definition">Turkish Lira</span>
                                </div>
                                <div className="item-content" onClick={() =>{handleChangeDeviseLeft('USD', tauxEchange)}}>
                                    <span className="sigle">USD</span>
                                    <span className="definition">US Dollar</span>
                                </div>
                                <div className="item-content" onClick={() =>{handleChangeDeviseLeft('GBP', tauxEchange)}}>
                                    <span className="sigle">GBP</span>
                                    <span className="definition">British Pound</span>
                                </div>
                                <div className="item-content" onClick={() =>{handleChangeDeviseLeft('NGN', tauxEchange)}}>
                                    <span className="sigle">NGN</span>
                                    <span className="definition">Naira</span>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
           
            <div ref={dropdownRightRef}>
                {openRight && 
                    <div className="dropdown-right show" id="myDropdown" onClick={closeDropdownRight}>
                        <div className="dropdown-container">
                            <div className="dropdown-items">
                                <div className="item-content" id="item-content1" onClick={() =>{handleChangeDeviseRight('EUR', tauxEchange)}}>
                                    <span className="sigle">EUR</span>
                                    <span className="definition">Euro</span>
                                </div>
                                <div className="item-content" onClick={() =>{handleChangeDeviseRight('XOF', tauxEchange)}}>
                                    <span className="sigle">XOF</span>
                                    <span className="definition">Francs CFA</span>
                                </div>
                                <div className="item-content" onClick={() =>{handleChangeDeviseRight('TRY', tauxEchange)}}>
                                    <span className="sigle">TRY</span>
                                    <span className="definition">Turkish Lira</span>
                                </div>
                                <div className="item-content" onClick={() =>{handleChangeDeviseRight('USD', tauxEchange)}}>
                                    <span className="sigle">USD</span>
                                    <span className="definition">US Dollar</span>
                                </div>
                                <div className="item-content" onClick={() =>{handleChangeDeviseRight('GBP', tauxEchange)}}>
                                    <span className="sigle">GBP</span>
                                    <span className="definition">British Pound</span>
                                </div>
                                <div className="item-content" onClick={() =>{handleChangeDeviseRight('NGN', tauxEchange)}}>
                                    <span className="sigle">NGN</span>
                                    <span className="definition">Naira</span>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
  
        </div>
    )
}
