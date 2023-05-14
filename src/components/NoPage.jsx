import { neptuneNod } from '../assets'

const NoPage = () => {
    return(
        <div className=''>
            <p className='flex justify-center' >Congratz, you somehow managed to find yourself somewhere you shouldn't</p>
            <div className='flex justify-center'>
                <img src={neptuneNod} />
            </div>
        </div>
    )
}

export default NoPage;