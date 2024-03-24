import { useState } from "react"

export function Dropdown (){

    

    return(
        <>
            <div className="dropdown">
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
                            <span className="sigle">TL</span>
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