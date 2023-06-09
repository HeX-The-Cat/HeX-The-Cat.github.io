import { neptuneNod } from '../../assets'

const NoPage = () => {
    return(
        <div className=''>
            <p className='flex justify-center text-3xl py-5' >Congratz, you somehow managed to find yourself somewhere you shouldn't</p>
            <div className='flex justify-center py-5'>
                <img src={neptuneNod} />
            </div>
        </div>
    )
}

export default NoPage;