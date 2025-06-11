<template>
    <UiButton
        @click="useExperiment().reset()"
    >
        <Icon name="lucide:refresh-cw" />
        Reset
    </UiButton>
</template>
