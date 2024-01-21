const Websites = () => {
    return (
        <div className="bg-white pt-10 px-10">
            <h1 className="text-xl pb-10">
                Website Urls
            </h1>
            <div className="flex justify-center">
                <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                    <li className="me-2">
                        <button className="inline-block px-4 py-3 text-white bg-blue-600 rounded-lg active" aria-current="page">Eros</button>
                    </li>
                    <li className="me-2">
                        <button className="inline-block px-4 py-3 rounded-lg  hover:bg-gray-800 hover:text-white">Mega</button>
                    </li>
                    <li className="me-2">
                        <button className="inline-block px-4 py-3 rounded-lg   hover:bg-gray-800 hover:text-white">PD</button>
                    </li>
                    <li className="me-2">
                        <button className="inline-block px-4 py-3 rounded-lg   hover:bg-gray-800 hover:text-white">Skip</button>
                    </li>
                    <li className="me-2">
                        <button className="inline-block px-4 py-3 rounded-lg   hover:bg-gray-800 hover:text-white">Tryst</button>
                    </li>
                </ul>
            </div>

            <div>
            <div className="overflow-x-auto mt-5">
  <table className="table">
    {/* head */}
    <thead className="bg-base-200">
      <tr className="uppercase text-[15px]">
        <th>Category</th>
        <th>Website</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <td className="text-lg font-semibold">eros/login</td>
        <td>https://google.com?id=eb840b</td>
        <td><button className="btn bg-blue-600 text-white hover:text-black">Copy</button></td>
      </tr>
    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default Websites;