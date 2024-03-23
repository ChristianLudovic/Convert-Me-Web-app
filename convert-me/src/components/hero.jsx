import { ConvertBox } from './converterBox.jsx'

export function Hero (){
    return(
        <div className="hero">
            <div className="title-subTitle">
                <h1>Currency Converter</h1>
                <p>Need to make an international business payment? Take a
                     look at our live foreign exchange rates.
                </p>
            </div>
            <ConvertBox />
        </div>
    )
}