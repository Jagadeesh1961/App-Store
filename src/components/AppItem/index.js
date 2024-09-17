import './index.css'

const AppItem = props => {
  const {appItem} = props
  const {imageUrl, appName} = appItem
  return (
    <li className="list-item">
      <img src={imageUrl} alt={appName} className="item-logo" />
      <p className="item-heading">{appName}</p>
    </li>
  )
}

export default AppItem
