import { StyleSheet, Text, View, SafeAreaView, StatusBar, Image, AlbumList, ImageBackground,ScrollView } from 'react-native';
import Header from "./Header";
import Albumlist from './Albumlist';

export default function App() {
  return (
    <ScrollView>

    <SafeAreaView style={{ flex: 1 }}>

      <ImageBackground source={{ uri: "https://i.pinimg.com/564x/27/ff/46/27ff46b983c98b9b20a8f15a73f48750.jpg" }}>
        <View>
          <StatusBar />
          <Header />
          <Albumlist />
        </View>

      </ImageBackground>
    </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({


});
