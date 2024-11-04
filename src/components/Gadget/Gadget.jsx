import React from 'react';

const Gadget = ({gadget}) => {
    console.log(gadget)
    return (
        <div>
            <section className='grid grid-cols-1 md:grid-cols-4 gap-10'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </section>
        </div>
    );
};

export default Gadget;