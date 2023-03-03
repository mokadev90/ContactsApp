import {useState} from 'react'
import {View, Image} from 'react-native'
import CustomText from '../common/CustomText'
import styles from './styles'

const ImageComponent = ({src}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)

  const onLoadStart = () => {
    setIsLoading(true)
  }

  const onLoadEnd = () => {
    setIsLoading(false)
  }

  const onError = () => {
    setIsLoading(false)
    setHasError(true)
  }

  return (
    <View style={styles.imageContainer}>
      {isLoading && (
        <CustomText style={styles.loading}>Loading image</CustomText>
      )}
      <View>
        <Image
          onError={onError}
          onLoadEnd={onLoadEnd}
          onLoadStart={onLoadStart}
          source={{uri: src}}
          style={styles.detailPhoto}
        />
      </View>
    </View>
  )
}

export default ImageComponent
