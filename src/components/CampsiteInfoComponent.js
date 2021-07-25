import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

class CampsiteInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCampsite: null,
    };
  }

  renderComments(comments) {
    if (comments) {
      return (
        <div className="col-md-5 m-1">
          <h4>Comments</h4>
          {comments.map((comment) => {
            return (
              <>
                <div key={comment.id}>{comment.text}</div>
                <div>
                  {comment.author}{" "}
                  {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                  }).format(new Date(Date.parse(comment.date)))}
                </div>
              </>
            );
          })}
        </div>
      );
    }
    return <div />;
  }

  renderCampsite(campsite) {
    return (
      <div className="col-md-5 m-1">
        <Card>
          <CardImg
            top
            src={this.props.campsite.image}
            alt={this.props.campsite.name}
          />
          <CardBody>
            <CardTitle>{this.props.campsite.name}</CardTitle>
            <CardText>{this.props.campsite.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }

  render() {
    if (this.props.campsite) {
      return (
        <>
          <div className="row">{this.renderCampsite(this.props.campsite)}</div>
          <div className="row">
            {this.renderComments(this.props.campsite.comments)}
          </div>
        </>
      );
    } else {
      return <div></div>;
    }
  }
}

export default CampsiteInfo;
