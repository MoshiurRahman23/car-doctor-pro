import React from 'react';
import { services } from '../../lib/services';
import ServiceCard from '../Cards/ServiceCard';
import { getServices } from '@/services/getServices';


export default async function Services() {
    const { services } = await getServices()
    // console.log(data.services);
    return (
        <div className='text-slate-800 min-h-screen text-center'>
            <div className='text-center container mx-auto'>
                <h3 className='text-2xl font-bold text-orange-600'>Our Services</h3>
                <h2 className="text-5xl">Our Services Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable.  </p>
            </div>
            <div className='container mx-auto mt-12 grid grid-cols-1 lg:grid-cols-3 gap-3'>
                {
                    services?.length > 0 && services?.map((service) => (<ServiceCard service={service} key={service._id}></ServiceCard>))
                }
            </div>
            <button className='btn btn-primary btn-outline my-10'>More Services</button>
        </div>
    )
}
