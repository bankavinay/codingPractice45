import {ListItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {grdientDirectionDetails, clickGradientDirectionItem} = props
  const {displayText, value} = grdientDirectionDetails
  const onClickGradientDirectionItem = () => {
    clickGradientDirectionItem(value)
  }

  return (
    <ListItem>
      <DirectionButton
        isActive={isActive}
        type="button"
        onClick={onClickGradientDirectionItem}
      >
        {displayText}
      </DirectionButton>
    </ListItem>
  )
}
export default GradientDirectionItem
