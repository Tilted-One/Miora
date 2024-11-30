const baseUrl = 'https://b92e-31-146-72-58.ngrok-free.app/'



function getUrl(route) {
    return baseUrl + route
}

export async function getProducts() {
    const response = await fetch(getUrl('getAllProducts'))
    return response.json()
}

function delay(time) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), time);
    });
}

export async function getDataAsync() {
    await delay(1500);
    return data;
}

const data = {
    categorySpecGroupId: 1,
    manufacturerSpecGroupId: 2,
    products: [
        {
            id: 1,
            nameEn: "Saperavi Reserve 2019",
            nameRu: "Саперави Резерв 2019",
            nameKa: "საფერავი რეზერვი 2019",
            priceOld: 45.99,
            priceNew: 39.99,
            fileName: "saperavi-reserve",
            stockNumber: 25,
            descriptionEn: "A full-bodied Georgian red wine with rich notes of black fruits, vanilla, and spices. Perfect with grilled meats.",
            descriptionRu: "Полнотелое грузинское красное вино с богатыми нотами черных фруктов, ванили и специй. Идеально подходит к жареному мясу.",
            descriptionKa: "სრული სხეულის მქონე ქართული წითელი ღვინო შავი ხილის, ვანილისა და სანელებლების მდიდარი ნოტებით. იდეალურია მწვადთან.",
            specValueIds: [1, 4]
        },
        {
            id: 2,
            nameEn: "Rkatsiteli Classic 2022",
            nameRu: "Ркацители Классик 2022",
            nameKa: "რქაწითელი კლასიკური 2022",
            priceOld: 28.99,
            priceNew: null,
            fileName: "rkatsiteli-classic",
            stockNumber: 42,
            descriptionEn: "Crisp white wine with bright citrus and green apple notes. Fresh and mineral finish.",
            descriptionRu: "Свежее белое вино с яркими нотами цитрусовых и зеленого яблока. Свежее минеральное послевкусие.",
            descriptionKa: "სუფთა თეთრი ღვინო ციტრუსის და მწვანე ვაშლის ნოტებით. ახალი და მინერალური დაბოლოება.",
            specValueIds: [1, 5]
        },
        {
            id: 3,
            nameEn: "Kindzmarauli 2021",
            nameRu: "Киндзмараули 2021",
            nameKa: "ქინძმარაული 2021",
            priceOld: 32.99,
            priceNew: 29.99,
            fileName: "kindzmarauli",
            stockNumber: 15,
            descriptionEn: "Semi-sweet red wine with rich berry flavors and velvet texture. Pairs well with desserts.",
            descriptionRu: "Полусладкое красное вино с богатым ягодным вкусом и бархатистой текстурой. Хорошо сочетается с десертами.",
            descriptionKa: "ნახევრად ტკბილი წითელი ღვინო მდიდარი კენკროვანი არომატით და ხავერდოვანი ტექსტურით. კარგად ერგება დესერტებს.",
            specValueIds: [1, 6]
        },
        {
            id: 4,
            nameEn: "Tsinandali Estate 2020",
            nameRu: "Цинандали Эстейт 2020",
            nameKa: "წინანდალი ესტეიტ 2020",
            priceOld: 34.99,
            priceNew: null,
            fileName: "tsinandali-estate",
            stockNumber: 38,
            descriptionEn: "Elegant white wine with floral aromas and hints of tropical fruits. Perfect summer wine.",
            descriptionRu: "Элегантное белое вино с цветочными ароматами и нотками тропических фруктов. Идеальное летнее вино.",
            descriptionKa: "ელეგანტური თეთრი ღვინო ყვავილოვანი არომატებით და ტროპიკული ხილის ნოტებით. იდეალური საზაფხულო ღვინო.",
            specValueIds: [1, 4]
        },
        {
            id: 5,
            nameEn: "Mukuzani Grand Reserve 2018",
            nameRu: "Мукузани Гранд Резерв 2018",
            nameKa: "მუკუზანი გრანდ რეზერვი 2018",
            priceOld: 59.99,
            priceNew: 49.99,
            fileName: "mukuzani-reserve",
            stockNumber: 10,
            descriptionEn: "Premium dry red wine aged in oak barrels. Complex aromas of dark cherries and spices.",
            descriptionRu: "Премиальное сухое красное вино, выдержанное в дубовых бочках. Сложный аромат темной вишни и специй.",
            descriptionKa: "პრემიუმ მშრალი წითელი ღვინო დაძველებული მუხის კასრებში. კომპლექსური არომატი შავი ალუბლით და სანელებლებით.",
            specValueIds: [2, 4]
        }
    ],
    specGroups: [
        {
            id: 1,
            nameEn: "Category",
            nameRu: "CategoryR",
            nameKa: "კატეგორია",
            specValues: [
                {
                    id: 1,
                    nameEn: "Wine",
                    nameRu: "WineR",
                    nameKa: "ღვინო",
                },
                {
                    id: 2,
                    nameEn: "Vodka",
                    nameRu: "VodkaR",
                    nameKa: "არაყი",
                },
                {
                    id: 3,
                    nameEn: "Wiskey",
                    nameRu: "WiskeyR",
                    nameKa: "ვისკი",
                }
            ]
        },
        {
            id: 2,
            nameEn: "Manufacturer",
            nameRu: "ManufacturerR",
            nameKa: "მწარმოებელი",
            specValues: [
                {
                    id: 4,
                    nameEn: "Miora",
                    nameRu: "MioraR",
                    nameKa: "მიორა",
                },
                {
                    id: 5,
                    nameEn: "Jeveli",
                    nameRu: "JeveliR",
                    nameKa: "ჯეველი",
                },
                {
                    id: 6,
                    nameEn: "Lionidze Cross",
                    nameRu: "WLionidze CrossR",
                    nameKa: "ლიონიძის ჯვარი",
                }
            ]
        }
    ]
};

