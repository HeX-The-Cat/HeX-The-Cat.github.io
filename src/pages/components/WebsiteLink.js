 import SingleLink from "./SingleLink";


const WebsiteLink = ({websitegroup , websitelinks}) => {
    return(
        <div>
            <h2>{websitegroup}</h2>

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
    )
}

export default WebsiteLink;