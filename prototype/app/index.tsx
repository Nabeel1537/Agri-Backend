import { useEffect, useRef } from 'react';
import { useRouter } from 'expo-router';
import { View, Text, StyleSheet, Animated, ImageBackground, Image } from "react-native";
import { initDB } from '../db/database';
import { syncOfflineUsers } from '../sync/syncUsers';

export default function Index() {
  const router = useRouter();
  const fadeAnim = useRef(new Animated.Value(0)).current;
    const scaleAnim = useRef(new Animated.Value(0.8)).current;
  
useEffect(() => {
  Animated.parallel([
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }),
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 4,
      useNativeDriver: true,
    }),
  ]).start();

  initDB();

  // 🔵 TRY SYNC ON APP START
  syncOfflineUsers();

  const timer = setTimeout(() => {
    router.replace('/login');
  }, 2000);

  return () => clearTimeout(timer);
}, [router]);

return (
    <ImageBackground
        source={require("../assets/images/background.jpeg")}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.overlay} />
  
        <Animated.View
          style={[
            styles.logoContainer,
            { opacity: fadeAnim, transform: [{ scale: scaleAnim }] },
          ]}
        >
          <Image
            source={require("../assets/images/swat-logo.png")}
            style={styles.logo}
          />
          <Text style={styles.title}>SWAT</Text>
          <Text style={styles.fullForm}>
            Sindh Water & Agriculture Transformation
          </Text>
        </Animated.View>
      </ImageBackground>
    );
  }

  const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 15,
  },
  title: {
    fontSize: 32,
    color: "#fff",
    fontWeight: "bold",
    letterSpacing: 2,
  },
  fullForm: {
    marginTop: 8,
    color: "#c8e6c9",
    fontSize: 13,
    textAlign: "center",
    paddingHorizontal: 20,
  },
  overlay: {
  ...StyleSheet.absoluteFillObject,
  backgroundColor: "rgba(11, 61, 46, 0.6)", // green tint instead of black
},
});