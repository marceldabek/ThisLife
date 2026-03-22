import React, { useState, useCallback, useMemo, useRef, useEffect } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Pressable,
  Animated,
  Dimensions,
} from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { Text, Button } from '../../src/components/ui';
import { colors, spacing, borderRadius } from '../../src/theme';
import { useGameStore } from '../../src/store/gameStore';
import {
  GameEvent,
  EventChoice,
  WeightedOutcome,
  StatEffect,
  EventCategory,
} from '../../src/types/events';
import { resolveChoice, getAvailableChoices } from '../../src/engine/events';

// ============================================================
// Event Registry
// ============================================================
// The game currently has no global event data file. This screen
// looks up events via a lightweight registry. Other modules can
// register events at import-time with `registerEvent`.
// ============================================================

const EVENT_REGISTRY = new Map<string, GameEvent>();

export function registerEvent(event: GameEvent) {
  EVENT_REGISTRY.set(event.id, event);
}

export function registerEvents(events: GameEvent[]) {
  for (const e of events) {
    EVENT_REGISTRY.set(e.id, e);
  }
}

export function getEventById(id: string): GameEvent | undefined {
  return EVENT_REGISTRY.get(id);
}

// ============================================================
// Category styling
// ============================================================

const CATEGORY_CONFIG: Record<EventCategory, { label: string; color: string; bg: string }> = {
  life: { label: 'Life', color: colors.accent, bg: colors.accentLight },
  social: { label: 'Social', color: '#AF52DE', bg: '#F5E6FF' },
  career: { label: 'Career', color: '#FF9500', bg: colors.warningLight },
  crime: { label: 'Crime', color: colors.danger, bg: colors.dangerLight },
  health: { label: 'Health', color: colors.health, bg: colors.dangerLight },
  relationship: { label: 'Relationship', color: '#FF2D55', bg: '#FFE5EC' },
  education: { label: 'Education', color: colors.smarts, bg: '#EEEEFF' },
};

// ============================================================
// Human-readable effect labels
// ============================================================

const STAT_LABELS: Record<string, string> = {
  health: 'Health',
  happiness: 'Happiness',
  smarts: 'Smarts',
  looks: 'Looks',
};

function formatEffectLabel(effect: StatEffect): { label: string; color: string } | null {
  const val = typeof effect.value === 'number' ? effect.value : 0;
  const sign = val >= 0 ? '+' : '';

  switch (effect.type) {
    case 'stat': {
      const statName = STAT_LABELS[effect.target ?? ''] ?? effect.target ?? 'Stat';
      return {
        label: `${sign}${val} ${statName}`,
        color: val >= 0 ? colors.success : colors.danger,
      };
    }
    case 'money': {
      const absVal = Math.abs(val);
      const formatted = absVal >= 1000 ? `$${(absVal / 1000).toFixed(absVal % 1000 === 0 ? 0 : 1)}k` : `$${absVal}`;
      return {
        label: val >= 0 ? `+${formatted}` : `-${formatted}`,
        color: val >= 0 ? colors.success : colors.danger,
      };
    }
    case 'reputation': {
      return {
        label: `${sign}${val} Reputation`,
        color: val >= 0 ? colors.success : colors.danger,
      };
    }
    case 'add_trait': {
      return {
        label: `Gained trait: ${effect.value}`,
        color: colors.accent,
      };
    }
    case 'remove_trait': {
      return {
        label: `Lost trait: ${effect.value}`,
        color: colors.secondaryText,
      };
    }
    case 'prison': {
      const seasons = typeof effect.value === 'number' ? effect.value : 1;
      return {
        label: `Prison: ${seasons} season${seasons !== 1 ? 's' : ''}`,
        color: colors.danger,
      };
    }
    case 'death': {
      return {
        label: 'Fatal',
        color: colors.danger,
      };
    }
    case 'relationship_closeness': {
      return {
        label: `${sign}${val} Closeness`,
        color: val >= 0 ? colors.success : colors.danger,
      };
    }
    case 'career_performance': {
      return {
        label: `${sign}${val} Performance`,
        color: val >= 0 ? colors.success : colors.danger,
      };
    }
    case 'career_satisfaction': {
      return {
        label: `${sign}${val} Satisfaction`,
        color: val >= 0 ? colors.success : colors.danger,
      };
    }
    default:
      return null;
  }
}

// ============================================================
// Animated effect badge
// ============================================================

function EffectBadge({ label, color, delay }: { label: string; color: string; delay: number }) {
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(8)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 350,
        delay,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: 350,
        delay,
        useNativeDriver: true,
      }),
    ]).start();
  }, [delay, opacity, translateY]);

  // Determine background: a tinted version of the badge color
  const isPositive = color === colors.success;
  const isNegative = color === colors.danger;
  const bgColor = isPositive
    ? colors.successLight
    : isNegative
      ? colors.dangerLight
      : colors.accentLight;

  return (
    <Animated.View
      style={[
        styles.effectBadge,
        { backgroundColor: bgColor, opacity, transform: [{ translateY }] },
      ]}
    >
      <Text variant="subhead" color={color} style={{ fontWeight: '600' }}>
        {label}
      </Text>
    </Animated.View>
  );
}

// ============================================================
// Choice card
// ============================================================

function ChoiceCard({
  choice,
  onPress,
  index,
}: {
  choice: EventChoice;
  onPress: () => void;
  index: number;
}) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        delay: index * 80,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        delay: index * 80,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim, slideAnim, index]);

  return (
    <Animated.View style={{ opacity: fadeAnim, transform: [{ translateY: slideAnim }] }}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.choiceCard,
          pressed && styles.choiceCardPressed,
        ]}
      >
        <Text variant="headline" color={colors.primaryText}>
          {choice.text}
        </Text>
        {choice.hint ? (
          <Text
            variant="subhead"
            color={colors.secondaryText}
            style={{ marginTop: spacing.xs }}
          >
            {choice.hint}
          </Text>
        ) : null}
      </Pressable>
    </Animated.View>
  );
}

// ============================================================
// Main screen
// ============================================================

type Phase = 'choosing' | 'outcome';

export default function EventScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  // Store access
  const currentEventId = useGameStore((s) => s.currentEventId);
  const character = useGameStore((s) => s.character);
  const gameState = useGameStore((s) => s);
  const setCurrentEvent = useGameStore((s) => s.setCurrentEvent);
  const addEventToLog = useGameStore((s) => s.addEventToLog);
  const markEventFired = useGameStore((s) => s.markEventFired);
  const applyEffects = useGameStore((s) => s.applyEffects);

  // Resolve event ID — route param takes priority, fallback to store
  const eventId = id ?? currentEventId;

  // Look up event from registry
  const event = useMemo(() => {
    if (!eventId) return null;
    return getEventById(eventId) ?? null;
  }, [eventId]);

  // Available choices for the current game state
  const availableChoices = useMemo(() => {
    if (!event) return [];
    return getAvailableChoices(event, gameState);
  }, [event, gameState]);

  // Local state
  const [phase, setPhase] = useState<Phase>('choosing');
  const [selectedChoice, setSelectedChoice] = useState<EventChoice | null>(null);
  const [resolvedOutcome, setResolvedOutcome] = useState<WeightedOutcome | null>(null);

  // Animations
  const choicesFade = useRef(new Animated.Value(1)).current;
  const outcomeFade = useRef(new Animated.Value(0)).current;
  const outcomeSlide = useRef(new Animated.Value(30)).current;

  // Handle choice selection
  const handleChoicePress = useCallback(
    (choice: EventChoice) => {
      // Resolve the outcome
      const outcome = resolveChoice(choice);
      setSelectedChoice(choice);
      setResolvedOutcome(outcome);

      // Animate: fade out choices, then fade in outcome
      Animated.timing(choicesFade, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }).start(() => {
        setPhase('outcome');

        Animated.parallel([
          Animated.timing(outcomeFade, {
            toValue: 1,
            duration: 350,
            useNativeDriver: true,
          }),
          Animated.timing(outcomeSlide, {
            toValue: 0,
            duration: 350,
            useNativeDriver: true,
          }),
        ]).start();
      });
    },
    [choicesFade, outcomeFade, outcomeSlide],
  );

  // Handle dismiss
  const handleContinue = useCallback(() => {
    if (!event || !selectedChoice || !resolvedOutcome) {
      router.back();
      return;
    }

    // Build effects record for the log
    const effectsRecord: Record<string, number> = {};
    for (const effect of resolvedOutcome.effects) {
      if (typeof effect.value === 'number') {
        const key = effect.type === 'stat' ? (effect.target ?? effect.type) : effect.type;
        effectsRecord[key] = (effectsRecord[key] ?? 0) + effect.value;
      }
    }

    // Add to event log
    addEventToLog({
      age: character.age,
      season: character.season,
      title: event.title,
      description: resolvedOutcome.description,
      choiceMade: selectedChoice.text,
      outcome: resolvedOutcome.description,
      effects: Object.keys(effectsRecord).length > 0 ? effectsRecord : undefined,
    });

    // Mark as fired if one-time
    if (event.oneTime) {
      markEventFired(event.id);
    }

    // Apply effects via store
    applyEffects(resolvedOutcome.effects);

    // Clear current event
    setCurrentEvent(null);

    // Navigate back
    router.back();
  }, [
    event,
    selectedChoice,
    resolvedOutcome,
    character,
    addEventToLog,
    markEventFired,
    applyEffects,
    setCurrentEvent,
  ]);

  // ---- Fallback: no event found ----
  if (!event) {
    return (
      <View style={styles.container}>
        <View style={styles.sheet}>
          <View style={styles.handle} />
          <View style={styles.content}>
            <Text variant="title2" align="center">
              No Event
            </Text>
            <Text variant="body" color={colors.secondaryText} align="center">
              This event could not be found.
            </Text>
            <Button
              title="Go Back"
              onPress={() => router.back()}
              variant="secondary"
              size="large"
            />
          </View>
        </View>
      </View>
    );
  }

  // ---- Category badge ----
  const categoryConfig = CATEGORY_CONFIG[event.category];

  // ---- Effect labels for outcome ----
  const effectLabels = resolvedOutcome
    ? resolvedOutcome.effects
        .map((e) => formatEffectLabel(e))
        .filter((e): e is { label: string; color: string } => e !== null)
    : [];

  return (
    <View style={styles.container}>
      <View style={styles.sheet}>
        {/* Drag handle */}
        <View style={styles.handle} />

        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          {/* Category badge */}
          <View style={styles.categoryRow}>
            <View style={[styles.categoryBadge, { backgroundColor: categoryConfig.bg }]}>
              <Text
                variant="caption1"
                color={categoryConfig.color}
                style={{ fontWeight: '600', textTransform: 'uppercase', letterSpacing: 0.5 }}
              >
                {categoryConfig.label}
              </Text>
            </View>
          </View>

          {/* Event title */}
          <Text variant="title1" align="center" style={{ marginTop: spacing.md }}>
            {event.title}
          </Text>

          {/* Event description */}
          <Text
            variant="body"
            color={colors.secondaryText}
            align="center"
            style={{ marginTop: spacing.sm, lineHeight: 24 }}
          >
            {event.description}
          </Text>

          {/* Divider */}
          <View style={styles.divider} />

          {/* Phase: Choosing */}
          {phase === 'choosing' && (
            <Animated.View style={[styles.choicesContainer, { opacity: choicesFade }]}>
              {availableChoices.length > 0 ? (
                availableChoices.map((choice, index) => (
                  <ChoiceCard
                    key={choice.id}
                    choice={choice}
                    index={index}
                    onPress={() => handleChoicePress(choice)}
                  />
                ))
              ) : (
                <View style={styles.noChoices}>
                  <Text variant="body" color={colors.tertiaryText} align="center">
                    No available choices.
                  </Text>
                  <Button
                    title="Continue"
                    onPress={() => router.back()}
                    variant="primary"
                    size="large"
                    style={{ marginTop: spacing.lg }}
                  />
                </View>
              )}
            </Animated.View>
          )}

          {/* Phase: Outcome */}
          {phase === 'outcome' && resolvedOutcome && (
            <Animated.View
              style={[
                styles.outcomeContainer,
                {
                  opacity: outcomeFade,
                  transform: [{ translateY: outcomeSlide }],
                },
              ]}
            >
              {/* Outcome description */}
              <Text
                variant="body"
                color={colors.primaryText}
                align="center"
                style={{ lineHeight: 24 }}
              >
                {resolvedOutcome.description}
              </Text>

              {/* Effect badges */}
              {effectLabels.length > 0 && (
                <View style={styles.effectsRow}>
                  {effectLabels.map((effect, index) => (
                    <EffectBadge
                      key={`${effect.label}-${index}`}
                      label={effect.label}
                      color={effect.color}
                      delay={index * 120}
                    />
                  ))}
                </View>
              )}

              {/* Continue button */}
              <Button
                title="Continue"
                onPress={handleContinue}
                variant="primary"
                size="large"
                style={{ marginTop: spacing.xl }}
              />
            </Animated.View>
          )}
        </ScrollView>
      </View>
    </View>
  );
}

// ============================================================
// Styles
// ============================================================

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.overlay,
    justifyContent: 'flex-end',
  },
  sheet: {
    backgroundColor: colors.background,
    borderTopLeftRadius: borderRadius.xl,
    borderTopRightRadius: borderRadius.xl,
    maxHeight: SCREEN_HEIGHT * 0.88,
    minHeight: SCREEN_HEIGHT * 0.4,
    paddingBottom: spacing.xxl,
  },
  handle: {
    width: 36,
    height: 5,
    borderRadius: borderRadius.full,
    backgroundColor: colors.separator,
    alignSelf: 'center',
    marginTop: spacing.sm,
    marginBottom: spacing.xs,
  },
  scrollView: {
    flexGrow: 0,
  },
  scrollContent: {
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.md,
    paddingBottom: spacing.xl,
  },
  categoryRow: {
    alignItems: 'center',
  },
  categoryBadge: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs + 2,
    borderRadius: borderRadius.full,
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.separator,
    marginVertical: spacing.lg,
  },
  choicesContainer: {
    gap: spacing.sm,
  },
  choiceCard: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.md,
    paddingVertical: spacing.md + 4,
    paddingHorizontal: spacing.lg,
  },
  choiceCardPressed: {
    backgroundColor: colors.separator,
  },
  noChoices: {
    paddingVertical: spacing.xl,
  },
  outcomeContainer: {
    alignItems: 'center',
    paddingVertical: spacing.md,
  },
  effectsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: spacing.sm,
    marginTop: spacing.lg,
  },
  effectBadge: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs + 2,
    borderRadius: borderRadius.full,
  },
});
