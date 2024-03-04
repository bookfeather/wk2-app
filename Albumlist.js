import { StyleSheet, Text, View, Image, ScrollView, ImageBackground } from "react-native";
import albumData from "./albums";

const AlbumList = () => {
    return (
        <ScrollView>

            <View style={styles.cardContainer}>
                {albumData.map((album, index) => (
                    <View key={index} style={{shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.8,        shadowRadius: 20,
                    elevation: 2,}}>
                        <View style={styles.thumbnailContainer}>
                            <Image
                                style={styles.artist}
                                source={{
                                    uri: "https://i.kfs.io/album/global/39124949,0v1/fit/500x500.jpg"
                                }}
                            />
                            <View style={styles.imageText}>
                                <Text>{album.title}</Text>
                                <Text>{album.artist}</Text>
                            </View>
                        </View>
                        <View>
                            <Image
                                style={styles.image}
                                source={{
                                    uri: album.imageuri
                                }}
                            />
                        </View>
                    </View>

                ))}
            </View>
            </ScrollView>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: "#fff",
        opacity:0.8,
        borderWidth: 10,
        borderRadius: 2,
        borderColor: "#ddd",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 20,
        elevation: 1,
    },
    thumbnailContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    artist: {
        marginLeft: 10,
        height: 70,
        width: 70
    },
    imageText: {

        marginTop: 5,
        marginLeft: 5,
        flexDirection: "column",
        justifyContent: "space-around",
    },
    image: {
        height: 300,
        width: null,
        margin: 10,
    }
});

export default AlbumList;