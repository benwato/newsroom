import React from 'react'
import Card from 'react-bootstrap/Card'
import { CardGroup } from 'react-bootstrap'

const Article = (props) => {
    return (
        <div>
            <CardGroup>
  <Card>
    <Card.Img variant="top" src={props.urlToImage1} />
    <Card.Body>
      <Card.Title>{props.title1}</Card.Title>
      <Card.Text>
        {props.description1}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 9 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={props.urlToImage2} />
    <Card.Body>
      <Card.Title>{props.title2}</Card.Title>
      <Card.Text>
        {props.description2}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 2 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={props.urlToImage3} />
    <Card.Body>
      <Card.Title>{props.title3}</Card.Title>
      <Card.Text>
        {props.description3}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 7 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
            
        </div>
    )
}

export default Article

