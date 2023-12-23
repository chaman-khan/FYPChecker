import React from "react";
import { StyleSheet, View } from "react-native";

const About = () => {
    return(
        <View>
            <View style={styles.topBar}>
        <Text style={styles.homeText}>About</Text>
      </View>
        </View>
    )
}

const styles = StyleSheet.create({
    topBar: {
      width: '100%',
      height: 71,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.primary,
      marginBottom: 50,
      borderRadius: '30 30 0 0',
    },
    homeText: {
        fontSize: 24,
        fontFamily: 'Arial Rounded MT Bold',
        color: 'white',
      },
})
export default About
