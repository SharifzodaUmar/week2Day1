// import { useState } from "react";

// import viteLogo from "/vite.svg";
// import "./App.css";

// function App() {
//   let [cnt,setCnt]=useState(0)
//   function plus() {
//     setCnt(cnt+=1)
//   }function minus() {
//     setCnt(cnt-=1)
//   }

// let [active,setActive]=useState(false)
// function show() {
//   setActive(true)
// }
// function hide() {
//   setActive(false)
// }

//   return <div>
// <button className="px-[20px] py-[10px] border" onClick={()=>{plus()}}>+</button>
// <button className="px-[20px] py-[10px] border"  onClick={()=>{minus()}}>-</button>
//     <h1>{cnt}</h1>

// <button className="px-[20px] py-[10px] border" onClick={()=>show()}>Add User</button>

// {active && (
//   <div className="border w-[300px] h-[200px] flex flex-col justify-center gap-[20px] items-center my-[100px]">
//     <h1 onClick={()=>hide()}>❌</h1>
//    <input type="text" className="border" placeholder="email..."/>
//    <input type="text" className="border" placeholder="Name..."/>
//   </div>
// )}

//   </div>;
// }

// export default App;
// ⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️

// import React, { useState } from 'react'

// const App = () => {
// let [users,setUsers]=useState([
//   {
//     name:"Umar",
//     age:"19",
//     id:1
//   },
//   {
//     name:"Ali",
//     age:"21",
//     id:2
//   }
// ])

// function Delete(id) {
//   users=users.filter((e)=>e.id!=id)
//   setUsers(users)
// }
// let [inpAddName,setInpAddName]=useState("")
// let [inpAddAge,setInpAddAge]=useState("")

// function AddNewUser() {
//   let newUser={
//     id:Date.now(),
//     name:inpAddName,
//     age:inpAddAge

//   }
//   setUsers([...users,newUser])
// }

//   return (
//     <div className='w-[1200px] h-[500px] bg-blue-400 m-auto'>

// <input value={inpAddName} onChange={(e)=>setInpAddName(e.target.value)} type="text" placeholder='name' className='px-[10px] py-[5px] border' />
// <input value={inpAddAge} onChange={(e)=>setInpAddAge(e.target.value)} type="text" placeholder='age' className='px-[10px] py-[5px] border' />
// <button onClick={()=>AddNewUser()}>Save</button>

//     {users.map((e)=>{
//       return (
//         <div key={e.id}>
//           <h1 className='text-[20px]'>{e.name}</h1>
//           <h1>{e.age}</h1>
//           <button className='px-[10px] py-[5px] border' onClick={()=>Delete(e.id)} >delete</button>
//         </div>
//       )
//     })}
//     </div>
//   )
// }

// export default App

import React, { useState } from "react";

import add from "./assets/add.png";
import logo from "./assets/logo.png";
import add2 from "./assets/add2.png";
import add3 from "./assets/add3.png";
import bg from "./assets/bg.png";
import heart1 from "./assets/heart1.png";
import heart2 from "./assets/heart2.png";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import num1 from "./assets/num1.png";
import num2 from "./assets/num2.png";
import num3 from "./assets/num3.png";
import s1 from "./assets/s1.png";
import s2 from "./assets/s2.png";
import s3 from "./assets/s3.png";
import s4 from "./assets/s4.png";
import s5 from "./assets/s5.png";
import s6 from "./assets/s6.png";
import social from "./assets/social.png";
import surat1 from "./assets/surat1.png";
import surat2 from "./assets/surat2.png";
import surat3 from "./assets/surat3.png";
import surat4 from "./assets/surat4.png";
import surat5 from "./assets/surat5.png";
import tel from "./assets/tel.png";
import up from "./assets/up.png";
import Card from "./components/Card";

const App = () => {
  let [job, setJob] = useState([
    {
      image: `${s1}`,
      id: 1,
      des: "Data Engineer",
    },
    {
      image: `${s2}`,
      id: 2,
      des: "Data Engineer",
    },
    {
      image: `${s3}`,
      id: 3,
      des: "Data Engineer",
    },
    {
      image: `${s4}`,
      id: 4,
      des: "Data Engineer",
    },
    {
      image: `${s5}`,
      id: 5,
      des: "Data Engineer",
    },
    {
      image: `${s6}`,
      id: 6,
      des: "Data Engineer",
    },
  ]);

  function Delete(id) {
    job = job.filter((e) => e.id != id);
    setJob(job);
  }

  return (
    <div className="bg-[#f5f5f5]">
      <header className="h-[80px] w-full bg-white flex items-center justify-around">
        <img src={logo} alt="" />
        <div className="flex items-center justify-between w-[490px] h-[44px]">
          <p className="font-[500] text-[18px]">Tất Cả Các Job</p>
          <button className="border rounded-xl text-[#021A84] border-[#021A84] w-[149px] h-[44px] flex items-center justify-center text-[18px] font-[500] ">
            Đăng ký
          </button>
          <button className="text-[white] rounded-xl bg-[#021A84] w-[149px] h-[44px] flex items-center justify-center text-[18px] font-[500] ">
            Đăng Nhập
          </button>
        </div>
      </header>

      <section
        className="w-[100%] h-[721px] bg-no-repeat bg-center bg-cover "
        style={{ backgroundImage: `url(${bg})` }}
      ></section>

      <section className="w-[1160px] h-[120px] flex flex-col items-start justify-between p-[10px] m-auto  my-[50px]">
        <article className="w-[100%] h-[75px] flex items-center justify-between  ">
          <input
            className="w-[688px] h-[51px] outline-none bg-white px-[10px] rounded-xl"
            type="text "
            placeholder="Nhập vị trí hoặc từ khóa..."
          />
          <select className="text-[#999999] text-[14px] w-[271px] h-[50px] bg-white outline-none rounded-xl">
            <option value="">Chọn địa điểm</option>
          </select>
          <button className="bg-[#021A84] text-white w-[149px] h-[44px] flex items-center justify-center rounded-xl">
            Tìm Kiếm
          </button>
        </article>
        <div className="flex items-center justify-between w-[573px] h-[28px]">
          <p className="font-[400] text-[14px]">Đề xuất:</p>
          <p className="bg-[#0000001A] rounded-sm p-[2px]">Reactjs</p>
          <p className="bg-[#0000001A] rounded-sm p-[2px]">VueJS</p>
          <p className="bg-[#0000001A] rounded-sm p-[2px]">Angular</p>
          <p className="bg-[#0000001A] rounded-sm p-[2px]">Design</p>
          <p className="bg-[#0000001A] rounded-sm p-[2px]">.NET</p>
          <p className="bg-[#0000001A] rounded-sm p-[2px]">PHP</p>
          <p className="bg-[#0000001A] rounded-sm p-[2px]">java</p>
          <p className="bg-[#0000001A] rounded-sm p-[2px]">Mobile</p>
        </div>
      </section>

      <section className="w-[1160px] h-[640px] m-auto">
        <div className="flex items-center justify-between w-[296px] h-[67px]">
          <img src={heart1} alt="" />
          <p className="text-[#021A84] text-[34px] font-[700]">Jobs tốt nhất</p>
        </div>

        <div className="p-10 grid grid-cols-3 w-[1160px] h-[532px] gap-[100px]">
          {job.map((e) => (
            <Card
              funDelete={Delete}
              key={e.id}
              id={e.id}
              image={e.image}
              des={e.des}
            />
          ))}
        </div>
      </section>

      <p className="text-center text-[18px] text-[#021A84]">Why?</p>
      <p className="text-center text-[#021A84] text-[34px] font-[700]">
        Tại Sao Lựa Chọn Recland?
      </p>

      <section className="flex items-center justify-between w-[1160px] h-[278px] m-auto my-[50px]">
        <article className="w-[365px] h-[278px] flex flex-col items-center justify-center gap-[20px] bg-[#8aeeab] rounded-xl">
          <img src={icon1} alt="" />
          <p className="text-[#0b5022] text-center text-[18px] font-[700]">
            Đa dạng việc làm, thêm nhiều lựa <br /> chọn hấp dẫn
          </p>
          <p className="text-center text-[#2b8148] text-[14px]">
            Hơn 200+ việc làm IT, giúp các bạn REC có <br /> một kho việc làm để
            các bạn tìm kiếm, sale <br /> jobs đến những ứng viên phù hợp.
          </p>
        </article>
        <article className="w-[365px] h-[278px] flex flex-col items-center justify-center gap-[20px] bg-[#021a848d] rounded-xl">
          <img src={icon2} alt="" />
          <p className="text-[#021A84] text-center text-[18px] font-[700]">
            Đa dạng việc làm, thêm nhiều lựa <br /> chọn hấp dẫn
          </p>
          <p className="text-center text-[#021a84a3] text-[14px]">
            Hơn 200+ việc làm IT, giúp các bạn REC có <br /> một kho việc làm để
            các bạn tìm kiếm, sale <br /> jobs đến những ứng viên phù hợp.
          </p>
        </article>
        <article className="w-[365px] h-[278px] flex flex-col items-center justify-center gap-[20px] bg-[#e5522a85] rounded-xl">
          <img src={icon3} alt="" />
          <p className="text-[#E5532A] text-center text-[18px] font-[700]">
            Đa dạng việc làm, thêm nhiều lựa <br /> chọn hấp dẫn
          </p>
          <p className="text-center text-[#2b8148] text-[14px]">
            Hơn 200+ việc làm IT, giúp các bạn REC có <br /> một kho việc làm để
            các bạn tìm kiếm, sale <br /> jobs đến những ứng viên phù hợp.
          </p>
        </article>
      </section>

      <p className="text-center text-[#021A84] text-[34px] font-[700] my-[50px]">
        Đối Tác
      </p>

      <section className="flex justify-between items-center w-[1020px] h-[156px] m-auto">
        <img className="border border-white" src={surat1} alt="" />
        <img className="border border-white" src={surat2} alt="" />
        <img className="border border-white" src={surat3} alt="" />
        <img className="border border-white" src={surat4} alt="" />
        <img className="border border-white" src={surat5} alt="" />
      </section>

      <p className="text-center text-[18px] text-[#021A84] mt-[100px]">
        Quy trình làm việc
      </p>
      <p className="text-center text-[#021A84] text-[34px] font-[700] mb-[100px]">
        Hợp tác cùng RecLand
      </p>

      <section className="w-[1093px] h-[239px] flex items-center justify-between m-auto">
        <article className="w-[297px] h-[230px] flex flex-col items-center gap-[15px]">
          <img src={num1} alt="" />
          <img src={add} alt="" />
          <p className="font-[700] text-[18px]">Tạo một tài khoản</p>
          <p className="">Trở thành member trên RecLand</p>
        </article>
        <article className="w-[297px] h-[230px] flex flex-col items-center gap-[15px] ">
          <img src={num2} alt="" />
          <img src={add2} alt="" />
          <p className="font-[700] text-[18px]">Tạo một tài khoản</p>
          <p className="">Trở thành member trên RecLand</p>
        </article>
        <article className="w-[297px] h-[230px] flex flex-col items-center gap-[15px] ">
          <img src={num3} alt="" />
          <img src={add3} alt="" />
          <p className="font-[700] text-[18px]">Tạo một tài khoản</p>
          <p className="">Trở thành member trên RecLand</p>
        </article>
      </section>

      <footer className="w-[100%] h-[534px] mt-[300px] bg-[#d3eeee] flex flex-col items-center relative">
        <section className="bg-[#26AB5B] text-white w-[1160px] h-[119px] flex justify-between items-center absolute z-10 rounded-2xl  top-[-60px]">
          <article className="flex items-center justify-around w-[560px] h-[67px]">
            <img src={heart1} alt="" />
            <div>
              <p className="font-[700] text-[26px]">Bạn muốn đến với Recland</p>
              <p className="text-[18px]">
                Chúng tôi sẽ giúp bạn thành công trên con đường Recer
              </p>
            </div>
          </article>

          <div className="bg-[#FFFFFF4D] w-[233px] h-[119px] flex items-center justify-center">
            <button className="w-[153px] h-[44px] bg-[#021A84] rounded-xl flex  items-center justify-center">
              Đăng Ký Ngay
            </button>
          </div>
        </section>

        <section className="flex w-[1160px] m-auto h-[50px] justify-between items-center">
          <article className="w-[318px] h-[50px] flex items-center justify-between">
            <input
              className="w-[252px] h-[50px] text-center outline-none bg-white rounded-xl"
              type="text"
              placeholder="Enter your email address"
            />
            <img src={tel} alt="" />
          </article>

          <article className="w-[264px] h-[50px] flex items-center justify-between">
            <p className="w-[42px] h-[42px] bg-white rounded-[50%] flex items-center text-[#021A84] font-[700] justify-center">
              199
            </p>
            <p className="text-[#999999]">Công việc</p>
            <p className="w-[42px] h-[42px] bg-white rounded-[50%] flex items-center text-[#021A84] font-[700] justify-center">
              93
            </p>
            <p className="text-[#999999]">Công việc</p>
          </article>
        </section>

        <section className="w-[1160px] h-[124px] m-auto flex justify-between items-start px-4 py-6  border-b-1 border-gray-500">
          <div className="flex flex-col gap-3">
            <img src={logo} alt="Logo" className="w-[150px]" />
            <img src={social} alt="Social Icons" className="w-[160px]" />
          </div>

          <div className="flex flex-col gap-1 text-gray-600 text-sm">
            <h3 className="font-semibold text-black">Địa chỉ</h3>
            <p>Tòa nhà AC, 78 Duy Tân,</p>
            <p>Quận Cầu Giấy, Hà Nội</p>
          </div>

          <div className="flex flex-col gap-1 text-gray-600 text-sm">
            <h3 className="font-semibold text-black">Liên hệ</h3>
            <p>0369 713 819</p>
            <p>luat.nguyen@recland.co</p>
          </div>

          <div className="flex flex-col gap-1 text-gray-600 text-sm">
            <h3 className="font-semibold text-black">Menu</h3>
            <p>Trang chủ</p>
            <p>Tìm kiếm công việc</p>
            <p>Sitemap</p>
          </div>

          <div className="flex flex-col gap-1 text-gray-600 text-sm">
            <h3 className="font-semibold text-black">Tài khoản của tôi</h3>
            <p>Tổng quan</p>
            <p>Kho CV</p>
            <p>Thông tin cá nhân</p>
          </div>
        </section>

        <p className="font-[600] text-[#999999] pb-[30px]">
          Copyright © 2022 Recland.co
        </p>
      </footer>
    </div>
  );
};

export default App;
