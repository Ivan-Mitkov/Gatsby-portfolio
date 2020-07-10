import React from "react"
import Title from "./Title"
import services from "../constants/services"
const Services = () => {
  return (
    <section className="section bg-gray">
      <Title title="services" />
      <div className="section-center services-center">
        {services.map(s => {
          const { id, title, text, icon } = s
          return (
            <article key={id} className="service">
              {icon}
              <h4>{title}</h4>
              <div className="underline"></div>
              <p>{text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Services
