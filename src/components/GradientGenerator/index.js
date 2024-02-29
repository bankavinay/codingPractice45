import {component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'

import {
  GradientGeneratorContainer,
  ResponsiveContainer,
  Heading,
  DirectionDescription,
  GradientDirectionList,
  ColorPickerDescription,
  ColorPickerContainer,
  CustomInputAndColorContainer,
  ColorValue,
  CustomInput,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Comment {
  state = {
    activeGradientDirection: gradientDirectionsList[0].value,
    fromcolorInput: '#8ae323',
    toColorInput: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value} #8ae323, #014f7b`,
  }
  onGenerate = () => {
    const {fromcolorInput, toColorInput, activeGradientDirection} = this.state
    this.setState({
      gradientValue: `to ${activeGradientDirection}, ${fromcolorInput}, ${toColorInput}`,
    })
  }

  onChangeToColor = event => {
    this.setState({toColorInput: event.target.value})
  }
  onChangeFromColor = event => {
    this.setState({fromcolorInput: event.target.value})
  }

  clickGradientDirectionItem = direction => {
    this.setState({activeGradientDirection: direction})
  }
  render() {
    const {
      activeGradientDirection,
      fromcolorInput,
      toColorInput,
      gradientValue,
    } = this.state

    return (
      <GradientGeneratorContainer
        data-testid="gradientGenerator"
        gradientValue={gradientValue}
      >
        <ResponsiveContainer>
          <Heading>Generate a CSS Color Gradient</Heading>
          <DirectionDescription>Choose Direction</DirectionDescription>
          <GradientDirectionList>
            {gradientDirectionsList.map(eachItem => (
              <GradientDirectionItem key={eachItem.directionId} grdientDirectionDetails={eachItem} clickGradientDirectionItem={this.clickGradientDirectionItem} isActive={activeGradientDirection == eachItem.value} />
            ))}
          </GradientDirectionList>
          <ColorPickerDescription>Pick the Colors</ColorPickerDescription>
          <ColorPickerContainer>
          <CustomInputAndColorContainer>
          <ColorValue>{fromcolorInput}</ColorValue>
          <CustomInput onChange={this.onChangeFromColor}value={fromcolorInput} type="color" />
          </CustomInputAndColorContainer>
          <CustomInputAndColorContainer>
          <ColorValue>{toColorInput}</ColorValue>
          <CustomInput 
          onChange={this.onChangeToColor}
          value={toColorInput}
          type="color"
          />
          </CustomInputAndColorContainer>
          </ColorPickerContainer>
          <GenerateButton onClick={this.onGenerate}>Generate</GenerateButton>
        </ResponsiveContainer>
      </GradientGeneratorContainer>
    )
  }
}
export default GradientGenerator;