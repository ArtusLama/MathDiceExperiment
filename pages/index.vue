<template>
    <div class="flex flex-col gap-32">
        <p class="text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
            <Icon
                name="lucide:dices"
                class="mr-2"
            />
            Würfelexperiment Simulation
        </p>

        <div class="flex justify-center gap-8 flex-wrap">
            <div class=" flex flex-col gap-8">
                <div class="bg-card text-card-foreground rounded-xl border shadow-sm px-6 py-4">
                    <RunExperiment />
                </div>
                <ResetButton />
            </div>
            <div class="space-y-16">
                <PropTable />
                <PropChart />
            </div>
        </div>

        <div class="flex justify-center" />
    </div>
</template>

<script lang="ts" setup>
useExperiment().setup()
</script>
