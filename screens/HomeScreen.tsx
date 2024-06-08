import { Text, SafeAreaView, Image, TouchableOpacity, ScrollView, View } from 'react-native'
import React from 'react'
import gymImage from '../assets/gym_company.jpeg'
import { Ionicons } from '@expo/vector-icons'
import ActionRow from '../components/ActionRow'

const HomeScreen = () => {
  return (
    <SafeAreaView className='flex-1 bg-gray-100 relative'>
      {/* <Text >I am the Homescreen</Text> */}
      <ScrollView>
        <TouchableOpacity className='absolute z-50 top-1 right-2 mb-5 items-center '>
            <Ionicons name = "person-circle" size={24} color="#E5962D" />
            <Text className='text-center text-[#E5962D]'>UPGRADE</Text>
        </TouchableOpacity>

        {/* IMAGE */}
        <Image 
        source={gymImage}
        className='w-full h-64'
        />
        <View className='mx-5'>
        <View className='flex-row justify-between space-x-2'>
        {/* ActionRow */}
        <ActionRow 
        title="Track Workout"
        screen="Demo"
        color="#E5962D"
        icon="fitness"
        vertical
        />
        <ActionRow 
        title="Browse Workout"
        screen="Demo"
        color="#1982c4"
        icon="library"
        vertical
        />
        </View>
        <ActionRow 
        title="Connect with friends"
        screen="Demo"
        color="#f44174"
        icon="share-social"
        
        />
        <ActionRow 
        title="Add an Exercise"
        screen="Demo"
        color="#8Ac926"
        icon="add-circle"
     
        />
        <ActionRow 
        title="Create a Routine"
        screen="Demo"
        color="#c03221"
        icon="time"
     
        />
        <ActionRow 
        title="Join Challenges"
        screen="Demo"
        color="#23967f"
        icon="fitness"
     
        />

       

        </View>
       
       

      </ScrollView>
     
     
    </SafeAreaView>
  )
}

export default HomeScreen