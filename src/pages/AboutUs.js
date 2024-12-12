import React from 'react'

import MioraLogo from '../images/MioraLogo.png'

export default function AboutUs() {
    return (
        <div className='App mt-24 flex gap-x-10 px-16 my-32'>
            <div className='w-2/5 h-[400px]'>
                <img src={MioraLogo} alt='logo'></img>
            </div>
            <div className='w-3/5 h-auto'>
                <p className='mb-10 text-start'>
                    საქართველოში ნაყოფიერ მიწებზე, სადაც ფერდობები ვენახებითაა შეფენილი, სიყვარული ყოველთვის იყო სიცოცხლის განუყოფელი ნაწილი. თაობიდან თაობას გადაეცემოდა არა მხოლოდ მეღვინეობის საიდუმლოებები, არამედ ისტორიები მარადიულ სიყვარულზე - ოჯახის, მეგობრებისა და მიწის მიმართ.
                    სახელი „მიორა“, რაც მეგრულად „გვიყვარს“ ნიშნავს, შემთხვევით არ შერჩეულა. ის განასახიერებს სიყვარულს ყველაფრის მიმართ რაც  ჩვენს ცხოვრებაში მნიშვნელოვანია: ბუნების სიყვარულს, რომელიც უხვად გვაძლევს ნაყოფიერ ვენახებს, საუკუნეების მანძილზე გადაცემული ღვინის დამზადების ხელოვნებისადმი სიყვარულს; და, რა თქმა უნდა, სიყვარულს იმ ადამიანების მიმართ, ვისთანაც ყოველ ჭიქას ვიზიარებთ.
                </p>
                <p className='text-start'>
                    “მიორას” თითოეული ბოთლი შექმნილია ტრადიციისადმი ღრმა პატივისცემით, დეტალებისადმი ყურადღებით და სიყვარულით. ეს ღვინო არ არის მხოლოდ სასმელი, ეს არის შეხსენება იმისა, რომ სიყვარული ერთადერთი გრძნობაა, რომელიც მარადიულია. ღვინის    წლების მანძილზე დავარგების მზგავსად, სიყვარულიც უფრო ძლიერი, ღრმა და მდიდარი ხდება.
                    მიორა” აერთიანებს მათ, ვინც იზიარებს ჩვენს მისწრაფებას ჭეშმარიტების, მარადიულობისა და მშვენიერებისაკენ.
                    მაშინ როცა ჭიქა „მიორას“ აწევ, არა მხოლოდ  მის გემოთა ჰარმონიას გრძნობ არამედ ,მონაწილე ხდები   მარადიული სიყვარულის  ისტორიის .  სიყვარულის , რომელიც გრძელდება ღვინის ბოლო წვეთამდე.
                </p>
            </div>
        </div>
    )
}