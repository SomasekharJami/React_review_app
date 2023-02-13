import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {increase: 0, list: this.props}

  onRight = () => {
    const {increase, list} = this.state
    const listLength = list.reviewsList.length - 1
    if (increase < listLength) {
      this.setState(prevState => ({increase: prevState.increase + 1}))
    } else {
      this.setState({increase: listLength})
    }
  }

  onLeft = () => {
    const {increase} = this.state
    if (increase > 0) {
      this.setState(prevState => ({increase: prevState.increase - 1}))
    } else {
      this.setState({increase: 0})
    }
  }

  render() {
    const {increase, list} = this.state
    const masterData = list.reviewsList

    return (
      <div className="mainCon">
        <h1 className="mainH">Reviews</h1>
        <div className="imgCon">
          <button
            className="ArrowBtn"
            data-testId="leftArrow"
            type="button"
            onClick={this.onLeft}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow"
            />
          </button>
          <div className="profileCon">
            <img
              src={masterData[increase].imgUrl}
              alt={masterData[increase].username}
              className="profilePic"
            />
            <p className="name">{masterData[increase].username}</p>
            <p className="firm">{masterData[increase].companyName}</p>
          </div>
          <button
            className="ArrowBtn"
            data-testId="rightArrow"
            type="button"
            onClick={this.onRight}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow"
            />
          </button>
        </div>
        <p className="mainP">{masterData[increase].description}</p>
      </div>
    )
  }
}

export default ReviewsCarousel
