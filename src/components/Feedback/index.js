// Write your React code here.

import './index.css'
import {Component} from 'react'

class Feedback extends Component {
  state = {
    isEmojiClicked: true,
  }

  setIsFeedbackSelected = () => {
    this.setState(prevState => ({isEmojiClicked: false}))
  }

  renderEmojiContainer = () => {
    const {feedbackData} = this.props
    const {emojis} = feedbackData
    return (
      <div>
        <h1 className="heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emojis-list-container">
          {emojis.map(emoji => (
            <li
              key={emoji.id}
              className="list-item-container"
              onClick={this.setIsFeedbackSelected}
            >
              <img src={emoji.imageUrl} alt={emoji.name} className="emoji" />
              <p className="emoji-title">{emoji.name}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderSuccessfulContainer = () => {
    const {feedbackData} = this.props
    const {loveEmojiUrl} = feedbackData
    return (
      <div className="thankyou-container">
        <img src={loveEmojiUrl} className="emoji" />
        <h1 className="thankyou-heading">Thank You!</h1>
        <p className="thankyou-message">
          We’ll use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isEmojiClicked} = this.state
    return (
      <div className="app-container">
        <div className="container">
          {isEmojiClicked
            ? this.renderEmojiContainer()
            : this.renderSuccessfulContainer()}
        </div>
      </div>
    )
  }
}

export default Feedback
