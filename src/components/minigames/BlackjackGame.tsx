import React, { useState, useCallback, useRef } from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { Text, Button } from '../ui';
import { colors } from '../../theme/colors';
import { spacing, borderRadius } from '../../theme/spacing';
import { MiniGameResult, StatEffect } from '../../types/events';

// ============================================================
// ThisLife — Blackjack Mini-Game
// ============================================================

// --- Types ---

interface Card {
  suit: string;
  value: string;
  numericValue: number;
}

type GamePhase = 'betting' | 'playing' | 'dealerTurn' | 'result';

type Outcome = 'win' | 'blackjack' | 'lose' | 'push' | 'bust';

interface BlackjackGameProps {
  playerMoney: number;
  onComplete: (result: MiniGameResult & { moneyChange: number }) => void;
}

// --- Constants ---

const SUITS = ['♠', '♥', '♦', '♣'] as const;
const VALUES = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'] as const;
const BET_PRESETS = [100, 500, 1000, 5000] as const;

const CARD_WIDTH = 60;
const CARD_HEIGHT = 84;

// --- Helpers ---

function createDeck(): Card[] {
  const deck: Card[] = [];
  for (const suit of SUITS) {
    for (const value of VALUES) {
      let numericValue: number;
      if (value === 'A') {
        numericValue = 11;
      } else if (['J', 'Q', 'K'].includes(value)) {
        numericValue = 10;
      } else {
        numericValue = parseInt(value, 10);
      }
      deck.push({ suit, value, numericValue });
    }
  }
  return deck;
}

function shuffleDeck(deck: Card[]): Card[] {
  const shuffled = [...deck];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function calculateHandTotal(hand: Card[]): number {
  let total = 0;
  let aceCount = 0;

  for (const card of hand) {
    total += card.numericValue;
    if (card.value === 'A') {
      aceCount++;
    }
  }

  // Downgrade aces from 11 to 1 as needed
  while (total > 21 && aceCount > 0) {
    total -= 10;
    aceCount--;
  }

  return total;
}

function isRedSuit(suit: string): boolean {
  return suit === '♥' || suit === '♦';
}

function formatMoney(amount: number): string {
  if (amount >= 0) {
    return `$${amount.toLocaleString()}`;
  }
  return `-$${Math.abs(amount).toLocaleString()}`;
}

// --- Card Component ---

function CardView({ card, faceDown = false }: { card: Card; faceDown?: boolean }) {
  if (faceDown) {
    return (
      <View style={[styles.card, styles.cardFaceDown]}>
        <View style={styles.cardBackPattern} />
      </View>
    );
  }

  const isRed = isRedSuit(card.suit);

  return (
    <View style={styles.card}>
      <Text
        variant="caption1"
        color={isRed ? colors.danger : colors.primaryText}
        style={styles.cardCornerTop}
      >
        {card.value}
      </Text>
      <Text
        variant="title2"
        color={isRed ? colors.danger : colors.primaryText}
        align="center"
      >
        {card.suit}
      </Text>
      <Text
        variant="caption1"
        color={isRed ? colors.danger : colors.primaryText}
        style={styles.cardCornerBottom}
      >
        {card.value}
      </Text>
    </View>
  );
}

// --- Hand Component ---

function HandView({
  cards,
  hideSecond = false,
  label,
  total,
  showTotal = true,
}: {
  cards: Card[];
  hideSecond?: boolean;
  label: string;
  total: number;
  showTotal?: boolean;
}) {
  return (
    <View style={styles.handContainer}>
      <View style={styles.handHeader}>
        <Text variant="subhead" color={colors.secondaryText}>
          {label}
        </Text>
        {showTotal && cards.length > 0 && (
          <Text variant="headline" color={colors.primaryText}>
            {hideSecond ? '?' : total}
          </Text>
        )}
      </View>
      <View style={styles.cardRow}>
        {cards.map((card, index) => (
          <View key={`${card.value}${card.suit}-${index}`} style={index > 0 ? styles.cardOverlap : undefined}>
            <CardView card={card} faceDown={hideSecond && index === 1} />
          </View>
        ))}
      </View>
    </View>
  );
}

// ============================================================
// Main Component
// ============================================================

export function BlackjackGame({ playerMoney, onComplete }: BlackjackGameProps) {
  const [phase, setPhase] = useState<GamePhase>('betting');
  const [bet, setBet] = useState(0);
  const [playerHand, setPlayerHand] = useState<Card[]>([]);
  const [dealerHand, setDealerHand] = useState<Card[]>([]);
  const [outcome, setOutcome] = useState<Outcome | null>(null);
  const [moneyChange, setMoneyChange] = useState(0);
  const [currentMoney, setCurrentMoney] = useState(playerMoney);

  // Mutable deck ref so we can draw without re-render races
  const deckRef = useRef<Card[]>([]);

  const drawCard = useCallback((): Card => {
    const card = deckRef.current.pop();
    if (!card) {
      // Reshuffle if deck runs out (extremely rare)
      const newDeck = shuffleDeck(createDeck());
      deckRef.current = newDeck;
      return deckRef.current.pop()!;
    }
    return card;
  }, []);

  // --- Determine outcome ---
  const resolveGame = useCallback(
    (pHand: Card[], dHand: Card[], currentBet: number) => {
      const playerTotal = calculateHandTotal(pHand);
      const dealerTotal = calculateHandTotal(dHand);
      const playerBJ = pHand.length === 2 && playerTotal === 21;
      const dealerBJ = dHand.length === 2 && dealerTotal === 21;

      let result: Outcome;
      let change: number;

      if (playerBJ && dealerBJ) {
        result = 'push';
        change = 0;
      } else if (playerBJ) {
        result = 'blackjack';
        change = Math.floor(currentBet * 1.5);
      } else if (dealerBJ) {
        result = 'lose';
        change = -currentBet;
      } else if (playerTotal > 21) {
        result = 'bust';
        change = -currentBet;
      } else if (dealerTotal > 21) {
        result = 'win';
        change = currentBet;
      } else if (playerTotal > dealerTotal) {
        result = 'win';
        change = currentBet;
      } else if (dealerTotal > playerTotal) {
        result = 'lose';
        change = -currentBet;
      } else {
        result = 'push';
        change = 0;
      }

      setOutcome(result);
      setMoneyChange(change);
      setCurrentMoney((prev) => prev + change);
      setPhase('result');
    },
    [],
  );

  // --- Dealer plays ---
  const playDealer = useCallback(
    (dHand: Card[], pHand: Card[], currentBet: number) => {
      const newDealerHand = [...dHand];

      // Dealer hits on 16 and below, stands on all 17+
      while (calculateHandTotal(newDealerHand) <= 16) {
        newDealerHand.push(drawCard());
      }

      setDealerHand(newDealerHand);
      resolveGame(pHand, newDealerHand, currentBet);
    },
    [drawCard, resolveGame],
  );

  // --- Actions ---

  const handleBet = useCallback(
    (amount: number) => {
      const newDeck = shuffleDeck(createDeck());
      deckRef.current = newDeck;

      const pCard1 = deckRef.current.pop()!;
      const dCard1 = deckRef.current.pop()!;
      const pCard2 = deckRef.current.pop()!;
      const dCard2 = deckRef.current.pop()!;

      const pHand = [pCard1, pCard2];
      const dHand = [dCard1, dCard2];

      setBet(amount);
      setPlayerHand(pHand);
      setDealerHand(dHand);

      // Check for immediate blackjacks
      const playerTotal = calculateHandTotal(pHand);
      const dealerTotal = calculateHandTotal(dHand);
      const playerBJ = playerTotal === 21;
      const dealerBJ = dealerTotal === 21;

      if (playerBJ || dealerBJ) {
        // Resolve immediately
        resolveGame(pHand, dHand, amount);
      } else {
        setPhase('playing');
      }
    },
    [resolveGame],
  );

  const handleHit = useCallback(() => {
    const card = drawCard();
    const newHand = [...playerHand, card];
    setPlayerHand(newHand);

    const total = calculateHandTotal(newHand);
    if (total > 21) {
      // Bust
      resolveGame(newHand, dealerHand, bet);
    } else if (total === 21) {
      // Auto-stand on 21
      setPhase('dealerTurn');
      playDealer(dealerHand, newHand, bet);
    }
  }, [playerHand, dealerHand, bet, drawCard, resolveGame, playDealer]);

  const handleStand = useCallback(() => {
    setPhase('dealerTurn');
    playDealer(dealerHand, playerHand, bet);
  }, [dealerHand, playerHand, bet, playDealer]);

  const handleDoubleDown = useCallback(() => {
    const doubleBet = bet * 2;
    setBet(doubleBet);

    const card = drawCard();
    const newHand = [...playerHand, card];
    setPlayerHand(newHand);

    const total = calculateHandTotal(newHand);
    if (total > 21) {
      resolveGame(newHand, dealerHand, doubleBet);
    } else {
      setPhase('dealerTurn');
      playDealer(dealerHand, newHand, doubleBet);
    }
  }, [bet, playerHand, dealerHand, drawCard, resolveGame, playDealer]);

  const handlePlayAgain = useCallback(() => {
    setPhase('betting');
    setBet(0);
    setPlayerHand([]);
    setDealerHand([]);
    setOutcome(null);
    setMoneyChange(0);
  }, []);

  const handleLeave = useCallback(() => {
    const totalChange = currentMoney - playerMoney;
    const effects: StatEffect[] = [];
    if (totalChange !== 0) {
      effects.push({ type: 'money', value: totalChange, operation: 'add' });
    }

    onComplete({
      type: 'blackjack',
      success: totalChange >= 0,
      score: currentMoney,
      effects,
      moneyChange: totalChange,
    });
  }, [currentMoney, playerMoney, onComplete]);

  // --- Derived values ---
  const playerTotal = calculateHandTotal(playerHand);
  const dealerTotal = calculateHandTotal(dealerHand);
  const isPlaying = phase === 'playing';
  const showDealerHole = phase === 'result' || phase === 'dealerTurn';
  const canDoubleDown = isPlaying && playerHand.length === 2 && currentMoney >= bet * 2;

  // --- Render: Betting Phase ---

  if (phase === 'betting') {
    const availablePresets = BET_PRESETS.filter((p) => p <= currentMoney);
    const canAllIn = currentMoney > 0;

    return (
      <View style={styles.container}>
        <View style={styles.topSection}>
          <Text variant="title2" align="center" color={colors.primaryText}>
            Blackjack
          </Text>
          <Text
            variant="tabular"
            align="center"
            color={colors.money}
            style={styles.moneyLabel}
          >
            {formatMoney(currentMoney)}
          </Text>
        </View>

        <View style={styles.betSection}>
          <Text variant="headline" align="center" color={colors.secondaryText}>
            Place Your Bet
          </Text>
          <View style={styles.betGrid}>
            {availablePresets.map((preset) => (
              <Pressable
                key={preset}
                style={({ pressed }) => [
                  styles.betChip,
                  pressed && styles.betChipPressed,
                ]}
                onPress={() => handleBet(preset)}
              >
                <Text variant="headline" color="#FFFFFF" align="center">
                  ${preset.toLocaleString()}
                </Text>
              </Pressable>
            ))}
            {canAllIn && (
              <Pressable
                style={({ pressed }) => [
                  styles.betChip,
                  styles.betChipAllIn,
                  pressed && styles.betChipPressed,
                ]}
                onPress={() => handleBet(currentMoney)}
              >
                <Text variant="headline" color="#FFFFFF" align="center">
                  All In
                </Text>
                <Text variant="caption1" color="rgba(255,255,255,0.7)" align="center">
                  {formatMoney(currentMoney)}
                </Text>
              </Pressable>
            )}
          </View>
        </View>

        <View style={styles.bottomActions}>
          <Button title="Leave Table" onPress={handleLeave} variant="ghost" />
        </View>
      </View>
    );
  }

  // --- Render: Result Phase ---

  if (phase === 'result') {
    const isWin = outcome === 'win' || outcome === 'blackjack';
    const isPush = outcome === 'push';

    const resultLabel =
      outcome === 'blackjack'
        ? 'Blackjack!'
        : outcome === 'win'
          ? 'You Win'
          : outcome === 'bust'
            ? 'Bust'
            : outcome === 'push'
              ? 'Push'
              : 'Dealer Wins';

    const resultColor = isWin
      ? colors.success
      : isPush
        ? colors.secondaryText
        : colors.danger;

    return (
      <View style={styles.container}>
        {/* Dealer */}
        <HandView
          cards={dealerHand}
          label="Dealer"
          total={dealerTotal}
        />

        {/* Result banner */}
        <View style={styles.resultBanner}>
          <Text variant="title1" align="center" color={resultColor}>
            {resultLabel}
          </Text>
          <Text
            variant="tabularLarge"
            align="center"
            color={moneyChange >= 0 ? colors.success : colors.danger}
            style={styles.moneyResult}
          >
            {moneyChange > 0 ? '+' : ''}{formatMoney(moneyChange)}
          </Text>
          <Text variant="subhead" align="center" color={colors.secondaryText}>
            Balance: {formatMoney(currentMoney)}
          </Text>
        </View>

        {/* Player */}
        <HandView
          cards={playerHand}
          label="You"
          total={playerTotal}
        />

        {/* Actions */}
        <View style={styles.resultActions}>
          {currentMoney > 0 && (
            <Button
              title="Play Again"
              onPress={handlePlayAgain}
              variant="primary"
              size="large"
              style={styles.resultButton}
            />
          )}
          <Button
            title="Leave Table"
            onPress={handleLeave}
            variant={currentMoney > 0 ? 'secondary' : 'primary'}
            size="large"
            style={styles.resultButton}
          />
        </View>
      </View>
    );
  }

  // --- Render: Playing / Dealer Turn ---

  return (
    <View style={styles.container}>
      {/* Dealer hand */}
      <HandView
        cards={dealerHand}
        hideSecond={!showDealerHole}
        label="Dealer"
        total={dealerTotal}
        showTotal={showDealerHole}
      />

      {/* Game info */}
      <View style={styles.gameInfo}>
        <Text variant="subhead" color={colors.secondaryText} align="center">
          Bet: {formatMoney(bet)}
        </Text>
      </View>

      {/* Player hand */}
      <HandView
        cards={playerHand}
        label="You"
        total={playerTotal}
      />

      {/* Action buttons */}
      {isPlaying && (
        <View style={styles.actionRow}>
          <Button
            title="Hit"
            onPress={handleHit}
            variant="primary"
            size="large"
            style={styles.actionButton}
          />
          <Button
            title="Stand"
            onPress={handleStand}
            variant="secondary"
            size="large"
            style={styles.actionButton}
          />
          {canDoubleDown && (
            <Button
              title="Double"
              onPress={handleDoubleDown}
              variant="ghost"
              size="large"
              style={styles.actionButton}
            />
          )}
        </View>
      )}

      {phase === 'dealerTurn' && (
        <View style={styles.actionRow}>
          <Text variant="subhead" color={colors.secondaryText}>
            Dealer is playing...
          </Text>
        </View>
      )}
    </View>
  );
}

// ============================================================
// Styles
// ============================================================

const FELT_GREEN = '#1B5E20';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: FELT_GREEN,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.lg,
    justifyContent: 'space-between',
  },

  // -- Top section (betting) --
  topSection: {
    alignItems: 'center',
    paddingTop: spacing.xxl,
  },
  moneyLabel: {
    marginTop: spacing.sm,
  },

  // -- Betting --
  betSection: {
    alignItems: 'center',
    gap: spacing.lg,
  },
  betGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: spacing.sm,
    paddingHorizontal: spacing.md,
  },
  betChip: {
    backgroundColor: colors.accent,
    borderRadius: borderRadius.xl,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    minWidth: 100,
    alignItems: 'center',
  },
  betChipAllIn: {
    backgroundColor: colors.danger,
  },
  betChipPressed: {
    opacity: 0.7,
  },

  // -- Hand --
  handContainer: {
    alignItems: 'center',
    gap: spacing.sm,
  },
  handHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    minHeight: CARD_HEIGHT + spacing.sm,
  },
  cardOverlap: {
    marginLeft: -20,
  },

  // -- Card --
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    backgroundColor: '#FFFFFF',
    borderRadius: borderRadius.sm,
    borderWidth: 1,
    borderColor: colors.separator,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  cardFaceDown: {
    backgroundColor: colors.accent,
    borderColor: '#005BB5',
    overflow: 'hidden',
  },
  cardBackPattern: {
    width: CARD_WIDTH - 8,
    height: CARD_HEIGHT - 8,
    borderRadius: borderRadius.sm - 2,
    borderWidth: 1.5,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  cardCornerTop: {
    position: 'absolute',
    top: 4,
    left: 6,
  },
  cardCornerBottom: {
    position: 'absolute',
    bottom: 4,
    right: 6,
    transform: [{ rotate: '180deg' }],
  },

  // -- Game info --
  gameInfo: {
    alignItems: 'center',
    paddingVertical: spacing.xs,
  },

  // -- Actions --
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing.sm,
    paddingTop: spacing.md,
  },
  actionButton: {
    flex: 1,
    maxWidth: 140,
  },
  bottomActions: {
    alignItems: 'center',
    paddingBottom: spacing.md,
  },

  // -- Result --
  resultBanner: {
    alignItems: 'center',
    paddingVertical: spacing.md,
    gap: spacing.xs,
  },
  moneyResult: {
    marginTop: spacing.xs,
  },
  resultActions: {
    gap: spacing.sm,
    paddingTop: spacing.md,
  },
  resultButton: {
    width: '100%',
  },
});

export default BlackjackGame;
