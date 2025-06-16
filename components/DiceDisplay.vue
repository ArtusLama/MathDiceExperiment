<template>
    <Icon
        v-if="diceNumber >= 1 && diceNumber <= 6"
        :name="iconMap[diceNumber]"
        class="text-4xl"
        :size="28"
    />
    <span
        v-else
        class="text-4xl"
    >[{{ diceNumber }}]</span>
</template>

<script lang="ts" setup>
defineProps<{
    diceNumber: number
}>()

const iconMap: Record<number, string> = {
    1: "lucide:dice-1",
    2: "lucide:dice-2",
    3: "lucide:dice-3",
    4: "lucide:dice-4",
    5: "lucide:dice-5",
    6: "lucide:dice-6",
}
</script>
