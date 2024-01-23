import React from "react";

function Aside(){
    let imgSrc = "https://gettingresults.com/wp-content/uploads/2023/05/Team-3.png"
    return(
        <>
        <aside className="bg-secondary">
   {/**
    * DOnt forget to associate herehttp://localhost:3000/
    */}
            <img src={imgSrc} height={450}/><b className="h3 text-warning m-5" >Efficiency is our primary goals</b>
            <p>
                Beacause
                <h2 className='text-light'></h2>
    <p className='text-light'>When reservoir water levels get lower and ground water tables drop, water supplies, human health, and the environment are put at serious risk. For example, lower water levels can contribute to higher concentrations of natural and human pollutants.

</p>
<p className='text-light'>Less water going down the drain means more water available in the lakes, rivers and streams that we use for recreation and wildlife uses to survive. Using water more efficiently helps maintain supplies at safe levels, protecting human health and the environment.

</p>
<p className='text-light'>
Water suppliers are doing their part to improve water efficiency for their own operations and are helping their customers save more by providing rebates on water efficient products and tips on how to create more water efficient yards.
</p>
            </p>
        </aside>
        </>
    );
}
export default Aside