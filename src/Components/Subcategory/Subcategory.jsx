import React from 'react';
import { Typewriter } from 'react-simple-typewriter'

const Subcategory = () => {

    return (
        <div>
            <section className='mt-16 lg:mt-24 bg-gray-300 rounded-md'>
                <div className="grid gap-6 lg:grid-cols-3 p-5">
                    <div className="overflow-hidden rounded lg:flex lg:col-span-3">
                        <img src="https://github.com/Razzak118348/CraftedCanvas_Image/raw/main/images/OilPainting1.jpg
" alt="" className="object-cover w-full h-auto max-h-52 hidden lg:flex " />
                        <div className="p-6 space-y-6 lg:p-8 md:flex md:flex-col dark:bg-gray-50">

                            <h2 className="text-lg md:text-3xl font-bold md:flex-1">
                            <Typewriter
                                                words={['Beautiful Painting and drawing is  a great way to express yourself.']}
                                                loop={2}
                                                typeSpeed={70}
                                                deleteSpeed={50}

                                            /> <br />
                                <span className='text-base md:text-lg'>We commit to give your best painting and drawing experience.Our all subcategory are given below.</span>
                                </h2>

                        </div>
                    </div>
                    <div className="p-6 rounded lg:p-8 lg:py-12 dark:bg-gray-50">
                        <h3 className="inline font-medium dark:text-gray-900"> Landscape Painting: </h3>
                        <p className="inline">Mountain view canvas, Forest based Landscape
                        painting.</p>
                    </div>
                    <div className="p-6 rounded lg:p-8 lg:py-12 dark:bg-gray-50">
                        <h3 className="inline font-medium dark:text-gray-900"> Portrait Drawing: </h3>
                        <p className="inline">Pencil Sketch Portrait, Ink Outline Portrait, Acrylic Portrait Canvas.</p>
                    </div>
                    <div className="p-6 rounded lg:p-8 lg:py-12 dark:bg-gray-50">
                        <h3 className="inline font-medium dark:text-gray-900">Watercolour Painting: </h3>
                        <p className="inline"> Floral Watercolor Art, Animal Watercolor Portrait.</p>
                    </div>
                    <div className="p-6 rounded lg:p-8 lg:py-12 dark:bg-gray-50">
                        <h3 className="inline font-medium dark:text-gray-900">Oil Painting: </h3>
                        <p className="inline">Realistic Oil Portrait, Abstract Oil Painting.</p>
                    </div>
                    <div className="p-6 rounded lg:p-8 lg:py-12 dark:bg-gray-50">
                        <h3 className="inline font-medium dark:text-gray-900">Charcoal Sketching: </h3>
                        <p className="inline">Figure Charcoal Sketch, Architectural Charcoal
                        Drawing.</p>
                    </div>
                    <div className="p-6 rounded lg:p-8 lg:py-12 dark:bg-gray-50">
                        <h3 className="inline font-medium dark:text-gray-900">Cartoon Drawing: </h3>
                        <p className="inline"> Comic Strip Drawing, Superhero Cartoon Design.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Subcategory;