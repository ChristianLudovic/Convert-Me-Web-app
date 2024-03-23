import { useState } from "react"

export function ConvertBox (){

    //recuperer la valeur enter par l'utilisateur

    const [valueEntered, setValueEntered] = useState('')

    const [valueConverted, setValueConverted] = useState('')

    const tauxEchange = 0.79

    const handleChange = (event) => {
        const value = event.target.value

        setValueEntered(value)

        const convertValue = convert(value)
        setValueConverted(convertValue)
    }

    const convert = (value) => {
        return parseFloat(value) * tauxEchange
    }

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
                            <input type="text" id="amount" placeholder="1" value={valueEntered} onChange={handleChange}/>
                            
                        </div>
                        <div className="currency-select">
                            <span>USD</span>
                            <svg className="caret-down" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.968806 0H9.00006C9.56256 0 9.84381 0.6875 9.43756 1.09375L5.43756 5.09375C5.18756 5.34375 4.78131 5.34375 4.53131 5.09375L0.531306 1.09375C0.125056 0.6875 0.406306 0 0.968806 0Z" fill="#1A1A1A" />
                            </svg>
                        </div>
                    </div>
                    <div className="exchenger-icon">
                        <svg className="vector" width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.2525 20L0 14.6944L5.28 9.36111L6.435 10.5278L3.135 13.8611H20.9825V15.5278H3.135L6.4075 18.8333L5.2525 20ZM16.7475 10.6389L15.5925 9.47222L18.865 6.16667H1.0175V4.5H18.865L15.565 1.16667L16.72 0L22 5.33333L16.7475 10.6389Z" fill="#1A1A1A" />
                        </svg>
                    </div>
                    <div className="convertedAmount-input">
                        <div className="convertedAmount">
                            <label htmlFor="convertedAmount">Converted to</label>
                            <input type="text" id="convertedAmount" placeholder="0.79" readOnly value={valueConverted}/>  
                        </div>
                        <div className="currency-convert">
                            <span>GBP</span>
                            <svg className="caret-down" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.968806 0H9.00006C9.56256 0 9.84381 0.6875 9.43756 1.09375L5.43756 5.09375C5.18756 5.34375 4.78131 5.34375 4.53131 5.09375L0.531306 1.09375C0.125056 0.6875 0.406306 0 0.968806 0Z" fill="#1A1A1A" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="exchangeFees-info">
                    <span>1.00 USD = 0.8875 GBP</span>
                    <svg className="info-circle" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 16C12.4062 16 16 12.4375 16 8C16 3.59375 12.4062 0 8 0C3.5625 0 0 3.59375 0 8C0 12.4375 3.5625 16 8 16ZM6.75 10.5H7.5V8.5H6.75C6.3125 8.5 6 8.1875 6 7.75C6 7.34375 6.3125 7 6.75 7H8.25C8.65625 7 9 7.34375 9 7.75V10.5H9.25C9.65625 10.5 10 10.8438 10 11.25C10 11.6875 9.65625 12 9.25 12H6.75C6.3125 12 6 11.6875 6 11.25C6 10.8438 6.3125 10.5 6.75 10.5ZM8 6C7.4375 6 7 5.5625 7 5C7 4.46875 7.4375 4 8 4C8.53125 4 9 4.46875 9 5C9 5.5625 8.53125 6 8 6Z" fill="#3D55DD" />
                    </svg>
                </div>
            </div>
        </div>
    )
    
}

//recuperer la valuer entrer dans l'input
