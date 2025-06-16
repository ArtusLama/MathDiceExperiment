<template>
    <UiDropdownMenu>
        <UiDropdownMenuTrigger as-child>
            <UiButton
                variant="outline"
                size="icon"
                class="absolute top-5 right-5"
            >
                <Icon
                    name="lucide:moon"
                    class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-transform! duration-500 dark:-rotate-90 dark:scale-0"
                />
                <Icon
                    name="lucide:sun"
                    class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-transform! duration-500 dark:rotate-0 dark:scale-100"
                />
                <span class="sr-only">Toggle theme</span>
            </UiButton>
        </UiDropdownMenuTrigger>
        <UiDropdownMenuContent align="end">
            <UiDropdownMenuItem @click="mode = 'light'">
                <Icon
                    name="lucide:sun"
                    class="text-current"
                />
                Light
            </UiDropdownMenuItem>
            <UiDropdownMenuItem @click="mode = 'dark'">
                <Icon
                    name="lucide:moon"
                    class="text-current"
                />
                Dark
            </UiDropdownMenuItem>
            <UiDropdownMenuItem @click="mode = 'auto'">
                <Icon
                    name="lucide:monitor-cog"
                    class="text-current"
                />
                Auto
            </UiDropdownMenuItem>
        </UiDropdownMenuContent>
    </UiDropdownMenu>
</template>

<script lang="ts" setup>
const mode = useColorMode()
</script>
