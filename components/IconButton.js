import { Pressable, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const IconButton = ({icon,color,onPress}) => {
  return (
       <Pressable style={({ pressed })=> pressed && styles.buttonPressed} onPress={onPress}> 
          <Ionicons name={icon} size={24} color={color}/>
       </Pressable>
  )
}

export default IconButton

const styles = StyleSheet.create({
     buttonPressed: {
          opacity : .5
     }
})