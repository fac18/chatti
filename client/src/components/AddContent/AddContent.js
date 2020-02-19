import React from 'react'

const AddContent = () => {
  const [title, setTitle] = React.useState(null)
  const [videoUrl, setVideoUrl] = React.useState(null)
  const [imageUrl, setImageUrl] = React.useState(null)
  const [instructions, setInstructions] = React.useState(null)
  const [duration, setDuration] = React.useState(null)
  const [lowerAgeRange, setLowerAgeRange] = React.useState(null)
  const [upperAgeRange, setUpperAgeRange] = React.useState(null)
  const [listeningAttention, setListeningAttention] = React.useState(false)
  const [understanding, setUnderstanding] = React.useState(false)
  const [speaking, setSpeaking] = React.useState(false)
  const [socialInteraction, setSocialInteraction] = React.useState(false)

  const handleSubmit = event => {
    event.preventDefault()
    fetch(`/api/addcontent`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        title,
        videoUrl,
        imageUrl,
        instructions,
        duration,
        lowerAgeRange,
        upperAgeRange,
        listeningAttention,
        understanding,
        speaking,
        socialInteraction,
      }),
    })
    window.location.reload()
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label>
          Activity title
          <input
            type="text"
            name="title"
            placeholder="e.g. Claparoo!"
            value={title}
            onChange={event => setTitle(event.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Video: upload first then provide url
          <input
            type="text"
            name="video_url"
            placeholder="video url"
            value={videoUrl}
            onChange={event => setVideoUrl(event.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Image: upload first then provide url
          <input
            type="text"
            name="image_url"
            placeholder="e.g. ???"
            value={imageUrl}
            onChange={event => setImageUrl(event.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Instructions: please write (name) for the child's name,
          (subjectpronoun) for he/she, (objectpronoun) for him/her, and
          (possessivepronoun) for his/hers.
          <textarea
            type="text"
            name="instructions"
            placeholder="E.g. Tell (name) to show you (possessivepronoun) toys. Ask (objectpronoun) to say which is the biggest"
            value={instructions}
            onChange={event => setInstructions(event.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Duration of activity (in minutes)
          <input
            type="text"
            name="duration"
            placeholder="e.g. 10"
            pattern="[0-9]+"
            value={duration}
            onChange={event => setDuration(event.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Lower age range
          <input
            type="text"
            name="lower_age_range"
            placeholder="e.g. 3"
            pattern="[0-9]"
            value={lowerAgeRange}
            onChange={event => setLowerAgeRange(event.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Upper age range
          <input
            type="text"
            name="upper_age_range"
            placeholder="e.g. 4"
            pattern="[0-9]"
            value={upperAgeRange}
            onChange={event => setUpperAgeRange(event.target.value)}
            required
          />
        </label>
        <br />
        <p>Skills:</p>
        <label>
          Listening/attention
          <input
            type="checkbox"
            name="listening_attention"
            checked={listeningAttention}
            onChange={event => setListeningAttention(event.target.checked)}
          />
        </label>
        <label>
          Understanding
          <input
            type="checkbox"
            name="understanding"
            checked={understanding}
            onChange={event => setUnderstanding(event.target.checked)}
          />
        </label>
        <label>
          Speaking
          <input
            type="checkbox"
            name="speaking"
            checked={speaking}
            onChange={event => setSpeaking(event.target.checked)}
          />
        </label>
        <label>
          Social interaction
          <input
            type="checkbox"
            name="socialInteraction"
            checked={socialInteraction}
            onChange={event => setSocialInteraction(event.target.checked)}
          />
        </label>
        <br />
        <button type="submit">Add</button>
      </form>
    </main>
  )
}

export default AddContent
