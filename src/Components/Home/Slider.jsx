import { Carousel, Typography, Button } from "@material-tailwind/react";
const Banner = () => {
    return (
            <Carousel className="rounded-xl mb-24">
                <div className="relative h-full w-full">
                    <img
                        src="https://i.postimg.cc/SRH45kn9/Angkor-Wat-Cambodia.jpg"
                        alt="image 1"
                        className="h-[800px] w-[1350px] object-cover"
                    />
                    <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                        <div className="w-3/4 text-center md:w-2/4">
                            <Typography
                                variant="h1"
                                color="white"
                                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                            >
                                The Beauty of Angkor Wat
                            </Typography>
                            <Typography
                                variant="lead"
                                color="white"
                                className="mb-12 opacity-80"
                            >
                                Angkor Wat is a Hindu-Buddhist temple complex in Cambodia. Located on a site measuring 162.6 hectares within the ancient Khmer capital city of Angkor
                            </Typography>
                            <div className="flex justify-center gap-2">
                                <Button size="lg" color="white">
                                    Explore
                                </Button>
                                <Button size="lg" color="white" variant="text">
                                    Gallery
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative h-full w-full">
                    <img
                        src="https://i.postimg.cc/HxsT8SGr/Bali-Indonesia.jpg"
                        alt="image 2"
                        className="h-[800px] w-[1350px] object-cover"
                    />
                    <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                        <div className="w-3/4 text-center md:w-2/4">
                            <Typography
                                variant="h1"
                                color="white"
                                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                            >
                                The Beauty of Bali
                            </Typography>
                            <Typography
                                variant="lead"
                                color="white"
                                className="mb-12 opacity-80"
                            >
                                Bali is a province of Indonesia and the westernmost of the Lesser Sunda Islands. East of Java and west of Lombok, the province includes the island of Bali and a few smaller offshore islands,
                            </Typography>
                            <div className="flex justify-center gap-2">
                                <Button size="lg" color="white">
                                    Explore
                                </Button>
                                <Button size="lg" color="white" variant="text">
                                    Gallery
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative h-full w-full">
                    <img
                        src="https://i.postimg.cc/0NvkPkcd/Bangkok-Thailand.jpg"
                        alt="image 3"
                        className="h-[800px] w-[1350px] object-cover"
                    />
                    <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                        <div className="w-3/4 text-center md:w-2/4">
                            <Typography
                                variant="h1"
                                color="white"
                                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                            >
                                The Beauty of BangKok 
                            </Typography>
                            <Typography
                                variant="lead"
                                color="white"
                                className="mb-12 opacity-80"
                            >
                                Bangkok, Thailand’s capital, is a large city known for ornate shrines and vibrant street life. The boat-filled Chao Phraya River feeds its network of canals
                            </Typography>
                            <div className="flex justify-center gap-2">
                                <Button size="lg" color="white">
                                    Explore
                                </Button>
                                <Button size="lg" color="white" variant="text">
                                    Gallery
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative h-full w-full">
                    <img
                        src="https://i.postimg.cc/RVjCpQtY/Ha-Long-Bay-Vietnam.jpg"
                        alt="image 3"
                        className="h-[800px] w-[1350px] object-cover"
                    />
                    <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                        <div className="w-3/4 text-center md:w-2/4">
                            <Typography
                                variant="h1"
                                color="white"
                                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                            >
                                The Beauty of Ha Long Bay
                            </Typography>
                            <Typography
                                variant="lead"
                                color="white"
                                className="mb-12 opacity-80"
                            >
                                Hạ Long Bay, in northeast Vietnam, is known for its emerald waters and thousands of towering limestone islands topped by rainforests
                            </Typography>
                            <div className="flex justify-center gap-2">
                                <Button size="lg" color="white">
                                    Explore
                                </Button>
                                <Button size="lg" color="white" variant="text">
                                    Gallery
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative h-full w-full">
                    <img
                        src="https://i.postimg.cc/pT2LYWjX/Kuala-Malaysia.jpg"
                        alt="image 3"
                        className="h-[800px] w-[1350px] object-cover"
                    />
                    <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                        <div className="w-3/4 text-center md:w-2/4">
                            <Typography
                                variant="h1"
                                color="white"
                                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                            >
                                The Beauty of Kuala Lumpur
                            </Typography>
                            <Typography
                                variant="lead"
                                color="white"
                                className="mb-12 opacity-80"
                            >
                                Kuala Lumpur has undergone rapid development in recent decades and is home to the tallest twin buildings in the world, the Petronas Towers
                            </Typography>
                            <div className="flex justify-center gap-2">
                                <Button size="lg" color="white">
                                    Explore
                                </Button>
                                <Button size="lg" color="white" variant="text">
                                    Gallery
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel>
        );
    }

export default Banner;