<template>
    <UiTable class="max-w-2xl">
        <UiTableCaption>(Empirische Wahrscheinlichkeiten)</UiTableCaption>
        <UiTableHeader>
            <UiTableRow>
                <UiTableHead class="pr-8">
                    Augenzahl
                </UiTableHead>
                <UiTableHead
                    v-for="outcome in useExperiment().outcomes"
                    :key="outcome"
                    class="text-center"
                >
                    <DiceDisplay :dice-number="outcome" />
                </UiTableHead>
            </UiTableRow>
        </UiTableHeader>
        <UiTableBody>
            <UiTableRow>
                <UiTableCell class="pr-8">
                    Häufigkeit
                </UiTableCell>
                <UiTableCell
                    v-for="outcome in useExperiment().outcomes"
                    :key="outcome"
                    class="text-center"
                >
                    {{ useExperiment().getOutcomeFrequency(outcome) }}
                </UiTableCell>
            </UiTableRow>
            <UiTableRow>
                <UiTableCell class="pr-8">
                    Wahrscheinlichkeit
                </UiTableCell>
                <UiTableCell
                    v-for="outcome in useExperiment().outcomes"
                    :key="outcome"
                    class="text-center"
                >
                    {{ (useExperiment().getOutcomeProbability(outcome) * 100).toFixed(2) }}%
                </UiTableCell>
            </UiTableRow>
        </UiTableBody>
    </UiTable>
</template>

<script lang="ts" setup>

</script>
