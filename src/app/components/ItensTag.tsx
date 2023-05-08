import { Rubik } from 'next/font/google';
import { ReactNode } from 'react';

interface ItensTagProps {
  title: string;
  subTitle: string;
  icon: ReactNode;
}

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
  weight: ["400", "700"],
});

function ItensTag({ title, subTitle, icon }: ItensTagProps) {
  return ( 
    <div  className={`flex ml-4 mr-4 mb-4 flex-col justify-center p-8 text-center items-center gap-4`}>
      {icon}
      <h1 className={`${rubik.className} font-bold`}>{title}</h1>
      <p>{subTitle}</p>
    </div>
   );
}

export default ItensTag;