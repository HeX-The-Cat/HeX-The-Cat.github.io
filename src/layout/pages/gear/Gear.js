import Equipment from "./components/Equipment";
import GearsJson from "./components/Gear.json"

const Gear = () => {
    return (
        <div className=" h-auto ">
            {GearsJson.map((item, index) => {
                return(
                    <Equipment 
                        index={item.index}
                        key={item.gear + index}
                        gear={item.gear}
                        image={item.image}
                        text={item.text}
                        background={item.background}
                    />
                )
            })}
        </div>
    );
}

export default Gear;