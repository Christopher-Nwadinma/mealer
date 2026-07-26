

//another way by which a child component can pick up properties from its parent: destructuring
function Hero({cats}){
    

    return(
        <div className="row py-5">
            {cats.map(function(cat, index){
                return(
                    <div className="col-md-2" key={index}>
                        <p>{cat}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Hero;