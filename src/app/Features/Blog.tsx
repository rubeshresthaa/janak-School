// import Image from "next/image";

// const Blogs = () => {
//   const imageCollection = [
//     {
//       name: "Butterfly",
//       img: "https://plus.unsplash.com/premium_photo-1698524612460-32d35c637488?q=80&w=2089&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       name: "Butterfly1",
//       img: "https://plus.unsplash.com/premium_photo-1724384503241-86f05f2a1bf4?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//   ];
//   return (
//     <div>
//       <h1 className="text-center font-bold text-3xl text-red-800 my-5">
//         Blogs
//       </h1>
//       <h1 className="w-full bg-green-600 p-2 lg:p-4 text-center text-white font-bold text-lg lg:text-2xl">
//         Whisper Grace:The Enchanting Dance of the Butterfly.
//       </h1>
//       <div className="flex flex-col gap-2 px-4 sm:px-20">
//         {/* images */}
//         <div className="grid md:grid-cols-2 w-full gap-4 p-5">
//           {imageCollection.map((item, index) => (
//             <div className="w-full h-96" key={index}>
//               <Image
//                 key={index}
//                 src={item.img}
//                 alt="blog's image"
//                 height={0}
//                 width={0}
//                 sizes="100vw"
//                 className="object-cover w-full h-full rounded-md"
//                 objectFit="cover"
//               />
//             </div>
//           ))}
//         </div>

//         {/* Blog content */}
//         <div className="space-y-4">
//           <p className="text-justify">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
//             deserunt dolores natus dicta, consequatur hic, placeat eaque,
//             doloremque ipsa illum commodi ullam at. Sed modi earum asperiores
//             vero delectus nisi debitis sint. Quis consequatur, doloribus
//             repellendus totam eaque nulla tenetur atque! Eum aut soluta tempore,
//             repudiandae ad vitae sed impedit nihil fugiat incidunt deserunt
//             accusantium doloribus esse dolorem obcaecati, distinctio sit,
//             asperiores deleniti quod quos eaque maxime quis. Provident earum
//             laboriosam dolor eligendi? Consequatur, voluptatibus! Enim pariatur
//             vero, alias perferendis corrupti id quasi laudantium voluptatibus
//             animi? Officiis est laudantium quod eius velit esse, accusantium
//             nesciunt aliquam tempore quibusdam excepturi cumque.
//           </p>

//           <p className="italic px-4">
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, ex.
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis,
//             tenetur!
//           </p>
//         </div>

//         {/* for arrows */}
//         <div></div>
//       </div>
//     </div>
//   );
// };
// export default Blogs;
