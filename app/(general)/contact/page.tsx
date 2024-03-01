import { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Contact page',
 description: 'Dirección de contacto',
 keywords: ['Dirección', 'ubicacion','etc...']
};



export default function ContactPage() {
    return (
        <>
            <span className=" flex flex-col items-center  text-7xl">contact</span>
        </>
    )
}