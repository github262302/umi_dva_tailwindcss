import React from 'react';
import { Link, Outlet } from 'umi';
import styles from './index.less';

export default function Layout() {
  const data = ["Mac", "Phone", "Ipad", "Watch", "商店"]
  return (
    <div>
      <div className={"top-0 w-full fixed bg-transparent flex justify-center h-12 items-center"}>
        <ul className=' flex gap-8'>

          {data.map(e => <li className='border-solid border-1 border-purple-400 rounded-full h-8 mx-2 text-black-200'>
            <Link to="/">{e}</Link>
          </li>)}

        </ul>

      </div>
      <Outlet />
    </div>

  );
}
