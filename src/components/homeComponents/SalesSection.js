import { Link } from 'react-router-dom';
import Card from '../shopComponents/Card';

export default function SalesSection() {
    return (
        <section className="flex px-10 mt-16 gap-x-6 ">
            <div className="w-2/6 h-40 flex flex-col justify-start">
                <h1 className='text-4xl w-40 text-start text-gray'>We'll Cheers to That</h1>
                <Link to="/shop" className="hover:text-gray text-start mt-8 text-2xl">Shop all wine</Link>
            </div>
            <div className="w-4/6 bg-black h-auto">
                
            </div>
        </section>
    )
}