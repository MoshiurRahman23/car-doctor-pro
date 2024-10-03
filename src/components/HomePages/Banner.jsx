import React from 'react'

export default function Banner() {
    return (
        <div className='container mx-auto'>
            <div className="carousel w-full">
                {
                    banners.map((banner, index) => (
                        <div
                            style={{
                                backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.7),rgba(0,0,0,0.3)),url(/assets/images/banner/${index + 1}.jpg)`
                            }}
                            key={index} id={`slide${index + 1}`} className="carousel-item relative w-full h-[90vh] bg-top bg-no-repeat rounded-xl">
                            <div className='h-full w-full flex items-center pl-36'>
                                <div className='w-1/4'>
                                    <h2 className='text-5xl font-bold text-white space-y-10'>
                                        {banner.title}
                                    </h2>
                                    <p className='text-white my-5'>{banner.description}</p>
                                    <button className='btn btn-primary mr-6 '>Discover More</button>
                                    <button className='btn btn-primary btn-outline'>Latest Project</button>
                                </div>
                            </div>
                            <div className="absolute space-x-12 right-12 bottom-12 flex -translate-y-1/2 transform justify-between">
                                <a href={banner.prev} className="btn btn-primary btn-circle">❮</a>
                                <a href={banner.next} className="btn btn-primary btn-outline btn-circle">❯</a>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

const banners = [
    {
        title: "Affordable Price For Car Servicing",
        description: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
        next: "#slide2",
        prev: "#slide6"
    },
    {
        title: "Affordable Price For Car Servicing",
        description: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
        next: "#slide3",
        prev: "#slide1"
    },
    {
        title: "Affordable Price For Car Servicing",
        description: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
        next: "#slide4",
        prev: "#slide2"
    },
    {
        title: "Affordable Price For Car Servicing",
        description: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
        next: "#slide5",
        prev: "#slide3"
    },
    {
        title: "Affordable Price For Car Servicing",
        description: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
        next: "#slide6",
        prev: "#slide4"
    },
    {
        title: "Affordable Price For Car Servicing",
        description: "There are many variations of passages of  available, but the majority have suffered alteration in some form",
        next: "#slide1",
        prev: "#slide5"
    },
]