const SingleLink = ({name, address, index}) => {
    return(
        <div className="">
            <a href={address} target="_blank" rel="noopener noreferrer">{name}</a>
        </div>
    )
}

export default SingleLink;