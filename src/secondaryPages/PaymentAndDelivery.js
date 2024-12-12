import CardIcon from '../images/credit-card.svg'
export default function PaymentAndDelivery() {
    return (
            <div className="container mx-auto mt-16">
                <div className="bg-white  rounded-lg p-6">
                    <h1 className="text-3xl font-bold mb-4">გადახდის მეთოდები და მიწოდების სერვისი</h1>
                    <div className="space-y-8">
                        <section>
                            <h2 className="text-2xl font-semibold mb-2">გადახდა</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="flex flex-col items-center">
                                    <img src={CardIcon} alt="Credit Card Payment" />
                                    <p className="mt-2 text-center">
                                        გადაიხადეთ ნებისმიერი ბანკის საკრედიტო ან სადებეტო ბარათით (Visa / Mastercard / AMEX).
                                    </p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <img src={CardIcon} alt="Mobile Payment" />
                                    <p className="mt-2 text-center">გადაიხადეთ ონლაინ ბანკინგით.</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-2">მიწოდება</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="flex flex-col items-center">
                                    <img src={CardIcon} alt="Delivery Calculation" />
                                    <p className="mt-2 text-center">
                                        მიწოდება ხდება შეკვეთიდან 1 საათის განმავლობაში, <br /> პიკის საათებში კი - 2 საათში.
                                    </p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <img src={CardIcon} alt="Delivery Calculation" />
                                    <p className="mt-2 text-center">ადგილზე მიტანა მოქმედებს თბილისში, ბათუმსა და ქუთაისში.</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <img src={CardIcon} alt="Delivery Ship" />
                                    <p className="mt-2 text-center">
                                        შეკვეთის მიწოდების ღირებულება ქალაქის მასშტაბით
                                        <br />
                                        <br /> •25 ლარამდე შენაძენის შემთხვევაში - 10 ლარი
                                        <br /> •25-100 ლარამდე შეკვეთის ღირებულება - 5 ლარი
                                        <br /> •100 ლარზე მეტი ღირებულების შეკვეთის მიწოდება უფასოა
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className="bg-red-100 p-4 rounded-lg text-center">
                                <img src={CardIcon} alt="Free Delivery" className="mx-auto" />
                                <div className="mt-4">
                                    <p className="text-2xl font-bold">100ლარზე მეტი ღირებულების</p>
                                    <h2 className="text-xl uppercase">შეკვეთის მიწოდება უფასოა</h2>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-2">პროდუქტის ჩაბარება</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col items-center">
                                    <img src={CardIcon} alt="Delivery Person" />
                                    <p className="mt-2 text-center">შეძენილი პროდუქტის მიმღები/ჩამბარებელი შეიძლება იყოს:</p>
                                    <ul className="list-disc mt-2">
                                        <li>თავად შემძენი (მომხმარებელი);</li>
                                        <li>მომხმარებლის მიერ მითითებული ნებისმიერი სხვა სრულწლოვანი პირი.</li>
                                    </ul>
                                </div>
                                <div className="flex flex-col items-center">
                                    <img src={CardIcon} alt="Own Delivery" />
                                    <p className="mt-2 text-center">
                                        თუ მომხმარებელი პირადად არ იბარებს შეძენილ პროდუქტს და სურს, რომ მის ნაცვლად ჩაიბაროს სხვა პირმა, ასეთ შემთხვევაში მან კომპანიას უნდა მიაწოდოს
                                        ჩამბარებლის პირადი მონაცემები (სახელი, გვარი, ტელეფონის ნომერი და მისამართი).
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
    )
}