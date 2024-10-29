import React from 'react'
import PropTypes from 'prop-types'

// const ratings = new Array(5);
// ratings.fill({
//     icon: 'star',
//     style: {fontVariationSettings: '"FILL" 1'}
// });

// console.log(ratings);

const ExperienceCard = ({
    content,
    imgSrc,
    name,
    company,
    year,
    skills
}) => {
  return (
    <div className="bg-zinc-800 p-5 rounded-xl min-w-[320px] flex flex-col lg:min-w-[360px]">

        <div className="flex items-center gap-1 mb-3">
            {/* {ratings.map(({ icon, style }, key) => (
                <span
                    key={key}
                    className="material-symbols-rounded text-yellow-300 text-[18px]"
                    style={style}
                >
                    {icon}
                </span>
            ))} */}
            {skills}
        </div>

        <p className="text-zinc-400 mb-8">
            {content}
        </p>

        <div className="flex items-center gap-2 mt-auto">
            <figure className="img-box rounded-lg">
                <img
                    src={imgSrc}
                    alt={name}
                    width={44}
                    height={44}
                    loading="lazy"
                    className="img-cover"
                />
            </figure>

            <div>
                <p>{name}</p>

                <p className="text-xs text-zinc-400 tracking-wider">
                    {company}
                </p>

                <p className="text-xs text-zinc-400 tracking-wider">
                    {year}
                </p>
            </div>
        </div>
    </div>
  )
}

ExperienceCard.propTypes = {
    content: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired
}

export default ExperienceCard