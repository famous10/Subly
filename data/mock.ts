// data/mock.ts — Static mock data for Recurry app

import { colors } from '../styles/global';

// ── Types ──────────────────────────────────────────────────────────────────────
export interface Subscription {
  id: string;
  name: string;
  plan: string;
  amount: number;
  billingCycle: 'monthly' | 'yearly';
  nextBillingDate: string;
  monthsActive: number;
  status: 'active' | 'expired' | 'cancelled';
  color: string;
  initial: string;
}

export interface UpcomingPayment {
  id: string;
  name: string;
  amount: number;
  dueDate: string;
  status: 'upcoming' | 'expired';
  color: string;
  initial: string;
}

export interface Transaction {
  id: string;
  name: string;
  amount: number;
  date: string;
  isPositive: boolean;
  color: string;
  initial: string;
}

export interface MonthlyInsight {
  month: string;
  shortMonth: string;
  total: number;
}

// ── Subscriptions ──────────────────────────────────────────────────────────────
export const subscriptions: Subscription[] = [
  {
    id: '1',
    name: 'Dropbox',
    plan: 'Plus Plan',
    amount: 84.96,
    billingCycle: 'monthly',
    nextBillingDate: 'June 20, 2025',
    monthsActive: 6,
    status: 'active',
    color: colors.dropbox,
    initial: 'D',
  },
  {
    id: '2',
    name: 'Spotify',
    plan: 'Family Plan',
    amount: 876.77,
    billingCycle: 'yearly',
    nextBillingDate: 'July 1, 2025',
    monthsActive: 12,
    status: 'active',
    color: colors.spotify,
    initial: 'S',
  },
  {
    id: '3',
    name: 'GitHub Copilot',
    plan: 'Premium',
    amount: 549.99,
    billingCycle: 'yearly',
    nextBillingDate: 'May 15, 2025',
    monthsActive: 3,
    status: 'active',
    color: colors.github,
    initial: 'G',
  },
  {
    id: '4',
    name: 'Adobe',
    plan: 'Family Plan',
    amount: 896.10,
    billingCycle: 'yearly',
    nextBillingDate: 'June 5, 2025',
    monthsActive: 9,
    status: 'active',
    color: colors.adobe,
    initial: 'A',
  },
  {
    id: '5',
    name: 'Figma',
    plan: 'Starter',
    amount: 9.23,
    billingCycle: 'monthly',
    nextBillingDate: 'May 28, 2025',
    monthsActive: 2,
    status: 'active',
    color: colors.figma,
    initial: 'F',
  },
  {
    id: '6',
    name: 'OpenAI',
    plan: 'Plus Plan',
    amount: 42.25,
    billingCycle: 'monthly',
    nextBillingDate: 'June 1, 2025',
    monthsActive: 4,
    status: 'active',
    color: colors.openai,
    initial: 'O',
  },
  {
    id: '7',
    name: 'Adobe',
    plan: 'Creative Cloud',
    amount: 7.72,
    billingCycle: 'monthly',
    nextBillingDate: 'June 10, 2025',
    monthsActive: 1,
    status: 'active',
    color: colors.adobe,
    initial: 'A',
  },
  {
    id: '8',
    name: 'Medium',
    plan: 'Member',
    amount: 31.08,
    billingCycle: 'monthly',
    nextBillingDate: 'June 18, 2025',
    monthsActive: 5,
    status: 'active',
    color: colors.medium,
    initial: 'M',
  },
];

// ── Upcoming Payments ──────────────────────────────────────────────────────────
export const upcomingPayments: UpcomingPayment[] = [
  {
    id: '1',
    name: 'Notion Team',
    amount: 20.20,
    dueDate: 'Apr 28',
    status: 'expired',
    color: colors.notion,
    initial: 'N',
  },
  {
    id: '2',
    name: 'Dropbox',
    amount: 33.00,
    dueDate: 'May 2',
    status: 'upcoming',
    color: colors.dropbox,
    initial: 'D',
  },
  {
    id: '3',
    name: 'Spotify',
    amount: 9.99,
    dueDate: 'May 5',
    status: 'upcoming',
    color: colors.spotify,
    initial: 'S',
  },
  {
    id: '4',
    name: 'GitHub',
    amount: 4.00,
    dueDate: 'May 10',
    status: 'upcoming',
    color: colors.github,
    initial: 'G',
  },
];

// ── Transactions ───────────────────────────────────────────────────────────────
export const transactions: Transaction[] = [
  {
    id: '1',
    name: 'Claude',
    amount: 31.84,
    date: 'Apr 20, 2025',
    isPositive: false,
    color: colors.claude,
    initial: 'C',
  },
  {
    id: '2',
    name: 'Canva',
    amount: 42.80,
    date: 'Apr 18, 2025',
    isPositive: false,
    color: colors.canva,
    initial: 'C',
  },
  {
    id: '3',
    name: 'Spotify',
    amount: 9.99,
    date: 'Apr 15, 2025',
    isPositive: false,
    color: colors.spotify,
    initial: 'S',
  },
  {
    id: '4',
    name: 'Adobe',
    amount: 7.72,
    date: 'Apr 10, 2025',
    isPositive: false,
    color: colors.adobe,
    initial: 'A',
  },
  {
    id: '5',
    name: 'OpenAI',
    amount: 42.25,
    date: 'Apr 1, 2025',
    isPositive: false,
    color: colors.openai,
    initial: 'O',
  },
];

// ── Monthly Insights ───────────────────────────────────────────────────────────
export const monthlyInsights: MonthlyInsight[] = [
  { month: 'January 2025',  shortMonth: 'Jan', total: 480 },
  { month: 'February 2025', shortMonth: 'Feb', total: 520 },
  { month: 'March 2025',    shortMonth: 'Mar', total: 390 },
  { month: 'April 2025',    shortMonth: 'Apr', total: 624.63 },
  { month: 'May 2025',      shortMonth: 'May', total: 310 },
  { month: 'June 2025',     shortMonth: 'Jun', total: 0 },
];

// ── User ───────────────────────────────────────────────────────────────────────
export const currentUser = {
  name: 'Adrian Haplin',
  email: 'adrian@example.com',
  avatarInitial: 'A',
  balance: 198.53,
  balanceDate: '04/25',
};
