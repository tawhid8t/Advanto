const ContactUs = () => {
    return (
        <div>
            <h1 className="bold text-3xl text-center mt-8 mb-24">Contact Us</h1>
            <div className="flex justify-between flex-col lg:flex-row gap-12 mt-12 mb-24 items-center p-4 lg:p-0">
                <div className="lg:flex-1 w-full">
                    <form action="">
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text bold text-lg">your name</span>
                            </label>
                            <input type="text" placeholder="name" name="image" className="input w-full input-bordered" required />
                        </div>
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text bold text-lg">Email</span>
                            </label>
                            <input type="text" placeholder="email" name="image" className="input w-full input-bordered" required />
                        </div>
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text bold text-lg">subject</span>
                            </label>
                            <input type="text" placeholder="subject" name="image" className="input w-full input-bordered" required />
                        </div>
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text bold text-lg">message</span>
                            </label>
                            <textarea type="text" placeholder="your message..." name="short_description" className="w-full resize border rounded-md  px-3 py-2 leading-tight focus:outline-none focus:shadow-outline" rows="4" required></textarea>
                        </div>
                        <button className="btn w-full mt-6 bg-[#00BABE] text-white">Send Message</button>
                    </form>
                </div>
                <div className="flex-1">
                    <h1 className="bold text-3xl mb-4">Get in touch</h1>
                    <p className="text-[#868EA4]">provides guidance for existing customers and offers an overview of your brand for new visitors</p>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="text-[#3d3c3c]">
                            <h1 className="text-xl font-bold mb-4">Dhaka, Bangladesh</h1>
                            <h3 className="flex gap-2 items-center">
                                <span><img className="w-8 h-8" src="https://i.postimg.cc/1R2DTXQ8/icons8-phone-48.png" alt="" /></span>
                                <span>+01788039222</span>
                            </h3>
                            <h3 className="flex gap-2 items-center my-6">
                                <span><img className="w-8 h-8" src="https://i.postimg.cc/YCwYrPjk/icons8-mail-100.png" alt="" /></span>
                                <span>AdvantoBD@gmail.com</span>
                            </h3>
                            <h3 className="flex gap-2 items-center">
                                <span><img className="w-8 h-8" src="https://i.postimg.cc/PqXDZ8mR/icons8-location-64.png" alt="" /></span>
                                <span>Dhaka, Bangladesh</span>
                            </h3>
                        </div>
                        {/* 2 */}
                        <div className="text-[#3d3c3c]">
                            <h1 className="text-xl font-bold mb-4">Bangkok, Thailand</h1>
                            <h3 className="flex gap-2 items-center">
                                <span><img className="w-8 h-8" src="https://i.postimg.cc/1R2DTXQ8/icons8-phone-48.png" alt="" /></span>
                                <span>+02-2134567</span>
                            </h3>
                            <h3 className="flex gap-2 items-center my-6">
                                <span><img className="w-8 h-8" src="https://i.postimg.cc/YCwYrPjk/icons8-mail-100.png" alt="" /></span>
                                <span>AdvantoBK@gmail.com</span>
                            </h3>
                            <h3 className="flex gap-2 items-center">
                                <span><img className="w-8 h-8" src="https://i.postimg.cc/PqXDZ8mR/icons8-location-64.png" alt="" /></span>
                                <span>Bangkok, Thailand</span>
                            </h3>
                        </div>
                        {/* 3 */}
                        <div className="text-[#3d3c3c]">
                            <h1 className="text-xl font-bold mb-4">Penang, Malaysia</h1>
                            <h3 className="flex gap-2 items-center mt-6">
                                <span><img className="w-8 h-8" src="https://i.postimg.cc/1R2DTXQ8/icons8-phone-48.png" alt="" /></span>
                                <span>+0116032168-5000</span>
                            </h3>
                            <h3 className="flex gap-2 items-center my-6">
                                <span><img className="w-8 h-8" src="https://i.postimg.cc/YCwYrPjk/icons8-mail-100.png" alt="" /></span>
                                <span>AdvantoMYS@gmail.com</span>
                            </h3>
                            <h3 className="flex gap-2 items-center">
                                <span><img className="w-8 h-8" src="https://i.postimg.cc/PqXDZ8mR/icons8-location-64.png" alt="" /></span>
                                <span>Penang, Malaysia</span>
                            </h3>
                        </div>
                        {/* 4 */}
                        <div className="text-[#3d3c3c]">
                            <h1 className="text-xl font-bold mb-4">Kep, Cambodia</h1>
                            <h3 className="flex gap-2 items-center mt-6">
                                <span><img className="w-8 h-8" src="https://i.postimg.cc/1R2DTXQ8/icons8-phone-48.png" alt="" /></span>
                                <span>+62 6943 6956</span>
                            </h3>
                            <h3 className="flex gap-2 items-center my-6">
                                <span><img className="w-8 h-8" src="https://i.postimg.cc/YCwYrPjk/icons8-mail-100.png" alt="" /></span>
                                <span>Advanto@gmailCBDA.com</span>
                            </h3>
                            <h3 className="flex gap-2 items-center">
                                <span><img className="w-8 h-8" src="https://i.postimg.cc/PqXDZ8mR/icons8-location-64.png" alt="" /></span>
                                <span>Kep, Cambodia</span>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;