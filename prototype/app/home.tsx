import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Home() {
  return (
    <View style={styles.container}>
      {/* HEADER IMAGE */}
      <ImageBackground
        source={{ uri: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae' }}
        style={styles.header}
      >
        <View style={styles.overlay}>
          <Text style={styles.greeting}>Hi, Amal</Text>
          <Text style={styles.dashboard}>Dashboard</Text>

          <View style={styles.avatar}>
            <Ionicons name="person-outline" size={30} color="#000" />
          </View>
        </View>
      </ImageBackground>

      {/* SEARCH BAR */}
      <View style={styles.searchBox}>
        <TextInput
          placeholder="Search here..."
          placeholderTextColor="#fff"
          style={styles.searchInput}
        />
        <Ionicons name="search" size={24} color="#fff" />
      </View>

      {/* GRID */}
      <View style={styles.grid}>
        <TouchableOpacity style={styles.card}>
          <Ionicons name="home" size={40} color="#2E7D32" />
          <Text style={styles.cardText}>Articles</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Ionicons name="storefront" size={40} color="#E65100" />
          <Text style={styles.cardText}>Market</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Ionicons name="book" size={40} color="#1565C0" />
          <Text style={styles.cardText}>Guide</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Ionicons name="clipboard" size={40} color="#6A1B9A" />
          <Text style={styles.cardText}>Reports</Text>
        </TouchableOpacity>
      </View>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  /* HEADER */
  header: {
    height: 230,
    justifyContent: 'flex-end',
  },
  overlay: {
    backgroundColor: 'rgba(27, 94, 32, 0.75)', // strong green overlay
    padding: 20,
  },
  greeting: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: 'bold',
  },
  dashboard: {
    color: '#E8F5E9',
    fontSize: 20,
    marginTop: 4,
  },
  avatar: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 50,
    elevation: 4,
  },

  /* SEARCH */
  searchBox: {
    backgroundColor: '#2E7D32', // green
    marginHorizontal: 20,
    marginTop: -25,
    borderRadius: 14,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    height: 55,
    elevation: 3,
  },
  searchInput: {
    color: '#FFFFFF',
    fontSize: 16,
    flex: 1,
  },

  /* GRID */
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 25,
  },
  card: {
    width: '47%',
    backgroundColor: '#FFFFFF',
    height: 130,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 18,
    borderWidth: 1.5,
    borderColor: '#2E7D32',
  },
  cardText: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: '600',
    color: '#1B5E20',
  },

  /* BOTTOM NAV */
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 70,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#C8E6C9',
  },
});