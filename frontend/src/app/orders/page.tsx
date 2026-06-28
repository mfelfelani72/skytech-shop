import {
    Search,
    Eye
} from "lucide-react";


const orders = [

    {
        id: "#1001",
        customer: "Ali",
        amount: "350$",
        status: "Paid",
        date: "2026-06-28"
    },


    {
        id: "#1002",
        customer: "Sara",
        amount: "120$",
        status: "Pending",
        date: "2026-06-28"
    },


    {
        id: "#1003",
        customer: "Reza",
        amount: "800$",
        status: "Shipping",
        date: "2026-06-27"
    }

]


export default function OrdersPage() {


    return (

        <div className="space-y-6">


            <div>


                <h1 className="
text-2xl
font-bold
">

                    Orders

                </h1>


                <p className="text-slate-500">

                    Order Management System

                </p>


            </div>



            <div className="
bg-white
rounded-xl
shadow
p-5
">



                <div className="
flex
items-center
border
rounded-lg
px-3
mb-5
">


                    <Search size={18} />


                    <input

                        placeholder="Search orders..."

                        className="
p-2
outline-none
w-full
"

                    />


                </div>




                <table className="
w-full
text-left
">


                    <thead>


                        <tr className="border-b">


                            <th className="p-3">
                                Order ID
                            </th>


                            <th>
                                Customer
                            </th>


                            <th>
                                Amount
                            </th>


                            <th>
                                Status
                            </th>


                            <th>
                                Date
                            </th>


                            <th>
                                Action
                            </th>


                        </tr>


                    </thead>



                    <tbody>


                        {

                            orders.map(order => (


                                <tr
                                    key={order.id}
                                    className="
border-b
hover:bg-slate-50
"
                                >


                                    <td className="p-3">

                                        {order.id}

                                    </td>


                                    <td>

                                        {order.customer}

                                    </td>


                                    <td>

                                        {order.amount}

                                    </td>


                                    <td>


                                        <span className="
px-3
py-1
rounded-full
bg-blue-100
text-blue-700
text-sm
">

                                            {order.status}

                                        </span>


                                    </td>


                                    <td>

                                        {order.date}

                                    </td>


                                    <td>


                                        <button>

                                            <Eye size={18} />

                                        </button>


                                    </td>


                                </tr>


                            ))


                        }



                    </tbody>


                </table>



            </div>


        </div>


    )

}