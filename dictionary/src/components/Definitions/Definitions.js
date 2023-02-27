import React from "react";
import "./Definitions.css"
const Definitions = ({ word, category, Meaning }) => {
    return <div className="meanings">
        
        {
            word === "" ? (<span className="subTitle">Start by typing word</span>) : (
                Meaning.map((mean) =>
                    mean.meanings.map((item) => item.definitions.map((def) => (
                        <div className="singleMean" style={{ backgroundColor: "white", color: "black" }}>
                            <b>{def.definition}</b>
                            <hr style={{ background: "black", width: "100" }}
                            ></hr>
                            {
                                def.example && (
                                    <span>
                                        <b>Example:</b>
                                        {def.example}
                                    </span>
                                )

                            }


                        </div>
                    ))))
            )
        }
    </div>
};
export default Definitions