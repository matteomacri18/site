import React from 'react';

const Card = (props) => {
  return (
    <div class="relative flex flex-col overflow-hidden rounded-xl bg-gray-100 bg-clip-border text-gray-700 shadow-md">
      <a href={props.link} target='_blank'>
        <div class="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
          <img src={props.image} />
        </div>
        <div class="p-6">
          <h4 class="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {props.title}
          </h4>
          <p class="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
            {props.description}
          </p>
        </div>
        <section className="mx-5">
          <hr />
        </section>
        <div class="flex items-center justify-between p-6">
          <div></div>
          <p class="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
            {props.date}
          </p>
        </div>
      </a>
    </div>
  )
}

export default Card;