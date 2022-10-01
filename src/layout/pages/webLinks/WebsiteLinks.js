import WebsiteLink from "./components/WebsiteLink";
import WebsiteJson from "./components/WebsiteLinks.json"



const Links = () => {
    return(
        <div>
            <h1 className=" flex justify-center"> This page has some links I use semi-commonly, generally related to games I play and sites I use.</h1>

            <p className=" flex justify-center pb-5">This page is gonna keep growing over time.</p>

            <div className=" grid grid-flow-row-col lg:grid-cols-4 sm:grid-cols-3 grid-cols-2">
                {WebsiteJson.map((item, index) => {
                    return(
                        <WebsiteLink 
                            index={item.index}
                            key={item.websitegroup + index}
                            websitegroup={item.websitegroup}
                            websitelinks={item.websitelinks}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Links;