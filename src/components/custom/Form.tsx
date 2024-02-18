

export default function Form() {
 

  const handleChange = () => {
    
  };
  const handleSubmit = () => {
   
  }
  return (
   <>
      <div className=" bg-opacity-80 bg-[#fffff] px-8 py-6 w-96 mx-auto rounded-lg border-t-4 border-t-theme-colors-blue
             border-r-4 border-r-theme-colors-red
             border-b-4 border-b-theme-colors-yellow
             border-l-4 border-l-theme-colors-green">
    <div>
        <h1 className="text-Black text-2xl font-bold">Contact us</h1>
    </div>
    <form onSubmit={handleSubmit} >
        <div className=" relative mt-4">
            <input type="text" required className="w-full py-1 text-black border-b-2 border-gray-700 bg-transparent outline-none" placeholder='Your Name' onChange={handleChange} />
            
        </div>
        <div className=" relative mt-4">
            <input type="email" required className="w-full py-1 text-Black border-b-2 border-gray-700 bg-transparent outline-none" placeholder='Email' onChange={handleChange} />

        </div>
        <div className=" relative mt-4">
            <input type="text" required className="w-full py-1 text-Black border-b-2 border-gray-700 bg-transparent outline-none" placeholder='Subject' onChange={handleChange}/>
        </div>
        <div className=" relative mt-4">
            <textarea name="" id="" cols={30} rows={5} required className="w-full py-4 px-2 text-black border border-gray-700 outline-none"></textarea>
            <span className="absolute top-0 left-0 py-2 px-2 text-Black transition-transform duration-500 transform -translate-y-2">Message</span>
        </div>
        <div className=" mt-4">
            <button type="submit" className="w-full py-1 text-Black bg-blue-600 border border-blue-600 rounded-md">Send</button>
        </div>
    </form>
</div>

   </>
  )
}
