import {
    Plus,
    Search,
    Edit,
    Trash2
} from "lucide-react";


const products = [

    {
        id: 1,
        name: "Laptop Pro",
        category: "Electronics",
        price: "1200$",
        stock: 25,
        status: "Active"
    },

    {
        id: 2,
        name: "Wireless Mouse",
        category: "Accessories",
        price: "50$",
        stock: 120,
        status: "Active"
    },

    {
        id: 3,
        name: "Keyboard",
        category: "Accessories",
        price: "90$",
        stock: 0,
        status: "Out of Stock"
    }

]


export default function ProductsPage() {

    return (

        <div className="space-y-6">


            <div className="
flex
justify-between
items-center
">

                <div>

                    <h1 className="
text-2xl
font-bold
">
                        Products
                    </h1>

                    <p className="text-slate-500">
                        Product Catalog Management
                    </p>

                </div>


                <button
                    className="
bg-blue-600
text-white
px-4
py-2
rounded-lg
flex
items-center
gap-2
"
                >

                    <Plus size={18} />

                    Add Product

                </button>


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

                        placeholder="Search products..."

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
                                Name
                            </th>


                            <th>
                                Category
                            </th>


                            <th>
                                Price
                            </th>


                            <th>
                                Stock
                            </th>


                            <th>
                                Status
                            </th>


                            <th>
                                Actions
                            </th>


                        </tr>

                    </thead>


                    <tbody>


                        {
                            products.map(product => (


                                <tr
                                    key={product.id}
                                    className="
border-b
hover:bg-slate-50
"
                                >


                                    <td className="p-3">

                                        {product.name}

                                    </td>


                                    <td>

                                        {product.category}

                                    </td>


                                    <td>

                                        {product.price}

                                    </td>


                                    <td>

                                        {product.stock}

                                    </td>


                                    <td>

                                        <span className="
px-3
py-1
rounded-full
bg-green-100
text-green-700
text-sm
">

                                            {product.status}

                                        </span>

                                    </td>


                                    <td>


                                        <div className="flex gap-3">


                                            <button>

                                                <Edit size={18} />

                                            </button>


                                            <button>

                                                <Trash2 size={18} />

                                            </button>


                                        </div>


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