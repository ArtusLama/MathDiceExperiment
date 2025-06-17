<template>
    <div class="flex flex-col gap-4">
        <p class="text-center font-semibold text-lg">
            Würfeln:
        </p>
        <UiNumberField
            v-model="runPerClick"
            :min="1"
            :max="1000"
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
    </div>
</template>

<script lang="ts" setup>
const runPerClick = ref(1)

async function runExperiment() {
    for (let i = 0; i < runPerClick.value; i++) {
        useExperiment().runExperiment()
    }
}
</script>
