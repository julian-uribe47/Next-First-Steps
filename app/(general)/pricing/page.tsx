import { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Pricing page',
 description: 'Precio productos'
};

export default function PricingPage() {
    return (
        <>
            <span className=" flex flex-col items-center  text-7xl">pricing</span>
        </>
    )
}