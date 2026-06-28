export default function Dashboard() {

    return (

        <div className="grid grid-cols-3 gap-5">


            <div className="bg-white p-6 rounded-xl shadow">

                Orders

                <h2 className="text-3xl font-bold">

                    0

                </h2>

            </div>



            <div className="bg-white p-6 rounded-xl shadow">

                Products

                <h2 className="text-3xl font-bold">

                    0

                </h2>

            </div>



            <div className="bg-white p-6 rounded-xl shadow">

                Revenue

                <h2 className="text-3xl font-bold">

                    $0

                </h2>

            </div>


        </div>

    )

}