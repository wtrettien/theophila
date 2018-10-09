
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'
import { Grid, Row, Col, ListGroup, ListGroupItem, Glyphicon } from 'react-bootstrap'
import SiteContainer from '../SiteContainer'
import MapView from '../../components/map-view'
import { setEdition } from '../../reducers/edition'

import im1 from '../../tour/penn/images/titlepage-spread.jpg'
import im2 from '../../tour/penn/images/patternpoems.jpg'

export class HomePage extends React.Component {
  constructor(props) {
    super(props)
    props.setEdition(props.edition)
  }

  render() {
    return (
      <SiteContainer>
        <Grid
          className="home"
          style={{
            backgroundSize: 'cover',
          }}
        >
          <Row>
            <Col>
                                              <MapView currentPage={0} />

              <Row>
                <Col sm={8}>
                  <div className="home-text">
                    
                       <h2>This website introduces <i>Theophila</i> (1652), a unique book written and published by Edward Benlowes (1603-1676).</h2>
                       <p>A wealthy gentleman educated at Cambridge, Benlowes lived and worked at Brent Hall in Finchingfield, a small village in Essex, England. For most of his life, he was joined there by his  companion and  secretary Jan Schoren, a Dutch printer whom he had met while traveling abroad. Together, they set up an atelier of printing technologies, including a rolling press and binding tools. From this domestic workshop, they collaborated on a series of boutique publications and in, the process, cultivated a  network of poets, printers, engravers, and composers.
                    </p>
                    <p>
                       Benlowes’s masterpiece was <i>Theophila</i>. It was printed in 1652 by Roger Norton, then assembled by him at Brent Hall and sold at the bookshops of Henry Seile and Humphrey Moseley in London. The kernel of <i>Theophila</i> is an 8-canto poem tracking the journey of the soul, figured as the woman Theophila, as she ascends to heaven. However, this poem only takes up just over 30 sheets of this roughly 79-sheet book. The rest has been padded with found poetry, recycled engravings and woodcuts, pattern poems, commendatory verse, Latin doggerel, and other material that Benlowes plundered from other books and printshops. Because he assembled and bound many, if not all, of them himself at home, inserting these extra materials according to his own whims, every copy of <i>Theophila</i> is different. 
                      </p>
                      <p>To take a guided tour through <i>Theophila</i>, click the bookmark icon on the right side of the page. This will take you to a digital facsimile of a copy now held at the Kislak Center for Special Collections, Rare Books and Manuscripts at the University of Pennsylvania. Click the left and right arrows to move backward and forward through the tour, or wander through the book on your own using the filmstrip or color-coded map view to navigate. 
                      </p>
                  </div>
                </Col>
                <Col sm={4}>
                  <ListGroup>
                    <ListGroupItem> <Link to="/reader/penn/60/">
                      <Glyphicon glyph="bookmark" /> Tour through this edition of Theophila</Link></ListGroupItem>

                    <ListGroupItem >
                      <Link to="/structure"> <Glyphicon glyph="book" /> Explore the book‘s physical structure</Link></ListGroupItem>
                  </ListGroup>
                                      <img src={im1} width="400" alt="Title page of Theophila" style={{ float: 'right' }} />
                    <img src={im2} width="400" alt="Title page of Theophila" style={{ float: 'right' }} />
                </Col>
              </Row>
              
            </Col>
          </Row>
        </Grid>
      </SiteContainer>
    )
  }
}

HomePage.propTypes = {
  edition: PropTypes.string.isRequired,
  setEdition: PropTypes.func.isRequired,
}
const mapStateToProps = (state, ownProps) => ({
  edition: ownProps.edition,

})

export default connect(
  mapStateToProps,
  { setEdition },
)(HomePage)
