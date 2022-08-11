import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            Hello all, and thanks for taking the time to read my about me..
          </p>
          <p>
            My name's James, I'm a 32-year-old father of two from the UK. I'm currently based in Colombia but looking to relocate sometime in the next two years. I've had a plethora of different jobs and responsibilities in my working life and each position has contributed to the person I am today. I consider myself a philosopher and try to live by the mantra of Rabbi Hillel who said, "That which is hateful to you, do not do to another. That is the whole Law. The rest is commentary. Now go and learn".
          </p>
          <p>
            In 2014 I left the UK on a 1-way ticket, in 2017 I met my future wife, and in 2021 we started a family together. Each of these events changed my life for the better and in 2022 I decided to give up my teaching/ coaching positions to embark on a new career in tech- another decision I feel tremendously good about. 
          </p>
          <p>
            The life experience and soft skills I gained while traveling, and more recently serving business executives in a coaching capacity, have helped to mold me into a well-rounded and compassionate professional individual with a genuine desire to do good in my work.
          </p>
          <p>
            I'm also an avid reader and particularly enjoy the works of Tolstoy, Henry Thoreux, Thich Nhat Hanh, George Orwell, Deepak Chopra, Paolo Coelho, Marcus Aurelius, and Gabriel Garcia Marquez as well as a recently rekindled enjoyment of some old Dr. Seuss classics (they're some of my son's favorites).
          </p>
          <p>
            I look forward to making your acquaintance. 
          </p>
          <p>
            James.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Projects</h2>
          <p>
            Click on the images below to read more and see demos of some of my work.
          </p>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <p>
            Hover over different sections of the image below to learn more about me! 
          </p>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <p>So, you want to work with me? Great! Drop me a line and let's talk.
          </p>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://github.com/JICaddick"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
