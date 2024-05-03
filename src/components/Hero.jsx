import React from 'react';

import { AvatarCanvas } from './AvatarCanvas';

export const Hero = () => {
  return (
    <section className="relative h-screen w-full bg-mainBg bg-cover bg-bottom bg-no-repeat text-white">
      <div className="p-3 absolute inset-0">
        <div className="">
          <h1 className='text-6xl'>Hello</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            aperiam consequatur ab veritatis natus laborum architecto commodi
            officia eos ullam libero laudantium esse amet ad, corporis tempora
            ipsum cumque iste sit delectus, recusandae reiciendis autem!
            Accusantium, qui accusamus! Voluptatibus provident cumque veniam
            earum, ipsum perferendis velit consectetur itaque sed soluta?
          </p>
        </div>
      </div>
      <AvatarCanvas />
    </section>
  );
};
