import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import { Toaster } from 'react-hot-toast';

const Home = () => {
    return (
        <div>
            <Toaster />

            {/* banner  */}

            <div className="flex max-md:flex-col justify-evenly items-center mt-36">
                <h1 className="animate bg-gradient-to-r from-red-500 to-yellow-400 bg-clip-text text-transparent text-7xl max-md:text-5xl font-black leading-relaxed">PLAY ALL DAY <br /> With <br /> AMAZING TOYS</h1>
                <img className="w-1/3" src="../../../public/playday.png" alt="" />
            </div>

            {/* car showcase  */}

            <div className="my-24">
                <div className="flex justify-evenly items-center">
                    <img className="w-1/3" src="https://i.ibb.co/HGrQhGn/71-JVwla-JMh-L-SL1500.jpg" alt="" />
                    <h1 className="text-8xl max-md:text-4xl font-bold">SPORTS CAR</h1>
                </div>
                <div className="flex justify-evenly items-center">
                    <h1 className="text-8xl max-md:text-4xl font-bold">LUXURY CAR</h1>
                    <img className="w-1/3" src="https://i.ibb.co/XDyY2CC/Mercedes-Benz-PNG-Photo.png" alt="" />
                </div>
                <div className="flex justify-evenly items-center">
                    <img className="w-1/3" src="https://i.ibb.co/Wz3rSc6/9252a1c907dae8d3c3dd235cb85a890a.png" alt="" />
                    <h1 className="text-8xl max-md:text-4xl font-bold">POSH CAR</h1>
                </div>
                <div className="flex justify-evenly items-center">
                    <h1 className="text-8xl max-md:text-4xl font-bold">POLICE CAR</h1>
                    <img className="w-1/3" src="https://i.ibb.co/BBxYDzr/Police-Car-1.png" alt="" />
                </div>
                <div className="flex justify-evenly items-center">
                    <img className="w-1/3" src="https://i.ibb.co/Ny1WzxQ/WH1126-DP-B.png" alt="" />
                    <h1 className="text-8xl max-md:text-4xl font-bold">MEDICAL CAR</h1>
                </div>
                <div className="flex justify-evenly items-center">
                    <h1 className="text-8xl max-md:text-4xl font-bold">HEAVY CAR</h1>
                    <img className="w-1/3" src="https://i.ibb.co/gZGYY2C/KT1136-WM-Cat-Bulldozer-PD1-900x600-ebc48f89-f2f3-4e99-a945-b9916be4799f-1200x630.webp" alt="" />
                </div>
            </div>

            {/* react tabs  */}

            <div>
                <h1 className="text-center mt-36 text-5xl max-md:text-4xl font-bold">SHOP BY CATEGORY</h1>
                <Tabs className='text-center w-2/3 mx-auto mt-24'>
                    <TabList>
                        <Tab>Sports Car Toy</Tab>
                        <Tab>Police Car Toy</Tab>
                        <Tab>Heavy Car Toy</Tab>
                    </TabList>

                    <TabPanel>
                        <h2>Any content 1</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Home;