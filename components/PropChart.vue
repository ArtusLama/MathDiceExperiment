<template>
    <div class="space-y-8">
        <p class="font-semibold text-xl">
            Wahrscheinlichkeiten für die Würfelergebnisse:
        </p>
        <LineChart
            index="step"
            :data="useExperiment().history"
            :colors="['#6434e9', '#2c7ce5', '#49cc5c', '#f8c421', '#fb6640', '#f82553']"
            :categories="['1', '2', '3', '4', '5', '6']"
            :custom-tooltip="CustomChartTooltip"
            :x-axis-label="'Würfelwurf'"
            :y-axis-label="'Anzahl der Würfe'"
            :x-axis-label-formatter="xAxisFormatter"
            :y-axis-label-formatter="yAxisFormatter"
            :curve-type="CurveType.Linear"
        />
    </div>
</template>

<script setup lang="ts">
import { CurveType } from "@unovis/ts"
import CustomChartTooltip from "@/components/ui/chart/ChartTooltip.vue"
import { LineChart } from "@/components/ui/chart-line"

function xAxisFormatter(value: string | number, index?: number) {
    return `#${typeof value === "number" ? value : (index !== undefined ? index + 1 : value)}`
}

function yAxisFormatter(value: number) {
    return value.toFixed(2)
}
</script>
