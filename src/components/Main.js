import PropTypes from 'prop-types'
import React from 'react'
import { Col, Card, CardGroup, CardTitle, CardSubtitle, CardBody, CardImg, CardText, Button, Table } from 'reactstrap'
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
          <h2 className="major">Hi, I'm James</h2>
          <span className="image main">
            <img
              src={`../../swing.jpg`}
              alt="The swing at the end of the world, La casa del arbol"
            />
          </span>
          <p>and welcome to my portfolio...</p>
          <p>
            I've always been passionate about technology as a user but until
            fairly I recently hadn't considered venturing to the other side of
            technology and learning about development. About 6 months ago I
            signed up to a free JavaScript course online and since then I've
            been hooked. From functionality to structure, UI/UX to RoR, and even
            various software applications, every new technology is an adventure
            in and of itself.
          </p>
          <p>
            I'm thoroughly enjoying the variety of full stack development at
            LEARN and can see myself in either a full stack or front-end role in
            the very near future.
          </p>
          <p>
            Please enjoy your time here on my portfolio; I really care about the
            work I do so I hope you enjoy the experience. I trust it will give
            you an insight into who I am, where I'm at right now, and where I'm
            going on my tech journey. If you'd like to know more about me please
            checkout the links on the contact page or shoot me a message- I look
            forward to meeting you soon.
          </p>
          <p>James.</p>
          {close}
        </article>
        <article
          id="projects"
          className={`${this.props.article === 'projects' ? 'active' : ''} ${
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
                    alt="L Psicologa perinatal"
                    src={`../../psicologaperinatal.jpeg`}
                    top
                    width="100%"
                  />
                  <CardBody>
                    <CardTitle tag="h2">La Psicologa Perinatal</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h5">
                      Encuentra todo lo que necesitas para tu bebé.
                    </CardSubtitle>
                    <CardText>
                      La Psicologa Perinatal es una tienda online escrito con
                      Next.js y React y Tailwind CSS. Utiliza el Shopify API
                      para mostrar los productos y el carrito de compras. Este
                      Proyecto es un trabajo en progreso y lo estoy construyendo
                      para mi esposa. Va a vender su cursos y productos para
                      ayudar a las mujeres embarazadas y madres.
                    </CardText>
                    <Button href="https://github.com/JICaddick/La-Psicologa-Perinatal">
                      <span className="label">Source Code</span>
                    </Button>
                    <br></br>
                    <Button href="https://la-psicologa-perinatal.vercel.app">
                      <span className="label">See it Live Here!</span>
                    </Button>
                  </CardBody>
                </Card>
                <br />
                <Card>
                  <CardImg
                    alt="Monkey Tinder"
                    src={`../../monkeytinder.jpeg`}
                    top
                    width="100%"
                  />
                  <CardBody>
                    <CardTitle tag="h2">Monkey Tinder</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h5">
                      Dating Application for Monkeys
                    </CardSubtitle>
                    <CardText>
                      Quit monkeying around and find your perfect pri-mate. With
                      full CRUD functionality this pair-programmed app employs
                      microservices architecture with a React front end and a
                      Ruby on Rails backend. Moving into the Monkey dating space
                      was a difficult decision but, with their opposable thumbs,
                      we figured it's only a matter of time before monkeys start
                      swiping too! Bug fix pending.
                    </CardText>
                    <Button href="https://github.com/JICaddick/Monkey-Tinder-Frontend">
                      <span className="label">Front End</span>
                    </Button>
                    <br />
                    <Button href="https://github.com/JICaddick/Monkey-Tinder-Backend">
                      <span className="label">Back End</span>
                    </Button>
                  </CardBody>
                </Card>
                <br />
                <Card>
                  <CardImg
                    alt="Adopt Me App"
                    src={`../../adopt-me.jpeg`}
                    top
                    width="100%"
                  />
                  <CardBody>
                    <CardTitle tag="h2">Adopt Me</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h5">
                      A Pet Adoption Application
                    </CardSubtitle>
                    <CardText>
                      Adopt me is an app that allows you to search for pets in
                      your area. It uses the Petfinder API to search for pets
                      and display them on the page. It also allows you to filter
                      the search results by animal type, breed, and location.
                    </CardText>
                    <Button href="https://github.com/JICaddick/adopt-me1">
                      <span className="label">Source Code</span>
                    </Button>
                  </CardBody>
                </Card>
                <br />
                <Card>
                  <CardImg
                    alt="Tic-tac-potato"
                    src={`../../tic-tac-potato-1.jpeg`}
                    top
                    width="100%"
                  />
                  <CardBody>
                    <CardTitle tag="h2">Tic Tac Potato</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h5">
                      It's Tic Tac Toe but y'know, with potatoes.
                    </CardSubtitle>
                    <CardText>
                      Tic Tac Potato is a simple game of Tic Tac Toe. It was
                      built using HTML, CSS, and JavaScript. It is a single page
                      application that allows two players to play against each
                      other. It also keeps track of the score and displays the
                      winner. Coded while at LEARN Academy.
                    </CardText>
                    <Button href="https://github.com/JICaddick/Tic-Tac-Potato-AI-Version">
                      <span className="label">Source Code</span>
                    </Button>
                  </CardBody>
                </Card>
                <br />
                <Card>
                  <CardImg
                    alt="Clock App"
                    src={`../../clock.jpeg`}
                    top
                    width="100%"
                  />
                  <CardBody>
                    <CardTitle tag="h2">Clock App</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h5">
                      What time is it?
                    </CardSubtitle>
                    <CardText>
                      Clock App is a simple app that displays the current time.
                      It is built using Javascript and styled using CSS. It even
                      features a super fun fact about The Elizabeth Tower - bet
                      you didn't know that was Big Ben's official name!
                    </CardText>
                    <Button href="https://github.com/JICaddick/Clock-App">
                      <span className="label">Source Code</span>
                    </Button>
                    <br />
                    <Button href="https://jicaddick.github.io/Clock-App">
                      <span className="label">See it Live Here!</span>
                    </Button>
                  </CardBody>
                </Card>
                <br />
                <Card>
                  <CardImg
                    alt="Drum Kit"
                    src={`../../drumkit.jpeg`}
                    top
                    width="100%"
                  />
                  <CardBody>
                    <CardTitle tag="h2">Drum Kit</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h5">
                      More of a coding wizard than a pinball wizard?
                    </CardSubtitle>
                    <CardText>
                      Drum kit is a simple app that allows you to play a drum
                      kit using your keyboard. It is built using Javascript and
                      styled using CSS.
                    </CardText>
                    <Button href="https://github.com/JICaddick/Who-s-Drum-Kit">
                      <span className="label">Source Code</span>
                    </Button>
                    <br />
                    <Button href="https://jicaddick.github.io/Who-s-Drum-Kit">
                      <span className="label">See it Live Here!</span>
                    </Button>
                  </CardBody>
                </Card>
                <br />
                <Card>
                  <CardImg
                    alt="Canvas picture"
                    src={`../../canvas.jpeg`}
                    top
                    width="100%"
                  />
                  <CardBody>
                    <CardTitle tag="h2">HTML 5 Canva App</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h5">
                      Scribble away on your own canvas.
                    </CardSubtitle>
                    <CardText>
                      HTML5 Canvas App is a simple app that allows you to draw
                      on a canvas using your mouse. It is built using Javascript
                      and styled using CSS.
                    </CardText>
                    <Button href="https://github.com/JICaddick/fun-with-html5-canvas">
                      <span className="label">Source Code</span>
                    </Button>
                    <br />
                    <Button href="https://jicaddick.github.io/fun-with-html5-canvas">
                      <span className="label">See it Live Here!</span>
                    </Button>
                  </CardBody>
                </Card>
                <br />
                <Card>
                  <CardImg
                    alt="Flex Panel Gallery"
                    src={`../../flexpanels.jpeg`}
                    top
                    width="100%"
                  />
                  <CardBody>
                    <CardTitle tag="h2">Flex Panel CSS effects</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h5">
                      Click the panels to see some cool CSS effects.
                    </CardSubtitle>
                    <CardText>
                      Flex Panel CSS effects is a simple app that allows you to
                      see some cool CSS effects. It is built using Javascript
                      and styled using CSS.
                    </CardText>
                    <Button href="https://github.com/JICaddick/flex-panel-gallery">
                      <span className="label">Source Code</span>
                    </Button>
                  </CardBody>
                </Card>
                <br />
                <Card>
                  <CardImg
                    alt="Apartment App Picture"
                    src={`../../apartment.jpeg`}
                    top
                    width="100%"
                  />
                  <CardBody>
                    <CardTitle tag="h2">Apartment App</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h5">
                      Find Apartments For Rent
                    </CardSubtitle>
                    <CardText>
                      Full stack, monolithic, React in Rails application.
                      Featuring full CRUD functionality you can find, create,
                      update, and delete apartments from your list. Mob
                      programmed to near completion. Functionality edits and CSS
                      pending.
                    </CardText>
                    <Button
                      href="https://github.com/JICaddick/Apartment-App"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="label">Source Code</span>
                    </Button>
                  </CardBody>
                </Card>
                <br />
                <Card>
                  <CardImg
                    alt="DSCVR Logo"
                    src={`../../DSCVR.jpeg`}
                    top
                    width="100%"
                  />
                  <CardBody>
                    <CardTitle tag="h2">DSCVR</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h5">
                      Capstone project
                    </CardSubtitle>
                    <CardText>
                      DSCVR something new today. New to the area or long-time
                      local? No idea how to spend your weekend or where to take
                      your partner out on a date? Looking for a fun place to
                      take your kids or somewhere for your dog to get a good run
                      around? Find the perfect activity with DSCVR. DSCVR is a
                      work in progress. Functionality edits and CSS pending.
                    </CardText>
                    <Button
                      href="https://github.com/JICaddick/DSCVR"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="label">Source Code</span>
                    </Button>
                  </CardBody>
                </Card>
                <br />
              </Col>
            </CardGroup>
          </span>
          {close}
        </article>
        <article
          id="skills"
          className={`${this.props.article === 'skills' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Skills</h2>
          <Table>
            <thead>
              <tr>
                <th id="container">
                  <img
                    src={`../../js.jpeg`}
                    alt="js"
                    width="80px"
                    height="80px"
                  ></img>
                  <img
                    src={`../../html.jpeg`}
                    alt="html"
                    width="80px"
                    height="80px"
                  ></img>
                  <img
                    src={`../../css.jpeg`}
                    alt="css"
                    width="80px"
                    height="80px"
                  ></img>
                  <img
                    src={`../../sass.jpeg`}
                    alt="sass"
                    width="80px"
                    height="80px"
                  ></img>
                </th>
              </tr>
            </thead>
            <thead>
              <tr>
                <th>
                  <img
                    src={`../../react.jpeg`}
                    alt="react"
                    width="80px"
                    height="80px"
                  ></img>
                  <img
                    src={`../../ruby.jpeg`}
                    alt="ruby"
                    width="80px"
                    height="80px"
                  ></img>
                  <img
                    src={`../../ror.jpeg`}
                    alt="ror"
                    width="80px"
                    height="80px"
                  ></img>
                  <img
                    src={`../../bootstrap.jpeg`}
                    alt="bootstrap"
                    width="80px"
                    height="80px"
                  ></img>
                </th>
              </tr>
            </thead>
            <thead>
              <tr>
                <th>
                  <img
                    src={`../../postgresql.jpeg`}
                    alt="postgresql"
                    width="80px"
                    height="80px"
                  ></img>
                  <img
                    src={`../../npm.jpeg`}
                    alt="npm"
                    width="80px"
                    height="80px"
                  ></img>
                  <img
                    src={`../../postman.jpeg`}
                    alt="postman"
                    width="80px"
                    height="80px"
                  ></img>
                </th>
              </tr>
            </thead>
            <thead>
              <tr>
                <th>
                  <img
                    src={`../../jest.jpeg`}
                    alt="jest"
                    width="80px"
                    height="80px"
                  ></img>
                  <img
                    src={`../../rspec.jpeg`}
                    alt="rspec"
                    width="80px"
                    height="80px"
                  ></img>
                  <img
                    src={`../../github.jpeg`}
                    alt="github"
                    width="80px"
                    height="80px"
                  ></img>
                  <img
                    src={`../../figma.jpeg`}
                    alt="figma"
                    width="80px"
                    height="80px"
                  ></img>
                </th>
              </tr>
            </thead>
            <thead>
              <tr>
                <th>
                  <img
                    src={`../../canva.jpeg`}
                    alt="canva"
                    width="80px"
                    height="80px"
                  ></img>
                  <img
                    src={`../../trello.jpeg`}
                    alt="trello"
                    width="80px"
                    height="80px"
                  ></img>
                  <img
                    src={`../../slack.jpeg`}
                    alt="slack"
                    width="80px"
                    height="80px"
                  ></img>
                  <img
                    src={`../../vscode.jpeg`}
                    alt="vscode"
                    width="80px"
                    height="80px"
                  ></img>
                </th>
              </tr>
            </thead>
          </Table>
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
          <p>
            So, you want to work with me? Great! Drop me a line and let's talk.
          </p>
          <form
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
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
                target="_blank"
                rel="noreferrer"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/james-caddick/"
                target="_blank"
                rel="noreferrer"
                className="icon fa-linkedin"
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