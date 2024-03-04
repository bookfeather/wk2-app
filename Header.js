import { StyleSheet, Text, View, Image } from "react-native";

const Header = () => {
    return (
        <View style={styles.headerStyle}> 
            <Image
                style={styles.logo}
                source={{
                    uri: "https://upload.wikimedia.org/wikipedia/commons/2/27/Yorushika_Logo.jpg"
                }}
            />           
            {/* <Text style={styles.textStyle}>
      Albums
    </Text> */}
        </View>
    );
};

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
    },
    logo:{
        height:80,
        width:80,
        justifyContent: 'center',
    },
    textStyle: {
        fontSize: 20,
    },
});

export default Header;