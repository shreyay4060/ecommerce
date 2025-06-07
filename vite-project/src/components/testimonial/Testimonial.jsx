import React from "react";
 import data from "./data";

export default function Testimonial () {

  
    return (
        <div>
            <section className="text-gray-600 body-font mb-10">
                {/* main  */}
                <div className="container px-5 py-10 mx-auto">
                    {/* Heading  */}
                    <h1 className=' text-center text-3xl font-bold text-black' >Testimonial</h1>
                    {/* para  */}
                    <h2 className=' text-center text-2xl font-semibold mb-10' >What our <span className=' text-pink-500'>customers</span> are saying</h2>

                    <div className=" flex  flex-wrap justify-evenly my-2 mx-2">
                        {data.map((dat)=>{
                            return <div key={dat.name} style={{width:"350px"}} className="bg-gray-200 text-black p-3 border-2 hover:translate-y-2 shadow-2xl shadow-black  border-pink-600  hover:border-violet-600 my-2 rounded-2xl lg:w-1/3 md:w1/2 ">
                                <img src={dat.img} alt={dat.name} className="h-20 w-20 rounded-full mb-2 border-7 border-pink-500 hover:border-violet-600" />
                                <p>{dat.info.substring(0,100)+" ....."}</p>
                                <h2 className="my-2 font-bold">{dat.name}</h2>
                                <h2 className="font-semibold">{dat.role}</h2>
                            </div>
                        })}
                    </div>

                    {/* <div className="flex flex-wrap gap-1 justify-evenly">
                        
                        <div className="lg:w-1/3 bg-gray-200 lg:w-80 rounded-2xl lg:mb-0 mb-6 p-4">
                            <div className="h-90 text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 border-1 border-gray-200  object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://ecommerce-sk.vercel.app/img/kamal.png" />
                                <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Kamal Nayan Upadhyay</h2>
                                <p className="text-gray-500">Senior Product Designer</p>
                            </div>
                        </div>

                  
                        <div className="lg:w-1/3 bg-gray-200 rounded-2xl border-1 border-gray-200  lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://www.devknus.com/img/gawri.png" />
                                <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">S Mishra</h2>
                                <p className="text-gray-500">UI Develeoper</p>
                            </div>
                        </div>

                       
                        <div className="lg:w-1/3 bg-gray-200 rounded-2xl border-1 border-gray-200 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://firebasestorage.googleapis.com/v0/b/devknus-official-database.appspot.com/o/images%2FScreenshot%202023-07-07%20at%202.20.32%20PM-modified.png?alt=media&token=324ddd80-2b40-422c-9f1c-1c1fa34943fa" />
                                <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">XYZ </h2>
                                <p className="text-gray-500">CTO</p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>
        </div>
    )
}

