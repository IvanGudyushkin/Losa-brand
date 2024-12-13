import prevRing from '../Assets/ProductsPhoto/prevRing.webp'
import prevKaffa from '../Assets/ProductsPhoto/prevKaffa.webp'
import prevBrasleta from '../Assets/ProductsPhoto/prevBrasleta.webp'
import mainBrasleta from '../Assets/ProductsPhoto/Brasleta/MainImg.webp'
import mainRing from '../Assets/ProductsPhoto/Ring/MainImg.webp'
import mainKaff from '../Assets/ProductsPhoto/Kaff/MainImg.webp'
import ring1 from '../Assets/ProductsPhoto/Ring/1.webp'
import ring2 from '../Assets/ProductsPhoto/Ring/2.webp'
import ring3 from '../Assets/ProductsPhoto/Ring/3.webp'
import kaff1 from '../Assets/ProductsPhoto/Kaff/1.webp'
import kaff2 from '../Assets/ProductsPhoto/Kaff/2.webp'
import kaff3 from '../Assets/ProductsPhoto/Kaff/3.webp'
import brasleta1 from '../Assets/ProductsPhoto/Brasleta/1.webp'
import brasleta2 from '../Assets/ProductsPhoto/Brasleta/2.webp'
import brasleta3 from '../Assets/ProductsPhoto/Brasleta/3.webp'

export const ProductData = {
    ring: {
        id:1,
        previewImg: prevRing,
        img:mainRing,
        name: 'Кольцо',
        cost: 3500,
        fullName:'Кольцо «Сказка»',
        currentName: 'Кольцо \n' +
            '      «Сказка»',
        buttonText: 'к изделию',
        itemDescriprion: '• создаётся под вас и для вас\n' +
            '• чудо из алюминия и имитации жемчуга',
        images: [
            ring1,
            ring2,
            ring3,
        ]
    },
    kaffa: {
        id:2,
        previewImg: prevKaffa,
        img:mainKaff,
        cost: 4500,
        name: 'Кафф',
        fullName:'Кафф «Сказка»',
        currentName:'Кафф \n' +
            '    «Сказка»',
        buttonText: 'к изделию',
        itemDescriprion: '• создаётся под вас и для вас\n' +
            '• чудо из алюминия и имитации жемчуга',
        images: [
            kaff1,
            kaff2,
            kaff3,
        ]
    },
    brasleta: {
        id:3,
        previewImg: prevBrasleta,
        img:mainBrasleta,
        cost: 7500,
        name: 'Браслет',
        fullName:'Браслет «Сказка»',
        currentName:'Браслет \n' +
            '        «Сказка»',
        buttonText: 'к изделию',
        itemDescriprion: '• создаётся под вас и для вас\n' +
            '• чудо из алюминия и имитации жемчуга',
        images: [
            brasleta1,
            brasleta2,
            brasleta3,
        ]

    }
}