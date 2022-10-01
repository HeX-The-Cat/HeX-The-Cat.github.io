 import SingleLink from "./SingleLink";


const WebsiteLink = ({websitegroup , websitelinks}) => {
    return(
        <div className=" p-1">
            <div className=" p-1">
                <h2 className="flex justify-center">{websitegroup}</h2>

                {websitelinks.map((item, index) => {
                    return(
                        <SingleLink
                            index={item.index}
                            key={item.website + index}
                            name={item.website}
                            address={item.websiteaddress}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default WebsiteLink;