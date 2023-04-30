import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen'

SplashScreen.preventAutoHideAsync();


const Layout = () => {
  // font 
  const [fontsLaded] = useFonts({
    DMBold:require('../assets/fonts/DMSans-Bold.ttf'),
    DMMedium:require('../assets/fonts/DMSans-Medium.ttf'),
    DMRegular:require('../assets/fonts/DMSans-Regular.ttf'),
  })
  // kind useEffect to load the font
  const onLayoutRootView = useCallback(async () =>{
    if(fontsLaded){
      await SplashScreen.hideAsync()
    }
  },[fontsLaded])
  
  if(!fontsLaded) return null

  return (
    <Stack onLayout={onLayoutRootView}/>
  )
}

export default Layout