import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Pressable,
  ScrollView,
  Animated,
  Easing,
} from 'react-native';
import { router } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Text, Button, Card, StatBar } from '../src/components/ui';
import { useGameStore } from '../src/store/gameStore';
import { useAppStore } from '../src/store/settingsStore';
import { colors, spacing, borderRadius } from '../src/theme';
import type { Gender, Stats, StatKey } from '../src/types/game';

// ---- Hardcoded name lists (to be replaced by names.ts later) ----

const MALE_FIRST_NAMES = [
  'James', 'Oliver', 'Liam', 'Noah', 'Ethan',
  'Lucas', 'Mason', 'Logan', 'Alexander', 'Sebastian',
  'Benjamin', 'Henry', 'Jack', 'Daniel', 'Owen',
  'Samuel', 'William', 'Leo', 'Theodore', 'Caleb',
];

const FEMALE_FIRST_NAMES = [
  'Emma', 'Olivia', 'Ava', 'Sophia', 'Isabella',
  'Charlotte', 'Amelia', 'Mia', 'Harper', 'Evelyn',
  'Luna', 'Ella', 'Scarlett', 'Grace', 'Lily',
  'Aria', 'Zoe', 'Penelope', 'Nora', 'Violet',
];

const LAST_NAMES = [
  'Smith', 'Johnson', 'Williams', 'Brown', 'Jones',
  'Garcia', 'Miller', 'Davis', 'Martinez', 'Anderson',
  'Taylor', 'Thomas', 'Moore', 'Jackson', 'Martin',
  'Lee', 'Walker', 'Hall', 'Young', 'King',
];

// ---- Helpers ----

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomFirstName(gender: Gender): string {
  return gender === 'male' ? pickRandom(MALE_FIRST_NAMES) : pickRandom(FEMALE_FIRST_NAMES);
}

function randomLastName(): string {
  return pickRandom(LAST_NAMES);
}

function randomGender(): Gender {
  return Math.random() < 0.5 ? 'male' : 'female';
}

function generatePreviewStats(): Stats {
  return {
    health: 80 + Math.floor(Math.random() * 21),
    happiness: 70 + Math.floor(Math.random() * 31),
    smarts: 20 + Math.floor(Math.random() * 61),
    looks: 20 + Math.floor(Math.random() * 61),
  };
}

function getCharacterEmoji(gender: Gender): string {
  return gender === 'male' ? '\u{1F476}' : '\u{1F476}\u200D\u2640\uFE0F';
}

// ---- Component ----

export default function CharacterCreationScreen() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState<Gender>('male');
  const [firstNameIsRandom, setFirstNameIsRandom] = useState(false);
  const [previewStats, setPreviewStats] = useState<Stats>(generatePreviewStats);

  const insets = useSafeAreaInsets();
  const newGame = useGameStore((s) => s.newGame);
  const setHasStartedGame = useAppStore((s) => s.setHasStartedGame);

  const canStart = firstName.trim().length > 0 && lastName.trim().length > 0;

  // ---- Animation values ----

  // Sequential fade-in for form fields
  const titleFade = useRef(new Animated.Value(0)).current;
  const taglineFade = useRef(new Animated.Value(0)).current;
  const firstNameFade = useRef(new Animated.Value(0)).current;
  const lastNameFade = useRef(new Animated.Value(0)).current;
  const genderFade = useRef(new Animated.Value(0)).current;
  const previewFade = useRef(new Animated.Value(0)).current;
  const buttonsFade = useRef(new Animated.Value(0)).current;

  // Gender scale animation
  const maleScale = useRef(new Animated.Value(1)).current;
  const femaleScale = useRef(new Animated.Value(1)).current;

  // Start button pulse
  const pulseAnim = useRef(new Animated.Value(1)).current;
  const pulseRef = useRef<Animated.CompositeAnimation | null>(null);

  // ---- Mount animation ----

  useEffect(() => {
    const stagger = 80;
    const duration = 400;
    const easing = Easing.out(Easing.cubic);

    Animated.stagger(stagger, [
      Animated.timing(titleFade, { toValue: 1, duration, easing, useNativeDriver: true }),
      Animated.timing(taglineFade, { toValue: 1, duration, easing, useNativeDriver: true }),
      Animated.timing(firstNameFade, { toValue: 1, duration, easing, useNativeDriver: true }),
      Animated.timing(lastNameFade, { toValue: 1, duration, easing, useNativeDriver: true }),
      Animated.timing(genderFade, { toValue: 1, duration, easing, useNativeDriver: true }),
      Animated.timing(previewFade, { toValue: 1, duration, easing, useNativeDriver: true }),
      Animated.timing(buttonsFade, { toValue: 1, duration, easing, useNativeDriver: true }),
    ]).start();
  }, []);

  // ---- Pulse animation when form is valid ----

  useEffect(() => {
    if (canStart) {
      pulseRef.current = Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, {
            toValue: 1.03,
            duration: 1200,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
          Animated.timing(pulseAnim, {
            toValue: 1,
            duration: 1200,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
        ]),
      );
      pulseRef.current.start();
    } else {
      pulseRef.current?.stop();
      pulseAnim.setValue(1);
    }
    return () => {
      pulseRef.current?.stop();
    };
  }, [canStart]);

  // ---- Gender selection with scale animation ----

  const handleGenderSelect = useCallback(
    (selected: Gender) => {
      const scaleTarget = selected === 'male' ? maleScale : femaleScale;
      Animated.sequence([
        Animated.timing(scaleTarget, {
          toValue: 0.93,
          duration: 80,
          useNativeDriver: true,
        }),
        Animated.spring(scaleTarget, {
          toValue: 1,
          friction: 4,
          tension: 200,
          useNativeDriver: true,
        }),
      ]).start();

      const previousGender = gender;
      setGender(selected);

      // Re-randomize first name if it was randomly generated and gender changed
      if (firstNameIsRandom && selected !== previousGender) {
        setFirstName(randomFirstName(selected));
      }
    },
    [gender, firstNameIsRandom, maleScale, femaleScale],
  );

  // ---- Random name handlers ----

  const handleRandomFirstName = useCallback(() => {
    setFirstName(randomFirstName(gender));
    setFirstNameIsRandom(true);
  }, [gender]);

  const handleRandomLastName = useCallback(() => {
    setLastName(randomLastName());
  }, []);

  const handleFirstNameChange = useCallback((text: string) => {
    setFirstName(text);
    setFirstNameIsRandom(false);
  }, []);

  // ---- Start life ----

  const handleStart = useCallback(() => {
    if (!canStart) return;
    newGame(firstName.trim(), lastName.trim(), gender);
    setHasStartedGame(true);
    router.replace('/(tabs)');
  }, [canStart, firstName, lastName, gender, newGame, setHasStartedGame]);

  // ---- Random life ----

  const handleRandomLife = useCallback(() => {
    const g = randomGender();
    const fn = randomFirstName(g);
    const ln = randomLastName();
    newGame(fn, ln, g);
    setHasStartedGame(true);
    router.replace('/(tabs)');
  }, [newGame, setHasStartedGame]);

  // ---- Render helpers ----

  const fadeSlide = (animValue: Animated.Value) => ({
    opacity: animValue,
    transform: [
      {
        translateY: animValue.interpolate({
          inputRange: [0, 1],
          outputRange: [16, 0],
        }),
      },
    ],
  });

  const statKeys: StatKey[] = ['health', 'happiness', 'smarts', 'looks'];
  const fullName = [firstName.trim(), lastName.trim()].filter(Boolean).join(' ') || 'Your Character';

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.scrollContent}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >
      <View style={[styles.container, { paddingTop: insets.top }]}>
        {/* Header */}
        <Animated.View style={[styles.header, fadeSlide(titleFade)]}>
          <Text variant="largeTitle" align="center">
            ThisLife
          </Text>
        </Animated.View>
        <Animated.View style={fadeSlide(taglineFade)}>
          <Text variant="body" color={colors.secondaryText} align="center">
            Every choice writes your story
          </Text>
        </Animated.View>

        {/* Form */}
        <View style={styles.form}>
          {/* First Name */}
          <Animated.View style={[styles.field, fadeSlide(firstNameFade)]}>
            <Text variant="footnote" color={colors.secondaryText}>
              FIRST NAME
            </Text>
            <View style={styles.inputRow}>
              <TextInput
                style={styles.input}
                value={firstName}
                onChangeText={handleFirstNameChange}
                placeholder="Enter first name"
                placeholderTextColor={colors.tertiaryText}
                autoCapitalize="words"
                autoCorrect={false}
              />
              <Pressable
                onPress={handleRandomFirstName}
                style={({ pressed }) => [
                  styles.diceButton,
                  pressed && styles.diceButtonPressed,
                ]}
                hitSlop={8}
              >
                <Text variant="headline" align="center">
                  {'\u{1F3B2}'}
                </Text>
              </Pressable>
            </View>
          </Animated.View>

          {/* Last Name */}
          <Animated.View style={[styles.field, fadeSlide(lastNameFade)]}>
            <Text variant="footnote" color={colors.secondaryText}>
              LAST NAME
            </Text>
            <View style={styles.inputRow}>
              <TextInput
                style={styles.input}
                value={lastName}
                onChangeText={setLastName}
                placeholder="Enter last name"
                placeholderTextColor={colors.tertiaryText}
                autoCapitalize="words"
                autoCorrect={false}
              />
              <Pressable
                onPress={handleRandomLastName}
                style={({ pressed }) => [
                  styles.diceButton,
                  pressed && styles.diceButtonPressed,
                ]}
                hitSlop={8}
              >
                <Text variant="headline" align="center">
                  {'\u{1F3B2}'}
                </Text>
              </Pressable>
            </View>
          </Animated.View>

          {/* Gender */}
          <Animated.View style={[styles.field, fadeSlide(genderFade)]}>
            <Text variant="footnote" color={colors.secondaryText}>
              GENDER
            </Text>
            <View style={styles.genderRow}>
              <Animated.View style={[styles.genderAnimWrap, { transform: [{ scale: maleScale }] }]}>
                <Pressable
                  style={[
                    styles.genderOption,
                    gender === 'male' && styles.genderSelected,
                  ]}
                  onPress={() => handleGenderSelect('male')}
                >
                  <Text
                    variant="headline"
                    color={gender === 'male' ? colors.accent : colors.secondaryText}
                  >
                    {'\u2642'} Male
                  </Text>
                </Pressable>
              </Animated.View>
              <Animated.View style={[styles.genderAnimWrap, { transform: [{ scale: femaleScale }] }]}>
                <Pressable
                  style={[
                    styles.genderOption,
                    gender === 'female' && styles.genderSelected,
                  ]}
                  onPress={() => handleGenderSelect('female')}
                >
                  <Text
                    variant="headline"
                    color={gender === 'female' ? colors.accent : colors.secondaryText}
                  >
                    {'\u2640'} Female
                  </Text>
                </Pressable>
              </Animated.View>
            </View>
          </Animated.View>
        </View>

        {/* Character Preview */}
        <Animated.View style={fadeSlide(previewFade)}>
          <Card style={styles.previewCard}>
            <View style={styles.previewHeader}>
              <View style={styles.previewEmojiWrap}>
                <Text style={styles.previewEmoji}>
                  {getCharacterEmoji(gender)}
                </Text>
              </View>
              <View style={styles.previewInfo}>
                <Text variant="title3" numberOfLines={1}>
                  {fullName}
                </Text>
                <Text variant="subhead" color={colors.secondaryText}>
                  Newborn {'\u00B7'} {gender === 'male' ? 'Boy' : 'Girl'}
                </Text>
              </View>
            </View>
            <View style={styles.previewDivider} />
            <View style={styles.previewStats}>
              {statKeys.map((stat) => (
                <StatBar
                  key={stat}
                  stat={stat}
                  value={previewStats[stat]}
                  showLabel={true}
                  showValue={true}
                />
              ))}
            </View>
            <Text
              variant="caption1"
              color={colors.tertiaryText}
              align="center"
              style={styles.previewHint}
            >
              Stats are randomized at birth
            </Text>
          </Card>
        </Animated.View>

        {/* Buttons */}
        <Animated.View style={[styles.buttons, fadeSlide(buttonsFade)]}>
          <Animated.View style={{ transform: [{ scale: pulseAnim }] }}>
            <Button
              title="Start Life"
              onPress={handleStart}
              disabled={!canStart}
              size="large"
              style={styles.startButton}
            />
          </Animated.View>
          <Button
            title={"\u{1F3B2}  Random Life"}
            onPress={handleRandomLife}
            variant="ghost"
            size="large"
          />
        </Animated.View>
      </View>
    </ScrollView>
  );
}

// ---- Styles ----

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.xxl,
    gap: spacing.lg,
  },
  header: {
    marginBottom: -spacing.sm,
  },
  form: {
    gap: spacing.lg,
    marginTop: spacing.md,
  },
  field: {
    gap: spacing.sm,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  input: {
    flex: 1,
    backgroundColor: colors.surface,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    fontSize: 17,
    color: colors.primaryText,
  },
  diceButton: {
    width: 44,
    height: 44,
    backgroundColor: colors.surface,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  diceButtonPressed: {
    opacity: 0.6,
  },
  genderRow: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  genderAnimWrap: {
    flex: 1,
  },
  genderOption: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  genderSelected: {
    borderColor: colors.accent,
    backgroundColor: colors.accentLight,
  },
  previewCard: {
    marginTop: spacing.sm,
  },
  previewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  previewEmojiWrap: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  previewEmoji: {
    fontSize: 32,
    lineHeight: 40,
  },
  previewInfo: {
    flex: 1,
    gap: 2,
  },
  previewDivider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.separator,
    marginVertical: spacing.md,
  },
  previewStats: {
    gap: spacing.sm,
  },
  previewHint: {
    marginTop: spacing.md,
  },
  buttons: {
    gap: spacing.md,
    marginTop: spacing.sm,
  },
  startButton: {
    // Ensure the button fills width within the animated wrapper
  },
});
