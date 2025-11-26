import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  Animated, 
  StyleSheet 
} from 'react-native';

const TaskItem = ({ task, onToggle, onDelete }) => {
  const scaleAnim = React.useRef(new Animated.Value(1)).current;

  const handlePress = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start(() => {
      onToggle(task.id);
    });
  };

  return (
    <Animated.View 
      style={[
        styles.container,
        { transform: [{ scale: scaleAnim }] },
      ]}
    >
      <TouchableOpacity
        style={[styles.taskContent, task.completed && styles.completedTask]}
        onPress={handlePress}
        activeOpacity={0.7}
      >
        <View style={styles.checkbox}>
          {task.completed && <Text style={styles.checkmark}>✓</Text>}
        </View>

        <View style={styles.textContainer}>
          <Text 
            style={[
              styles.title, 
              task.completed && styles.completedText
            ]}
          >
            {task.title}
          </Text>

            {task.description && (
              <Text 
                style={[
                  styles.description, 
                  task.completed && styles.completedText
                ]}
              >
                {task.description}
              </Text>
            )}
        </View>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.deleteButton}
        onPress={() => onDelete(task.id)}
      >
        <Text style={styles.deleteText}>🗑️</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#FFF',
        borderRadius: 12,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    taskContent: {
        flex: 1,
        flexDirection: 'row',
        padding: 16,
        alignItems: "center",
    },
    completedTask: {
        opacity: 0.6,
    },
    checkbox: {
        width: 28,
        height: 28,
        borderRadius: 14,
        borderWidth: 2,
        borderColor: '#4CAF50',
        marginRight: 12,
        justifyContent: 'center',
        alignItems: 'center',
    }
})