import React from 'react';

const milestones = [
    { year: 1957, title: 'Purchased Farm', text: 'Aliquet nec ullamcorper sit amet risus. Velit scelerisque in dictum non' },
    { year: 1976, title: 'First Production', text: 'Aliquet nec ullamcorper sit amet risus. Velit scelerisque in dictum non' },
    { year: 1990, title: 'Small Enterprise', text: 'Aliquet nec ullamcorper sit amet risus. Velit scelerisque in dictum non' },
    { year: 1961, title: 'First Vineyard', text: 'Aliquet nec ullamcorper sit amet risus. Velit scelerisque in dictum non' },
    { year: 1985, title: 'First Customers', text: 'Aliquet nec ullamcorper sit amet risus. Velit scelerisque in dictum non' },
    { year: 2011, title: 'Organic Company', text: 'Aliquet nec ullamcorper sit amet risus. Velit scelerisque in dictum non' },
];

const HistorySection = () => (
    <section className="w-full my-10">
        <div className="container mx-auto text-center py-8">
            <h2 className="text-3xl font-semibold">The fresh new wine stories</h2>
            <div className="flex items-center justify-center mt-4">
                <div className="border-t-2 border-gray flex-grow"></div>
                <p className="mx-6 text-gray">estd 1970</p>
                <div className="border-t-2 border-gray flex-grow"></div>
            </div>
        </div>
        
        <div className="container mx-auto flex justify-center my-8">
            <div className="flex flex-col gap-y-12 md:w-1/3">
                {milestones.slice(0, 3).map((milestone, index) => (
                    <div key={index} className="mb-4 text-end">
                        <h5 className="text-xl font-semibold" style={{ color: '#243305' }}>{milestone.year}</h5>
                        <p className="text-gray">{milestone.title}</p>
                        <p className="text-gray" style={{ color: '#333333' }}>{milestone.text}</p>
                    </div>
                ))}
            </div>
            <div className="md:w-2/3 flex justify-center content-center my-4">
                <img
                    loading="lazy"
                    decoding="async"
                    src="https://chateau.qodeinteractive.com/wp-content/uploads/2023/02/h1-img-03.jpg"
                    alt="Historic Image"
                    className="object-cover rounded-lg w-auto h-auto"
                />
            </div>
            <div className="flex flex-col gap-y-12 md:w-1/3">
                {milestones.slice(3).map((milestone, index) => (
                    <div key={index} className="mb-4 text-start">
                        <h5 className="text-xl font-semibold" style={{ color: '#243305' }}>{milestone.year}</h5>
                        <p className="text-gray">{milestone.title}</p>
                        <p className="text-gray" style={{ color: '#333333' }}>{milestone.text}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default HistorySection;
