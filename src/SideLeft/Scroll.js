import { useState } from 'react';
import {BiTimeFive} from 'react-icons/bi';
import {AiFillFire} from 'react-icons/ai';

const dataLeft = [
    {
        img: "https://content.ikon.mn/news/2021/8/29/hrkyjd_IMG_4508_x100.jpg",
        title: "Баянзүрх дүүрэгт хичээлийн шинэ жилийн худалдаа зохион байгуулж буй хоёр байршилд үсчин үнэ төлбөргүй үйлчилж байгаа"
    },
    {
        img: "https://content.ikon.mn/news/2021/8/29/hrkyjd_IMG_4508_x100.jpg",
        title: "Баянзүрх дүүрэгт хичээлийн шинэ жилийн худалдаа зохион байгуулж буй хоёр байршилд үсчин үнэ төлбөргүй үйлчилж байгаа"
    },
    {
        img: "https://content.ikon.mn/news/2021/8/29/hrkyjd_IMG_4508_x100.jpg",
        title: "Баянзүрх дүүрэгт хичээлийн шинэ жилийн худалдаа зохион байгуулж буй хоёр байршилд үсчин үнэ төлбөргүй үйлчилж байгаа"
    },
    {
        img: "https://content.ikon.mn/news/2021/8/29/hrkyjd_IMG_4508_x100.jpg",
        title: "Баянзүрх дүүрэгт хичээлийн шинэ жилийн худалдаа зохион байгуулж буй хоёр байршилд үсчин үнэ төлбөргүй үйлчилж байгаа"
    },
]

const dataRight = [
    {
        img: "https://content.ikon.mn/news/2021/5/10/5med7v_182636221_461954538215689_5997910193662669020_n_x100.jpg",
        title: "С.Тодгэрэл: I-II ангийнхан 30 минутаар өдөрт дөрвөн хичээл, III-XII ангийнхан 35 минутаар таван хичээл үзнэ"
    }
]

const Scroll = () => {
    const [left, setLeft] = useState(true);
    const [right, setRight] = useState(false);

    const leftHandler = () =>{
        setLeft(true);
        setRight(false);
    }
    const rightHandler = () =>{
        setLeft(false);
        setRight(true);
    }

    return <div className="w-full my-10">
        <div className="flex gap-1">
            <button onClick={leftHandler} className="p-2 flex justify-center border border-black w-1/2 bg-gray-200">
                <BiTimeFive/>
            </button>
            <button onClick={rightHandler} className="p-2 flex justify-center border border-black w-1/2 bg-gray-200">
                <AiFillFire/>
            </button>
        </div>
        <div style={{height: '500px'}} className="bg-white mt-2 overflow-auto">
            {
                (left ? dataLeft : right ? dataRight : '').map(news => 
                    <div className="w-full flex gap-2 ">
                        <img className="w-36 h-30 flex object-cover" 
                            src={news.img} alt="news"/>
                        <p>{news.title}</p>
                    </div>
                )
            }   
        </div>
    </div>
}

export default Scroll;