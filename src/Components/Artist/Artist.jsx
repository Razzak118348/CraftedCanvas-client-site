import React, { useEffect, useState } from 'react';


const Artist = () => {
    const[artist,setArtist] =useState([])
    useEffect(()=>{
fetch('/artist.json')
.then(res=>res.json())
.then(data=>setArtist(data))
    },[])
    console.log(artist)

    return (
        <div className='mt-20'>
<h2 className='text-xl md:text-2xl font-bold text-center mb-7'>Featured Artisans</h2>
<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
    { artist.map((item) => (<div key={item.id} className='bg-gray-100 p-6 rounded-lg shadow-lg space-y-3'>
<img src={item.image} alt={item.name} className='w-28 h-28 rounded-full mx-auto ' />
<h3 className='text-lg font-semibold text-center '>{item.name}</h3>
<p className='text-gray-600 text-center '>{item.bio}</p>
<p className='italic text-gray-700 text-center text-sm'>{item.story}</p>
            </div>
        ))}
</div>
        </div>
    );
};

export default Artist;