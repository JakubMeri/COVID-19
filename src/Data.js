import React from 'react'

export default function Data(props) {

    return (
        <div className="info">
            <h1>{props.aktualnaKrajina}</h1>
            {props.info.map( data => { return data.Country === props.aktualnaKrajina ? 
            <React.Fragment key={data.Country}>
            <div className="global-info">
                <p><span>Celkový počet nakazených:</span> {data.TotalConfirmed}</p>  
                <p><span>Počet úmrtí:</span> {data.TotalDeaths}</p>
                <p><span>Počet vyliečených:</span> {data.TotalRecovered}</p>
            </div>  
            <div className="daily-info">
                <p><span>Dnes sa nakazilo:</span> {data.NewConfirmed}</p>  
                <p><span>Dnes zomrelo:</span> {data.NewDeaths}</p>
                <p><span>Dnes sa vyliečilo:</span> {data.NewRecovered}</p>
            </div>
            </React.Fragment> : null})}
        </div>
    )
}
