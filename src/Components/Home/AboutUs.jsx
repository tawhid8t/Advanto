const AboutUs = () => {
    return (
        <div className="mb-24 p-4">
            <h1 className="bold text-3xl text-center mt-8 mb-24">About Us</h1>
            <div className="flex flex-col lg:flex-row justify-between text-center gap-4 mb-24">
                <div>
                    <img className="mx-auto" src="https://i.postimg.cc/zBW8nS0D/icons8-team.gif" alt="" />
                    <h1 className="my-4 bold text-xl">Great team work</h1>
                    <p className="text-left text-[#868EA4]">Understanding the characteristics of great teamwork and how they apply to the people around you can help you build teams that don’t fall to pieces</p>
                </div>
                <div>
                    <img className="mx-auto w-12 h-12" src="https://i.postimg.cc/RVF9dHCB/icons8-rocket.gif" alt="" />
                    <h1 className="my-4 bold text-xl">Our vision</h1>
                    <p className="text-left text-[#868EA4]">focus on the future and how the agency will shape the travel industry. A vision statement describes where the organization wants to be in the future</p>
                </div>
                <div>
                    <img className="mx-auto" src="https://i.postimg.cc/gkQ9KtBV/icons8-mission.gif" alt="" />
                    <h1 className="my-4 bold text-xl">Our mision</h1>
                    <p className="text-left text-[#868EA4]">Our quest is to manage business travel and fulfill vacation dreams through our commitment to personalized, world-class service</p>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-between">
                <div className="">
                    <img className="rounded-lg mb-8 lg:mb-0" src="https://i.postimg.cc/q7Scgnmx/file.jpg" alt="" />
                </div>
                <div className="text-lg text-[#868EA4] lg:w-2/4">
                    <img src="https://i.postimg.cc/X7YTf6j1/icons8-quotes.gif" alt="" />
                    <p className="mb-3 mt-2">Between vacations, many daydream about what adventures the next trip holds. You can spend your days switching back and forth from looking at your favorite travel photos to trying to go about your day to day life</p>
                    <p>But a few friendly reminders that the next adventure is closer than you think can help you put your wanderlust to rest. And one of the best distractions comes with this list of travel quotes. Pick your favorite from the collection below and use it to inspire your next trip</p>
                    <h3 className="bold text-xl mt-3 mb-1">John Smith</h3>
                    <p>Founder and CEO</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;