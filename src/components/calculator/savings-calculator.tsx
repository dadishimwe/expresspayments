"use client";

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export function SavingsCalculator() {
  const [monthlyVolume, setMonthlyVolume] = useState(50000);
  const [currentRate, setCurrentRate] = useState(2.9);

  // Express Payments rates
  const EXPRESS_INTERCHANGE = 0.03; // $0.03
  const EXPRESS_PERCENTAGE = 0.0002; // 0.02%
  const EXPRESS_MONTHLY_FEE = 29.99;

  const calculations = useMemo(() => {
    // Current provider cost
    const currentMonthlyFee = (monthlyVolume * (currentRate / 100)) + 30; // Assuming $30 monthly fee
    const currentAnnualCost = currentMonthlyFee * 12;

    // Express Payments cost
    const expressMonthlyFee =
      monthlyVolume * EXPRESS_PERCENTAGE + monthlyVolume * EXPRESS_INTERCHANGE / 100 + EXPRESS_MONTHLY_FEE;
    const expressAnnualCost = expressMonthlyFee * 12;

    // Savings
    const monthlySavings = currentMonthlyFee - expressMonthlyFee;
    const annualSavings = currentAnnualCost - expressAnnualCost;

    return {
      currentMonthlyFee,
      currentAnnualCost,
      expressMonthlyFee,
      expressAnnualCost,
      monthlySavings,
      annualSavings,
      savingsPercentage: ((monthlySavings / currentMonthlyFee) * 100).toFixed(1),
    };
  }, [monthlyVolume, currentRate]);

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8">
      {/* Input Section */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium">Monthly Processing Volume</label>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-green-600">$</span>
            <Input
              type="number"
              value={monthlyVolume}
              onChange={(e) => setMonthlyVolume(Number(e.target.value))}
              className="text-lg font-semibold"
              min="1000"
              step="5000"
            />
          </div>
          <input
            type="range"
            min="1000"
            max="500000"
            step="5000"
            value={monthlyVolume}
            onChange={(e) => setMonthlyVolume(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Your Current Rate (%)</label>
          <div className="flex items-center gap-2">
            <Input
              type="number"
              value={currentRate}
              onChange={(e) => setCurrentRate(Number(e.target.value))}
              className="text-lg font-semibold"
              min="0.5"
              max="5"
              step="0.1"
            />
            <span className="text-2xl font-bold">%</span>
          </div>
          <input
            type="range"
            min="0.5"
            max="5"
            step="0.1"
            value={currentRate}
            onChange={(e) => setCurrentRate(Number(e.target.value))}
            className="w-full"
          />
        </div>
      </div>

      {/* Results Section */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Current Provider */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-lg border bg-slate-50 p-6 dark:bg-slate-900"
        >
          <h3 className="mb-4 text-sm font-semibold text-muted-foreground uppercase tracking-wide">
            Your Current Provider
          </h3>
          <div className="space-y-3">
            <div>
              <p className="text-xs text-muted-foreground">Monthly Cost</p>
              <p className="text-2xl font-bold">
                ${calculations.currentMonthlyFee.toFixed(2)}
              </p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Annual Cost</p>
              <p className="text-lg font-semibold">
                ${calculations.currentAnnualCost.toFixed(2)}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Express Payments */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-lg border-2 border-green-500 bg-green-50 p-6 dark:bg-green-950/20"
        >
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-green-700 uppercase tracking-wide dark:text-green-400">
              Express Payments
            </h3>
            <Badge className="bg-green-600">Best Value</Badge>
          </div>
          <div className="space-y-3">
            <div>
              <p className="text-xs text-muted-foreground">Monthly Cost</p>
              <p className="text-2xl font-bold text-green-600">
                ${calculations.expressMonthlyFee.toFixed(2)}
              </p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Annual Cost</p>
              <p className="text-lg font-semibold text-green-600">
                ${calculations.expressAnnualCost.toFixed(2)}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Savings Highlight */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="rounded-lg border-2 border-green-500 bg-gradient-to-r from-green-50 to-emerald-50 p-8 text-center dark:from-green-950/30 dark:to-emerald-950/30"
      >
        <p className="mb-2 text-sm font-semibold text-muted-foreground uppercase tracking-wide">
          You Could Save
        </p>
        <div className="mb-4 space-y-2">
          <p className="text-4xl font-bold text-green-600">
            ${calculations.monthlySavings.toFixed(2)}
          </p>
          <p className="text-lg text-green-700 dark:text-green-400">
            per month • ${calculations.annualSavings.toFixed(2)} per year
          </p>
        </div>
        <Badge variant="secondary" className="text-base">
          {calculations.savingsPercentage}% Savings
        </Badge>
      </motion.div>

      {/* Note */}
      <p className="text-center text-sm text-muted-foreground">
        * Calculations based on Interchange + $0.03 + 0.02% + $29.99 monthly fee. Actual savings may vary based on your card mix and transaction types.
      </p>
    </div>
  );
}
