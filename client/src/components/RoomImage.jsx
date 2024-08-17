const RoomImage = () => {
    return (
        <div className="w-full flex justify-center items-center">
            <div className="rounded-lg border-1 border-solid border-black w-5/6 h-96 relative overflow-hidden">
                <div className="w-full h-full relative flex">
                    <img className="w-1/2 h-full object-cover" src="/src/assets/img/jujutsukaisen.jpg" alt="pool.jpg" />
                    
                    <div className="absolute w-1/4 right-1/4 top-1/2 transform -translate-y-1/2 flex flex-col">
                        <div className="flex flex-row">
                            <img className="object-cover" src="https://d1ef7ke0x2i9g8.cloudfront.net/kuala-lumpur/_large700/3098018/A-Jujutsu-Kaisen-Exhibition-is-Coming-to-Kuala-Lumpur.webp" alt="" />
                            <img className="object-cover" src="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_862/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/lmouuuy6nrtilksa9xjg/AnimationJujutsuKaisenExhibitioninMalaysia.webp" alt="" />
                        </div>

                        <div className="flex flex-row ">
                            <img className="object-cover" src="https://lh5.googleusercontent.com/fi-v_5iMEuxNgyCHxfIxrB3Dqe-Lm1yXk-MwCMvKGnAG5k-vufVsJ8HDZDsmhbamXl5CXg6xfs4Xd4PatIw1AbhcNALZYUphJB2_JOba7DE7U2vXy4hEuB9tH9td_loC4TMFilaxIoqqaDumFZbMSA" alt="" />
                            <img className="object-cover" src="https://preview.redd.it/gqne9eb553e71.png?auto=webp&s=7ed4cfa133b630be87e2155e4cce65a13398916b" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RoomImage;
