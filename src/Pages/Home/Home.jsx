import 'react-tabs/style/react-tabs.css';
import { Toaster } from 'react-hot-toast';
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { useEffect, useState } from 'react';
import ToyCard from './ToyCard';



const Home = () => {
    const [toys, setToys] = useState([]);
    const [tempToy, setTempToy] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => {
                const filter = data.filter(rc => rc.subcategory === 'Racing Cars')
                setToys(data)
                setTempToy(filter);
            })
    }, [])

    const rc = e => {
        const t = toys.filter(rc => rc.subcategory === e.target.value);
        setTempToy(t);
    }

    const pc = e => {
        const t = toys.filter(rc => rc.subcategory === e.target.value);
        setTempToy(t);
    }

    const cc = e => {
        const t = toys.filter(rc => rc.subcategory === e.target.value);
        setTempToy(t);
    }


    return (
        <div>
            <Toaster />

            {/* banner  */}

            <div className="flex max-md:flex-col justify-evenly items-center mt-36">
                <h1 className="animate bg-gradient-to-r from-red-500 to-yellow-400 bg-clip-text text-transparent text-7xl max-md:text-5xl font-black leading-relaxed">PLAY ALL DAY <br /> With <br /> AMAZING TOYS</h1>
                <img className="w-1/3" src="/src/playday.png" alt="" />
            </div>

            {/* car showcase  */}

            <div className="my-24">
                <div className="flex justify-evenly items-center" data-aos="fade-right">
                    <img className="w-1/3" src="https://i.ibb.co/HGrQhGn/71-JVwla-JMh-L-SL1500.jpg" alt="" />
                    <h1 className="text-8xl max-md:text-4xl font-bold">SPORTS CAR</h1>
                </div>
                <div className="flex justify-evenly items-center" data-aos="fade-left">
                    <h1 className="text-8xl max-md:text-4xl font-bold">LUXURY CAR</h1>
                    <img className="w-1/3" src="https://i.ibb.co/XDyY2CC/Mercedes-Benz-PNG-Photo.png" alt="" />
                </div>
                <div data-aos="fade-right" className="flex justify-evenly items-center">
                    <img className="w-1/3" src="https://i.ibb.co/Wz3rSc6/9252a1c907dae8d3c3dd235cb85a890a.png" alt="" />
                    <h1 className="text-8xl max-md:text-4xl font-bold">POSH CAR</h1>
                </div>
                <div className="flex justify-evenly items-center" data-aos="fade-left">
                    <h1 className="text-8xl max-md:text-4xl font-bold">POLICE CAR</h1>
                    <img className="w-1/3" src="https://i.ibb.co/BBxYDzr/Police-Car-1.png" alt="" />
                </div>
                <div data-aos="fade-right" className="flex justify-evenly items-center">
                    <img className="w-1/3" src="https://i.ibb.co/Ny1WzxQ/WH1126-DP-B.png" alt="" />
                    <h1 className="text-8xl max-md:text-4xl font-bold">MEDICAL CAR</h1>
                </div>
                <div className="flex justify-evenly items-center" data-aos="fade-left">
                    <h1 className="text-8xl max-md:text-4xl font-bold">HEAVY CAR</h1>
                    <img className="w-1/3" src="https://i.ibb.co/gZGYY2C/KT1136-WM-Cat-Bulldozer-PD1-900x600-ebc48f89-f2f3-4e99-a945-b9916be4799f-1200x630.webp" alt="" />
                </div>
            </div>

            {/* react tabs  */}

            <div data-aos="zoom-in-down">
                <h1 className="text-center mt-36 text-5xl max-md:text-4xl font-bold">SHOP BY CATEGORY</h1>
                <p className='text-center mt-12 max-md:text-4xl font-bold' >Press Tab to see!</p>
                <Tabs className='text-center w-2/3 mx-auto mt-24'>
                    <TabList>
                        <Tab><button onClick={rc} value="Racing Cars">Racing Car Toy</button></Tab>
                        <Tab><button onClick={pc} value="Police Cars">Police Car Toy</button></Tab>
                        <Tab><button onClick={cc} value="Construction Cars">Construction Car Toy</button></Tab>
                    </TabList>

                    <TabPanel>
                        <div className='grid grid-cols-3 gap-4'>
                            {
                                tempToy.map(t => <ToyCard
                                    key={t._id}
                                    t={t}
                                ></ToyCard>
                                )
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-3 gap-4'>
                            {
                                tempToy.map(t => <ToyCard
                                    key={t._id}
                                    t={t}
                                ></ToyCard>
                                )
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-3 gap-4'>
                            {
                                tempToy.map(t => <ToyCard
                                    key={t._id}
                                    t={t}
                                ></ToyCard>
                                )
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>


            {/* facts  */}
            <div className='my-24 text-center' data-aos="zoom-out-up">
                <h1 className='text-5xl my-12'>!!!FACTS!!!</h1>
                <p className='my-24 text-2xl'>There Are More <span className='text-4xl text-red-500'> Cars Than People </span> In The World</p>
                <p className='my-24 text-2xl'>The most expensive toy in the world is the Astolat Dollhouse Castle is costs an astounding <span className='text-4xl text-blue-500'>$8.5 million</span></p>
                <p className='my-24 text-2xl'>
                    The word toy comes from the old English word for <span className='text-4xl text-green-500'> “Tool”</span></p>
            </div>

            {/* toy meme  */}

            <div className='my-24 text-center' data-aos="zoom-out-down">
                <h1 className='text-5xl my-24 mt-72'>Top 3 Toy Manufacturing Companies</h1>
                <ul className='lg:flex justify-evenly'>
                    <li className='my-24 text-7xl font-bold text-red-500'>Bandai Namco</li>
                    <li className='my-24 text-7xl font-bold text-blue-500'>Yikang Plush Toys</li>
                    <li className='my-24 text-7xl font-bold text-green-500'>Lego</li>
                </ul>
            </div>
            
        </div>
    );
};

export default Home;