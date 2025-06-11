<template>
    <UiNumberField
        v-model="runPerClick"
        :min="1"
        :format-options="{
            useGrouping: false,
        }"
    >
        <UiNumberFieldContent>
            <UiNumberFieldDecrement />
            <UiNumberFieldInput />
            <UiNumberFieldIncrement />
        </UiNumberFieldContent>
    </UiNumberField>
    <UiButton
        @click="runExperiment"
    >
        <Icon name="lucide:dices" />
        Würfeln
    </UiButton>
</template>

<script lang="ts" setup>
const runPerClick = ref(1)

async function runExperiment() {
    for (let i = 0; i < runPerClick.value; i++) {
        useExperiment().runExperiment()
    }
}
</script>
