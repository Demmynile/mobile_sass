import { View, Text, TouchableOpacity } from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../App';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type NavigationProp = NativeStackNavigationProp<
RootStackParamList,
'Home'
>

type Props = {
  title : string;
  screen : any;
  color : string;
  requiresPro?: boolean;
  icon?: any;
  vertical?: boolean

}

const ActionRow = ({title , screen , color , requiresPro , icon , vertical} : Props) => {
  
  const navigation = useNavigation<NavigationProp>()

  return (
    <TouchableOpacity onPress={() => navigation.navigate(screen)} className={`flex m-2 flex-1 justify-center items-center py-6 rounded-lg space-x-2 ${vertical ? 'flex-col' : 'flex-row'}`} style={{backgroundColor : color}}>
      <Ionicons name = {icon} size = {30} color = 'white' />
      <Text className='text-white font-bold text-lg'>{title}</Text>
    </TouchableOpacity>
    
  )
}

export default ActionRow