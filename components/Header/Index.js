
import { View, Text} from 'react-native';
import styles from './Style';

export default function App() {
  return (
    <View style={styles.header}>
        <Text style={styles.titlePrimary}>Break <Text style={styles.titleSecondary}>Personal</Text></Text>
        
    </View>
  );
}


