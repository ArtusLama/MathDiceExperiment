<template>
    <div class="flex flex-col gap-32">
        <h1>Hello</h1>
        <UiButton variant="outline">
            Click Me
        </UiButton>
        <RunExperiment />
        <ResetButton />
        <PropTable />
    </div>
</template>

<script lang="ts" setup>
useExperiment().setup()
</script>
