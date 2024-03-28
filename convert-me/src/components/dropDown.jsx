import { useState } from "react"

export function Dropdown (){

    const [devise, setDevise] = useState("USD"); // Devise par défaut

    const handleChangeDevise = (nouvelleDevise) => {
        setDevise(nouvelleDevise);
        // Fermez le dropdown après la sélection de la devise
        document.getElementById("myDropdown").classList.remove("show");
    };

    return(
        <>
            <div className="dropdown" id="dropdown">
                <div className="dropdown-container">
                    <div className="dropdown-items">
                        <div className="item-content" id="item-content1">
                            <span className="sigle">EUR</span>
                            <span className="definition">Euro</span>
                        </div>
                        <div className="item-content">
                            <span className="sigle">XOF</span>
                            <span className="definition">Francs CFA</span>
                        </div>
                        <div className="item-content">
                            <span className="sigle">TRY</span>
                            <span className="definition">Turkish Lira</span>
                        </div>
                        <div className="item-content">
                            <span className="sigle">USD</span>
                            <span className="definition">US Dollar</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}