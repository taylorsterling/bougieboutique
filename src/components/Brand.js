import { Great_Vibes } from 'next/font/google'

const greatvibes = Great_Vibes({ subsets: ['latin'], weight: ["400"] })


const Brand = () => {

    return (
        <span className={`${greatvibes.className} text-white brand`} >Bougie Boutique</span>
    )
}

export default Brand