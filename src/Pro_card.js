import React from "react";

const Pro_card = (props) => {
    return (
        <>
        
            <div className="w-1/3 bg-pink-300 flex flex-col rounded-lg shadow-xl shadow-black mx-5">
                <div className="w-full self-center mb-10">
                    <img src={props.picture} alt="picture" />
                </div>
                <div className="w-full px-5 mb-5">
                    <div className="text-xl font-semibold mb-3">
                        <a href={props.link} className="text-slate-700 hover:border-solid 
                        hover:border-slate-700 hover:border-b-2 cursor-pointer">{props.name}</a>
                    </div>
                    <div className="text-md text-slate-600">
                        {props.content}
                    </div>    
                </div>
            </div>   
          </>
    )
}
export default Pro_card;