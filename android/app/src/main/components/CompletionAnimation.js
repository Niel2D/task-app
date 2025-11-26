import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet } from 'react-native';

const CompletionAnimation = ({ visible, onComplete }) => {
  const sparkles = useRef([...Array(6)].map(() => new Animated.Value(0))).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();

      const animations = sparkles.map((spk, index) =>
        Animated.sequence([
          Animated.delay(index * 50),
          Animated.timing(spk, {
            toValue: 1,
            duration: 600,
            useNativeDriver: true,
          }),
        ]),
      );

      Animated.parallel(animations).start(() =>
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start(() => {
          sparkles.forEach(s => s.setValue(0));
          onComplete && onComplete();
        }),
      );
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      {sparkles.map((spk, index) => {
        const angle = (index * 60) * (Math.PI / 180);
        const distance = spk.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 80],
        });

        return (
          <Animated.View
            key={index}
            style={[
              styles.sparkle,
              {
                transform: [
                  {
                    translateX: distance.interpolate({
                      inputRange: [0, 80],
                      outputRange: [0, Math.cos(angle) * 80],
                    }),
                  },
                  {
                    translateY: distance.interpolate({
                      inputRange: [0, 80],
                      outputRange: [0, Math.sin(angle) * 80],
                    }),
                  },
                  {
                    scale: spk.interpolate({
                      inputRange: [0, 0.5, 1],
                      outputRange: [0, 1.2, 0],
                    }),
                  },
                ],
                opacity: spk.interpolate({
                  inputRange: [0, 0.5, 1],
                  outputRange: [0, 1, 0],
                }),
              },
            ]}
          />
        );
      })}

      <View style={styles.checkmark}>
        <Animated.Text
          style={[
            styles.checkmarkText,
            {
              transform: [
                {
                  scale: fadeAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.5, 1.2],
                  }),
                },
              ],
            },
          ]}>
          ✓
        </Animated.Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    zIndex: 1000,
  },
  sparkle: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#FFD700',
  },
  checkmark: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmarkText: {
    fontSize: 48,
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default CompletionAnimation;
