import ClientReview from '../shared/ClientReview'
// import { IoIosArrowRoundBack } from "react-icons/io";
// import { IoIosArrowRoundForward } from "react-icons/io";

const ClientReviewList = () => {
    const reviews = [
        {
            rating: 4.5,
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. laskdls alskdl This is a test review for the client review list component. I really hope this works out well', 
            name: 'Santosh Poudel'
        },
        {
            rating: 4.7,
            review: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. This is a test review for the client review list component. Looking forward to more positive results!',
            name: 'Prakriti Kuwar'
        },
        {
            rating: 4.2,
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Nulla vitae elit libero, a pharetra augue. Test review for the client component, hoping to see this work well.',
            name: 'Ramesh yadav'
        },
        // {
        //     rating: 4.8,
        //     review: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? A test review with some feedback. I really appreciate the service and looking forward to more improvements.',
        //     name: 'Emily Davis'
        // },
        // {
        //     rating: 3.8,
        //     review: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? A test review with some feedback. I really appreciate the service and looking forward to more improvements.',
        //     name: 'rAM kRISHBNA'
        // }
    ]
  return (
    <div className=' w-full bg-lightorange  flex-row items-center justify-between py-5 box-border overflow-hidden px-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 '>
            {/* for now we dont need */}
        {/* <div className=' border-2 border-[#2f2e31] rounded-full bg-[#2f2e31]  hover:bg-white hover:border-white mr-3'>
            <IoIosArrowRoundBack className='text-5xl text-orange'/>
        </div> */}
     
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 flex-1 items-center justify-center place-items-center">
{
    reviews.map((review, index) => {
        return <ClientReview key={index} rating={review.rating} review={review.review} name={review.name}/>
    })
}
</div>

            {/* for now we dont need */}
        {/* <div className=' border-2 border-[#2f2e31] rounded-full bg-[#2f2e31] hover:bg-white hover:border-white ml-3'>
            <IoIosArrowRoundForward className='text-5xl text-orange'/>
        </div> */}


    </div>
  )
}

export default ClientReviewList

// import ClientReview from '../shared/ClientReview'
// import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

// const ClientReviewList = () => {
//     const reviews = [
//         {
//             rating: 4.5,
//             review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. This is a test review for the client review list component. I really hope this works out well', 
//             name: 'Santosh Poudel'
//         },
//         {
//             rating: 4.7,
//             review: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. This is a test review for the client review list component. Looking forward to more positive results!',
//             name: 'Prakriti Kuwar'
//         },
//         {
//             rating: 4.2,
//             review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Nulla vitae elit libero, a pharetra augue. Test review for the client component, hoping to see this work well.',
//             name: 'Ramesh Yadav'
//         }
//     ];

//     return (
//         <div className="w-full bg-lightorange py-5 px-3 flex flex-col items-center">
//             <div className="flex items-center gap-4 w-full max-w-5xl">
//                 {/* Left Arrow */}
//                 <button className="border-2 border-[#2f2e31] rounded-full bg-[#2f2e31] hover:bg-white hover:border-white p-2">
//                     <IoIosArrowRoundBack className="text-5xl text-orange" />
//                 </button>

//                 {/* Reviews Grid */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 flex-1">
//                     {reviews.map((review, index) => (
//                         <ClientReview key={index} rating={review.rating} review={review.review} name={review.name} />
//                     ))}
//                 </div>

//                 {/* Right Arrow */}
//                 <button className="border-2 border-[#2f2e31] rounded-full bg-[#2f2e31] hover:bg-white hover:border-white p-2">
//                     <IoIosArrowRoundForward className="text-5xl text-orange" />
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default ClientReviewList;
