import PropTypes from 'prop-types'
import React from 'react'
import { Col, Card, CardGroup, CardTitle, CardSubtitle, CardBody, CardImg,CardText, Button, Table } from 'reactstrap'
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
          <h2 className="major">Hi, I'm James...</h2>
          <span className="image main">
            <img src={`../../swing.jpg`} alt="The swing at the end of the world, La casa del arbol" />
          </span>
          <p>
            and thanks for taking time out of your day to look through my portfolio...
          </p>
          
          <p>
            I've always been passionate about technology as a user but until fairly I recently hadn't considered venturing to the other side of technology and learning about development. About 6 months ago I signed up to a free JavaScript course online and since then I've been hooked. From functionality to structure, UI/UX to RoR, and even various software applications, every new technology is an adventure in and of itself. 
          </p>
          <p> 
            I'm thoroughly enjoying the variety of full stack development at LEARN and can see myself in either a full stack or front-end role in the very near future. 
          </p>
          <p>
            Please enjoy your time here on my portfolio; I really care about the work I do so I hope you enjoy the experience. I trust it will give you an insight into who I am, where I'm at right now, and where I'm going on my tech journey. If you'd like to know more about me please checkout the links on the contact page or shoot me a message- I look forward to meeting you soon.
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
          <span className="image main">
            <CardGroup>
              <Col sm={4}>
                <Card>
                  <CardImg
                    alt="DSCVR Logo"
                    src={`../../DSCVR.jpeg`}
                    top
                    width="100%"
                  />
                  <CardBody>
                    <CardTitle tag="h5">
                      DSCVR
                    </CardTitle>
                    <CardSubtitle
                      className="mb-2 text-muted"
                      tag="h6"
                    >
                      Capstone project
                    </CardSubtitle>
                    <CardText>
                      DSCVR something new today. New to the area or long-time local? No idea how to spend your weekend or where to take your partner out on a date? Looking for a fun place to take your kids or somewhere for your dog to get a good run around? Find the perfect activity with DSCVR. 
                    </CardText>
                    <Button>
                      Button
                    </Button>
                  </CardBody>
                </Card>
                <br/>
                <Card>
                  <CardImg
                    alt="Monkey Tinder"
                    src={`../../monkeytinder.jpeg`}
                    top
                    width="100%"
                  />
                  <CardBody>
                    <CardTitle tag="h5">
                      Monkey Tinder
                    </CardTitle>
                    <CardSubtitle
                      className="mb-2 text-muted"
                      tag="h6"
                    >
                      Dating Application for Monkeys
                    </CardSubtitle>
                    <CardText>
                      Quit monkeying around and find your perfect pri-mate. With full CRUD functionality this pair-programmed app employs microservices architecture with a React front end and a Ruby on Rails backend. Moving into the Monkey dating space was a difficult decision but, with their opposable thumbs, we figured it's only a matter of time before monkeys pick up smartphones and start swiping!
                    </CardText>
                    <Button>
                      Button
                    </Button>
                  </CardBody>
                </Card>
                <br/>
                <Card>
                  <CardImg
                    alt="Apartment App Picture"
                    src={`../../apartment.jpeg`}
                    top
                    width="100%"
                  />
                  <CardBody>
                    <CardTitle tag="h5">
                      Apartment App
                    </CardTitle>
                    <CardSubtitle
                      className="mb-2 text-muted"
                      tag="h6"
                    >
                      Group Project
                    </CardSubtitle>
                    <CardText>
                      Full stack, monolithic, React in Rails application. Featuring full CRUD functionality you can find, create, update, and delete apartments from your list. Mob programmed to near completion, CSS styling done subsequently by yours truly. 
                    </CardText>
                    <Button>
                      Button
                    </Button>
                  </CardBody>
                </Card>
                <br/>
              </Col>
            </CardGroup>
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
          <h2 className="major">Skills</h2>
            <table class="skills_table">
            <tr>
                <td><i class="fa-brands fa-js fa-5x"></i></td>
                <td><i class="fa-brands fa-react fa-5x"></i></td>
                <td><img src = "https://www.pngfind.com/pngs/b/344-3441378_ruby-on-rails-png.png" alt = "Rails Icon" height="75px" width="100px" /></td>
                <td><img src = "./src/images/pngegg.png" alt = "Postgresql Icon"  /></td>
            </tr> 
            <tr>
                <td>JavaScript</td>
                <td>React</td>
                <td>Ruby on Rails</td>
                <td>Postgresql</td>
            </tr>
        </table>
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
                <input type="submit" value="Send Message" className="special"  />
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
              <a
                href="https://www.linkedin.com/in/james-caddick/"
                className = "icon fa-linkedin"
              >
                <span className="label">LinkedIn</span>
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
