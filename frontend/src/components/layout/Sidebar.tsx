"use client"

import {
    Home,
    Package,
    ShoppingCart,
    CreditCard,
    Boxes,
    Users
} from "lucide-react";


const menu = [

    {
        name: "Dashboard",
        icon: Home,
        href: "/dashboard"
    },

    {
        name: "Products",
        icon: Package,
        href: "/products"
    },

    {
        name: "Orders",
        icon: ShoppingCart,
        href: "/orders"
    },

    {
        name: "Payments",
        icon: CreditCard,
        href: "/payments"
    },

    {
        name: "Inventory",
        icon: Boxes,
        href: "/inventory"
    },

    {
        name: "Users",
        icon: Users,
        href: "/users"
    }

]


export default function Sidebar() {

    return (

        <aside className="
w-64
min-h-screen
bg-slate-900
text-white
p-5
">


            <h1 className="
text-xl
font-bold
mb-8
">
                Enterprise OS
            </h1>


            <nav className="space-y-3">

                {
                    menu.map(item => {

                        const Icon = item.icon;


                        return (

                            <a
                                key={item.name}
                                href={item.href}
                                className="
flex
items-center
gap-3
p-3
rounded-lg
hover:bg-slate-700
"
                            >

                                <Icon size={18} />

                                <span>
                                    {item.name}
                                </span>


                            </a>

                        )

                    })
                }


            </nav>


        </aside>


    )

}