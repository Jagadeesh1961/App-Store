import './index.css'

const TabItem = props => {
  const {tabDetails, onClickUpdateTab, isActive} = props
  const {displayText, tabId} = tabDetails

  const updateTabId = () => {
    onClickUpdateTab(tabId)
  }

  const activeButtonName = isActive ? 'is-active-button' : ''

  return (
    <li className="tab-list-item">
      <button
        type="button"
        className={`button ${activeButtonName}`}
        onClick={updateTabId}
      >
        {' '}
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
