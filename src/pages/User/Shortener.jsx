const Shortener = () => {
    
    return (
        <div className="bg-white pt-10 px-10">
        <h1 className="text-xl pb-10">
        Convert ShortURL
        </h1>
        <div className="flex flex-col gap-5.5 p-6.5">
          <form className="flex">
            <select className="rounded-tl-lg rounded-bl-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary" name="" id="">
              <option value="select One">select One</option>
              <option value="select One">mega.xyz</option>
              <option value="select One">megs.xyz</option>
              </select>
            <input type="text" placeholder="Paste Your Website URL" className="w-[60%]   border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"/><button className="flex rounded-tr-lg rounded-br-lg items-center justify-center bg-primary py-3 px-5 text-center font-medium text-white hover:bg-opacity-90 lg:px-3 xl:px-6">Short url</button></form>
            </div>
        <div className="text-xl pt-5">
        Short Url Links
        </div>
        <div>
        <div className="overflow-x-auto mt-5">
<table className="table">
{/* head */}
<thead className="bg-base-200">
  <tr className="uppercase text-[15px]">
    <th>Website</th>
    <th>Short Url</th>
    <th>Clicks</th>
    <th>Action</th>
  </tr>
</thead>
<tbody>
  {/* row 1 */}
  <tr className="text-[15px] ">
    <td>https://google.com?id=eb840b</td>
    <td>710d6228</td>
    <td className="text-[#86e7c5] pl-10">0</td>
    <td><button className="btn bg-blue-600 text-white hover:text-black">Copy</button></td>
  </tr>
</tbody>
</table>
</div>
        </div>
    </div>
    );
};

export default Shortener;