import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { ScrollView, Text, View } from '@/components/Themed';
import TodoListItem from '@/components/TodoList/TodoListItem';
import { colors } from '@/constants/Colors';

export default function TabOneScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{alignItems: 'flex-start'}}>
      <View style={{width: '100%'}}>
      <TodoListItem title='Read Books' icon='📚' time='9:00 - 12:00'/>
      <TodoListItem title='Read Books' icon='🙂' time='9:00 - 12:00'/>
      <TodoListItem title='Read Books' icon='📚' time='9:00 - 12:00'/>
      <TodoListItem title='Read Books' icon='📚' time='9:00 - 12:00'/>
      <TodoListItem title='Read Books' icon='📚' time='9:00 - 12:00'/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
