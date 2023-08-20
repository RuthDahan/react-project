import img1 from '../../Images/1.jpg';
import img2 from '../../Images/2.jpg';
import img3 from '../../Images/3.jpg';
import img4 from '../../Images/4.jpg';
import img5 from '../../Images/5.jpg';
import img6 from '../../Images/6.jpg';
import img7 from '../../Images/7.jpg';
import img8 from '../../Images/8.jpg';
import img9 from '../../Images/9.jpg';
import img10 from '../../Images/10.jpg';
import img11 from '../../Images/11.jpg';
import img12 from '../../Images/12.jpg';
import img13 from '../../Images/13.jpg';
import img14 from '../../Images/14.jpg';
import img15 from '../../Images/15.jpg';
import img16 from '../../Images/16.jpg';

const perfumes = [
    {
        id: 1,
        name: "212VIP ",
        qty: 3,
        image: img1,
        price: 223,
        description: "A lively opening of champagne rose, complemented by peach blossom."

    },
    {
        id: 2,
        name: "ABERCROMBIE &FITCH AUTHENTIC NIGHT ",
        qty: 5,
        image: img2,
        price: 199,
        description: "notes of magnolia, jasmine, currant and patchouli. Scent family: floral-fruity."
    },
    {
        id: 3,
        name: "GUCCI GUILTY",
        qty: 4,
        image: img3,
        price: 699,
        description: "Oriental and refreshing flowers with notes of raspberry and jasmine."
    },
    {
        id: 4,
        name: "NARCISO RODRIGUEZ",
        qty: 7,
        image: img4,
        price: 160,
        description: "Elegant, based on the musk a mixture of floral, amber and woody notes."
    },
    {
        id: 5,
        name: "GUESS BELLA VITA ROSA",
        qty: 5,
        image: img5,
        price: 200,
        description: "The new fragrance from guess.Exotic floral-fruity fragrance, with sparkling Italian lemon."
    },

    {
        id: 6,
        name: "ABERCROMBIE & FITCH",
        qty: 2,
        image: img6,
        price: 149,
        description: "this fragrance has a blend of grapefruit,passionfruit,magnolia,orange blossom and butterfly orchid notes."
    },
    {
        id: 7,
        name: "VERSACE POUR HOMME",
        qty: 1,
        image: img7,
        price: 269,
        description: "It's a juicy citrus fragrance. The strong lemon note is softened by floral notes of mimosa and persia."
    },
    {
        id: 8,
        name: "LIBRE YVES SAINT LAURENT",
        qty: 3,
        image: img8,
        price: 379,
        description: "Musky, Fruity and Spicy scents."
        
    },
    {
        id: 9,
        name: "JIMMY CHOO",
        qty: 4,
        image: img9,
        price: 750,
        description: "The luxury perfume packaging by a gold and glitter finish.With a powerful floral fragrance."
    },
    {
        id: 10,
        name: "GUCCI GUILTY LOVE EDITION",
        qty: 2,
        image: img10,
        price: 479,
        description: "magical lilac flower notes with mandarin and patchouli."
    },
    {
        id: 11,
        name: "TOUS LEAU",
        qty: 7,
        image: img11,
        price: 167,
        description: "fresh and cheerful,base of white musk ,patchouli and lemon mandarin."
    },
    {
        id: 12,
        name: "CALVIN KLEIN EUPHORIA",
        qty: 5,
        image: img12,
        price: 320,
        description: "A beloved perfume for its exotic, floral and fruity scent."
    },

    {
        id: 13,
        name: "GUCCI GUILTY",
        qty: 3,
        image: img13,
        price: 399,
        description: "defined by its ambery florality."
    },
    {
        id: 14,
        name: "TOUS LOVE ME",
        qty: 3,
        image: img14,
        price: 279,
        description: "there's nothing more tender than this perfume.with the freshness of pink grapefruit, pink peppercorns and lychee."
    },
    {
        id: 15,
        name: "GOOD GIRL GOLD FANTASY",
        qty: 5,
        image: img15,
        price: 470,
        description: "Richly fragrant Cocoa with Almond and Coffee. "
    },
    {
        id: 16,
        name: "PRADA MILANO",
        qty: 3,
        image: img16,
        price: 599,
        description: "The floral fragrance with mandarin essence."
    },

];
//tami
const productReducer = (state = perfumes, action) => {
    switch (action.type) {
        case "DECREASQTY": {
            // console.log(state);
            const up = perfumes.find(a => a.id === action.payload);
            if (up.qty > 0) {
                // console.log(up);
                up.qty -= 1;
                // console.log(up);
                //return { ...state }
                return state;
            }

            else {
                alert("sorry");
                return state;
            }
        }
        case "ADDQTY": {
            const up = perfumes.find(a => a.id === action.payload.id);
            up.qty += action.payload.amount;
            return state;
        }
        default:
            return state;
    }
    
};
export default productReducer
