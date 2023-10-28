import { useState } from "react";
import { FaArrowRight, FaArrowDown } from 'react-icons/fa';

const Item = ({title, children})=>{

    const [faqOpen, setFaqOpen] = useState(false);

    return(
            <div className='border rounded shadow-md'>
                <button type='button' onClick={()=> setFaqOpen(!faqOpen)} className='flex justify-between items-center p-5 w-full focus:outline-none'  >
                    <p className="text-xl font-bold">
                      {title}
                    </p>
                        
                    <div>
                      {faqOpen?<FaArrowDown/>:<FaArrowRight/>}
                    </div>     
                   
                </button>
                {
                  faqOpen && (
                    <div className="text-left">
                        <p className="p-5 pt-0">{children}</p>
                    </div>
                  ) 
                }
            </div>
    );
}
export default Item;