import notFound from './img/neptunenod.gif'

const NoPage = () => {
    return(
        <div className=''>
            <p className='flex justify-center' >Congratz, you somehow managed to find yourself somewhere you shouldn't</p>
            <div className='flex justify-center'>
                <img src={notFound} />
            </div>
        </div>
    )
}

export default NoPage;