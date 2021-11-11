
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

import im1 from '../../images/theophila-opening.jpg'
import im2 from '../../images/0289-1.jpg'

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
              <Row>
                <Col sm={8}>
                  <div className="home-text">
                  	<h1>Digital Theophila</h1>
                    <h2>This website introduces <i>Theophila</i> (1652), a unique book written and published by Edward Benlowes (1603-1676).</h2>
                    <p>A wealthy gentleman educated at Cambridge, Benlowes lived and worked at Brent Hall in Finchingfield, a small village in Essex, England. For most of his life, he was joined there by his  companion and  secretary Jan Schoren, a Dutch printer whom he had met while traveling abroad. Together, they set up an atelier of printing technologies, including a rolling press and binding tools. From this domestic workshop, they collaborated on a series of boutique publications and in, the process, cultivated a  network of poets, printers, engravers, and composers.</p>
                 <p>
                 <img src={im1} width="350" alt="title page of Theophila" style={{float: 'left' }} />

                    Benlowes’s masterpiece was <i>Theophila</i>. It was printed in 1652 by Roger Norton, then assembled by him at Brent Hall and sold at the bookshops of Henry Seile and Humphrey Moseley in London. The kernel of <i>Theophila</i> is an 8-canto poem tracking the journey of the soul, figured as the woman Theophila, as she ascends to heaven. However, this poem only takes up just over 30 sheets of this roughly 79-sheet book. The rest has been padded with <span style={{ backgroundColor: '#f78f34', color: '#000000'}}>original prints</span>, <span style={{ backgroundColor: '#ffea4d', color: '#000000'}}>recycled poetry</span>, <span style={{ backgroundColor: '#ffbc63', color: '#000000'}}>recycled engravings and woodcuts</span>, <span style={{ backgroundColor: '#9c383b'}}>commendatory verse</span>, <span style={{ backgroundColor: '#6c9fe6', color: '#000000'}}>Latin doggerel and translations</span>, and other material that Benlowes plundered from other books and printshops. This edition color-codes each page to enable readers to readily identify where these extra materials are in this copy. However, because he assembled and bound many, if not all, of them himself at home, inserting these extra materials according to his own whims, every copy of <i>Theophila</i> is in fact different.
                   </p>
                   <p>
                   To take a guided tour through <i>Theophila</i>, click the bookmark icon on the right side of the page. This will take you to a digital facsimile of a copy now held at the Kislak Center for Special Collections, Rare Books and Manuscripts at the University of Pennsylvania (folio EC65 B4387 652t). Click the left and right arrows to move backward and forward through the tour, or wander through the book on your own using the filmstrip or color-coded map view to navigate.
                   </p>
                  </div>
                </Col>
                <Col sm={4}>
                  <ListGroup>
                    <ListGroupItem> <Link to="/reader/penn/5">
                      <Glyphicon glyph="bookmark" /> Tour this edition</Link>
                    </ListGroupItem>
                    <ListGroupItem >
                      <Link to="/structure"> <Glyphicon glyph="book" /> Explore the book's physical structure</Link>
                    </ListGroupItem>
                  </ListGroup>
                  <MapView currentPage={0} />

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
