<template>
    <UiTable>
        <UiTableCaption>Empirische Wahrscheinlichkeiten</UiTableCaption>
        <UiTableHeader>
            <UiTableRow>
                <UiTableHead
                    v-for="outcome in useExperiment().outcomes"
                    :key="outcome"
                    class="text-center"
                >
                    {{ outcome }}
                </UiTableHead>
            </UiTableRow>
        </UiTableHeader>
        <UiTableBody>
            <UiTableRow>
                <UiTableCell
                    v-for="outcome in useExperiment().outcomes"
                    :key="outcome"
                    class="text-center"
                >
                    {{ useExperiment().getOutcomeFrequency(outcome) }}
                </UiTableCell>
            </UiTableRow>
            <UiTableRow>
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
