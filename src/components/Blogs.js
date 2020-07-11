import React from "react"
import Title from "./Title"
import Blog from "./Blog"
import { Link } from "gatsby"
export const Blogs = ({ blogs, title, showlink }) => {
  return (
    <section className="section">
      <Title title={title}></Title>
      <div className="section-center blogs-center">
        {blogs.map((b, i) => {
          return <Blog key={b.id} {...b} />
        })}
      </div>
      {showlink && (
        <Link to="/blog" className="btn center-btn">
          blog
        </Link>
      )}
    </section>
  )
}
export default Blogs
